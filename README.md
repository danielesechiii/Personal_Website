# Sito Personale — Daniele Sechi

Static personal website built with vanilla HTML, CSS and JavaScript. Serves as both a portfolio showcase and a blog platform with client-side Markdown rendering.

## Architecture

The project is organized into five logical layers:

| Layer | Responsibility |
|-------|---------------|
| **Pages** | `profilo.html`, `portfolio.html`, `blog.html`, `article.html` — static templates loaded directly by the browser |
| **Styles** | `main.css` (design tokens, layout, components) + `responsive.css` (media queries) — fully responsive across breakpoints |
| **Scripts** | Each file handles one concern (preview generation, article rendering, Markdown parsing) |
| **Data** | JSON manifest (`posts.json`) drives dynamic content; individual posts are stored as `.md` files parsed at runtime |
| **Assets** | Cover images, SVG icons |

### Key design decisions

- **No framework or build step** — pure static files deployed to any HTTP server (GitHub Pages, Netlify, etc.)
- **Client-side Markdown parsing** — the blog loads post content at runtime via `fetch()` and converts it to HTML using a custom parser (`MDparser.js`). This keeps the CMS-free workflow simple: add a new post → drop a `.md` file in `data/posts/`.
- **Modular JS** — separation between `preview-loader.js` (handles the blog listing) and `article-render.js` (loads and renders single articles from URL query parameters). Both communicate through the shared data layer.
- **CSS custom properties** (`--colore-primario`, `--colore-frame`, etc.) centralize design tokens for consistent theming and easy maintenance.

### Data flow (blog)

```
posts.json  ──>  preview-loader.js  ──>  generates card previews
post.md     ──>  article-render.js    ──>  fetch() + MDparser.js  ──>  renders full article
```
