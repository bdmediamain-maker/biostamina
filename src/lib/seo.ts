/**
 * Helper SEO — costruzione meta/OG e JSON-LD schema.org.
 * OG image: SEMPRE asset locale in /public (mai CDN esterni — retaggio Lovable da evitare).
 */
import { site } from '@/config/site';
import type { Lang } from '@/i18n/ui';

export interface SeoInput {
  title: string;
  description: string;
  lang: Lang;
  path: string; // pathname assoluto es. /it/prodotto/dental
  ogImage?: string; // path locale es. /og/dental.jpg
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
}

export function canonical(path: string): string {
  return new URL(path, site.url).toString();
}

/** hreflang alternate per IT/EN a partire dal path corrente. */
export function alternates(path: string): { lang: string; href: string }[] {
  const parts = path.split('/');
  const make = (l: Lang) => {
    const p = [...parts];
    if (p[1] === 'it' || p[1] === 'en') p[1] = l;
    return { lang: l, href: canonical(p.join('/')) };
  };
  return [make('it'), make('en'), { lang: 'x-default', href: canonical(path.replace(/^\/(it|en)/, '/it')) }];
}

/** Organization / MedicalBusiness — usa il fabbricante come entità principale. */
export function orgSchema(rating?: { average: number; count: number }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: site.name,
    url: site.url,
    manufacturer: {
      '@type': 'Organization',
      name: site.manufacturer.name,
      address: site.manufacturer.addr,
      url: site.manufacturer.site,
    },
    ...(rating
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: rating.average,
            reviewCount: rating.count,
            bestRating: 5,
          },
        }
      : {}),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: canonical(it.url),
    })),
  };
}
