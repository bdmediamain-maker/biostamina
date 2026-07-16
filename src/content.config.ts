import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Schema Zod — campi bilingui it/en.
 * REGOLA COMPLIANCE: `indications`, `warnings`, `inci`, `class` sono
 * FEDELI al bugiardino ufficiale. Solo `description` può avere resa web.
 */

const localized = z.object({
  name: z.string(),
  description: z.string(),
  indications: z.array(z.string()).default([]),
  properties: z.string().optional(), // Dental non ha PROPRIETÀ separata
  phyto: z.string().optional(),
  usage: z.string().optional(),
  warnings: z.string().optional(),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: ({ image }) =>
    z.object({
      sku: z.string(),
      wooId: z.number().default(0), // ← da WooCommerce (0 = non ancora mappato)
      // Due linee dalla molecola Prorigenera (addendum 2 §2)
      line: z.enum(['dispositivi-medici', 'stem-cells']).default('dispositivi-medici'),
      class: z.enum(['IIa', 'IIb', 'cosmetico', 'veterinario']).describe('Classe DM, cosmetico o veterinario'),
      deviceType: z.enum(['dispositivo-medico', 'cosmetico', 'veterinario']).default('dispositivo-medico'),
      manufacturer: z.string().default('Biostamina KFT'),
      // Framing regolatorio device (es. "Registrato al Ministero della Salute")
      registration: z.string().optional(),
      category: z.string(),
      format: z.string().optional(), // es. "Lipogel 25 ml"
      price: z.number().nullable().default(null),
      priceList: z.number().nullable().default(null),
      inStock: z.boolean().default(true),
      comingSoon: z.boolean().default(false), // "Presto disponibile" + waitlist (addendum 3 §2)
      featured: z.boolean().default(false),
      order: z.number().default(99),
      draft: z.boolean().default(false), // true = copy ufficiale non ancora disponibile (Pet, Anti-Age)
      heroImage: image().optional(),
      images: z.array(image()).default([]),
      inci: z.array(z.string()).default([]),
      it: localized,
      en: localized,
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      cluster: z.string(), // tassonomia reale (no "Senza categoria")
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      heroImage: image().optional(),
      relatedProducts: z.array(z.string()).default([]),
      it: z.object({
        title: z.string(),
        description: z.string(), // meta unica (fix mismatch)
        body: z.string().optional(),
      }),
      en: z.object({
        title: z.string(),
        description: z.string(),
        body: z.string().optional(),
      }),
    }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    order: z.number().default(99),
    topic: z.string(), // uso | controindicazioni | differenze | spedizione
    it: z.object({ q: z.string(), a: z.string() }),
    en: z.object({ q: z.string(), a: z.string() }),
  }),
});

export const collections = { products, blog, faq };
