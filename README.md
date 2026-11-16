# Mobile notary website (draft)

A static site for a mobile notary and loan signing agent based in Midvale, Utah. Built the same way as the Heartfelt Glow site: plain HTML and CSS in `site/`, deployed on Vercel.

| Where | What |
| --- | --- |
| `site/index.html` | Home page: hero, services, pricing, title companies, notary basics, what to bring, service area, FAQ, booking, contact. |
| `site/about.html` | About page with photo and bio. |
| `site/styles.css` | Colours and type. The accent colour is one variable, `--accent`. |
| `site/site.js` | Mobile menu, footer year, and the Calendly inline booking widget. |
| `vercel.json` | Serves `site/` with clean URLs (`/about`). |

## Before launch

The draft still has placeholders. Search for `__` to find them.

- `__BUSINESS_NAME__`, `__PHONE__`, `__PHONE_TEL__`, `__EMAIL__`, `__CALENDLY_URL__`
- The photo placeholder in `site/about.html`
- The pricing table shows "quoted" text until real fees are supplied
- Both pages carry `<meta name="robots" content="noindex, nofollow">`. Remove it at launch.

## Rules the copy follows

- Utah Code 46-1-11: a notary who is not an attorney may not give legal advice. If any part of the site is written in Spanish, the statute requires a notice in English and Spanish that includes the fees a notary may charge and the "I am not an attorney" statement. The draft is English only.
- Utah Code 46-1-12: a travel fee has to be explained as separate from the notary fee and agreed in advance. The pricing section does this.
- No fee amounts, certifications, review counts or years of experience appear unless the owner supplies them.
