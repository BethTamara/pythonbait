# Heartfelt Notary website (draft)

A static site for a mobile notary and loan signing agent based in Midvale, Utah. Built the same way as the Heartfelt Glow site: plain HTML and CSS in `site/`, deployed on Vercel.

| Where | What |
| --- | --- |
| `site/index.html` | Home page: hero, services, pricing, title companies, notary basics, what to bring, service area, FAQ, booking, contact. |
| `site/about.html` | About page with photo and bio. |
| `site/es/index.html`, `site/es/about.html` | The full Spanish version, at `/es` and `/es/about`. Keep it in step with the English pages. |
| `site/styles.css` | Colours and type. The accent colour is one variable, `--accent`. |
| `site/site.js` | Mobile menu, footer year, and the Calendly inline booking widget. |
| `vercel.json` | Serves `site/` with clean URLs (`/about`). |

## Before launch

The draft still has placeholders. Search for `__` to find them.

- The booking calendar loads from the `data-calendly-url` attribute in `site/index.html` and `site/es/index.html`.
- Fees and credentials are on the site as the owner gave them; confirm both before launch
- Add `hreflang` alternate links and a canonical URL to all four pages once the domain is live.
- All four pages carry `<meta name="robots" content="noindex, nofollow">`. Remove it at launch.

## Rules the copy follows

- Utah Code 46-1-11: a notary who is not an attorney may not give legal advice. Advertising in Spanish requires a conspicuous notice in English and Spanish with the fees a notary may charge and the "I am not an attorney" statement. Both Spanish pages carry it (the `.notice` block). Do not remove it, and do not translate "notary public" as "notario público"; the Spanish pages leave the term in English on purpose.
- Utah Code 46-1-12: a travel fee has to be explained as separate from the notary fee and agreed in advance. The pricing section does this.
- Fees follow Utah Code 46-1-12: $10 per signature at most, and a per-mile travel fee kept under the federal mileage rate.
- No review counts or years of experience appear unless the owner supplies them.
