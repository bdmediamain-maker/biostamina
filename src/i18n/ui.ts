/**
 * Stringhe UI nelle 2 lingue (core). Chiavi condivise → usare via `t(lang)`.
 * Le stringhe lunghe di prodotto NON stanno qui: vengono dai bugiardini
 * (content collections). Qui solo micro-copy di navigazione/UI.
 */

export const languages = ['it', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'it';

export const ui = {
  it: {
    'nav.home': 'Home',
    'nav.shop': 'Negozio',
    'nav.products': 'Prodotti',
    'nav.professionals': 'Professionisti',
    'nav.certifications': 'Certificazioni',
    'nav.howto': 'Come si usa',
    'nav.about': 'Chi siamo',
    'nav.blog': 'Blog',
    'nav.contact': 'Contatti',
    'cta.cart': 'Aggiungi al carrello',
    'cta.whatsapp': 'Chiedi info su WhatsApp',
    'cta.discover': 'Scopri la linea',
    'cta.certifications': 'Le certificazioni',
    'cta.viewProduct': 'Vedi prodotto',
    'cta.allProducts': 'Tutti i prodotti',
    // HOME — hero product-forward: prima i prodotti, poi le attestazioni.
    // ⚠️ COMPLIANCE: nessun riferimento a "rigenerazione ossea" nell'H1 (non è
    // tra le indicazioni registrate). L'ossea resta solo nel badge brevetti.
    'hero.eyebrow': 'BIO RIGENERA® · DALLA RICERCA BIOSTAMINA',
    'hero.title': 'Dalla nostra ricerca, i prodotti per la rigenerazione dei tessuti.',
    'hero.sub':
      'Bio RIGENERA®: dispositivi medici fitoterapici e trattamenti rigenerativi, dalle piante officinali arricchite con ozono e cellule staminali vegetali.',
    'home.productsHeading': 'I nostri prodotti — la linea Bio RIGENERA®',
    'product.class': 'Classe',
    'product.medicalDevice': 'Dispositivo medico CE',
    'product.cosmetic': 'Cosmetico',
    'product.veterinary': 'Veterinario professionale',
    'line.devices': 'Dispositivi Medici',
    'line.stemCells': 'Cellule Staminali',
    'product.indications': 'Indicazioni',
    'product.properties': 'Proprietà',
    'product.phyto': 'Fitoterapia',
    'product.usage': 'Modalità d’uso',
    'product.warnings': 'Avvertenze',
    'product.inci': 'Ingredienti (INCI)',
    'product.specs': 'Scheda tecnica',
    'product.reviews': 'Recensioni',
    'product.related': 'Prodotti correlati',
    'product.inStock': 'Disponibile',
    'product.outStock': 'Esaurito',
    'product.comingSoon': 'Presto disponibile',
    'product.notify': 'Avvisami quando torna',
    'product.notifyPlaceholder': 'La tua email',
    'product.notifyDone': 'Ti avviseremo appena torna disponibile.',
    'product.from': 'da',
    'reviews.verified': 'Verificato',
    'reviews.professional': 'Professionista',
    'reviews.disclaimer':
      'Le esperienze riportate sono individuali e non costituiscono garanzia di risultato.',
    // Fascia attestazioni (home, sotto i prodotti + /certificazioni).
    // ⚠️ "rigenerazione tissutale e ossea" compare SOLO qui, come oggetto dei
    // brevetti dell'azienda — mai come ciò che il prodotto fa.
    'trust.patents': 'Brevetti ProRigenera® (rigenerazione tissutale e ossea)',
    'trust.ce': 'Dispositivi medici CE (classe IIa/IIb)',
    'trust.ministry': 'Notificati al Ministero della Salute',
    'trust.antropos': 'Testato da «Antropos», Lugano',
    'trust.manufacturer': 'Fabbricante Biostamina KFT',
    // ⚠️ COMPLIANCE: CE/classe valgono solo per i dispositivi medici, non per
    // Pet (veterinario) né per gli anti-age (cosmetici).
    'trust.note':
      'La marcatura CE e la classe si riferiscono ai soli dispositivi medici (Dental IIa; Cicatren e Dermal IIb). Pet: prodotto veterinario professionale. Anti-age: prodotti cosmetici.',
    'footer.manufacturer': 'Fabbricante',
    'footer.seller': 'Venditore',
    'footer.legal': 'Note legali',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.medicalNote':
      'Dispositivi medici fitoterapici a base di oli essenziali ozonizzati. Leggere attentamente le avvertenze e le istruzioni per l’uso.',
    'assistant.soon': 'Assistente · presto disponibile',
    'lang.switch': 'English',
    'skip': 'Vai al contenuto',
  },
  en: {
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.products': 'Products',
    'nav.professionals': 'Professionals',
    'nav.certifications': 'Certifications',
    'nav.howto': 'How to use',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'cta.cart': 'Add to cart',
    'cta.whatsapp': 'Ask for info on WhatsApp',
    'cta.discover': 'Explore the line',
    'cta.certifications': 'Certifications',
    'cta.viewProduct': 'View product',
    'cta.allProducts': 'All products',
    // HOME — product-forward hero (no "bone regeneration" claim in the H1).
    'hero.eyebrow': 'BIO RIGENERA® · FROM BIOSTAMINA RESEARCH',
    'hero.title': 'From our research, products for tissue regeneration.',
    'hero.sub':
      'Bio RIGENERA®: phytotherapeutic medical devices and regenerative treatments, made from officinal plants enriched with ozone and vegetable stem cells.',
    'home.productsHeading': 'Our products — the Bio RIGENERA® line',
    'product.class': 'Class',
    'product.medicalDevice': 'CE medical device',
    'product.cosmetic': 'Cosmetic',
    'product.veterinary': 'Professional veterinary',
    'line.devices': 'Medical Devices',
    'line.stemCells': 'Stem Cells',
    'product.indications': 'Indications',
    'product.properties': 'Properties',
    'product.phyto': 'Phytotherapy',
    'product.usage': 'Directions for use',
    'product.warnings': 'Warnings',
    'product.inci': 'Ingredients (INCI)',
    'product.specs': 'Technical sheet',
    'product.reviews': 'Reviews',
    'product.related': 'Related products',
    'product.inStock': 'In stock',
    'product.outStock': 'Out of stock',
    'product.comingSoon': 'Coming soon',
    'product.notify': 'Notify me when it’s back',
    'product.notifyPlaceholder': 'Your email',
    'product.notifyDone': 'We’ll let you know as soon as it’s back.',
    'product.from': 'from',
    'reviews.verified': 'Verified',
    'reviews.professional': 'Professional',
    'reviews.disclaimer':
      'Individual experiences reported here do not constitute a guarantee of results.',
    // Attestations band — "tissue and bone regeneration" appears ONLY here, as
    // the object of the company's patents, never as a product claim.
    'trust.patents': 'ProRigenera® patents (tissue and bone regeneration)',
    'trust.ce': 'CE medical devices (Class IIa/IIb)',
    'trust.ministry': 'Notified to the Italian Ministry of Health',
    'trust.antropos': 'Tested by “Antropos”, Lugano',
    'trust.manufacturer': 'Manufacturer Biostamina KFT',
    'trust.note':
      'CE marking and class refer only to the medical devices (Dental IIa; Cicatren and Dermal IIb). Pet: professional veterinary product. Anti-age: cosmetic products.',
    'footer.manufacturer': 'Manufacturer',
    'footer.seller': 'Seller',
    'footer.legal': 'Legal',
    'footer.rights': 'All rights reserved.',
    'footer.medicalNote':
      'Phytotherapeutic medical devices based on ozonated essential oils. Read the warnings and instructions for use carefully.',
    'assistant.soon': 'Assistant · coming soon',
    'lang.switch': 'Italiano',
    'skip': 'Skip to content',
  },
} as const;

export type UIKey = keyof (typeof ui)['it'];
