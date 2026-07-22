/**
 * Indice di ricerca del sito, uno per lingua: /search-it.json e /search-en.json.
 * Generato al build (statico): la lente nell'header lo scarica solo alla prima
 * apertura e filtra client-side. Niente server, niente servizi esterni.
 *
 * Voci: t = tipo ('p' prodotto · 'a' articolo · 'g' pagina), title, desc,
 * url, extra (keyword non mostrate ma cercabili), img/price solo prodotti.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getImage } from 'astro:assets';

export function getStaticPaths() {
  return [{ params: { lang: 'it' } }, { params: { lang: 'en' } }];
}

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as 'it' | 'en';
  const items: Record<string, unknown>[] = [];

  // Prodotti (con thumbnail e prezzo)
  const products = await getCollection('products', (p) => !p.data.draft);
  for (const p of products) {
    const loc = p.data[lang];
    let img = '';
    if (p.data.heroImage) {
      const i = await getImage({ src: p.data.heroImage, format: 'webp', width: 120 });
      img = i.src;
    }
    items.push({
      t: 'p',
      title: loc.name,
      desc: loc.description.trim().slice(0, 140),
      url: `/${lang}/prodotto/${p.id}`,
      img,
      price: p.data.price,
      extra: [
        p.data.category,
        p.data.sku,
        (loc.indications || []).join(' '),
        // parole chiave con cui la gente cerca davvero il Pet
        p.id === 'pet' ? (lang === 'it' ? 'cane cani gatto gatti cavallo veterinario' : 'dog dogs cat cats horse veterinary') : '',
      ].join(' ').slice(0, 900),
    });
  }

  // Articoli del blog (inclusi i consigli del medico)
  const posts = await getCollection('blog', (b) => !b.data.draft);
  for (const b of posts) {
    const loc = b.data[lang];
    items.push({
      t: 'a',
      title: loc.title,
      desc: loc.description,
      url: `/${lang}/blog/${b.id}`,
      extra: b.data.cluster,
    });
  }

  // Pagine principali (title + keyword cercabili)
  const pages =
    lang === 'it'
      ? [
          { title: 'Negozio', desc: 'Tutti i prodotti della linea Bio RIGENERA®.', url: '/it/negozio', extra: 'shop acquista prodotti carrello' },
          { title: 'Certificazioni', desc: 'CE, classe IIa/IIb, Ministero della Salute, Istituto Antropos, brevetti.', url: '/it/certificazioni', extra: 'certificato brevetto antropos ce ministero cnd' },
          { title: 'Come si usa', desc: 'Le modalità d’uso ufficiali dei prodotti, dai bugiardini.', url: '/it/come-si-usa', extra: 'istruzioni applicazione modalità uso conservazione' },
          { title: 'Bio RIGENERA® O3 Dental — approfondimento', desc: 'La guida completa al lipogel gengivale: scienza, benefici, casi clinici.', url: '/it/bio-rigenera-dental', extra: 'gengive denti odontoiatria afte gengivite parodontite' },
          { title: 'Chi siamo', desc: 'Biostamina: la ricerca, i brevetti ProRigenera®, la storia.', url: '/it/chi-siamo', extra: 'azienda storia molecola prorigenera' },
          { title: 'Professionisti', desc: 'Area dedicata a medici, odontoiatri, veterinari e farmacie.', url: '/it/professionisti', extra: 'b2b campioni listino medici farmacie' },
          { title: 'Contatti', desc: 'Scrivi a Biostamina: email, WhatsApp, assistenza.', url: '/it/contatti', extra: 'email whatsapp telefono assistenza' },
        ]
      : [
          { title: 'Shop', desc: 'All the products of the Bio RIGENERA® line.', url: '/en/negozio', extra: 'shop buy products cart' },
          { title: 'Certifications', desc: 'CE, class IIa/IIb, Italian Ministry of Health, Antropos Institute, patents.', url: '/en/certificazioni', extra: 'certificate patent antropos ce ministry cnd' },
          { title: 'How to use', desc: 'The official directions for use, from the leaflets.', url: '/en/come-si-usa', extra: 'instructions application usage storage' },
          { title: 'Bio RIGENERA® O3 Dental — deep dive', desc: 'The complete guide to the gingival lipogel: science, benefits, clinical cases.', url: '/en/bio-rigenera-dental', extra: 'gums teeth dentistry mouth ulcers gingivitis' },
          { title: 'About', desc: 'Biostamina: the research, the ProRigenera® patents, the story.', url: '/en/chi-siamo', extra: 'company history molecule prorigenera' },
          { title: 'Professionals', desc: 'Area for physicians, dentists, veterinarians and pharmacies.', url: '/en/professionisti', extra: 'b2b samples price list doctors pharmacies' },
          { title: 'Contact', desc: 'Write to Biostamina: email, WhatsApp, support.', url: '/en/contatti', extra: 'email whatsapp phone support' },
        ];
  for (const pg of pages) items.push({ t: 'g', ...pg });

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
