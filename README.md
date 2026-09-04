# TechnoSprint — Website Templates Marketplace & Showcase Platform

> **A modern, enterprise-grade web template marketplace featuring 220+ production-ready responsive templates across 22 categories, powered by a React 19 / Vite frontend and a high-performance Spring Boot REST API backend.**

---

## 🌟 Platform Highlights

* **220+ Curated Commercial Website Templates** across **22 industry categories**:
  * *E-Commerce, Restaurant & Dining, Hotel & Hospitality, Medical & Healthcare, Construction & Architecture, Education & EdTech, Admin & Analytics Dashboards, Events & Conferences, Portfolio & Resume, Real Estate, Digital Agency, Landing Pages, SaaS, Travel, Health & Wellness, Fitness, Photography, Crypto/Fintech, Law & Legal, Automotive, Non-Profit, Coming Soon.*
* **Interactive Multi-Device Live Preview**:
  * Real-time iframe sandbox with instantaneous device emulation (**Desktop**, **Tablet**, and **Mobile** viewports with orientation toggle).
* **High-Performance Architecture**:
  * **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, Lucide Icons.
  * **Backend**: Spring Boot REST API, Spring Data JPA, Hibernate, MySQL.
  * **Interactive Demos**: Full live previews with direct zip download endpoints.

---

## 📁 Repository Structure

```
Website-Templete-Main/
├── frontend/                     # React / Vite Marketplace Application
│   ├── src/                      # Marketplace UI, catalog, category filter & preview shell
│   ├── public/templates/         # Production build outputs for all 220 live template previews
│   └── package.json              # Frontend dependencies and build scripts
│
├── backend/                      # Spring Boot REST API
│   ├── src/main/java/            # Controllers, Services, Models, Repositories
│   ├── src/main/resources/       # application.properties, database configs
│   └── pom.xml                   # Maven dependencies
│
├── templates/                    # Source code for 220 individual website templates
│   ├── admin/                    # Admin dashboard templates (admin-1 .. admin-10)
│   ├── construction/             # Construction & architecture templates
│   ├── ecommerce/                # E-commerce storefront templates
│   ├── education/                # Education & academy templates
│   ├── events/                   # Event & conference templates
│   ├── hotel/                    # Luxury hotel & resort templates
│   ├── medical/                  # Medical & clinic templates
│   ├── restaurant/               # Artisan restaurant & culinary templates
│   ├── resume/                   # Portfolio & CV templates
│   └── ...                       # Additional categories
│
├── database.sql                  # MySQL database schema and 220 template seeds
├── seed.sql                      # Category and template seed data
├── build.js                      # Automated multi-template compilation pipeline
├── LICENSE                       # Project MIT License (TechnoSprint / VishalavDEV)
├── LICENSE.txt                   # Plaintext MIT License file
└── README.md                     # Platform documentation
```

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** (v18+ or v20+) & **npm**
- **Java JDK** 17+ or 21+
- **Maven** 3.8+
- **MySQL** 8.0+

---

### 2. Frontend Setup

```bash
# Install root dependencies
npm install

# Install and run frontend Vite development server
cd frontend
npm install
npm run dev -- --port 5173 --host 0.0.0.0
```
> The frontend application will be running at [http://localhost:5173](http://localhost:5173).

---

### 3. Backend & Database Setup

1. **Import Database Schema**:
```bash
mysql -u root -p < database.sql
```

2. **Configure Database Credentials**:
Edit `backend/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/website_templates?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=your_mysql_password
```

3. **Start Spring Boot REST API**:
```bash
cd backend
mvn spring-boot:run
```
> The REST API backend will be accessible at [http://localhost:8080](http://localhost:8080).

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/categories` | Retrieve all 22 categories with template counts |
| `GET` | `/api/categories/{id}` | Retrieve specific category details |
| `GET` | `/api/templates` | Retrieve all 220 templates with filtering & pagination |
| `GET` | `/api/templates/{id}` | Retrieve individual template details & metadata |
| `GET` | `/api/templates/featured` | Retrieve top featured and popular templates |
| `GET` | `/api/templates/category/{id}` | Retrieve templates under a specific category |

---

## 📄 Individual Template Licenses

Each template located in `templates/<category>/<template-id>/` contains its own dedicated license and documentation files (e.g. `LICENSE.md`, `README.md`) and in-app legal dialogs without cluttering main visual landing pages.

---

## ⚖️ Platform License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) or [`LICENSE.txt`](./LICENSE.txt) for the full license text.

Copyright © 2026 **TechnoSprint / VishalavDEV (Website Templates Hub)**.
