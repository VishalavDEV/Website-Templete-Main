# VÉRA — Fashion E-Commerce Template

**VÉRA** is a premium, original commercial fashion e-commerce web application template built for marketplace distribution, portfolio showcase, SaaS starter kits, client projects, and commercial store deployments.

Designed from first principles with a quiet luxury aesthetic, modern typography, dynamic image hotspot lookbooks, multi-currency support, full interactive cart & multi-step checkout workflows, and robust filtering systems.

---

## Key Features

- **Original Fashion Visual System**: Quiet luxury aesthetic with Playfair Display and Plus Jakarta Sans typography.
- **Product Catalog & Filtering**: Real-time filtering by Category, Price Range, Size, Swatch Colors, and Collection Tags.
- **Layout Switcher**: Dynamic grid switching (2, 3, or 4 columns).
- **Interactive Lookbook**: Editorial section with shoppable hotspot pins linked directly to product cards.
- **Product Detail View**: Multi-angle image switcher, size guide overlay, tabbed specifications, customer reviews breakdown, and "Complete the Look" recommendations.
- **Quick View Modal**: Instant purchasing modal without navigating away from the catalog.
- **Flyout Cart Drawer**: Free shipping threshold progress bar, item quantity controls, promo code engine (`VERA10`), and price summary.
- **Multi-Step Checkout Flow**: 4-step wizard (Address -> Delivery -> Payment -> Digital Order Receipt with print support).
- **User Account & Order Tracking**: Order status visual timeline (Placed -> Processing -> In Transit -> Delivered) and profile management.
- **Wishlist Engine**: Interactive heart toggle with dedicated slide-over panel.
- **Multi-Currency Support**: Instant currency conversion across USD ($), EUR (€), GBP (£), and JPY (¥).
- **Toast Notifications**: Interactive floating user feedback toasts.
- **Responsive & Accessible**: Optimized for desktop, tablet, and mobile displays.

---

## Installation & Setup

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build production bundle
npm run build
```

---

## Customization Guide

### 1. Brand Name & Logo
To update the brand name or logo mark, modify the header component in `src/components/Header.tsx` and the page title in `index.html`.

### 2. Colors & Typography
Design tokens are centralized in `src/index.css`:
```css
:root {
  --font-serif: 'Playfair Display', serif;
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --accent-gold: #C5A880;
  --bg-dark: #0B0C10;
}
```

### 3. Products & Image System
All product data is centralized in `src/data/products.ts`. Replace demo photos by adding images to `public/assets/images/` and updating the `mainImage` / `gallery` paths.

### 4. Interactive Lookbook Hotspots
Modify hotspot locations and product bindings in `src/data/editorial.ts`.

---

## Commercial Usage Notice

> **This template is designed using original UI/code and commercially compatible assets. Review all third-party licenses before redistribution.**

See `LICENSES.md` and `ASSETS.md` for full dependency and asset provenance details.
