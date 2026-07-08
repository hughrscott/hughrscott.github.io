# hughrscott.com — Website Review

**Reviewed:** July 8, 2026
**Reviewer:** Automated visual + code audit
**Method:** Live site check (hughrscott.com), local render of repo HEAD (`2d110ec`) via headless Chromium at desktop (1440px) and mobile (390px) widths, full source read of `index.html`, `resume.html`, `styles.css`, `script.js`.

---

## 0. CRITICAL — Site Is Currently Down (fix before anything else)

**`https://hughrscott.com` returns a GitHub Pages 404 ("Site not found · GitHub Pages") right now.** Verified via direct HTTP request (`HTTP/2 404`, `server: cloudflare`, title "Site not found · GitHub Pages") and `https://hughrscott.github.io` also 404s. This means the CNAME/custom-domain and/or GitHub Pages source branch is currently misconfigured, or the DNS-to-Pages handshake is broken.

Likely causes, in order of probability:
1. GitHub Pages is not enabled / build source not set to `main` branch root in repo Settings → Pages.
2. The custom domain field in GitHub Pages settings doesn't match the `CNAME` file (`hughrscott.com`), so GitHub is serving the default 404 instead of resolving the custom domain.
3. DNS at the registrar isn't pointing at GitHub Pages IPs / correct CNAME target (worth double-checking `A`/`ALIAS` records against GitHub's documented IPs, and a `CNAME` for `www` if used).

**Action:** Go to `github.com/hughrscott/hughrscott.github.io/settings/pages`, confirm "Build and deployment" source is the `main` branch, confirm custom domain field shows `hughrscott.com` with a green checkmark (not "improperly configured"), and re-save if needed to trigger a Pages rebuild. This is a 5-minute fix but it's the single highest-priority item — everything else in this report is moot if the domain 404s.

---

## 1. Visual Design Assessment

**Overall: strong foundation, genuinely looks like a senior exec's site, not a template.** This is above-average work for a static single-pager.

**Strengths:**
- Clean editorial layout: serif display type for name/headings paired with a legible sans-serif (Inter) body — a sophisticated, intentional pairing that reads "thoughtful operator," not "generic SaaS landing page."
- Generous whitespace and consistent vertical rhythm (`.section` padding, `border-top` dividers) give it a calm, confident feel appropriate for a CTO/thought-leader.
- The 2×2 writing card grid with cover images is the strongest visual element on the page — it looks like a real publication, not a link list.
- Portrait photo (`HughPortrait.jpeg`) is professional quality: good smile, business-casual wardrobe, environmental context (looks like an ops/control room, which subtly reinforces the "critical infrastructure" narrative) — better than most executives' headshots.
- Mobile layout collapses cleanly to single column at 860px/540px breakpoints; text remains readable, image scales properly, no horizontal scroll or overflow observed.
- Focus-visible outline styles (`a:focus-visible`) show some accessibility awareness already baked in.

**Weaknesses:**
- **No navigation at all.** Zero nav bar, no sticky header, no in-page jump links, no "back to top." On a single-pager this is defensible, but there's also no way to get back to the homepage from `resume.html` except one small gray text link at the very top — easy to miss, and it's the *only* internal navigation on the entire site.
- **No footer.** The page just... stops after "Links." No copyright line, no "last updated," no secondary nav, no contact CTA. It reads as unfinished.
- One writing-card title has an actual typo baked into content data (see §2) which undercuts the otherwise polished tone the instant a visitor reads it closely.
- Site currently has no favicon — browser tab shows a blank/generic icon. Small thing, cheap fix, noticeable on every tab a visitor keeps open.
- No dark mode / no visual distinction from the "clean SaaS minimalism" look thousands of other portfolio sites share — it's tasteful but not distinctive. Nothing here visually signals "battery/grid/AI" beyond the photo背景 and article thumbnails.

---

## 2. Content Review

**Voice check against Hugh's LinkedIn style** (conversational-but-precise, hooks, analogies, short sentences, one idea per paragraph, ends on a question or sharp line):

The site copy currently reads like a **resume/bio, not like Hugh's actual writing voice**. Compare:

> Site: *"I work at the intersection of software, energy systems, and intelligent infrastructure. Over the course of my career I have helped turn complex technical systems into commercial products..."*

vs. the voice implied by his published titles ("Why Batteries Need Software," "Prompting IS Coding") — punchy, declarative, almost provocative. The site's hero copy is corporate-safe and generic; it could belong to nearly any senior tech exec. There's no hook, no analogy, no personality. This is the single biggest content gap: **the site doesn't sound like the person who writes the Substack.**

Specific issues found in `script.js` (the single source of truth for all page copy):

