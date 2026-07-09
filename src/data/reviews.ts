/**
 * Accessor tipizzato alle recensioni reali.
 * Fonte unica: src/knowledge/reviews.json (riusata anche dall'IA futura come KB).
 */
import raw from '@/knowledge/reviews.json';

export interface Review {
  product: string;
  author: string;
  role: string;
  roleUrl?: string;
  professional?: boolean;
  verified?: boolean;
  consentPending?: boolean;
  strongClaim?: boolean;
  rating: number;
  date: string;
  lang: string;
  text: string;
  source?: string; // es. "biostamina.net" | "farmaciaigea.com"
}

export const reviews: Review[] = raw.reviews as Review[];
export const reviewsMeta = raw._meta;

/** Recensioni di un prodotto (per slug), ordinate dalla più recente. */
export function reviewsFor(product: string): Review[] {
  return reviews
    .filter((r) => r.product === product)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

/** Media stelle di un prodotto (arrotondata a 1 decimale), o null se nessuna. */
export function ratingFor(product: string): { average: number; count: number } | null {
  const list = reviewsFor(product);
  if (!list.length) return null;
  const average = list.reduce((s, r) => s + r.rating, 0) / list.length;
  return { average: Math.round(average * 10) / 10, count: list.length };
}

/** Recensioni professionali (medici/studi) — asset E-E-A-T da valorizzare. */
export function proReviews(): Review[] {
  return reviews.filter((r) => r.professional);
}

/** aggregateRating globale per schema.org Organization. */
export function aggregateRating(): { average: number; count: number } {
  const count = reviews.length;
  const average = Math.round((reviews.reduce((s, r) => s + r.rating, 0) / count) * 10) / 10;
  return { average, count };
}
