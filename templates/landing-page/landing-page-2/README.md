# Busy Status Bar — Physical Desk LED Productivity Multi-Tool

A pixel-close, elevated clone of the **Busy Status Bar** product landing page with Apple/Nothing/Teenage Engineering-tier aesthetics, 3D interactive hardware LED matrix simulation, real-time WebSocket state synchronization, and a Java Spring Boot REST backend.

---

## Live Services & Ports
- **Frontend Web App**: [http://localhost:3030](http://localhost:3030)
- **Backend REST & WebSocket API**: [http://localhost:8080](http://localhost:8080)
- **WebSocket Endpoint**: `ws://localhost:8080/ws-busy`

---

## Key Features

### 1. 3D Interactive LED Hardware Matrix Device (Hero)
- **Real 3D Perspective & Gyro Tilt**: Smooth spring-damped parallax tracking of mouse position.
- **Physical LED Pixel Simulation**: Discrete subpixel dot matrix with glowing retro bloom and customizable color palette.
- **Touch-Activation Pulse**: Tap/click the device to trigger an authentic 3x LED blink sequence with synchronized haptic audio synthesis and radiant screen glow.
- **Independent Desk Props Parallax**: Mechanical keyboard (bottom-left) and smartwatch + braided orange USB-C cable (bottom-right) drift with multi-plane depth physics on scroll and cursor motion.

### 2. Live Interactive Productivity Multi-Tool (2x2 Grid)
- **Working Pomodoro Focus Engine (Card 1)**: Real-time countdown timer (25:00 / 5m / 15m) with Start/Pause/Reset controls wired directly to the Spring Boot `/api/pomodoro` backend.
- **Developer API & Terminal Console (Card 2)**: Typewriter animation of terminal connection logs, one-click cURL copier, and a live **"Run Live REST Query"** button that sends actual HTTP requests to Spring Boot and displays live JSON responses.
- **App Integrations & Ecosystem (Card 3)**: Interactive switches for Slack DND status sync, Google Calendar & Outlook meeting triggers, and microphone/camera sensors.
- **Custom Pixel Studio & LED Matrix Designer (Card 4)**: Instant custom word flasher with live color picker and fast preset chips.

### 3. Sticky Glassmorphism Navbar & Cloud Remote Modal
- **"Cloud Access" Action Pill**: Displays live connection status and current hardware matrix state.
- **Remote Control Dialog**: Full remote dashboard allowing users to push custom text, team status messages, LED brightness, and timer presets directly over WebSockets and REST.

---

## Tech Stack

### Frontend
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom Design System tokens
- **Animations**: Framer Motion (3D Spring Physics, Staggered Scroll Reveals)
- **Icons**: Lucide React

### Backend
- **Framework**: Java 21 + Spring Boot 3.3.x
- **Protocols**: REST API (`/api/status`, `/api/pomodoro`, `/api/telemetry`) + Native WebSockets (`/ws-busy`)
- **State Management**: Thread-safe in-memory store with real-time countdown scheduler and multi-client broadcast.

---

## Quick Start & Running Locally

### 1. Run Backend (Spring Boot)
```bash
cd backend
mvn spring-boot:run
```
*Backend starts on `http://localhost:8080`.*

### 2. Run Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
*Frontend starts on `http://localhost:5173`.*

---

## Backend API Documentation

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/status` | Fetch current active hardware status & message |
| `POST` | `/api/status` | Update status, color, and brightness (broadcasts via WS) |
| `POST` | `/api/status/toggle` | Toggle active / sleep state |
| `GET` | `/api/status/presets` | Get default quick status configurations |
| `GET` | `/api/pomodoro` | Get live Pomodoro timer state |
| `POST` | `/api/pomodoro/action` | Execute action (`START`, `PAUSE`, `RESET`, `SET_MODE`) |
| `GET` | `/api/telemetry` | Get hardware telemetry (battery, Wi-Fi RSSI, temperature) |
| `WS` | `/ws-busy` | WebSocket stream for zero-latency live state updates |
