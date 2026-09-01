# NeXus Digital — Frontend

Premium animated business website built with React.js + Vite + Framer Motion.

## 🚀 Features

- **Fully animated** — Framer Motion page transitions, scroll reveals, hover effects
- **6 pages** — Home, About, Services, Projects, Contact, 404
- **Interactive components** — Service cards, project modals, testimonial carousel
- **Contact form** — Full validation + Spring Boot REST API integration
- **Responsive** — Mobile, tablet, laptop, desktop support
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation, prefers-reduced-motion
- **SEO ready** — Meta tags, Open Graph, Twitter Card, semantic headings

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 8 | Build tool & dev server |
| Framer Motion | Page & scroll animations |
| React Router DOM | Client-side routing |
| Axios | HTTP client for API calls |
| Lucide React | Icon library |
| CSS3 | Styling (no Tailwind) |

## 📁 Project Structure

```
frontend/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── Button/          # Reusable animated button
│   │   ├── Footer/          # Site footer
│   │   ├── Hero/            # Animated hero section
│   │   ├── Navbar/          # Sticky animated navbar
│   │   ├── ProjectCard/     # Portfolio card
│   │   ├── ScrollReveal/    # Scroll animation wrapper
│   │   ├── ServiceCard/     # Service card
│   │   ├── StatsCounter/    # Animated count-up
│   │   └── TestimonialCard/ # Testimonial slide
│   ├── data/
│   │   ├── services.js      # Static services data
│   │   ├── projects.js      # Static project data
│   │   ├── testimonials.js  # Static testimonials
│   │   ├── team.js          # Team & timeline data
│   │   └── stats.js         # Stats, process, values
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── About.jsx        # About us page
│   │   ├── Services.jsx     # Services page
│   │   ├── Projects.jsx     # Portfolio / projects
│   │   ├── Contact.jsx      # Contact form page
│   │   └── NotFound.jsx     # 404 page
│   ├── services/
│   │   └── api.js           # Axios API client
│   ├── App.jsx              # Router + layout
│   ├── main.jsx             # Entry point
│   └── index.css            # Global design system
├── .env                     # Environment variables
├── index.html               # HTML template
├── package.json
└── vite.config.js
```

## ⚙️ Setup & Running

### Prerequisites

- Node.js 18+ and npm

### 1. Install dependencies

```bash
cd frontend
npm install
```

### 2. Configure environment

The `.env` file is already configured:

```
VITE_API_BASE_URL=http://localhost:8080
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at **http://localhost:5173**

### 4. Build for production

```bash
npm run build
```

Production files will be in `dist/`

## 🌍 Environment Variables

| Variable | Default | Description |
|---|---|---|
| `VITE_API_BASE_URL` | `http://localhost:8080` | Spring Boot backend URL |

## 📄 Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, stats, services, projects, testimonials, CTA |
| `/about` | About | Company story, team, timeline, values |
| `/services` | Services | Service cards with detail modals |
| `/projects` | Projects | Portfolio with filter and case study modals |
| `/contact` | Contact | Validated form → Spring Boot API |
| `/*` | 404 | Animated not-found page |

## 🔗 API Integration

The Contact form sends a `POST` request to:

```
POST http://localhost:8080/api/contact
```

See the backend README for the full API specification.
