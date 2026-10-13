# Personal site

A static site built with Astro. No database, no server, no monthly cost — it
compiles to plain HTML, CSS, and a few kilobytes of JavaScript that you upload
anywhere.

---

## 1. Run it on your laptop

You need [Node.js](https://nodejs.org) 18 or newer (`node -v` to check).

```bash
npm install     # once, after downloading
npm run dev     # starts http://localhost:4321
```

Leave `npm run dev` running while you edit. The browser updates as you save.

When you're happy:

```bash
npm run build   # writes the finished site into dist/
npm run preview # serves dist/ so you can check the real build
```

---

## 2. What to edit

| I want to change… | Edit this |
| --- | --- |
| Header links | `src/site.config.ts` → `nav` |
| Name, role, email, profile picture, card tags | `src/site.config.ts` → `profile` |
| The badge rows on the home page | `src/site.config.ts` → `badgeRows` |
| Home page paragraphs | `src/pages/index.astro` |
| Skills | `src/pages/skills.astro` |
| Software projects and 3D art | `src/data/projects.ts` |
| Books | `src/data/books.ts` |
| Awards | `src/pages/awards.astro` |
| Publications | `src/pages/publications.astro` |
| Blog posts | `src/content/blog/*.md` |
| Colours, fonts, spacing | `src/styles/global.css` (the `:root` block at the top) |
| Images and your photo | `public/images/` |
| 3D renders and turntable videos | `public/art/` |

Each list page keeps its data in a plain array at the top of the file. Copy an
existing entry, change the text, done. You don't need to touch the markup below.

### Adding your photo

Drop the file into `public/images/`, then in `src/site.config.ts`:

```ts
avatar: '/images/me.jpg',
```

Leave it as `null` and the circle shows your initials instead.

---

## 3. Adding or removing a header item

**To add a page named "Teaching":**

1. Add a line to `nav` in `src/site.config.ts`:

   ```ts
   { label: 'Teaching', href: '/teaching' },
   ```

2. Create `src/pages/teaching.astro`. The fastest way is to copy
   `src/pages/awards.astro` and edit the array at the top.

That's it — the header, the mobile menu, and the "current page" underline all
read from the same list.

**To remove one:** delete its line from `nav` and delete its file from
`src/pages/`.

**For an external link:**

```ts
{ label: 'CV', href: 'https://example.com/cv.pdf', external: true },
```

Six or seven items is about the limit before the pill gets crowded on a laptop
screen. Below 760px wide it collapses into a Menu button automatically.

---

## 4. Projects: software and 3D art

Both lists live in `src/data/projects.ts`. The page opens on software and the
button at the top switches to 3D art. `/projects?view=art` links straight to
the art side.

**A software project** needs `languages` (programming languages only) and
`tools` (frameworks, libraries, databases). They render as two labelled rows,
languages filled and tools outlined.

**A 3D piece** needs `tools` (Blender, ZBrush, Maya, Substance Painter) and
`skills` (Sculpting, Retopology, Weight painting, Texturing), plus `media`:

```ts
media: [
  { type: 'image', src: '/art/knight-bust.jpg', alt: 'Knight bust, front view' },
  { type: 'video', src: '/art/turntable.mp4', poster: '/art/turntable.jpg',
    alt: 'Turntable of the knight bust' },
],
```

One item fills the width; two or more lay out in a responsive grid. Images link
to the full-size file. Always give a video a `poster`, or mobile browsers show
a grey box until it loads. See `public/art/README.txt` for export advice.

### The filter dropdowns

You never maintain the dropdown contents. They're generated from your data by
`optionsFor()`, so a new language or skill appears the moment you use it.

How the matching works:

- **Inside one dropdown, selections are OR.** Ticking Java and Solidity shows
  projects using either.
- **Across dropdowns they are AND.** Java plus MySQL shows only projects using
  both.

Each dropdown has its own "Clear" link, and a "Clear all" appears beside them
once any filter is on. The count on the right reads "2 of 7 projects" while
filtered. The two views keep their filters separately.

Filtering is plain JavaScript over already-rendered HTML — no search index, no
page reloads. If JavaScript is off, every project shows and the dropdowns do
nothing, which is the right way for it to fail.

---

## 5. Books

`src/data/books.ts` holds two lists.

**`ongoing`** is the bookmark shelf. Each book takes a `bookmark` string in
your own words ("Chapter 4 — Data-Level Parallelism") and a `lastRead` date.
Add `page` and `pages` and you get a progress bar; leave them out and the card
just shows the bookmark, which suits novels.

```ts
{
  title: 'Computer Architecture: A Quantitative Approach',
  author: 'Hennessy & Patterson',
  bookmark: 'Chapter 4 — Data-Level Parallelism',
  page: 310,
  pages: 936,
  lastRead: '2026-10-05',
  note: 'Slow going, but the vector chapter is worth it.',
}
```

The accountability part: "last read" is shown as a relative time computed in
the browser, so it stays accurate however long ago the site was built, and the
dot beside it changes colour — accent within a week, grey up to three weeks,
amber beyond that. Hovering shows the exact date.

**`finished`** needs only a title, author, and the `year` you finished. Years
group and sort themselves, newest first. `note` is optional.

Update a `lastRead` date and rebuild whenever you pick a book back up.

---

## 6. Writing a blog post

Create a new `.md` file in `src/content/blog/`. The filename becomes the URL, so
`faster-kernels.md` is served at `/blog/faster-kernels`.

```markdown
---
title: Your title here
date: 2026-10-12
description: One sentence, shown in the post list and in search results.
tags: ['CUDA', 'Performance']
draft: false
---

## Introduction

Your text. Use `##` for top-level sections and `###` for subsections —
the numbered table of contents on the right is built from them automatically.
```

Set `draft: true` to keep a post out of the build while you work on it.

---

## 7. Light and dark mode

Dark is the default, matching the design. The button beside the header switches
modes and remembers the choice in the browser. A first-time visitor whose
system is set to light mode gets light mode.

All colours come from two blocks at the top of `src/styles/global.css`:
`:root` for dark, `:root[data-theme='light']` for light. Change a value in both
places and the whole site follows.

The header deliberately inverts: white on the dark page, near-black on the
light one.

---

## 8. Deploying

Pick whichever route matches what you bought from GoDaddy.

### Which do I have?

Log in to GoDaddy and look at **My Products**:

- **"Web Hosting" / cPanel listed** → use Option A.
- **Only a domain listed**, or "Websites + Marketing" → use Option B.
  Websites + Marketing is a drag-and-drop builder and can't host your own
  files, so you'll serve the site elsewhere and point the domain at it.

---

### Option A — Upload to GoDaddy cPanel hosting

1. Run `npm run build`.
2. In GoDaddy, open **Web Hosting → Manage → cPanel Admin → File Manager**.
3. Navigate into **`public_html`**. Delete the default placeholder files
   (usually `index.html` or a `default.html`).
4. Upload **everything inside `dist/`** — not the `dist` folder itself. The
   result should be `public_html/index.html`, `public_html/_astro/…`,
   `public_html/skills/index.html`, and so on.
5. Make sure the hidden `.htaccess` file came across. In File Manager, use
   **Settings → Show Hidden Files**. It's included in `public/` so the build
   copies it into `dist/` for you. It handles the HTTPS redirect, the 404 page,
   and caching.
6. Visit your domain.

Zipping `dist/`, uploading the single zip, and using cPanel's **Extract** is
much faster than uploading hundreds of files individually.

For repeat deploys, FTP is less tedious. Get the FTP credentials from cPanel
(**Files → FTP Accounts**) and use [FileZilla](https://filezilla-project.org),
pointing the local side at `dist/` and the remote side at `public_html`.

**Caveat:** every update means another manual upload. If that gets old, switch
to Option B, which rebuilds and republishes whenever you push to GitHub.

---

### Option B — Free hosting, GoDaddy domain

You keep the GoDaddy domain and let a static host serve the files for free.
Cloudflare Pages and Netlify both have free tiers that comfortably cover a
personal site. Netlify's steps are below; Cloudflare Pages is very similar.

**Step 1 — Put the code on GitHub**

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

**Step 2 — Connect it to Netlify**

1. Sign up at [netlify.com](https://netlify.com) with your GitHub account.
2. **Add new site → Import an existing project** → pick your repo.
3. Netlify detects Astro. Confirm the settings are:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. You get a temporary address like `brave-curie-12345.netlify.app`.
   Check the site works there before touching DNS.

**Step 3 — Point your GoDaddy domain at it**

In Netlify: **Domain management → Add a domain**, enter your domain, and choose
to keep your existing DNS provider. Netlify then shows the exact records you
need. Read them from that screen rather than from any guide, including this
one, because the values can change.

At the time of writing Netlify publishes these for external DNS:

| Host | Type | Value |
| --- | --- | --- |
| `www` | CNAME | `your-site-name.netlify.app` |
| `@` | A | `75.2.60.5` |

To enter them in GoDaddy: **My Products → Domains → DNS → Manage Zones**, then
**Add** or edit each record.

Two things to watch:

- Delete GoDaddy's existing parked `A` record for `@` and the default `CNAME`
  for `www` first, or they'll conflict.
- A bare domain (`yourdomain.com`) can't use a CNAME, which is why it needs the
  `A` record. Netlify recommends making `www.yourdomain.com` your primary
  address and letting the bare domain redirect to it — the bare domain resolves
  to a single load balancer rather than the nearest edge location, so it's
  slightly slower.

DNS changes usually take 15 minutes to a few hours, occasionally up to 48.
Netlify issues a free HTTPS certificate automatically once DNS resolves.

After this, `git push` republishes the site. No uploading.

**Step 4 — Update the site URL**

Set your real domain in `astro.config.mjs`:

```js
site: 'https://www.yourdomain.com',
```

It's used for canonical links, so it's worth getting right.

---

## 9. Project layout

```
astro.config.mjs        Build settings, markdown/code highlighting
src/
  site.config.ts        ← nav + profile + badges (start here)
  styles/global.css     ← colours, type, shared classes
  layouts/
    BaseLayout.astro    <head>, header, footer, theme script
    PageLayout.astro    Title + rule + content, for inner pages
  data/
    projects.ts         ← software + 3D art lists
    books.ts            ← reading lists
  components/
    Header.astro        The pill nav and mobile menu
    ThemeToggle.astro   Light/dark button
    ProfileCard.astro   The card on the home page
    Entry.astro         A software project / award entry
    ArtEntry.astro      A 3D piece, with its image or video
    StackRows.astro     The labelled tag rows both entries use
    FilterBar.astro     The dropdown filters
  content/blog/*.md     Your posts
  content.config.ts     Validates the frontmatter above each post
  pages/                One file per URL
public/                 Copied to the site root as-is
  .htaccess             Apache rules for GoDaddy hosting
  images/               Your photo and logos
```

---

## 10. Troubleshooting

**Styles are missing after uploading to GoDaddy.** You probably uploaded the
`dist` folder instead of its contents. `index.html` must sit directly in
`public_html`.

**Links work locally but 404 on GoDaddy.** Check that the subfolders
(`skills/`, `projects/`, …) each made it up with their `index.html` inside.

**Custom 404 page doesn't appear.** `.htaccess` is hidden — turn on "Show
Hidden Files" in File Manager and confirm it's in `public_html`.

**The page flashes white before going dark.** The inline script in
`BaseLayout.astro` prevents this. If you move it below the stylesheet link,
the flash comes back.

**A filter dropdown shows an option that matches nothing.** The options come
from your data, so that can't happen — unless you spelled a tool two different
ways (`Tailwind CSS` and `TailwindCSS` are two options). Keep spellings
consistent.

**Fonts look wrong offline.** Outfit and Mulish load from Google Fonts. To
self-host them instead, download the files into `public/fonts/` and replace the
`<link>` in `BaseLayout.astro` with `@font-face` rules.
