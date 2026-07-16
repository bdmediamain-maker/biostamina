/**
 * SSOT — Single Source of Truth per il sito Biostamina.
 *
 * ⚠️ DUE ENTITÀ (mistero risolto dai bugiardini):
 *  - `manufacturer` = fabbricante legale sui dispositivi medici → usato su
 *    schede prodotto, pagina Certificazioni, knowledge base.
 *  - `seller` = venditore/distributore IT → usato in footer, checkout,
 *    fatturazione. ⚠️ DA CONFERMARE COL CLIENTE come venditore di record.
 *
 * I campi marcati `TODO` vanno compilati quando il cliente fornisce i dati.
 */

export const site = {
  name: 'Biostamina',
  tagline: {
    it: 'Rigenerazione tissutale. Dispositivi medici fitoterapici CE.',
    en: 'Tissue regeneration. CE phytotherapeutic medical devices.',
  },
  domain: 'biostamina.net',
  url: 'https://biostamina.net',

  // Fabbricante legale (dispositivi medici) — schede/certificazioni
  manufacturer: {
    name: 'Biostamina KFT',
    addr: 'HU 1143 Budapest, Stefánia út 81',
    site: 'https://biostamina.org',
  },

  // Venditore/distributore IT — footer, checkout, fatturazione IT
  // ⚠️ DA CONFERMARE come venditore di record per l'e-commerce
  seller: {
    name: 'Cosmos Srls',
    addr: 'Via del Divino Amore 22/A, 00047 Marino (RM)',
    vat: 'IT13542421006',
    email: 'info@biostamina.net',
  },

  // Canali contatto/ordine
  whatsapp: {
    // Formato internazionale senza + né spazi (per wa.me). Reale: +39 351 526 5919
    number: '393515265919',
    label: { it: 'Chiedi info su WhatsApp', en: 'Ask for info on WhatsApp' },
  },

  // Endpoint form lead (Formspree) — ⚠️ TODO: id reali
  formspree: {
    contatti: 'https://formspree.io/f/TODO_CONTATTI',
    professionisti: 'https://formspree.io/f/TODO_PRO',
    notify: 'https://formspree.io/f/TODO_WAITLIST', // "Avvisami quando torna" (waitlist Anti-Age)
  },

  social: {
    yt: 'https://www.youtube.com/@biostaminatv9809',
    fb: '', // TODO
    ig: '', // TODO
    in: '', // TODO
  },

  // Video in evidenza (canale @biostaminatv9809) → sezione "Dal nostro canale"
  youtubeVideos: ['KZYcrj1j5Lg', 'hVrgRLGnq24', 'Wytl0gfMnUM'],

  // Recensioni reali → aggregateRating schema.org (biostamina.net + farmaciaigea.com)
  reviews: {
    count: 30,
    average: 4.9,
  },
} as const;

export type Site = typeof site;
