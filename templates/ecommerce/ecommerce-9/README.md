# Ember & Olive — Commercial Restaurant Website Template

> **"Seasonal Food. Shared Moments."**
> A contemporary, production-ready, original commercial restaurant website template built with HTML5, CSS3, Bootstrap 5.3+, Vanilla JavaScript, and Google Fonts.

---

## 1. Overview & Features

* **Original Brand Identity**: Fully original typography, bespoke color palette, and asymmetric layout.
* **Multi-Page Architecture**:
  * `index.html`: Complete immersive showcase with hero, story, signature dishes, menu preview, chef profile, events, testimonials, gallery, table reservations, and location.
  * `about.html`: Heritage story, culinary philosophy, local farm partnerships, executive team, and zero-waste sustainability ethos.
  * `menu.html`: Comprehensive seasonal menu with live keyword search, dietary filter (Vegetarian, Gluten-Free, Chef Signatures), tasting menu showcase, and print-ready trigger.
  * `events.html`: Private dining suites (The Olive Cellar, Hearth Counter, Terrace Pergola), celebration packages, and interactive event inquiry form.
  * `gallery.html`: High-resolution filterable masonry gallery with interactive lightbox modal (prev/next, counter, and keyboard navigation).
  * `contact.html`: Concierge contact info, service hours, valet & parking guidelines, FAQ accordion, interactive message form, and embedded map.
* **Interactive Engine (`assets/js/main.js`)**:
  * Sticky dynamic header with backdrop blur and scroll shrink
  * Live category filtering and search for menu dishes
  * Asymmetric signature dish modal spotlight
  * Smooth testimonial carousel with autoplay, touch swipe, and navigation dots
  * Gallery lightbox with image counter and Arrow/Escape keyboard navigation
  * Animated counter for restaurant milestones using `IntersectionObserver`
  * Frontend table reservation validation and toast confirmation
  * Interactive contact and event inquiry forms
* **Clean Code**: Zero frameworks required. Fully customizable CSS custom properties.

---

## 2. Folder & File Structure

```
ember-olive/
│
├── index.html            # Main landing page
├── about.html            # Story, culinary philosophy & team
├── menu.html             # Categorized menu with search & diet filter
├── events.html           # Private dining suites & packages
├── gallery.html          # Filterable photo gallery with lightbox
├── contact.html          # Contact details, hours, map & FAQs
│
├── assets/
│   ├── css/
│   │   └── style.css     # Design tokens, responsive rules & animations
│   │
│   ├── js/
│   │   └── main.js       # Vanilla JS engine & template configuration
│   │
│   └── images/           # Image assets directory
│
├── README.md             # Commercial documentation
└── LICENSE.txt           # License file
```

---

## 3. How to Change the Logo

In all HTML files, locate the `.brand-logo` block in the `<header>`:

```html
<a href="index.html" class="brand-logo" id="brandLogo">
  <span class="brand-logo-text">YOUR <span>&</span> RESTAURANT</span>
  <span class="brand-subtext">Est. 2024 · Modern Dining</span>
</a>
```

You can also replace it with an image tag:
```html
<a href="index.html" class="brand-logo">
  <img src="assets/images/logo.png" alt="Restaurant Logo" height="40">
</a>
```

---

## 4. How to Change Colors

Open `assets/css/style.css`. All colors are defined in the `:root` pseudo-class:

```css
:root {
  --color-primary: #20211D;        /* Primary dark tone (Obsidian charcoal) */
  --color-secondary: #EFE8DC;      /* Secondary bone/linen */
  --color-accent: #B27645;         /* Terracotta / Ember accent */
  --color-accent-hover: #965F33;   /* Accent hover state */
  --color-text: #292824;           /* Body copy text */
  --color-muted: #756F66;          /* Subtitle and stone text */
  --color-surface: #F9F6F0;        /* Main background */
  --color-surface-subtle: #F4EFE6; /* Muted background */
}
```

Simply replace these hex values with your brand's color palette.

---

## 5. How to Change Fonts

