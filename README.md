# WRONGORIGIN

Photography portfolio built with [Eleventy](https://www.11ty.dev/), hosted on GitHub Pages.

---

## Local development

```bash
npm install
npm start
```

Then open [http://localhost:8080](http://localhost:8080).

---

## Adding a new photo series

1. Create a new file in `src/projects/your-series-name.md`
2. Copy this frontmatter template:

```yaml
---
layout: layouts/project.njk
title: Your Series Title
location: City, Country
year: 2024
order: 3          # controls sort order on the grid
cover: /images/your-series/cover.jpg
images:
  - src: /images/your-series/01.jpg
    alt: Description of the photo
    caption: Optional caption text
  - src: /images/your-series/02.jpg
    alt: Another photo
---

Write your series statement here. This appears on the project page.
```

3. Add your images to `src/images/your-series/`
4. Push to `main` — GitHub Actions will build and deploy automatically.

---

## Project structure

```
src/
├── _includes/
│   └── layouts/
│       ├── base.njk        # Main HTML shell (nav, footer)
│       └── project.njk     # Individual series page layout
├── css/
│   └── main.css            # All styles
├── js/
│   └── main.js             # Cursor + scroll effects
├── images/                 # Your photos go here
├── projects/
│   ├── index.njk           # /work/ grid page
│   └── *.md                # One file per series
├── about/
│   └── index.njk           # /about/ page
└── index.njk               # Homepage
```

---

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** → select **GitHub Actions**
3. Push to `main` — the site builds and deploys automatically

Your site will be live at `https://yourusername.github.io/your-repo-name/`

> If hosting on a subpath (not a custom domain), add `pathPrefix` to `.eleventy.js`:
> ```js
> return { pathPrefix: "/your-repo-name/", ... }
> ```
