# EduLearn — Premium EdTech Platform

A modern, fully animated, full-stack Education platform built with **React + Vite** (frontend) and **Java Spring Boot** (backend).

---

## 🚀 Features

- ✅ 9 fully animated pages + 404 / Privacy Policy / Terms
- ✅ Framer Motion page transitions, scroll animations, hover effects
- ✅ GSAP hero floating icons animation
- ✅ Animated stat counters (count upward on scroll)
- ✅ Course catalog with live search + multi-filter + sort
- ✅ Course Details with expandable curriculum accordion
- ✅ Enrollment confirmation modal
- ✅ Instructor profiles with social links
- ✅ Testimonial carousel
- ✅ Learning Resources library with tab filter
- ✅ Certificate mockup section
- ✅ Animated FAQ accordion
- ✅ Contact form with client validation → POST /api/contact
- ✅ Spring Boot backend (no database — logs to console)
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Accessible (ARIA, semantic HTML, focus styles)
- ✅ SEO-optimized (meta tags, Open Graph)
- ✅ Reduced-motion support

---

## 🛠 Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Animations | Framer Motion + GSAP |
| Icons | Lucide React |
| Routing | React Router DOM v6 |
| HTTP Client | Axios |
| Styling | Vanilla CSS3 (custom design system) |
| Backend | Java 17 + Spring Boot 3.2 |
| Build Tool | Maven |
| Fonts | Inter + Outfit (Google Fonts) |

---

## 📁 Project Structure

```
education-platform/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Route pages
│   │   ├── data/           # Static mock data
│   │   ├── services/       # Axios API service
│   │   ├── App.jsx         # Router + layout
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global design system
│   ├── index.html
│   ├── .env
│   └── package.json
│
└── backend/
    ├── src/main/java/com/example/education/
    │   ├── controller/     # REST controllers
    │   ├── service/        # Business logic
    │   ├── model/          # Request models
    │   ├── response/       # Response wrappers
    │   └── EducationApplication.java
    ├── src/main/resources/application.properties
    └── pom.xml
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js 18+
- Java 17+
- Maven 3.8+

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Opens at: **http://localhost:5173**

---

### Backend

```bash
cd backend
mvn spring-boot:run
```

Starts at: **http://localhost:8080**

---

## 🌐 Environment Variables

Create `frontend/.env`:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

---

## 🔌 API Endpoints

### POST /api/contact

Submit a contact form.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "subject": "Course Enquiry",
  "message": "I would like to know more about the Web Development course."
}
```

**Response (success):**
```json
{
  "success": true,
  "message": "Your message has been submitted successfully. We will get back to you soon!"
}
```

**Response (validation error):**
```json
{
  "name": "Name must be at least 2 characters",
  "email": "Please provide a valid email address"
}
```

### GET /api/health

Health check endpoint.

```json
{ "success": true, "message": "Education Platform API is running" }
```

---

## 🎨 Animation Libraries

| Library | Usage |
|---|---|
| **Framer Motion** | Page transitions, scroll reveals, hover effects, modals, accordions |
| **GSAP** | Hero floating icons animation loop |

---

## 📱 Pages

| Route | Page |
|---|---|
| `/` | Home — hero, stats, features, courses, process, testimonials, certificate, CTA |
| `/about` | About — mission, values, timeline |
| `/courses` | Course catalog with filters |
| `/courses/:id` | Course details with curriculum |
| `/instructors` | Instructor profiles |
| `/resources` | Learning resources library |
| `/testimonials` | Student testimonials carousel |
| `/faq` | FAQ accordion |
| `/contact` | Contact form |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `*` | 404 Not Found |

---

## 🔮 Future Improvements

- User authentication (JWT)
- Persistent database (PostgreSQL)
- Video player integration
- Real-time progress tracking
- Payment integration (Stripe)
- Email notifications (Spring Mail)
- Dark mode toggle
- PWA support
