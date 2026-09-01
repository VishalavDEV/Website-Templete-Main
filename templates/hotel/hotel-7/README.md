# Aurelia Haven — Fictional Luxury Resort React Template

A premium, highly-animated, responsive resort and hotel template built with React, Vite, Tailwind CSS v4, and Framer Motion. 

---

## Technical Stack
* **Framework**: React.js (v19)
* **Build Tool**: Vite (v8)
* **Styling**: Tailwind CSS (v4)
* **Animations**: Framer Motion (v13)
* **Routing**: React Router DOM (v7)
* **Icons**: Lucide React

---

## React Setup & Local Development

### Prerequisites
Make sure you have Node.js (v18+) installed on your machine.

### Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### Local Dev Server
Run the local Vite dev server (defaults to port `3000`):
```bash
npm run dev
```

### Production Build
Compile the application to a production bundle (output will be placed inside `dist/`):
```bash
npm run build
```

### Preview Build Locally
Boot up a local preview web server serving the production `dist/` bundle:
```bash
npm run preview
```

---

## Project Structure
```text
templates/hotel/hotel-5/
├── dist/                   # Production build output
├── public/                 # Static assets (images, logos)
├── src/
│   ├── components/         # Reusable structural elements (Navbar, Footer, Marquee)
│   ├── data/               # Centralized mock data layer (rooms, experiences, dining)
│   ├── pages/              # Routed route templates (Home, Rooms, RoomDetails, Booking)
│   ├── App.jsx             # Main Router layout
│   ├── index.css           # Global stylesheet and Tailwind imports
│   └── main.jsx            # React mounting hook
├── index.html              # HTML shell
├── package.json            # Node configuration
└── vite.config.js          # Vite config
```

---

## Customization Guide

### How to Change Branding
Open [`Navbar.jsx`](src/components/Navbar.jsx), [`Footer.jsx`](src/components/Footer.jsx), and [`Loader.jsx`](src/components/Loader.jsx) to edit the fictional name and logo titles:
```jsx
// Change "AURELIA HAVEN" to your custom resort brand
AURELIA <span style={{ color: '#c5a880', fontWeight: '400' }}>HAVEN</span>
```

### How to Change Images
All accommodation, dining, gallery, and offer images are centralized in the mock data layer under `src/data/`. Simply edit the absolute or relative URLs:
* Rooms: [`src/data/rooms.js`](src/data/rooms.js)
* Dining: [`src/data/dining.js`](src/data/dining.js)
* Offers: [`src/data/offers.js`](src/data/offers.js)
* Gallery: [`src/data/gallery.js`](src/data/gallery.js)

### How to Customize Colors
We use Tailwind CSS v4 custom variables defined inside [`src/index.css`](src/index.css). Update these variables to customize the aesthetic:
```css
@theme {
  --color-gold: #c5a880;        /* Gold highlight accents */
  --color-gold-hover: #b5956a;  
  --color-cream: #faf8f5;       /* Backing color (ivory/beige) */
  --color-charcoal: #1e1e1e;    
  --color-forest: #2b3a2f;      
}
```

### How to Customize Animations
Framer Motion page transitions and key reveals are controlled in each page (e.g. `Home.jsx`, `Rooms.jsx`, `Booking.jsx`) using standard variants:
```javascript
const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: -15 }
};
```
Modify `duration`, `delay`, or the coordinates (like `y` and `scale`) to adjust transition kinetics.
