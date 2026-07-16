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
    // Proxy same-origin verso la Store API di WooCommerce (evita CORS in dev).
    // In produzione lo stesso path /store-api è gestito dal rewrite in netlify.toml.
    server: {
      proxy: {
        '/store-api': {
          target: (process.env.PUBLIC_WOO_URL || 'https://biostamina.net') + '/wp-json/wc/store/v1',
          changeOrigin: true,
          secure: true,
          rewrite: (p) => p.replace(/^\/store-api/, ''),
        },
      },
    },
  },

  image: {
    // Asset locali ottimizzati a build-time via Sharp (astro:assets)
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
