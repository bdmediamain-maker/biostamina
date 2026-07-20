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
    // HOME — copy fornita dal cliente (validata dal suo ingegnere).
    // ⚠️ TERMINOLOGIA: vietato "dispositivo medico fitoterapico" (mescola due
    // categorie regolatorie: un DM agisce per via fisica, non farmacologica).
    // "Prodotto fitoterapico" resta valido SOLO per il Pet (veterinario, non DM).
    // ⚠️ "rigenerazione tissutale e ossea" è qui riferita ai BREVETTI (proprietà
    // brevettuale dell'azienda), non a ciò che fa il prodotto.
    // ⚠️ DA VALIDARE: "linea medicamentosa" — un dispositivo medico NON è un
    // medicinale; il termine evoca l'azione farmacologica. Testo pubblicato su
    // richiesta esplicita del cliente, da far riconfermare al suo ingegnere.
    // Testo identico a quello fornito dal cliente, solo strutturato: "Biostamina:"
    // vive nell'eyebrow (evita la ripetizione e accorcia l'H1), e il paragrafo
    // è spezzato nei suoi 4 punti naturali per renderlo leggibile.
    'hero.eyebrow': 'BIO RIGENERA® · DALLA RICERCA BIOSTAMINA',
    'hero.title':
      'Brevetti esclusivi scientifici della molecola ProRigenera® ozonizzata, per la rigenerazione tissutale e ossea.',
    'hero.lead':
      'Dalla molecola nasce la linea medicamentosa: Bio RIGENERA® O3, biorigenerante e bioriparatore.',
    'hero.point1': 'Medical Devices autorizzati CE e notificati al Ministero della Salute.',
    'hero.point2':
      'Formulazione Lipogel al 100% naturale di soli oli essenziali di piante medicinali arricchite con Ozono.',
    'hero.point3':
      'Espletando una azione filmogena, citoprotettiva e antibatterica sulla lesione con sollievo del dolore, contribuisce a una veloce e sana corretta rigenerazione dei tessuti.',
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
    // ⚠️ COMPLIANCE: la CLASSE (IIa/IIb) vale solo per i dispositivi medici.
    // Il Pet è CE ma NON è un dispositivo medico di classe; gli anti-age sono
    // cosmetici. Serve a non far intendere che tutta la gamma sia "DM CE IIa/IIb".
    'trust.note':
      'La classe (IIa/IIb) si riferisce ai soli dispositivi medici: Dental IIa; Cicatren e Dermal IIb. Pet: prodotto fitoterapico veterinario professionale con marcatura CE. Anti-age: prodotti cosmetici.',
    'footer.manufacturer': 'Fabbricante',
    'footer.seller': 'Venditore',
    'footer.legal': 'Note legali',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.medicalNote':
      'Dispositivi medici a base di oli essenziali ozonizzati. Leggere attentamente le avvertenze e le istruzioni per l’uso.',
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
    // HOME — client-supplied copy (see IT notes: no "phytotherapeutic medical
    // device"; "tissue and bone regeneration" refers to the PATENTS; "medicated
    // line" still to be re-validated by the client's engineer).
    'hero.eyebrow': 'BIO RIGENERA® · FROM BIOSTAMINA RESEARCH',
    'hero.title':
      'Exclusive scientific patents for the ozonated ProRigenera® molecule, for tissue and bone regeneration.',
    'hero.lead':
      'From the molecule comes the medicated line: Bio RIGENERA® O3, bio-regenerating and bio-repairing.',
    'hero.point1': 'Medical Devices CE-authorised and notified to the Italian Ministry of Health.',
    'hero.point2':
      'A 100% natural Lipogel formulation of essential oils from medicinal plants enriched with Ozone.',
    'hero.point3':
      'Performing a film-forming, cytoprotective and antibacterial action on the lesion with pain relief, it contributes to a fast and correct regeneration of the tissues.',
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
      'The class (IIa/IIb) refers only to the medical devices: Dental IIa; Cicatren and Dermal IIb. Pet: CE-marked professional veterinary phytotherapeutic product. Anti-age: cosmetic products.',
    'footer.manufacturer': 'Manufacturer',
    'footer.seller': 'Seller',
    'footer.legal': 'Legal',
    'footer.rights': 'All rights reserved.',
    'footer.medicalNote':
      'Medical devices based on ozonated essential oils. Read the warnings and instructions for use carefully.',
    'assistant.soon': 'Assistant · coming soon',
    'lang.switch': 'Italiano',
    'skip': 'Skip to content',
  },
} as const;

export type UIKey = keyof (typeof ui)['it'];
