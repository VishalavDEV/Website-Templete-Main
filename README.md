# LuminaFrame — Modern Photography & Creative Portfolio Template

> **"The Geometry of Silence."**
> A contemporary, production-ready, editorial photography and visual direction portfolio website template built with React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

---

## 1. Overview & Features

* **Aesthetic & Visual Architecture**:
  * Deep obsidian dark-mode palette (`#0b0c10`, `#12161f`, `#1f2833`, `#c5c6c7`, `#66fcf1`).
  * Editorial typography pairing `Syne` (display headers), `Plus Jakarta Sans` (body), and `JetBrains Mono` (technical EXIF metadata).
  * 60fps micro-interactions with Framer Motion.
* **Core Sections**:
  * **Sticky/Floating Blur Navbar**: Brand aperture monogram that rotates on hover, active spring indicator tabs, social channels, and responsive slide-out mobile drawer.
  * **Fullscreen Hero Showcase**: High-impact cross-fading carousel with subtle Ken-Burns zoom, camera exposure badge, location indicator, and slide navigation controls.
  * **Curated Works Gallery**: Responsive multi-column masonry grid with dynamic aspect ratios (`tall`, `wide`, `square`, `standard`) and category filter pills (`All`, `Editorial`, `Architecture`, `Street`, `Portrait`, `Minimal`).
  * **Interactive EXIF Lightbox**: Fullscreen modal with backdrop blur, next/previous buttons, full keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`), and collapsible camera/optics drawer.
  * **Investment & Packages**: Minimal cards with hover elevation, deliverables checklist, turnaround times, and direct package reservation links.
  * **Visual Philosophy & Artist Profile**: Asymmetrical split-grid layout with artist portrait, philosophy quote, bio, scroll-triggered animated stat counters, and categorized hardware/optics checklist.
  * **Press & Accolades**: Monochrome recognition ribbon (*Vogue Italia*, *Architectural Digest*, *Wallpaper\**, *Harper's Bazaar*, *Dwell*, *Kinfolk*).
  * **Booking & Logistics Form**: Interactive inquiry form with budget tiers, shoot dates, confidential brief submission, and live availability badge.
  * **Editorial Footer**: Brand colophon, private encrypted client proofing portal teaser, and smooth back-to-top button.

---

## 2. Directory Structure

```text
.
├── frontend/               # Complete React + Vite + Tailwind v4 Application
│   ├── src/
│   │   ├── components/     # Modular section components
│   │   │   ├── layout/     # Navbar.tsx, Footer.tsx
│   │   │   ├── hero/       # Hero.tsx
│   │   │   ├── gallery/    # GalleryGrid.tsx, GalleryCard.tsx, LightboxModal.tsx
│   │   │   ├── services/   # ServicesSection.tsx
│   │   │   ├── about/      # AboutSection.tsx, StatCounter.tsx, GearChecklist.tsx
│   │   │   ├── press/      # PressBar.tsx
│   │   │   ├── contact/    # ContactSection.tsx
│   │   │   └── ui/         # SocialIcons.tsx
│   │   ├── data/
│   │   │   └── portfolioData.ts  # Decoupled content (Photos, EXIF, Packages, Gear)
│   │   ├── types/
│   │   │   └── portfolio.ts      # TypeScript interfaces
│   │   ├── App.tsx         # Page layout & section coordinator
│   │   ├── main.tsx        # React DOM entry point
│   │   └── index.css       # Tailwind v4 @theme design tokens
│   ├── index.html          # Web root with Google Fonts
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── metadata.json           # Template metadata configuration
├── build.js                # Build automation pipeline
└── README.md               # Documentation
```

---

## 3. Quick Start & Development

### Run Locally
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Production Build
```bash
npm run build
```
Or run the repository pipeline from the root:
```bash
node build.js
```

---

## 4. Customizing Content & Photography

All user-facing content is decoupled into `frontend/src/data/portfolioData.ts`:
* **Hero Slides**: Update `HERO_SLIDES` with your own titles, high-resolution photographs, and camera settings.
* **Gallery Photos**: Add, modify, or remove items in `GALLERY_PHOTOS`.
* **Services**: Update packages and deliverables in `SERVICE_PACKAGES`.
* **Gear Arsenal**: Update your cameras and glass in `GEAR_INVENTORY`.
* **Stats**: Customize your awards and milestone counts in `STATS`.

---

## License

MIT License. Free to use for commercial and personal creative portfolios.