1. **Typo in a live headline** (line 63): `"Does Anyone Need Artisinal Hand Crafter Code"` — should be "Artisanal Hand-Crafted Code" to match the actual Substack title `does-anyone-need-artisanal-hand-crafted`. This is a public-facing typo in a card headline, visible to every visitor.
2. **Grammar** (line 56): `"Why do Batteries Need Software"` — inconsistent capitalization/title-casing vs. the other three cards ("The Grid Transition...", "The Most Important Metric...") which are properly title-cased. Should be "Why Do Batteries Need Software" or better, exactly match the published title "Why Batteries Need Software" (per task brief) — worth reconciling site copy against the actual live Substack title.
3. **Two of six published essays are missing** from the writing grid: "Golden Age of AI" and "Prompting IS Coding" are not represented anywhere on the site, despite being named as flagship pieces. Only 4 of 6 known essays are listed.
4. **Bio doesn't mention AI writing/thought-leadership angle explicitly** — given Hugh is actively building a personal brand as an AI expert, the hero and about copy under-index on AI relative to energy/grid. "Prompting IS Coding" and "Golden Age of AI" suggest he wants to be seen as an AI voice too, but the bio reads energy-infrastructure-first with AI as a footnote ("Today I am particularly interested in how AI will reshape physical infrastructure...").
5. **Resume vs. site inconsistency**: `resume.html` describes Together Solar as **"CEO & Co-Founder"** while `index.html`/`script.js` describes it as **"Founder"** only, and the task brief describes Hugh as **"partner"** at Together Solar. Also NRG Energy and Energy Plus roles appear in `resume.html` but are completely absent from the homepage's "Selected Experience" section — a visitor who only sees the homepage gets an incomplete career picture (missing ~9 years, two SVP-level roles, and the NRG acquisition story, which is a great growth narrative to have on a personal brand site).
6. **Education is a genuine hidden asset**: PhD in Computer Science (Warwick) + BSc Math & Physics (Glasgow) appears *only* on the resume page, never on the homepage. For someone building a "technical thought leader" brand, "PhD in Computer Science" is a strong credibility signal that's currently buried two clicks deep with no link surfaced above the fold.
7. **Awards buried too**: Computerworld CIO 100, Forbes Applied Innovation Prize, CIO Magazine "One to Watch" — all only on `/resume.html`, none referenced on the homepage. These are excellent trust signals for a "thought leader" positioning and are currently invisible unless someone clicks through.
8. **No first-person hook/anecdote anywhere.** Every section opens with a description of what Hugh does, never with a story, a number, or a question — which is the opposite of his described LinkedIn opening style ("opens with a hook").
9. **"Projects / Lab" section is thin** — one sentence pointing at a GitHub profile with no specifics on what's actually in there. If the GitHub lab is meant to demonstrate hands-on technical chops (reinforcing the "still writes code" narrative useful for the "Prompting IS Coding" thesis), it needs at least 2-3 named/pinned repos with one-line descriptions, not just a bare link.

---

## 3. UX Assessment

