# Template 3 — Dr. Maya Ellison | Consultant Cardiologist

A self-contained, production-quality fictional medical CV website built with **React + Vite**.

## Isolation Contract

> This template is **fully self-contained**. It has its own:
> - `package.json` (unique name: `resume-template-3-dr-maya-ellison`)
> - `vite.config.js` (fixed dev port `5176`, preview port `4176`)
> - `node_modules/` (not committed — each template installs independently)
> - `dist/` output directory (scoped to this folder only)
>
> **Do NOT** share, merge, or cross-import anything from this directory
> into other templates or a platform-level config. All dependencies are
> declared locally.

## Quick Start

```bash
cd "Resume 3"
npm install
npm run dev       # → http://localhost:5176
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server at `http://localhost:5176` |
| `npm run build` | Build production bundle to `./dist` |
| `npm run preview` | Preview production build at `http://localhost:4176` |
| `npm run lint` | Lint source files via oxlint |

## Tech Stack

- **React 19** — component-based UI
- **Vite 5** — fast dev server & bundler (pinned for Node 20 compatibility)
- **Vanilla CSS** — no CSS framework, all styles scoped to component files
- **No backend** — fully static, no external API calls

## Project Structure

```
Resume 3/
├── public/
│   └── dr-maya-ellison.jpg     ← AI-generated portrait (fictional)
├── src/
│   ├── data/
│   │   └── data.js             ← All content (100% fictional)
│   ├── hooks/
│   │   └── useInView.js        ← Scroll animation hook
│   ├── components/
│   │   ├── Navbar.jsx + .css
│   │   ├── Hero.jsx + .css
│   │   ├── ProfessionalOverview.jsx + .css
│   │   ├── Expertise.jsx + .css
│   │   ├── ExperienceTimeline.jsx + .css
│   │   ├── Education.jsx + .css
│   │   ├── Research.jsx + .css
│   │   ├── Contributions.jsx + .css
│   │   ├── Recognition.jsx + .css
│   │   ├── Philosophy.jsx + .css
│   │   ├── Contact.jsx + .css
│   │   └── Footer.jsx + .css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css               ← Global design tokens (scoped to this template)
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Content Disclaimer

All names, organisations, qualifications, research projects, publications,
awards, and personal details in this template are **entirely fictional**.
Dr. Maya Ellison is not a real person. This is a demonstration CV template only.

## Git Integration Notes

- `node_modules/` and `dist/` are listed in `.gitignore` — commit only source files
- No workspace (`pnpm-workspace.yaml`, `nx.json`, etc.) config exists in this folder
- No path aliases or shared modules reference files outside this directory
- Safe to add as a standalone subdirectory in a monorepo without modification
