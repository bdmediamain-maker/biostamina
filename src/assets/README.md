# src/assets/ — spazio immagini (ottimizzate a build-time)

Tutte le immagini del sito vanno qui. Astro le ottimizza automaticamente (webp/avif,
resize, hash) quando importate via `astro:assets` — **non** usare URL esterni/CDN
(retaggio Lovable da evitare).

## Cartelle

| Cartella | Cosa metterci |
|---|---|
| `logo/` | Logo Biostamina (`biostamina-logo.png` già presente) e varianti |
| `products/` | Foto prodotto standardizzate. Convenzione nome: `<slug>-01.jpg`, `<slug>-02.jpg` (es. `dental-01.jpg`) |
| `team/` | Foto sito produttivo / team (pagina Chi siamo) |
| `certifications/` | Scansioni/immagini certificati CE, notifiche, test Antropos |
| `blog/` | Hero image degli articoli |
| `og/` | Immagini Open Graph social (1200×630). Queste vanno invece in `public/og/` se referenziate come URL nei meta |

## Come usarle

**In un componente `.astro`:**
```astro
---
import { Image } from 'astro:assets';
import dental01 from '@/assets/products/dental-01.jpg';
---
<Image src={dental01} alt="Descrizione precisa (SEO + accessibilità)" width={600} />
```

**Collegate a un prodotto** (frontmatter `src/content/products/<slug>.md`):
```yaml
heroImage: ../../assets/products/dental-01.jpg
images:
  - ../../assets/products/dental-01.jpg
  - ../../assets/products/dental-02.jpg
```
Lo schema Zod usa `image()` → i path sono validati a build-time.

## Regola alt-text
Ogni immagine DEVE avere un `alt` descrittivo (mai vuoto) — requisito SEO + accessibilità del brief.

## Nota OG image
Le immagini Open Graph referenziate nei meta tag (`ogImage`) devono stare in
`public/og/` (servite come URL statico), non qui — perché i meta tag richiedono
un URL assoluto e non un asset ottimizzato importato.