Fonts are imported via Google Fonts in the `<head>` of each HTML file:

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
```

To update font families, modify `--font-heading` and `--font-body` in `assets/css/style.css`:

```css
:root {
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
}
```

---

## 6. How to Replace Images

1. Place your food, interior, and chef photography into `assets/images/`.
2. In the HTML files, replace the `src` attribute of the `<img>` tags or the `data-full-img` attribute for lightbox items:

```html
<!-- Example Menu Item -->
<img src="assets/images/my-dish.jpg" alt="Dish Name" class="menu-item-img">

<!-- Example Gallery Item -->
<div class="gallery-item" data-full-img="assets/images/gallery-high-res.jpg">
  <img src="assets/images/gallery-thumb.jpg" alt="Dining Room" class="gallery-img">
</div>
```

---

## 7. How to Edit Menu Items

Menu cards in `index.html` and `menu.html` use simple data attributes:

```html
<div class="col-md-6 col-lg-4 menu-item-wrapper" data-category="seafood" data-dietary="gluten-free signature">
  <div class="menu-item-card">
    <div class="menu-item-image-wrap">
      <img src="assets/images/prawns.jpg" alt="Dish Name" class="menu-item-img">
      <span class="menu-item-badge badge-signature">Chef Signature</span>
    </div>
    <div class="menu-item-header">
      <h3 class="menu-item-title">Wood-Fired Wild Prawns</h3>
      <span class="menu-item-price">₹620</span>
    </div>
    <p class="menu-item-desc">Garlic butter emulsion, burnt lemon, fresh herbs.</p>
    <div class="dietary-tags">
      <span class="diet-tag">Gluten-Free</span>
    </div>
    <p class="menu-item-ingredients">Key ingredients description here.</p>
  </div>
</div>
```

* `data-category`: matches the filter button `data-filter` (`starters`, `mains`, `seafood`, `vegetarian`, `desserts`, `drinks`).
* `data-dietary`: keywords used by the search & dietary dropdown (`vegetarian`, `gluten-free`, `signature`).

---

## 8. How to Edit Events & Packages

Open `events.html` or `index.html` and locate `.event-card` or `.package-card`. Update the pricing, title, and inclusion list items directly in HTML.

---

## 9. How to Edit Testimonials

In `index.html`, locate `#testimonials`. Duplicate or update any `.testimonial-slide`:

```html
<div class="testimonial-slide">
  <div class="testimonial-card-editorial">
    <div class="testimonial-stars">★★★★★</div>
    <p class="testimonial-quote-text">"Your customer quote goes here."</p>
    <div class="testimonial-author-name">Guest Name</div>
    <div class="testimonial-author-meta">City or Title</div>
  </div>
</div>
```

---

## 10. How to Edit Contact Details

1. Update the HTML contact cards in `contact.html` and `index.html`.
2. Update the centralized configuration in `assets/js/main.js`:

```javascript
const TEMPLATE_CONFIG = {
  brand: {
    name: 'EMBER & OLIVE',
    phone: '+91 98765 43210',
    email: 'hello@emberandolive.example',
    address: '28 Garden Avenue, Chennai, Tamil Nadu',
  },
  hours: {
    weekday: 'Monday – Thursday: 11:00 AM – 10:00 PM',
    weekend: 'Friday – Sunday: 11:00 AM – 11:30 PM',
  }
};
```

---

## 11. How to Edit Social Media Links

Search for `.footer-social-links` or `.team-social-links` in any HTML file and replace the `href` with your real social media profiles.

---

## 12. Customizing Bootstrap

The template uses standard Bootstrap 5.3 utilities and grid (`container-xl`, `row`, `col-*`, `d-flex`, `accordion`, `modal`, `offcanvas`). All custom aesthetic layers sit in `assets/css/style.css` without modifying the core Bootstrap vendor code.

---

## 13. Deploying the Template

This template is standard static HTML5/CSS/JS. It can be hosted on any web server, CDN, or platform:
* **Cloudflare Pages / Vercel / Netlify / GitHub Pages**: Deploy directly by pushing the folder.
* **Apache / Nginx**: Place all files into your `www` or `html` document root.
* **Node / Vite**: Run `npm run build` or `npm run dev`.

---

## License

MIT License. Free to use for commercial and personal restaurant websites. See `LICENSE.txt` for details.
