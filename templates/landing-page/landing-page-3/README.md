# ExquDrive — Luxury Automotive Experience

A pixel-close, high-performance clone of the **ExquDrive** luxury car rental platform, engineered with React 18, Vite, Tailwind CSS, Framer Motion, GSAP, and Java Spring Boot REST API.

---

## 🌟 Key Highlights & Engineering Features

1. **Top Stat Strip**:
   - `200+ Vehicle Premium`, `4K+ Happy Client`, `87 Awwards Winning`, `30+ Office In The World`.
   - Driven by live Spring Boot REST API (`GET /api/stats`).
   - Smooth viewport-triggered count-up animations starting from 0.

2. **Cinematic Hero Presentation**:
   - **Staggered Word Reveal**: Headline `"Feel The Luxury Cars We Have."` animates smoothly word-by-word with vertical slide + blur-to-sharp transition.
   - **Side Copy & Hierarchy**: `"Unleash Your Luxury Experience"` with delayed smooth entrance.
   - **Automotive Drive-In Entry**: The flagship coupe slides up into the frame with realistic automotive acceleration/deceleration easing.
   - **Headlight "Wake-Up" Sequence**: Halo/angel-eye projector LEDs blink twice with realistic glow blooms as the vehicle powers on, followed by continuous subtle illumination.
   - **Continuous Floating Backdrop**: Faint oversized ambient typography (`ELEGANT • LUXURY • PRESTIGE`) continuously drifts horizontally across the background.
   - **Interactive Mouse Scroll Indicator**: Looping bouncing mouse pill inviting user exploration.

3. **Secondary Sections**:
   - **"Pinnacle of Driving Luxury."**: Mountain cliff highway parallax showcase.
   - **Step Cards**: Frictionless 4-step protocol highlighting Step 02 `"CHECK RENTAL REQUIREMENTS"` in signature glowing warm orange (`#F2994A`).
   - **Live Fleet Explorer**: Live catalog driven by Spring Boot (`GET /api/vehicles`), with real-time specs (Horsepower, 0-60 MPH, Top Speed, Daily Rate) and category filters.
   - **Interactive Concierge Reservation Modal**: Booking calculations, airport tarmac delivery add-ons, and instant celebratory feedback.

---

## 🚀 Quickstart Guide

### Prerequisites
- **Node.js**: v18+ (tested on v24)
- **Java**: JDK 17+ or 21 (tested on JDK 21)
- **Maven**: 3.8+ (or bundled wrapper)

---

### 1. Start the Java Spring Boot Backend (Port 8080)

```bash
cd backend
mvn spring-boot:run
```

The REST API will be available at:
- `http://localhost:8080/api/stats`
- `http://localhost:8080/api/vehicles`

---

### 2. Start the React + Vite Frontend (Port 5173)

```bash
cd frontend
npm install
npm run dev
```

Visit **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 📁 Repository Structure

```
lnding page3/
├── backend/                      # Java Spring Boot 3.3.3 REST API
│   ├── src/main/java/com/exqudrive/
│   │   ├── ExquDriveApplication.java
│   │   ├── config/CorsConfig.java
│   │   ├── controller/StatsController.java
│   │   ├── controller/VehicleController.java
│   │   └── model/
│   │       ├── StatsResponse.java
│   │       └── Vehicle.java
│   └── pom.xml
├── frontend/                     # React 18 + Vite + Tailwind CSS
│   ├── public/images/            # High-definition automotive assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── TopStats.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── PinnacleSection.jsx
│   │   │   ├── StepCards.jsx
│   │   │   ├── FleetShowcase.jsx
│   │   │   ├── BookingModal.jsx
│   │   │   └── Footer.jsx
│   │   ├── services/api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```
