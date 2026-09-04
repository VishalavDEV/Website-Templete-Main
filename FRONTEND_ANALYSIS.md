# Frontend Analysis & Architecture Specification

This document provides a comprehensive analysis of the existing **React + Vite Website Template Marketplace** frontend. The frontend represents the absolute source of truth for the recreated Spring Boot REST API and MySQL database.

---

## 1. Frontend Pages (`frontend/src/pages/`)

| Page Component | Path / Route | Description |
| :--- | :--- | :--- |
| `Home.jsx` | `/` | Main marketplace landing page featuring hero search, categories pill filters, live template showcase, feature highlights, and popular templates. |
| `Templates.jsx` | `/templates`, `/templates/:categorySlug` | Catalog browsing page with search, multi-category filters, free/premium type toggles, sorting, and responsive template cards. |
| `TemplateDetails.jsx` | `/templates/:slug` | Detailed view for an individual template, preview images, tabbed specs (features, licensing, PHP form integration), live demo link, and add-to-cart / free download action. |
| `Dashboard.jsx` | `/dashboard` | Authenticated user hub with tab navigation: Projects (`projects`), Orders (`orders`), Downloaded Licenses (`downloads`), Active Keys (`licenses`), and Download History (`history`). Includes license validator and simulated checkout modal. |
| `Builder.jsx` | `/builder` | Full-screen interactive drag-and-drop template customizer and layout builder connected to `builderStore.js` and `/api/projects`. |
| `Admin.jsx` | `/admin` | Admin dashboard requiring `ROLE_ADMIN`. Includes metrics cards, database status, template management table (Create, Edit, Delete modals), category filters, and order audit viewer. |
| `Auth.jsx` | `/auth` | Unified Login and Registration page with tabbed toggle, input validation, and redirect handling. |
| `PhotographyCatalog.jsx` | `/photography-catalog` | Specialized photography portfolio showcase highlighting dedicated gallery templates. |
| **Interactive Template Previews** | `/hotel-template`, `/templates/photography/*`, `/templates/portfolio/*` | Dedicated in-app React previews (`HotelTemplate`, `SnapfolioTemplate`, `PhotoTemplate`, `WeddingTemplate`, `CinematicWedding`, `FineArtTemplate`, `KairoPhotography`, `ISteadyGimbal`, `ArchitecturePortfolio`, `PersonalPortfolio`, `CreativePortfolio`, `MinimalPortfolio`, `MultipagePortfolio`, `AgencyPortfolio`, `GradientPortfolio`, `EditorialPortfolio`, `PhotographyPortfolio`, `CreativeMultipagePortfolio`). |

---

## 2. React Routes (`frontend/src/App.jsx`)

### Standard Marketplace Routes
- `/` &rarr; `Home`
- `/templates` &rarr; `Templates`
- `/templates/:categorySlug` &rarr; `Templates` (Filtered by category)
- `/templates/:slug` &rarr; `TemplateDetails`
- `/photography-catalog` &rarr; `PhotographyCatalog`
- `/dashboard` &rarr; `Dashboard`
- `/builder` &rarr; `Builder`
- `/admin` &rarr; `Admin`
- `/auth` &rarr; `Auth`

### Full-Screen Interactive Previews (Wrapped in `DevicePreviewWrapper`)
- `/hotel-template` &rarr; `HotelTemplate`
- `/templates/photography/photography-1` &rarr; `SnapfolioTemplate`
- `/templates/photography/photography-2` &rarr; `PhotoTemplate`
- `/templates/photography/photography-3` &rarr; `WeddingTemplate`
- `/templates/photography/photography-4` &rarr; `CinematicWedding`
- `/templates/photography/photography-5` &rarr; `FineArtTemplate`
- `/templates/photography/photography-6` &rarr; `KairoPhotography`
- `/templates/photography/photography-7` &rarr; `ISteadyGimbal`
- `/templates/portfolio/portfolio-1` &rarr; `ArchitecturePortfolio`
- `/templates/portfolio/portfolio-2` &rarr; `PersonalPortfolio`
- `/templates/portfolio/portfolio-3` &rarr; `CreativePortfolio`
- `/templates/portfolio/portfolio-4` &rarr; `MinimalPortfolio`
- `/templates/portfolio/portfolio-5/*` &rarr; `MultipagePortfolio`
- `/templates/portfolio/portfolio-6/*` &rarr; `AgencyPortfolio`
- `/templates/portfolio/portfolio-7` &rarr; `GradientPortfolio`
- `/templates/portfolio/portfolio-8` &rarr; `EditorialPortfolio`
- `/templates/portfolio/portfolio-9/*` &rarr; `PhotographyPortfolio`
- `/templates/portfolio/portfolio-10/*` &rarr; `CreativeMultipagePortfolio`
- `/templates/*` &rarr; `RedirectToStaticTemplate` (redirects to static HTML `/templates/{category}/{folder}/index.html`)

---

## 3. Frontend Components (`frontend/src/components/`)

