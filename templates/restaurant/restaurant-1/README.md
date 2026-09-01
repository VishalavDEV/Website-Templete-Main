# EMBER HOUSE — Premium Restaurant Website Template

> **Tagline:** "Gather. Taste. Stay Awhile."  
> **Category:** Fine Dining / Artisanal Wood-Fired Hearth & Kitchen  
> **Tech Stack:** HTML5, CSS3, Bootstrap 5.3+, Vanilla JavaScript (ES6+), Bootstrap Icons, Google Fonts (Cormorant Garamond & Manrope).

---

## 1. Overview & Architecture

**EMBER HOUSE** is an independently designed, luxury editorial restaurant website template engineered for fine dining, hearth bistros, steak houses, wine bars, and chef-driven dining rooms.

### Key Highlights
- **100% Original Design & Code:** Built with zero copied code or assets.
- **Fluid Editorial Typography:** Cormorant Garamond headings paired with modern, high-legibility Manrope body typography.
- **Dynamic Vanilla JavaScript Architecture:** Instant menu category filtering, asynchronous lightbox modal, editorial testimonial carousel, live stats counters, and full client-validated table booking.
- **Zero Heavy JS Dependencies:** Runs on pure Vanilla JS and Bootstrap 5.3 CDN.
- **Fully Responsive:** Tested across mobile (320px–425px), tablet (768px–992px), laptop (1200px), and ultrawide (1400px–1920px).

---

## 2. Folder Structure

```text
ember-house/
│
├── index.html              # Primary Luxury Homepage Showcase
├── about.html              # Dedicated Heritage & Craft Story Page
├── menu.html               # Full Interactive Seasonal Menu Page
├── chefs.html              # Chef Leadership & Brigade Profiles
├── events.html             # Private Dining & Experiences
├── gallery.html            # High-Resolution Visual Archive with Lightbox
├── blog.html               # The Hearth Journal & Essays
├── contact.html            # Reservations, Concierge & FAQ
│
├── assets/
│   ├── css/
│   │   └── style.css       # Clean Theme Variables, Typography & Components
│   └── js/
│       └── main.js         # Centralized Config & Vanilla JS Modules
│
├── README.md               # Customization Guide & Documentation
└── LICENSE.txt             # Permissive Commercial License
```

---

## 3. Quick Start & Customization Guide

### A. Customizing the Brand Name & Logo
1. Open `index.html` (and each subpage).
2. Locate the `.brand-logo` block:
   ```html
   <a href="index.html" class="brand-logo text-decoration-none">
     <span class="brand-logo-text">EMBER HOUSE</span>
     <span class="brand-logo-tagline">Gather. Taste. Stay Awhile.</span>
   </a>
   ```
3. Update with your custom restaurant name and slogan.

### B. Customizing Colors & Theme Variables
All color tokens are centralized in `/assets/css/style.css` under `:root`:
```css
:root {
  --color-primary: #171614;       /* Main dark background / charcoal */
  --color-cream: #F2ECE1;         /* Warm editorial parchment */
  --color-accent: #B47B46;        /* Hearth amber / copper accent */
  --color-text: #2C2925;          /* Body copy dark slate */
  --color-muted: #777067;         /* Warm secondary neutral */
  --color-white: #FFFFFF;
}
```

### C. Customizing Menu Items
Menu items are defined in `index.html` and `menu.html`. Each item has a data-category tag that syncs with the filter buttons:
```html
<div class="col-lg-6 menu-filterable-item" data-category="starters">
  <div class="menu-item-row">
    <img src="your-image.jpg" alt="Dish Name" class="menu-thumb">
    <div class="flex-grow-1">
      <div class="menu-header-line">
        <h3 class="menu-dish-title">CHARRED GARLIC PRAWNS</h3>
        <span class="menu-price">₹680</span>
      </div>
      <p class="menu-desc">Lemon wood-smoked butter, wild parsley oil, Himalayan pink salt</p>
      <span class="menu-badge">Hearth Roasted</span>
    </div>
  </div>
</div>
```

### D. Customizing Testimonials & Gallery Data
Open `/assets/js/main.js`. You will find the centralized `EmberConfig` object:
```javascript
const EmberConfig = {
  brand: {
    name: 'EMBER HOUSE',
    phone: '+91 98765 43210',
    email: 'hello@emberhouse.example',
    address: '27 Garden Street, Chennai, Tamil Nadu'
  },
  testimonials: [
    {
      quote: "Your custom testimonial quote...",
      author: "Guest Name",
      title: "Food Critic",
      location: "City",
      rating: 5
    }
  ]
};
```

### E. Connecting the Reservation & Contact Forms
Both forms have client-side validation built-in. To connect to your backend API, email service (e.g., Formspree, EmailJS, Node/Express endpoint), replace the simulated `setTimeout` submission block in `initReservationHandler()` and `initContactForm()` inside `/assets/js/main.js` with your `fetch('/api/reservations', { method: 'POST', body: JSON.stringify(reservationData) })`.

---

## 4. Typography System
- **Headings:** `Cormorant Garamond` (weights: 400, 500, 600, 700)
- **Body Text:** `Manrope` (weights: 300, 400, 500, 600, 700)
- **Hero Scale:** `clamp(3rem, 7vw, 7rem)`
- **Section Headings:** `clamp(2.2rem, 5vw, 4.5rem)`

---

## 5. Browser & Device Compatibility
- Chrome (Latest)
- Safari (iOS & macOS)
- Firefox (Latest)
- Edge (Latest)
- Responsive from 320px width up to 4K displays

---

## 6. License
Distributed under the MIT / Commercial Permissive License. See `LICENSE.txt` for details.
