// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://biostamina.net',
  server: { port: 3032 },

  // Bilingue core IT/EN — routing /it/… e /en/…
  i18n: {
    locales: ['it', 'en'],
    defaultLocale: 'it',
    routing: {
      prefixDefaultLocale: true, // /it/ e /en/ entrambi prefissati
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'it',
        locales: { it: 'it-IT', en: 'en-GB' },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    // Asset locali ottimizzati a build-time via Sharp (astro:assets)
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
