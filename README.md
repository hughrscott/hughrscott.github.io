# Personal Website

This is a static one-page personal website designed for simple deployment on GitHub Pages, Cloudflare Pages, or Netlify.

## Edit Content

All main page content lives in [`script.js`](/Users/hughscott/Documents/Coding/Webpage/script.js) inside the `siteContent` object.

Update:

- `profile.name`, `profile.title`, and `profile.bio`
- `profile.portrait.src` to point at your actual image
- `resume.summary` and the `resume.groups` bullets
- `documents` with hosted files or external document URLs
- `links` with your GitHub, LinkedIn, Substack, and any other profiles

Hosted files should go in [`assets/docs`](/Users/hughscott/Documents/Coding/Webpage/assets/docs). Images should go in [`assets/images`](/Users/hughscott/Documents/Coding/Webpage/assets/images).

## Local Preview

Run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages Deployment

1. Put these files in a GitHub repository.
2. In the repository settings, enable GitHub Pages from the branch that contains `index.html`.
3. Add your domain in the Pages custom domain settings.
4. Create a `CNAME` file in the project root with your real domain once you know the exact host.
5. Point your DNS records to GitHub Pages and wait for HTTPS to issue.

If you want both apex and `www`, choose one canonical host and redirect the other in your DNS or hosting settings.