- `Header`: Main sticky navigation bar with search submit, category hover MegaMenu, user account dropdown, cart drawer count, and responsive navigation.
- `MegaMenu`: Multi-column category dropdown displaying all 22 categories with icons and descriptions.
- `DevicePreviewWrapper`: Desktop, tablet (portrait/landscape), and mobile preview switcher frame with responsive iframe scaling.
- `Footer`: Global marketplace footer with categorized links, platform links, and copyright notices.
- Sub-components:
  - `builder/`: Canvas, Sidebar, ElementPalette, PropertyInspector, CodeExporter
  - `cinematic/`, `fineart/`, `isteady/`, `kairo/`, `portfolio/`: In-app template modules

---

## 4. API Service Analysis (`frontend/src/services/api.js`)

The frontend communicates with `http://localhost:8080/api` via standard `fetch` with `getHeaders()`:
- `Content-Type: application/json`
- `Authorization: Bearer <token>` (retrieved from `localStorage.getItem('ts_token')`)

### Complete API Endpoint Specifications

#### 1. Authentication
- `POST /api/auth/login`
  - Request: `{ email, password }`
  - Response: `{ token, id, name, email, role }`
- `POST /api/auth/register`
  - Request: `{ name, email, password }`
  - Response: `{ message: "User registered successfully!" }`
- `GET /api/auth/me`
  - Response: `{ id, name, email, role }`

#### 2. Categories
- `GET /api/categories`
  - Response: Array of `{ id, name, slug, icon, description }`
- `GET /api/categories/{id}`
  - Response: `{ id, name, slug, icon, description }`
- `GET /api/categories/slug/{slug}`
  - Response: `{ id, name, slug, icon, description }`

#### 3. Templates
- `GET /api/templates?category=&type=&search=&sort=&page=&size=`
  - Query params: `category` (slug or 'all'), `type` ('FREE' | 'PREMIUM' | 'all'), `search` (string), `sort` ('popular' | 'newest' | 'name-asc' | 'name-desc'), `page` (int), `size` (int)
  - Response: Array of Template objects (or paginated list)
- `GET /api/templates/{id}`
  - Response: Single Template object
- `GET /api/templates/slug/{slug}`
  - Response: Single Template object
- `GET /api/templates/category/{categorySlug}`
  - Response: Array of Template objects
- `GET /api/templates/featured`
  - Response: Array of featured Template objects
- `GET /api/templates/popular`
  - Response: Array of top downloaded Template objects
- `POST /api/templates` (Admin only)
  - Request: Template DTO `{ name, slug, description, categoryId, price, templateType, bootstrapVersion, demoUrl, downloadFile, previewImage, version, status, pagesCount, tags }`
- `PUT /api/templates/{id}` (Admin only)
  - Request: Template DTO
- `DELETE /api/templates/{id}` (Admin only)
  - Response: `{ success: true }`

#### 4. Downloads & History
- `POST /api/templates/{templateId}/download-token`
  - Response: `{ token, downloadUrl: "/templates/download/{token}" }`
- `GET /api/templates/downloads-history`
  - Response: Array of `{ id, template: { id, name, slug, previewImage }, downloadedAt, token }`

#### 5. Orders & Licenses
- `POST /api/orders`
  - Request: `{ templateIds: [1, 2, ...] }`
  - Response: `{ id, status: "PENDING", totalAmount, templateIds, items: [...] }`
- `POST /api/orders/{orderId}/confirm`
  - Response: `{ id, status: "PAID", message: "Order paid and licenses generated" }`
- `GET /api/orders`
  - Response: Array of User's Orders
- `GET /api/orders/all` (Admin only)
  - Response: Array of all platform orders
- `GET /api/licenses`
  - Response: Array of `{ id, licenseKey, template: { id, name, slug, previewImage, version }, status, createdAt, domainLimit }`
- `GET /api/licenses/validate/{key}`
  - Response: `{ valid: true, licenseKey, templateName, licenseType, issuedAt }`

#### 6. Builder Projects
- `GET /api/projects`
  - Response: Array of `{ id, projectName, templateId, projectData, updatedAt, createdAt }`
- `POST /api/projects`
  - Request: `{ projectName, templateId, projectData }`
  - Response: Project object with `id`
- `PUT /api/projects/{id}`
  - Request: `{ projectName, projectData }`
  - Response: Updated Project object
- `DELETE /api/projects/{id}`
  - Response: `{ success: true }`
- `POST /api/projects/{id}/export`
  - Response: Zip blob

#### 7. Engagement & Communications
- `POST /api/templates/{templateId}/reviews`
  - Request: `{ rating, review }`
  - Response: Review object
- `GET /api/templates/{templateId}/reviews`
  - Response: Array of Review objects
- `POST /api/bookmarks/{templateId}`
  - Response: `{ bookmarked: true }`
- `DELETE /api/bookmarks/{templateId}`
  - Response: `{ bookmarked: false }`
- `GET /api/bookmarks`
  - Response: Array of bookmarked Template objects
