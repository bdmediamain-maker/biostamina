/**
 * WooCommerce headless — integrazione "redirect add-to-cart".
 *
 * Architettura (decisione cliente): si MANTIENE WooCommerce come motore di
 * carrello/checkout/pagamenti (WooPayments/Stripe + PayPal già configurati).
 * Astro serve tutte le pagine (vetrina statica); l'aggiunta al carrello e il
 * checkout avvengono sul dominio Woo.
 *
 * "Aggiungi al carrello" → `${WOO}/?add-to-cart=<id>&quantity=<q>`
 *   → Woo aggiunge l'articolo e mostra il carrello (dominio Woo) → checkout.
 * È il metodo più robusto cross-dominio (niente nonce/CORS/Store API fragili).
 *
 * ⚙️ CONFIG: impostare la variabile d'ambiente `PUBLIC_WOO_URL` con la base del
 * sito WooCommerce. Oggi Woo è su https://biostamina.net; quando il sito Astro
 * prenderà il dominio principale, Woo andrà spostato su un sottodominio
 * (es. https://shop.biostamina.net) e basterà aggiornare PUBLIC_WOO_URL.
 * Gli ID prodotto (wooId) sono nei frontmatter dei prodotti.
 */

const WOO_URL = (import.meta.env.PUBLIC_WOO_URL ?? '').replace(/\/$/, '');

/** true se è configurata la base WooCommerce → carrello attivo. */
export const wooEnabled = Boolean(WOO_URL);

/** Base del sito WooCommerce (senza slash finale). */
export const wooBase = WOO_URL;

/** URL che aggiunge il prodotto al carrello Woo e porta al carrello. */
export function addToCartUrl(wooId: number, quantity = 1): string {
  if (!wooEnabled || !wooId) return '#';
  const q = Math.max(1, Math.floor(quantity));
  return `${WOO_URL}/?add-to-cart=${wooId}&quantity=${q}`;
}

/** URL del carrello Woo (slug IT del sito attuale: /carrello/). */
export function cartUrl(): string {
  return wooEnabled ? `${WOO_URL}/carrello/` : '#';
}

/** URL del checkout Woo. */
export function checkoutUrl(): string {
  return wooEnabled ? `${WOO_URL}/checkout/` : '#';
}