- **Navigation:** No in-page nav or anchor links; long single scroll with 7 sections and no way to jump. Acceptable for a short page but this page is long enough (7 sections + resume page) that a minimal sticky nav or anchor jump menu would help, especially on mobile where scroll distance is longer.
- **Mobile responsiveness:** Good — clean single-column reflow at both tested breakpoints (390px, 860px), text remains legible, image scales, no overflow bugs observed.
- **Loading performance:** All copy is injected via JS (`renderProfile`, `renderExperience`, etc.) rather than present in the HTML. This means:
  - Content is invisible until JS executes (no meaningful content in raw HTML — bad for perceived performance and for crawlers/scrapers that don't execute JS).
  - No loading state/skeleton — page briefly shows a totally empty shell (`<h1 id="name"></h1>` etc.) before JS populates it, which will FOUC/flash on slow connections.
  - Article thumbnail images are hotlinked directly from `substack-post-media.s3.amazonaws.com` — if Substack ever changes/removes those objects, the images silently break on hughrscott.com with no fallback.
- **Accessibility:**
  - `aria-labelledby` is used correctly on sections — good.
  - Portrait `<img id="portrait" alt="">` — alt text is set via JS (`profile.portrait.alt`) which does work, but the empty `alt=""` in raw HTML plus JS-dependent alt text means anything that reads the DOM before JS runs (or an SEO/AT tool that doesn't execute JS) sees an unlabeled image.
  - No `lang` issues — `lang="en"` correctly set.
  - No skip-to-content link (minor, given no nav, but worth adding once nav exists).
  - Color contrast looks fine (dark gray text `#1a1a1a`/`#5a5a5a` on `#fafafa`/`#ffffff` backgrounds — passes WCAG AA easily).
- **No 404 handling / no custom error page** for the actual site once it's live again — currently just gets GitHub's generic 404.
- **No contact mechanism whatsoever.** Links section only contains LinkedIn and GitHub — no email, no contact form, no "let's talk" CTA. For someone actively building a public thought-leadership brand, this is a real gap: journalists, conference organizers, podcast hosts, or potential board/advisory contacts have no direct way to reach him from the site itself.

---

## 4. Missing Sections (what a personal brand site like this should have)

Ranked by relevance to Hugh's stated goals (CTO + energy/AI thought leader):

1. **Contact / "Get in touch"** — at minimum a mailto link or simple contact form. Currently zero.
2. **Speaking / media section** — if Hugh does or wants to do podcasts, panels, conference talks, this needs a home. Even a placeholder "Speaking" section signals availability.
3. **Full writing archive / blog index** — right now only 4 of 6+ known essays are surfaced, and only via 2×2 cards with truncated descriptions. A dedicated `/writing.html` or embedded Substack RSS feed would let this scale past 4 articles without redesigning the grid every time, and would auto-surface "Golden Age of AI" and "Prompting IS Coding," which are missing today.
4. **Press / "As seen in" or awards strip** — Computerworld CIO 100, Forbes Applied Innovation Prize, CIO Magazine "One to Watch" are sitting unused on the resume page. These belong on the homepage, likely as a simple logo/badge strip near the hero — they're strong, fast credibility signals for a stranger's first 5 seconds on the site.
5. **Social links are incomplete** — only LinkedIn + GitHub. Missing: Substack (surprisingly — the writing section links to individual articles but never links to the Substack home/subscribe page itself), and if applicable X/Twitter.
6. **Substack subscribe CTA** — anyone who reads the 4 article previews and wants more has no "subscribe" link anywhere on the homepage; the only Substack link on the whole site lives on `resume.html`, not `index.html`.
7. **Newsletter signup / email capture** — if brand-building is the goal, capturing an email list is more durable than one-off article reads.
8. **PhD / academic credential surfaced on homepage** — currently invisible outside `/resume.html`.
9. **Photo/visual proof of the "physical infrastructure" angle** — e.g., a photo of a battery site, control room, or solar install would visually reinforce the "software meets physical infrastructure" thesis better than the current portrait-only imagery.
10. **Testimonials/endorsements** — even 2-3 short quotes from colleagues/board members would help "operator" credibility.

---

## 5. SEO Basics

Full audit of `<head>` in `index.html` and `resume.html` — current state:

| Item | Status |
|---|---|
| `<title>` | ✅ Present, but generic (`Hugh Scott` / `Hugh Scott \| Resume`) — no keywords (CTO, AI, energy, battery) |
| Meta description | ✅ Present on both pages, reasonably good copy |
| Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`) | ❌ **Completely absent** — links shared on LinkedIn/Twitter/Slack will show no preview card, just a bare URL |
| Twitter Card tags | ❌ Absent |
| `og:image` / social share image | ❌ None exists — should reuse the portrait or a purpose-built 1200×630 card |
| Canonical URL (`<link rel="canonical">`) | ❌ Absent |
| Favicon | ❌ **Missing entirely** — no `<link rel="icon">`, no favicon file in repo |
| `robots.txt` | ❌ Absent |
| `sitemap.xml` | ❌ Absent (low priority for a 2-page site, but trivial to add) |
| Structured data (JSON-LD `Person` schema) | ❌ Absent — a `Person` schema with `jobTitle`, `worksFor`, `sameAs` (LinkedIn/GitHub/Substack) would help Google understand and potentially show a knowledge panel |
| Semantic HTML | ✅ Good — proper `<section>`/`<article>`/heading hierarchy |
| Content is JS-rendered | ⚠️ Google generally executes JS fine now, but this still means anything that doesn't run JS (some crawlers, link-preview bots, archive tools) sees an empty shell — content should ideally be present in initial HTML or pre-rendered |
| HTTPS | ✅ (once domain is fixed) — GitHub Pages + Cloudflare in front, standard |
| Alt text | ⚠️ Portrait alt is JS-injected only (see §3) |
| Mobile-friendly viewport meta | ✅ Present |
| Page load / no render-blocking issues | ✅ Single small CSS + JS file, no heavy frameworks — fast once domain resolves |

---

## 6. Code Quality Notes (for whoever implements fixes — likely DeepSeek)

- Content lives entirely in one `siteContent` object in `script.js` — good separation of content/structure, easy to edit without touching HTML. Keep this pattern.
- `resume.html` duplicates a lot of markup/CSS classes from `index.html` manually rather than being generated from the same content object — means the Together Solar title inconsistency (§2.5) is a symptom of the two files drifting independently. Consider either generating resume content from the same `siteContent`-style object, or explicitly cross-checking role titles/dates between the two files whenever one changes.
- No build step, no minification, no bundler — appropriate for a site this size, no need to add complexity here.
- `assets/docs/resume-placeholder.txt` and `assets/docs/writing-sample-placeholder.txt` are leftover placeholder files still committed to the repo — should be deleted, they're not referenced by any page but are dead weight/confusing for future maintainers.
- `Thesis.pdf` is 6.4MB in the repo — fine for GitHub Pages but worth being aware it's the single largest asset.
- CNAME file is correctly present and correctly contains `hughrscott.com` — the outage is a GitHub Pages *settings* issue, not a repo content issue.

---

## 7. Priority List — Ranked for Implementation

**P0 — Blocking (fix immediately, site is non-functional)**
1. Fix GitHub Pages custom domain configuration so `hughrscott.com` stops 404ing. Check repo Settings → Pages source branch + custom domain field. (§0)

**P1 — High impact, low effort (do this week)**
2. Fix the two typos/inconsistencies in `script.js`: "Artisinal Hand Crafter Code" → "Artisanal Hand-Crafted Code" (line 63), and "Why do Batteries" → "Why Batteries Need Software" (line 56), matching actual published titles. (§2.1, §2.2)
3. Add the two missing essays ("Golden Age of AI," "Prompting IS Coding") to the `writing.articles` array in `script.js`.
4. Add a favicon (`<link rel="icon">` + file in repo root or `/assets`).
5. Add Open Graph + Twitter Card meta tags to both `index.html` and `resume.html`, with a proper `og:image` (reuse portrait or make a simple branded card).
6. Add a real contact method — at minimum a `mailto:` link in the Links section; ideally a simple form (Formspree/similar, no backend needed).
7. Add Substack home link ("Subscribe on Substack") to the homepage Writing section — currently only reachable via `/resume.html`.
8. Reconcile Together Solar title across `index.html`/`script.js` ("Founder") and `resume.html` ("CEO & Co-Founder") — pick one, per the task brief "partner" may be the most accurate current title and should be confirmed with Hugh directly.

**P2 — Medium impact (do this month)**
9. Rewrite hero + about copy to match Hugh's actual LinkedIn voice — hook opener, shorter sentences, one idea per paragraph, end on a question or sharp line. Treat this as a full rewrite pass, not a tweak. (§2 overall)
10. Surface PhD (Computer Science, Warwick) and awards (Computerworld CIO 100, Forbes Applied Innovation Prize, CIO Magazine One to Watch) on the homepage — likely a small "credentials" strip near the hero or a line added to the About section.
11. Add NRG Energy and Energy Plus roles (or at least a summarized "10+ years scaling energy/tech businesses" line) to the homepage Selected Experience or immediately below it, since currently the homepage undersells 9+ years of the career history that's on the resume.
12. Add a footer with copyright, last-updated date, and a repeat of key links.
13. Add a minimal in-page nav (even just anchor links: About / Experience / Writing / Contact) given the page length.
14. Add JSON-LD `Person` structured data with `jobTitle`, `worksFor` (FlexGen), and `sameAs` (LinkedIn, GitHub, Substack).
15. Flesh out "Projects / Lab" section with 2-3 named/described repos instead of a bare GitHub link.

**P3 — Nice to have (backlog)**
16. Add `robots.txt` and `sitemap.xml`.
17. Add newsletter/email capture if brand growth is a goal.
18. Add a "Speaking" or "Media" section (even empty/placeholder framing like "Open to speaking engagements — reach out").
19. Consider pre-rendering content into raw HTML (or at least critical hero text) instead of 100% JS-injected, for better crawler/scraper compatibility and to eliminate the empty-shell flash on load.
20. Remove dead placeholder files (`resume-placeholder.txt`, `writing-sample-placeholder.txt`) from the repo.
21. Add a photo of physical infrastructure (battery site/control room/solar array) somewhere on the page to visually reinforce the "software meets hardware" thesis beyond the portrait alone.
22. Consider testimonials/endorsement quotes section.

---

## Screenshots Captured (local render, repo HEAD)
- Desktop homepage (1440px): confirms clean editorial layout, 2×2 writing grid, professional portrait.
- Mobile homepage (390px): confirms clean single-column reflow, no overflow bugs.
- Resume page (1440px): confirms consistent design language, surfaces PhD/awards/full career history not present on homepage.

*(Screenshots taken via headless Chromium against a local static file server since the live domain was down at review time; visual findings apply equally once the domain fix in P0 is deployed, since it's the same repo content.)*
