# Knowledge base — predisposizione IA futura

Questa cartella raccoglie i contenuti in formato pulito e strutturato che l'**assistente IA (Q&A sui prodotti)** riuserà per il RAG. **L'IA NON è costruita ora** (§8 del brief v2): qui prepariamo solo la KB per non rifare tutto dopo.

## Contenuto

| File | Fonte | Uso |
|---|---|---|
| `reviews.json` | schede prodotto (estrazione 06/07/2026) | recensioni verbatim + flag compliance (`professional`, `verified`, `strongClaim`, `consentPending`) |
| `facts.json` | brief + bugiardini + certificazioni | fatti verificati su brand, entità, certificazioni, classi DM |
| *(prodotti)* | `src/content/products/*.md` | copy ufficiale bugiardini — già SSOT, l'IA legge da lì |
| *(faq)* | `src/content/faq/*.md` | doppio uso: pagina FAQ SEO oggi + training IA domani |

## Regola d'oro compliance IA

L'assistente dovrà rispondere **solo** dai bugiardini/fonti ufficiali, **mai inventare indicazioni mediche**. I `strongClaim` delle recensioni non vanno mai riproposti come affermazioni del brand.
