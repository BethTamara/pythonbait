# Heartfelt Notary website

A static site for a mobile notary and loan signing agent based in Midvale, Utah. Built the same way as the Heartfelt Glow site: plain HTML and CSS in `site/`, deployed on Vercel.

| Where | What |
| --- | --- |
| `site/index.html` | Home page: hero, services, pricing, title companies, notary basics, what to bring, service area, FAQ, booking, contact. |
| `site/about.html` | About page with photo and bio. |
| `site/es/index.html`, `site/es/about.html` | The full Spanish version, at `/es` and `/es/about`. Keep it in step with the English pages. |
| `site/styles.css` | Colours and type. The accent colour is one variable, `--accent`. |
| `site/site.js` | Mobile menu, footer year, and the Calendly inline booking widget. |
| `vercel.json` | Serves `site/` with clean URLs (`/about`). |

## Deploying

The site is the `heartfelt-notary` project in the `heartfelt-glow` Vercel team. Deploy with `vercel deploy --prod --scope heartfelt-glow` from this folder.

- Live address until DNS is set: https://heartfelt-notary.vercel.app
- `www.heartfeltnotary.com` is the main address; `heartfeltnotary.com` redirects to it (308). Both are attached to the project and take effect once the domain's nameservers are `ns1.vercel-dns.com` and `ns2.vercel-dns.com`, or these records exist: `A @ 216.198.79.1` and `CNAME www b96ed21f5ce6f0b8.vercel-dns-017.com`.
- The domain is registered at Network Solutions (bought November 2026). It can move to another registrar after the 60-day lock on new registrations.

## Before launch

The draft still has placeholders. Search for `__` to find them.

- The booking calendar loads from the `data-calendly-url` attribute in `site/index.html` and `site/es/index.html`.
- Fees and credentials are on the site as the owner gave them; confirm both before launch
- The site is public: the `noindex` tags were removed at launch. Canonical and `hreflang` links, Open Graph tags, business structured data, `sitemap.xml` and `robots.txt` are in place.

## Rules the copy follows

- Utah Code 46-1-11: a notary who is not an attorney may not give legal advice. Advertising in Spanish requires a conspicuous notice in English and Spanish with the fees a notary may charge and the "I am not an attorney" statement. Both Spanish pages carry it (the `.notice` block). Do not remove it, and do not translate "notary public" as "notario público"; the Spanish pages leave the term in English on purpose.
- Utah Code 46-1-12: a travel fee has to be explained as separate from the notary fee and agreed in advance. The pricing section does this.
- Fees follow Utah Code 46-1-12: $10 per signature at most, and a per-mile travel fee kept under the federal mileage rate.
- No review counts or years of experience appear unless the owner supplies them.
