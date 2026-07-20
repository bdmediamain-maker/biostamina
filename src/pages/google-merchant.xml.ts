/**
 * Feed prodotti per Google Merchant Center (Google Shopping).
 * Sostituisce il plugin "Google Listings & Ads" di WooCommerce sul lato feed:
 * genera nativamente il feed XML dei prodotti acquistabili.
 * (La gestione delle campagne Google Ads resta nel cruscotto Google Ads.)
 *
 * URL: /google-merchant.xml  → da collegare in Merchant Center come "feed".
 * Include solo prodotti pubblicati, in stock, con prezzo e wooId (acquistabili).
 * I link puntano alla scheda Astro; l'acquisto avviene sul carrello Woo.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getImage } from 'astro:assets';
import { site } from '@/config/site';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async () => {
  const base = site.url.replace(/\/$/, '');

  const products = (await getCollection('products', (p) => !p.data.draft)).filter(
    (p) => p.data.inStock && !p.data.comingSoon && p.data.wooId > 0 && p.data.price != null,
  );

  const items = await Promise.all(
    products.map(async (p) => {
      const d = p.data;
      const loc = d.it;
      let imageLink = '';
      if (d.heroImage) {
        const img = await getImage({ src: d.heroImage, format: 'jpg', width: 800 });
        imageLink = base + img.src;
      }
      const desc = esc(loc.description.replace(/<[^>]+>/g, '').trim().slice(0, 4000));
      const salePrice = d.priceList && d.priceList > (d.price as number)
        ? `\n      <g:sale_price>${(d.price as number).toFixed(2)} EUR</g:sale_price>`
        : '';
      const listPrice = d.priceList ?? d.price;
      return `
    <item>
      <g:id>${d.wooId}</g:id>
      <g:title>${esc(loc.name)}</g:title>
      <g:description>${desc}</g:description>
      <g:link>${base}/it/prodotto/${p.id}</g:link>
      <g:image_link>${imageLink}</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:price>${(listPrice as number).toFixed(2)} EUR</g:price>${salePrice}
      <g:brand>Bio RIGENERA</g:brand>
      <g:condition>new</g:condition>
      <g:identifier_exists>no</g:identifier_exists>
      <g:google_product_category>Health &amp; Beauty &gt; Personal Care</g:google_product_category>
      <g:mpn>${esc(d.sku)}</g:mpn>
    </item>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Biostamina — Bio RIGENERA®</title>
    <link>${base}</link>
    <description>Dispositivi medici e cosmetici rigeneranti Bio RIGENERA®</description>${items.join('')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
