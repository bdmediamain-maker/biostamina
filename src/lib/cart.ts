/**
 * Carrello headless — client WooCommerce Store API (lato browser).
 *
 * Il browser chiama sempre `/store-api/...` (same-origin): in dev è proxato da
 * Vite, in produzione dal rewrite Netlify → nessun problema di CORS.
 * La sessione carrello è mantenuta col `Cart-Token` (JWT) in localStorage;
 * il Nonce NON è necessario in modalità token (verificato sul Woo reale).
 *
 * Ogni operazione emette l'evento `cart:updated` (detail = Cart) così l'header,
 * il drawer e la pagina carrello si aggiornano da soli.
 */

const API = '/store-api';
const TOKEN_KEY = 'bs_cart_token';

export interface CartItem {
  key: string;
  id: number;
  name: string;
  quantity: number;
  prices: { price: string; regular_price: string; currency_minor_unit: number; currency_code: string };
  totals: { line_total: string; line_total_tax: string; currency_minor_unit: number; currency_code: string };
  images: { thumbnail: string; src: string; alt: string }[];
}

export interface Cart {
  items: CartItem[];
  items_count: number;
  needs_shipping: boolean;
  totals: {
    total_items: string;
    total_items_tax: string;
    total_price: string;
    total_shipping: string;
    currency_code: string;
    currency_minor_unit: number;
  };
}

/** Somma due importi in minor-unit (stringhe) → stringa minor-unit. */
export function addMinor(a: string, b: string): string {
  return String((parseInt(a || '0', 10) || 0) + (parseInt(b || '0', 10) || 0));
}

function getToken(): string | null {
  try { return localStorage.getItem(TOKEN_KEY); } catch { return null; }
}
function setToken(t: string | null) {
  if (t) { try { localStorage.setItem(TOKEN_KEY, t); } catch { /* storage off */ } }
}

async function req(path: string, opts: RequestInit = {}, retry = false): Promise<Cart> {
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(opts.headers as Record<string, string> | undefined),
  };
  if (token) headers['Cart-Token'] = token;

  const res = await fetch(API + path, { ...opts, headers });
  const fresh = res.headers.get('Cart-Token');
  if (fresh) setToken(fresh);

  // Auto-riparazione: una mutazione senza token valido dà 401 → ottieni un
  // token con una GET /cart e ritenta una sola volta.
  if (res.status === 401 && !retry && path !== '/cart') {
    await req('/cart');
    return req(path, opts, true);
  }

  if (!res.ok) throw new Error(`Store API ${res.status}`);
  const data = (await res.json()) as Cart;
  window.dispatchEvent(new CustomEvent<Cart>('cart:updated', { detail: data }));
  return data;
}

export const cartApi = {
  get: () => req('/cart'),
  add: async (id: number, quantity = 1) => {
    const cart = await req('/cart/add-item', { method: 'POST', body: JSON.stringify({ id, quantity }) });
    // apertura garantita del drawer dopo un'aggiunta riuscita (a prova di chiamante)
    window.dispatchEvent(new CustomEvent('cart:open'));
    return cart;
  },
  setQty: (key: string, quantity: number) =>
    req('/cart/update-item', { method: 'POST', body: JSON.stringify({ key, quantity }) }),
  remove: (key: string) =>
    req('/cart/remove-item', { method: 'POST', body: JSON.stringify({ key }) }),
};

/** Prezzo da minor-unit (stringa "4440" + unit 2 + "EUR") → "44,40 €". */
export function formatMoney(minor: string, unit: number, code: string): string {
  const n = parseInt(minor || '0', 10) / Math.pow(10, unit);
  try {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: code || 'EUR' }).format(n);
  } catch {
    return `${n.toFixed(2)} €`;
  }
}

/** Apre/chiude il drawer carrello via evento globale. */
export function openCart() {
  window.dispatchEvent(new CustomEvent('cart:open'));
}
