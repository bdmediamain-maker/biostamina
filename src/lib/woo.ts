/**
 * WooCommerce Store API client — STUB (decisione B: si mantiene e-commerce).
 *
 * ⚠️ NON ATTIVO finché il cliente non fornisce:
 *   - WOO_STORE_URL (base del sito WooCommerce)
 *   - conferma venditore di record / fatturazione (Cosmos Srls?)
 *   - wooId per ogni prodotto (mappare nei frontmatter)
 *
 * Architettura headless ibrida: Astro serve tutte le pagine (SSG);
 * Woo resta backend per carrello/checkout/PayPal/ordini/fatturazione IT.
 * "Aggiungi al carrello" → Store API → redirect al checkout Woo.
 *
 * Quando pronto: impostare WOO_STORE_URL in .env e implementare le fetch.
 */

const WOO_STORE_URL = import.meta.env.WOO_STORE_URL ?? '';

export const wooEnabled = Boolean(WOO_STORE_URL);

export interface AddToCartResult {
  ok: boolean;
  checkoutUrl?: string;
  reason?: string;
}

/** URL del checkout Woo (fallback: pagina negozio Woo). */
export function checkoutUrl(): string {
  if (!wooEnabled) return '#';
  return `${WOO_STORE_URL.replace(/\/$/, '')}/checkout`;
}

/**
 * Aggiunge un prodotto al carrello via Store API.
 * STUB: quando wooEnabled è false ritorna ok:false così la UI
 * ricade sul canale WhatsApp (ordine assistito).
 */
export async function addToCart(wooId: number, quantity = 1): Promise<AddToCartResult> {
  if (!wooEnabled || !wooId) {
    return { ok: false, reason: 'woo-not-configured' };
  }
  // TODO: POST ${WOO_STORE_URL}/wp-json/wc/store/v1/cart/add-item { id: wooId, quantity }
  return { ok: false, reason: 'not-implemented' };
}