- `POST /api/contact`
  - Request: `{ name, email, subject, message }`
  - Response: `{ success: true, message: "Message sent successfully" }`
- `POST /api/newsletter/subscribe`
  - Request: `{ email }`
  - Response: `{ success: true, message: "Subscribed to newsletter" }`

---

## 5. Category Structure (All 22 Categories)

| ID | Name | Slug | Icon | Key Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Admin | `admin` | 📊 | Enterprise dashboards, analytics suites, command centers |
| 2 | Medical | `medical` | 🩺 | Hospitals, clinical care, health platforms, doctors |
| 3 | Blog Magazine | `blog-magazine` | 📰 | Tech blogs, editorial magazines, news portals |
| 4 | Coming Soon | `coming-soon` | ⏳ | Countdown timers, teaser launches, lead capture |
| 5 | Travels | `travels` | ✈️ | Tour operators, travel booking, holiday resorts |
| 6 | Hotel | `hotel` | 🏨 | Luxury resorts, hotel booking, hospitality suites |
| 7 | Events | `events` | 🎟️ | Tech summits, music festivals, conferences, ticketing |
| 8 | Photography | `photography` | 📷 | Minimalist studios, dark portfolios, weddings, fine art |
| 9 | Construction | `construction` | 🏗️ | Architectural engineering, heavy construction, contractors |
| 10 | Education | `education` | 🎓 | LMS platforms, online academies, university portals |
| 11 | Restaurant | `restaurant` | 🍽️ | Fine dining, bistros, culinary menus, food delivery |
| 12 | Ecommerce | `ecommerce` | 🛍️ | Digital storefronts, fashion shops, electronics retail |
| 13 | Business | `business` | 💼 | Corporate advisory, consulting firms, finance agencies |
| 14 | Onepage | `onepage` | 📄 | High-converting single page portfolios & SaaS landers |
| 15 | Landing Page | `landing-page` | 🚀 | App launch pages, modern startup product showcases |
| 16 | Corporate | `corporate` | 🏢 | Multi-national enterprises, B2B industry organizations |
| 17 | Agency | `agency` | 💡 | Creative digital agencies, branding studios, marketing |
| 18 | Portfolio | `portfolio` | 🎨 | Personal resumes, design showcases, developer portfolios |
| 19 | Real Estate | `real-estate` | 🏠 | Property listings, luxury villas, architectural estates |
| 20 | Resume | `resume` | 📑 | Interactive CVs, bio cards, personal portfolios |
| 21 | Transportation | `transportation` | 🚚 | Logistics networks, freight fleets, shipping hubs |
| 22 | Personal | `personal` | 👤 | Creator portfolios, author bios, lifestyle influencers |

---

## 6. Template Data Contract & Field Mapping

```json
{
  "id": 126,
  "name": "Aurelia Haven — Luxury Resort & Sanctuary",
  "slug": "aurelia-haven",
  "description": "A complete premium luxury resort and hotel sanctuary template...",
  "detailedDescription": "Full markdown specification...",
  "previewImage": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  "demoUrl": "/templates/hotel/hotel-7/index.html",
  "downloadFile": "/downloads/hotel-7.zip",
  "templateType": "FREE",
  "price": 0.0,
  "category": {
    "id": 6,
    "name": "Hotel",
    "slug": "hotel"
  },
  "pagesCount": 11,
  "downloadsCount": 1400,
  "bootstrapVersion": "React / Tailwind CSS / Motion",
  "version": "1.0.0",
  "status": "PUBLISHED",
  "rating": 4.9,
  "tags": ["Resort", "Booking", "Parallax", "Luxury"]
}
```

---

## 7. Authentication & Security Requirements

- **JWT Bearer Token**: Standard JWT issued on login/registration, valid for 7 days.
- **Storage**: Client stores token in `localStorage.getItem('ts_token')` and serialized user object in `localStorage.getItem('ts_user')`.
- **Role Hierarchy**:
  - `ROLE_USER`: Standard customer access (download free templates, purchase, manage licenses, build projects).
  - `ROLE_ADMIN`: Administrative access (`/admin`, manage template catalog, view all platform orders and metrics).
- **Password Security**: Passwords hashed with BCrypt (strength 10).
- **CORS Configuration**: Allowed origins `http://localhost:5173`, `http://127.0.0.1:5173`, `http://localhost:3000` with full methods (`GET, POST, PUT, DELETE, OPTIONS, HEAD`).

---

## 8. Summary of Rebuilt Architecture

```
Frontend (React + Vite, Port 5173)
       │
       ▼ [REST API over HTTP, Authorization: Bearer <JWT>]
Spring Boot 3.x Backend (Port 8080)
 ├── Security: Spring Security 6 + JJWT + BCrypt
 ├── ORM: Spring Data JPA / Hibernate
 └── Controllers: Auth, Categories, Templates, Orders, Licenses, Downloads, Projects, Admin
       │
       ▼ [JDBC Connection over TCP 3306]
MySQL Database: website_template_db
 ├── 22 Categories
 └── 220+ Verified Templates
```
