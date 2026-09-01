# NEXORA — Premium Enterprise Corporate Website Template

> **Technology. Strategy. Impact.**  
> A multi-page, production-quality corporate website template built with React, Vite, React Router, and Lucide React. Designed for enterprise consulting firms, digital agencies, and AI/cloud technology providers.

---

## 🌟 Key Highlights & Design Aesthetics

- **Executive Enterprise Aesthetic:** Deep navy (`#070B14`), slate, soft gray, and electric blue glow accents (`#0284C7` / `#38BDF8`).
- **Complete Multi-Page Architecture:** 13+ production-ready pages with full dynamic routing:
  - `Home`: Editorial Hero with abstract neural/cloud matrix, Logo Cloud, Split Intro, Asymmetric Services Bento Grid, Solutions, Industries, Animated Stats, Alternating Case Studies, Testimonials Carousel, CTA, and Enterprise Footer.
  - `About`: Origin Story, Mission & Vision, 4 Core Principles, Milestones Timeline, Executive Leadership, and Global Hubs.
  - `Services`: Full practice matrix overview with capability checklists, stats, and tech stacks.
  - `Service Details (/services/:slug)`: Dynamic routing for all 6 practices with capabilities, architecture stack, 4-stage process, related case studies, and interactive FAQ accordion.
  - `Solutions`: 5 enterprise solution blueprints with problem vs. solution comparisons, architecture specifications, and measurable metrics.
  - `Industries`: 6 interactive vertical showcases (Fintech, Healthcare, Retail, Manufacturing 4.0, Logistics, SaaS).
  - `Work / Case Studies (/work)`: Filterable portfolio with live category pills (All, AI, Cloud, Software, Data, Digital).
  - `Case Study Details (/work/:slug)`: Dynamic deep dive with client metrics, challenge narrative, architecture roadmap, UI gallery, and client endorsement quote.
  - `Team`: Multidisciplinary leadership and fellow directory with department filters.
  - `Careers`: Culture narrative, perks, hiring process, filterable job listings, and interactive application modal.
  - `Insights / Blog (/blog)`: Editorial publication with featured spotlight, real-time keyword search, category filters, and newsletter integration.
  - `Blog Details (/blog/:slug)`: Sticky table of contents, reading time, share tool, and related reading.
  - `Contact`: Enterprise project brief form with service selector, budget ranges, NDA reassurance, and global office cards.
- **Centralized Data Architecture:** All content lives inside `src/data/` (`services.js`, `solutions.js`, `industries.js`, `caseStudies.js`, `team.js`, `testimonials.js`, `blog.js`, `careers.js`, `company.js`).
- **Fully Responsive & Accessible:** Optimized for desktop, tablet, and mobile with a smooth sliding mobile drawer menu and auto-scroll reset.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Directory Structure

```text
CorporateTemplate/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Footer.jsx / Footer.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── Stats.jsx / Stats.css
│   │   ├── Services.jsx / Services.css
│   │   ├── Testimonials.jsx / Testimonials.css
│   │   ├── Team.jsx / Team.css
│   │   ├── CaseStudies.jsx / CaseStudies.css
│   │   ├── CTA.jsx / CTA.css
│   │   ├── Newsletter.jsx / Newsletter.css
│   │   ├── LogoCloud.jsx / LogoCloud.css
│   │   ├── PageHeader.jsx / PageHeader.css
│   │   ├── ScrollToTop.jsx
│   │   └── SocialIcons.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx / Home.css
│   │   ├── About.jsx / About.css
│   │   ├── Services.jsx / ServicesPage.css
│   │   ├── ServiceDetails.jsx / ServiceDetails.css
│   │   ├── Solutions.jsx / Solutions.css
│   │   ├── Industries.jsx / Industries.css
│   │   ├── CaseStudies.jsx / CaseStudiesPage.css
│   │   ├── CaseStudyDetails.jsx / CaseStudyDetails.css
│   │   ├── Team.jsx
│   │   ├── Careers.jsx / Careers.css
│   │   ├── Blog.jsx / BlogPage.css
│   │   ├── BlogDetails.jsx / BlogDetails.css
│   │   ├── Contact.jsx / Contact.css
│   │   └── NotFound.jsx
│   │
│   ├── data/
│   │   ├── services.js
│   │   ├── solutions.js
│   │   ├── industries.js
│   │   ├── caseStudies.js
│   │   ├── team.js
│   │   ├── testimonials.js
│   │   ├── blog.js
│   │   ├── careers.js
│   │   └── company.js
│   │
│   ├── styles/
│   │   ├── theme.css
│   │   └── globals.css
│   │
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

---

## 🎨 Customizing Theme & Branding

- **Colors & Typography:** Modify variables in `src/styles/theme.css` (`--bg-primary`, `--color-brand`, `--color-brand-light`, etc.).
- **Company Name & Metadata:** Update `src/data/company.js` and `index.html`.
- **Replacing Content:** Edit the files in `src/data/` to automatically update all pages and dynamic detail views.
