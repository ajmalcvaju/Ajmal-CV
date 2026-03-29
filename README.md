# Ajmal CV — Portfolio

A modern, responsive portfolio site for **Ajmal CV** (MERN Stack Developer), built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **React Icons**.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm (comes with Node)

## Setup

```bash
cd Ajmal
npm install
```

## Development

Start the Vite dev server (hot reload):

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Resume download

The **Download Resume** button expects a file at **`public/resume.pdf`**. Add your PDF there so the download works in dev and production. The path is defined in `src/data/portfolio.js` as `resumePath: '/resume.pdf'`.

## Project structure

- `src/App.jsx` — Root layout and background
- `src/pages/Home.jsx` — Composes all sections
- `src/components/` — Navbar, Hero, About, Skills, Projects, Experience, Education, Contact, Footer, `SectionReveal`
- `src/data/portfolio.js` — Editable copy, links, and skills
- `src/assets/` — Images (e.g. profile placeholder SVG)

## Tech stack

- React 19 + Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion
- React Icons

## GitHub repository & free hosting

This project is set up for account [**ajmalcvaju**](https://github.com/ajmalcvaju) and repository **`Ajmal-CV`** (GitHub does not allow spaces; “Ajmal CV” → `Ajmal-CV`).

| Item | URL |
|------|-----|
| **Repository** | [https://github.com/ajmalcvaju/Ajmal-CV](https://github.com/ajmalcvaju/Ajmal-CV) |
| **Free site (GitHub Pages)** | [https://ajmalcvaju.github.io/Ajmal-CV/](https://ajmalcvaju.github.io/Ajmal-CV/) |

### First-time setup

1. Create a **new public** repo named **`Ajmal-CV`** on GitHub: [github.com/new](https://github.com/new) — **do not** add README, .gitignore, or license.
2. In this folder, the remote is **`https://github.com/ajmalcvaju/Ajmal-CV.git`**. Push:

```bash
git remote add origin https://github.com/ajmalcvaju/Ajmal-CV.git
git branch -M main
git push -u origin main
```

(If `origin` already exists, use `git remote set-url origin https://github.com/ajmalcvaju/Ajmal-CV.git` instead.)

### Enable GitHub Pages

After the first push, the workflow `.github/workflows/deploy-github-pages.yml` deploys the site.

1. Repo **Settings → Pages → Build and deployment**.
2. **Source**: **GitHub Actions**.
3. Wait for the **Deploy to GitHub Pages** workflow in **Actions** to finish.

Your live URL: **https://ajmalcvaju.github.io/Ajmal-CV/**

If the repository is named **`username.github.io`** (root user site), set `BASE_URL: /` in that workflow instead of `/${{ github.event.repository.name }}/`.

### Faster free hosting (optional)

- **[Vercel](https://vercel.com)** or **[Netlify](https://netlify.com)**: connect the GitHub repo, use defaults (root `/`). No `BASE_URL` change needed locally; the app already uses `base: '/'` when `BASE_URL` is unset.
