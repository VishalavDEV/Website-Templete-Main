# Ember & Olive — Commercial Restaurant Website Template

> **"Seasonal Food. Shared Moments."**
> An elegant, production-ready commercial restaurant website template built with React 19, TypeScript, Vite, Tailwind CSS, Bootstrap 5.3+, and Google Fonts.

---

## 1. Overview & Features

* **Original Brand Identity**: Fully original typography, bespoke color palette, and asymmetric layout.
* **Multi-Page & Modal Architecture**:
  * `Home` (`/`): Complete immersive showcase with hero, story, signature dishes, menu preview, chef profile, events, testimonials, gallery, table reservations, and location.
  * `Our Story` (`/about`): Heritage story, culinary philosophy, local farm partnerships, executive team, and zero-waste sustainability ethos.
  * `Seasonal Menu` (`/menu`): Comprehensive seasonal menu with live keyword search, dietary filter (Vegetarian, Gluten-Free, Chef Signatures), tasting menu showcase, and print-ready trigger.
  * `Private Events` (`/events`): Private dining suites (The Olive Cellar, Hearth Counter, Terrace Pergola), celebration packages, and interactive event inquiry form.
  * `Photo Gallery` (`/gallery`): High-resolution filterable masonry gallery with interactive lightbox modal (prev/next, counter, and keyboard navigation).
  * `Contact & Hours` (`/contact`): Concierge contact info, service hours, valet & parking guidelines, FAQ accordion, interactive message form, and embedded map.
  * `License & Legal Notice` (`/license`, `/legal`): Formatted legal modal and dedicated route displaying the full MIT License terms without cluttering primary UI layouts.
* **Interactive Engine & Micro-Interactions**:
  * Sticky dynamic header with backdrop blur and scroll shrink
  * Custom cursor & scroll progress tracker
  * Live category filtering and search for menu dishes
  * Asymmetric signature dish modal spotlight
  * Smooth testimonial carousel with autoplay, touch swipe, and navigation dots
  * Gallery lightbox with image counter and Arrow/Escape keyboard navigation
  * Animated counter for restaurant milestones using `IntersectionObserver`
  * Frontend table reservation validation and toast confirmation
  * Interactive contact and event inquiry forms
* **Clean Code**: Fully customizable CSS custom properties and Tailwind CSS utility tokens.

---

## 2. Folder & File Structure

```
templates/restaurant/restaurant-2/
├── index.html            # Main HTML wrapper & preview shell
├── LICENSE               # Full MIT License (Plaintext)
├── LICENSE.md            # Full MIT License (Markdown)
├── README.md             # Template documentation
├── package.json          # Node dependencies & scripts
├── vite.config.ts        # Vite build & plugin configuration
├── tsconfig.json         # TypeScript configuration
└── src/
    ├── main.tsx          # React application entrypoint
    ├── App.tsx           # Router configuration & routes
    ├── index.css         # Tailwind & global stylesheet
    ├── components/       # Reusable components (Header, Footer, Modals, Cursor)
    ├── hooks/            # Template effects & animations
    ├── pages/            # Page views (Home, About, Menu, Events, Gallery, Contact, Legal)
    └── types/            # TypeScript interfaces & types
```

---

## 3. License

MIT License. Released for personal and commercial restaurant websites. See [`LICENSE`](./LICENSE) or [`LICENSE.md`](./LICENSE.md) for details.
