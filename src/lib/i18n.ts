/**
 * Helper i18n. Astro i18n nativo gestisce il routing (/it/…, /en/…);
 * qui i helper per stringhe UI, path localizzati e language switch.
 */
import { ui, defaultLang, languages, type Lang, type UIKey } from '@/i18n/ui';

export { languages, defaultLang, type Lang };

/** Estrae la lingua da un pathname tipo /it/prodotto/dental */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if ((languages as readonly string[]).includes(seg)) return seg as Lang;
  return defaultLang;
}

/** Ritorna una funzione di traduzione per la lingua data. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

/** Costruisce un path localizzato: localePath('it', '/negozio') → '/it/negozio' */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path === '/' ? '' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return `/${lang}${clean}`;
}

/** L'altra lingua rispetto a quella corrente (per il language switcher). */
export function otherLang(lang: Lang): Lang {
  return lang === 'it' ? 'en' : 'it';
}

/**
 * Traduce il pathname corrente nell'altra lingua mantenendo la rotta.
 * /it/prodotto/dental → /en/prodotto/dental
 */
export function switchLangPath(url: URL, target: Lang): string {
  const parts = url.pathname.split('/');
  if ((languages as readonly string[]).includes(parts[1])) {
    parts[1] = target;
    return parts.join('/') || `/${target}`;
  }
  return `/${target}${url.pathname}`;
}
