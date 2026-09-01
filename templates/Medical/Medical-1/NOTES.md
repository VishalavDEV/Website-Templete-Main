# MediPulse Healthcare Platform - Engineering Notes & Architectural Decisions

## Overview
MediPulse is a full-featured, responsive, role-based Healthcare & Hospital Management Web Platform designed for hospitals, clinics, specialists, patients, and administrators.

---

## Key Architecture & Design Decisions

1. **Frontend Architecture & Design System**:
   - **Framework**: React 19 + TypeScript + Tailwind CSS v4 + Vite.
   - **Aesthetics**: Professional medical theme with clean teal/blue accents, slate neutrals, high contrast typography, accessible interactive touch targets, rounded cards, and subtle depth elevation (`shadow-2xs`, `shadow-sm`, `shadow-md`).
   - **Component Modularity**: Reusable, accessible UI components (Navbar, Footer, Badge, Button, Modal, Card, Input, Select, Textarea, Tabs, Accordion, Toast notifications).

2. **Persistence & Data Architecture**:
   - **Local Storage API Service (`ApiService`)**: Fully simulates asynchronous backend REST API endpoints with latency simulation and persistence. Handles relational queries between Users, Patients, Doctors, Departments, Appointments, Prescriptions, Medical Records, Invoices, Testimonials, and Contact Messages.
   - **Seed Data**: Comprehensive initial datasets with realistic medical names, specializations, doctor biographies, consultation hours, emergency facilities, and patient records.

3. **Role-Based Access Control (RBAC)**:
   - **Patient Role**: Appointment booking, history tracking, active prescriptions with full Rx passes, lab test reports viewer, online invoice settlement with card checkout simulation, and health profile management (allergies, chronic conditions, blood group).
   - **Doctor Role**: Appointment queue oversight, accepting/rejecting consultations, writing digital prescriptions (medicine name, dosage, frequency, duration, instructions), weekly OPD timetable availability configuration, and public bio editor.
   - **Admin Role**: Executive operational metrics, full Doctor CRUD, Department CRUD, patient registry, appointment oversight, financial invoice generator, review moderation, and inquiry inbox management.
   - **One-Click Demo Authentication**: Available on the login page for instant role switching (Patient, Doctor, Admin).

4. **Interactive Multi-Step Appointment Booking Flow**:
   - Step 1: Department selection
   - Step 2: Specialist selection (filtered by department)
   - Step 3: Date & time slot picker (dynamically computed from doctor weekly availability minus existing reservations to avoid double booking)
   - Step 4: Patient demographic and symptom details
   - Step 5: Digital booking confirmation pass with unique reference code (`#MP-2026-XXXX`), print/PDF capability, and celebration animation.

5. **Assumptions & Defaults**:
   - LocalStorage is automatically seeded on first launch if empty.
   - Emergency hotline (+1-800-555-0199) and 24/7 Level 1 Trauma Center information is displayed across the public layout.
   - Print media CSS is integrated to render clean receipts for prescriptions and appointment confirmation passes.
