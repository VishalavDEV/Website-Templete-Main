package com.technosprint.templates.controller;

import com.technosprint.templates.entity.*;
import com.technosprint.templates.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import java.util.*;

@RestController
@RequestMapping("/api/seed")
public class DatabaseSeederController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private TemplateRepository templateRepository;

    @Autowired
    private LicenseRepository licenseRepository;

    @Autowired
    private DownloadRepository downloadRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @EventListener(ApplicationReadyEvent.class)
    public void autoSeedOnStartup() {
        if (categoryRepository.count() == 0 || templateRepository.count() == 0) {
            System.out.println(">>> [AUTO-SEED] Seeding initial categories and templates into database...");
            seedDatabase();
        }
    }

    @PostMapping
    @GetMapping
    public ResponseEntity<?> seedDatabase() {
        Map<String, Object> logs = new LinkedHashMap<>();

        // 1. Clear existing database data to remove dummy data completely
        downloadRepository.deleteAll();
        licenseRepository.deleteAll();
        orderRepository.deleteAll();
        templateRepository.deleteAll();
        categoryRepository.deleteAll();
        logs.put("cleanup", "Cleared all old template, category, download, order, and license records.");

        // 2. Seed Users
        if (!userRepository.existsByEmail("admin@technosprint.com")) {
            User admin = new User(
                    "TechnoSprint Admin",
                    "admin@technosprint.com",
                    passwordEncoder.encode("adminpassword"),
                    "ROLE_ADMIN",
                    "ACTIVE"
            );
            userRepository.save(admin);
            logs.put("adminUser", "Created (admin@technosprint.com / adminpassword)");
        } else {
            logs.put("adminUser", "Exists");
        }

        if (!userRepository.existsByEmail("user@technosprint.com")) {
            User user = new User(
                    "Jane Doe",
                    "user@technosprint.com",
                    passwordEncoder.encode("userpassword"),
                    "ROLE_USER",
                    "ACTIVE"
            );
            userRepository.save(user);
            logs.put("regularUser", "Created (user@technosprint.com / userpassword)");
        } else {
            logs.put("regularUser", "Exists");
        }

        // 3. Seed exact 18 categories requested
        String[][] categoryData = {
                {"Admin", "admin", "Admin dashboards and control panels."},
                {"Medical", "medical", "Websites for clinics, doctors, and hospitals."},
                {"Block magazine", "block-magazine", "Blog layouts, news portals, and magazine grids."},
                {"Comming soon", "comming-soon", "Under construction pages and pre-launch countdown overlays."},
                {"Travels", "travels", "Tour agencies, booking services, and travel logs."},
                {"Hotel", "hotel", "Resorts, motels, and luxury hotel reservation templates."},
                {"Events", "events", "Conferences, meetups, exhibitions, and ticket bookings."},
                {"Photography", "photography", "Portfolio grids for photographers and visual artists."},
                {"Construction", "construction", "Building developers, architectural firms, and contracting companies."},
                {"Education", "education", "Universities, e-learning dashboards, and primary schools."},
                {"Restaurant", "restaurant", "Food bistros, cafes, bakeries, and dining menu showcases."},
                {"Ecommerce", "ecommerce", "Online storefronts, checkout flows, and product catalogs."},
                {"Buisness", "buisness", "Sleek corporate sites, startup landing pages, and agencies."},
                {"onepage", "onepage", "Single page scroll themes and minimal sales funnels."},
                {"landing page", "landing-page", "High-conversion lead forms and app promotion layouts."},
                {"cooperate", "cooperate", "Enterprise consulting, corporate services, and financial groups."},
                {"agency", "agency", "Design studios, marketing firms, and creative agencies."},
                {"portfolio", "portfolio", "Personal resumes, developer bios, and work showcases."},
                {"Real Estate", "real-estate", "Premium villa listings, property agents, and real estate developer templates."},
                {"Resume", "resume", "Sleek professional resumes, CV templates, and personal branding profiles."},
                {"Transportation", "transportation", "Logistics, courier service, trucking, and passenger transit templates."},
                {"Personal", "personal", "Personal blogs, lifestyle diaries, and individual landing page templates."}
        };

        Map<String, Category> catMap = new HashMap<>();
        for (String[] data : categoryData) {
            Category cat = new Category(data[0], data[1], data[2], "ACTIVE");
            categoryRepository.save(cat);
            catMap.put(data[1], cat);
            logs.put("category_" + data[1], "Created");
        }

        // Seed Admin templates
        Category adminCategory = catMap.get("admin");
        if (adminCategory != null) {
            // admin-1
            Template admin1 = new Template();
            admin1.setName("TS Admin — Enterprise Command Center");
            admin1.setSlug("ts-admin");
            admin1.setDescription("A comprehensive corporate and analytics administrative platform featuring sales intelligence, GPU computing, conversion tracking, chat dashboard, and settings panel.");
            admin1.setCategory(adminCategory);
            admin1.setPrice(0.0);
            admin1.setTemplateType("FREE");
            admin1.setBootstrapVersion("React 19 / Vite / Tailwind CSS");
            admin1.setDemoUrl("/templates/admin/admin-1/index.html");
            admin1.setDownloadFile("ts-admin.zip");
            admin1.setPreviewImage("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80");
            admin1.setVersion("1.0.0");
            admin1.setStatus("PUBLISHED");
            admin1.setPagesCount(1);
            admin1.setDownloadsCount(1450);
            admin1.setTags(new ArrayList<>(Arrays.asList("Corporate", "GPU Monitor", "Chat App")));
            templateRepository.save(admin1);
            logs.put("template_admin_1", "Created");

            // admin-2
            Template admin2 = new Template();
            admin2.setName("Elemental — Editorial Command Center");
            admin2.setSlug("elemental-admin");
            admin2.setDescription("A beautiful editorial command operating system and science archive built using custom React state views, featuring editorial pipeline, task manager, media library, and workspace options.");
            admin2.setCategory(adminCategory);
            admin2.setPrice(0.0);
            admin2.setTemplateType("FREE");
            admin2.setBootstrapVersion("React 19 / TypeScript / Tailwind CSS");
            admin2.setDemoUrl("/templates/admin/admin-2/index.html");
            admin2.setDownloadFile("elemental-admin.zip");
            admin2.setPreviewImage("https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80");
            admin2.setVersion("1.0.0");
            admin2.setStatus("PUBLISHED");
            admin2.setPagesCount(1);
            admin2.setDownloadsCount(1890);
            admin2.setTags(new ArrayList<>(Arrays.asList("Editorial", "Command Palette", "Bento Grid")));
            templateRepository.save(admin2);
            logs.put("template_admin_2", "Created");

            // admin-3
            Template admin3 = new Template();
            admin3.setName("Arctic Frost — Editorial Command Center");
            admin3.setSlug("arctic-frost-admin");
            admin3.setDescription("An intelligent science magazine super admin dashboard and editorial observatory with ice-and-paper aesthetics, live newsroom signals, story velocity analytics, and interactive publishing workflows.");
            admin3.setCategory(adminCategory);
            admin3.setPrice(0.0);
            admin3.setTemplateType("FREE");
            admin3.setBootstrapVersion("React 19 / TypeScript / Tailwind CSS");
            admin3.setDemoUrl("/templates/admin/admin-3/index.html");
            admin3.setDownloadFile("arctic-frost-admin.zip");
            admin3.setPreviewImage("https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80");
            admin3.setVersion("1.0.0");
            admin3.setStatus("PUBLISHED");
            admin3.setPagesCount(1);
            admin3.setDownloadsCount(1420);
            admin3.setTags(new ArrayList<>(Arrays.asList("Editorial", "Command Center", "Obsidian")));
            templateRepository.save(admin3);
            logs.put("template_admin_3", "Created");

            // admin-4 (CoreVista)
            Template admin4 = new Template();
            admin4.setName("CoreVista — Premium Project Management & ERP");
            admin4.setSlug("admin-4");
            admin4.setDescription("A multi-functional enterprise project management and ERP panel. Features 10 main controller modules with 50 sub-pages total, custom client portfolios, and secure authorization screens.");
            admin4.setCategory(adminCategory);
            admin4.setPrice(0.0);
            admin4.setTemplateType("FREE");
            admin4.setBootstrapVersion("React / Tailwind / Vite / TS");
            admin4.setDemoUrl("/templates/admin/admin-4/index.html");
            admin4.setDownloadFile("");
            admin4.setPreviewImage("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80");
            admin4.setVersion("1.0.0");
            admin4.setStatus("PUBLISHED");
            admin4.setPagesCount(50);
            admin4.setDownloadsCount(1980);
            admin4.setTags(new ArrayList<>(Arrays.asList("ERP", "Project Management", "Multi-page", "Vite", "React")));
            templateRepository.save(admin4);
            logs.put("template_admin_4", "Created");

            // admin-5 (ApexAdmin)
            Template admin5 = new Template();
            admin5.setName("ApexAdmin — Multipurpose Enterprise Command Panel");
            admin5.setSlug("admin-5");
            admin5.setDescription("A comprehensive multipurpose administrative control system. Features 7 dashboard view presets, client message boxes, custom user/role directories, and dynamic utility modules.");
            admin5.setCategory(adminCategory);
            admin5.setPrice(0.0);
            admin5.setTemplateType("FREE");
            admin5.setBootstrapVersion("React / Vite / Tailwind CSS");
            admin5.setDemoUrl("/templates/admin/admin-5/index.html");
            admin5.setDownloadFile("");
            admin5.setPreviewImage("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80");
            admin5.setVersion("1.0.0");
            admin5.setStatus("PUBLISHED");
            admin5.setPagesCount(25);
            admin5.setDownloadsCount(1650);
            admin5.setTags(new ArrayList<>(Arrays.asList("Admin Dashboard", "Multipurpose", "Widgets", "Vite", "React")));
            templateRepository.save(admin5);
            logs.put("template_admin_5", "Created");

            // admin-6 (Horizon)
            Template admin6 = new Template();
            admin6.setName("Horizon — Global Operations Command");
            admin6.setSlug("admin-6");
            admin6.setDescription("A premium operations command center dashboard. Features dark theme aesthetics, custom authentication routes, live search indices, and dynamic task scoping selectors.");
            admin6.setCategory(adminCategory);
            admin6.setPrice(0.0);
            admin6.setTemplateType("FREE");
            admin6.setBootstrapVersion("React / Tailwind / Vite / TS");
            admin6.setDemoUrl("/templates/admin/admin-6/index.html");
            admin6.setDownloadFile("");
            admin6.setPreviewImage("https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80");
            admin6.setVersion("1.0.0");
            admin6.setStatus("PUBLISHED");
            admin6.setPagesCount(12);
            admin6.setDownloadsCount(1540);
            admin6.setTags(new ArrayList<>(Arrays.asList("Command Center", "Operations", "Dark Mode", "React", "TS")));
            templateRepository.save(admin6);
            logs.put("template_admin_6", "Created");

            // admin-7 (Elysium)
            Template admin7 = new Template();
            admin7.setName("Elysium — Unified Cloud Analytics Engine");
            admin7.setSlug("admin-7");
            admin7.setDescription("A clean and professional cloud infrastructure analytics dashboard. Features system telemetry, task queues, HR analytics, and messages views under a state-based layout shell.");
            admin7.setCategory(adminCategory);
            admin7.setPrice(0.0);
            admin7.setTemplateType("FREE");
            admin7.setBootstrapVersion("React / Tailwind / Vite / TS");
            admin7.setDemoUrl("/templates/admin/admin-7/index.html");
            admin7.setDownloadFile("");
            admin7.setPreviewImage("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80");
            admin7.setVersion("1.0.0");
            admin7.setStatus("PUBLISHED");
            admin7.setPagesCount(18);
            admin7.setDownloadsCount(1820);
            admin7.setTags(new ArrayList<>(Arrays.asList("Cloud Infrastructure", "Telemetry", "HR Analytics", "React", "TS")));
            templateRepository.save(admin7);
            logs.put("template_admin_7", "Created");

            // admin-8 (Ember)
            Template admin8 = new Template();
            admin8.setName("Ember — Premium Financial Operations Ledger");
            admin8.setSlug("admin-8");
            admin8.setDescription("An advanced financial ledger and inventory system. Features custom date range filters, transaction exports, dynamic KPIs, and product performance cards.");
            admin8.setCategory(adminCategory);
            admin8.setPrice(0.0);
            admin8.setTemplateType("FREE");
            admin8.setBootstrapVersion("React / Tailwind / Vite / TS");
            admin8.setDemoUrl("/templates/admin/admin-8/index.html");
            admin8.setDownloadFile("");
            admin8.setPreviewImage("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80");
            admin8.setVersion("1.0.0");
            admin8.setStatus("PUBLISHED");
            admin8.setPagesCount(10);
            admin8.setDownloadsCount(1460);
            admin8.setTags(new ArrayList<>(Arrays.asList("Financial Ledger", "Inventory", "KPI Metrics", "React", "TS")));
            templateRepository.save(admin8);
            logs.put("template_admin_8", "Created");

            // admin-9 (Vantage)
            Template admin9 = new Template();
            admin9.setName("Vantage — Premium Admin & Dashboard Hub");
            admin9.setSlug("admin-9");
            admin9.setDescription("An advanced corporate admin dashboard featuring real-time analytics, user management directories, customer profiling, and integrated messaging portals.");
            admin9.setCategory(adminCategory);
            admin9.setPrice(0.0);
            admin9.setTemplateType("FREE");
            admin9.setBootstrapVersion("React / Tailwind CSS / Recharts");
            admin9.setDemoUrl("/templates/admin/admin-9/index.html");
            admin9.setDownloadFile("");
            admin9.setPreviewImage("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80");
            admin9.setVersion("1.0.0");
            admin9.setStatus("PUBLISHED");
            admin9.setPagesCount(12);
            admin9.setDownloadsCount(1320);
            admin9.setTags(new ArrayList<>(Arrays.asList("Admin Dashboard", "Analytics", "React", "Spring Boot")));
            templateRepository.save(admin9);
            logs.put("template_admin_9", "Created");

            // admin-10 (Apex)
            Template admin10 = new Template();
            admin10.setName("Apex — Animated Admin Dashboard Portal");
            admin10.setSlug("admin-10");
            admin10.setDescription("A high-end, premium administrative dashboard system featuring animated transitions, dynamic charts, live notifications, and complete workspace options.");
            admin10.setCategory(adminCategory);
            admin10.setPrice(0.0);
            admin10.setTemplateType("FREE");
            admin10.setBootstrapVersion("React / Recharts / Framer Motion");
            admin10.setDemoUrl("/templates/admin/admin-10/index.html");
            admin10.setDownloadFile("");
            admin10.setPreviewImage("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80");
            admin10.setVersion("1.0.0");
            admin10.setStatus("PUBLISHED");
            admin10.setPagesCount(14);
            admin10.setDownloadsCount(1580);
            admin10.setTags(new ArrayList<>(Arrays.asList("Admin Portal", "Recharts", "Framer Motion", "React")));
            templateRepository.save(admin10);
            logs.put("template_admin_10", "Created");
        }

        // 4. Seed Qure Nexa template under Medical category
        Category medicalCategory = catMap.get("medical");
        if (medicalCategory != null) {
            Template qureNexa = new Template();
            qureNexa.setName("Qure Nexa — Advanced Medical & Healthcare Platform");
            qureNexa.setSlug("medical-1");
            qureNexa.setDescription("A modern healthcare and hospital management platform featuring multi-role portals for Patients, Doctors, and Admins, doctor directory, intelligent slot booking, and clinical workflows.");
            qureNexa.setCategory(medicalCategory);
            qureNexa.setPrice(0.0);
            qureNexa.setTemplateType("FREE");
            qureNexa.setBootstrapVersion("React 19 / Tailwind CSS / Vite");
            qureNexa.setDemoUrl("/templates/medical/medical-1/index.html");
            qureNexa.setDownloadFile("qure-nexa-medical.zip");
            qureNexa.setPreviewImage("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80");
            qureNexa.setVersion("1.0");
            qureNexa.setStatus("PUBLISHED");
            qureNexa.setPagesCount(12);
            qureNexa.setDownloadsCount(12400);
            qureNexa.setTags(new ArrayList<>(Arrays.asList("medical", "healthcare", "hospital", "doctor", "patient-portal", "clinic")));
            templateRepository.save(qureNexa);
            logs.put("qureNexaTemplate", "Seeded Qure Nexa under Medical category");

            // Seed Medicio Healthcare (medical-2)
            Template medicio = new Template();
            medicio.setName("Medicio Healthcare — Advanced Medical Center Platform");
            medicio.setSlug("medicio-healthcare");
            medicio.setDescription("A customized, comprehensive healthcare web platform with interactive appointment booking, doctor directory, department catalog, service scopes, and patient portal.");
            medicio.setCategory(medicalCategory);
            medicio.setPrice(0.0);
            medicio.setTemplateType("FREE");
            medicio.setBootstrapVersion("React / Tailwind CSS / Vite");
            medicio.setDemoUrl("/templates/medical/medical-2/index.html");
            medicio.setDownloadFile("medicio-healthcare.zip");
            medicio.setPreviewImage("https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80");
            medicio.setVersion("1.0");
            medicio.setStatus("PUBLISHED");
            medicio.setPagesCount(1);
            medicio.setDownloadsCount(1200);
            medicio.setTags(new ArrayList<>(Arrays.asList("medical", "healthcare", "appointment", "doctor", "clinic")));
            templateRepository.save(medicio);
            logs.put("template_medicio_healthcare", "Created");

            // Seed Aurevia Health (medical-3)
            Template aurevia = new Template();
            aurevia.setName("Aurevia Health — Premium Healthcare Technology Platform");
            aurevia.setSlug("aurevia-health");
            aurevia.setDescription("Premium healthcare technology platform for discovering specialists, clinical departments, intelligent appointment booking, and comprehensive patient-doctor ecosystems.");
            aurevia.setCategory(medicalCategory);
            aurevia.setPrice(0.0);
            aurevia.setTemplateType("FREE");
            aurevia.setBootstrapVersion("React / Tailwind CSS / Vite");
            aurevia.setDemoUrl("/templates/medical/medical-3/index.html");
            aurevia.setDownloadFile("aurevia-health.zip");
            aurevia.setPreviewImage("https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=800&q=80");
            aurevia.setVersion("1.0");
            aurevia.setStatus("PUBLISHED");
            aurevia.setPagesCount(1);
            aurevia.setDownloadsCount(1850);
            aurevia.setTags(new ArrayList<>(Arrays.asList("medical", "healthcare", "appointment", "doctor", "specialist")));
            templateRepository.save(aurevia);
            logs.put("template_aurevia_health", "Created");

            // Seed Veylora Health (medical-4)
            Template veylora = new Template();
            veylora.setName("Veylora Health — Multi-Speciality Hospital Platform");
            veylora.setSlug("veylora-health");
            veylora.setDescription("Comprehensive healthcare platform featuring specialized medical departments, verified doctor profiles, instant appointment booking, and patient health tools.");
            veylora.setCategory(medicalCategory);
            veylora.setPrice(0.0);
            veylora.setTemplateType("FREE");
            veylora.setBootstrapVersion("React / Tailwind CSS / Vite");
            veylora.setDemoUrl("/templates/medical/medical-4/index.html");
            veylora.setDownloadFile("veylora-health.zip");
            veylora.setPreviewImage("https://images.unsplash.com/photo-1586773860418-d37222d8fce2?auto=format&fit=crop&w=800&q=80");
            veylora.setVersion("1.0");
            veylora.setStatus("PUBLISHED");
            veylora.setPagesCount(1);
            veylora.setDownloadsCount(2100);
            veylora.setTags(new ArrayList<>(Arrays.asList("medical", "healthcare", "hospital", "doctor", "speciality")));
            templateRepository.save(veylora);
            logs.put("template_veylora_health", "Created");

            // Seed Medical-5 (Aura Health)
            Template medical5 = new Template();
            medical5.setName("Aura Health - Lilac Frost Medical Platform");
            medical5.setSlug("medical-5");
            medical5.setDescription("A premium, calm, and modern medical healthcare platform template with Lilac Frost aesthetic, specialist booking, patient portal, medical records, and clinical services.");
            medical5.setCategory(medicalCategory);
            medical5.setPrice(0.0);
            medical5.setTemplateType("FREE");
            medical5.setBootstrapVersion("React / Tailwind CSS / Vite");
            medical5.setDemoUrl("/templates/medical/medical-5/index.html");
            medical5.setDownloadFile("");
            medical5.setPreviewImage("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80");
            medical5.setVersion("1.0");
            medical5.setStatus("PUBLISHED");
            medical5.setPagesCount(12);
            medical5.setDownloadsCount(1420);
            medical5.setTags(new ArrayList<>(Arrays.asList("medical", "healthcare", "patient-portal", "lilac-frost", "Vite", "React")));
            templateRepository.save(medical5);
            logs.put("template_medical_5", "Created");

            // Seed Medical-7 (ApexHealth)
            Template medical7 = new Template();
            medical7.setName("ApexHealth — Modern Dynamic Medical Platform");
            medical7.setSlug("medical-6");
            medical7.setDescription("Modern Dynamic Medical Platform for Patients, Doctors, and Healthcare Administrators. Real-time slot booking, doctor discovery, and patient portals.");
            medical7.setCategory(medicalCategory);
            medical7.setPrice(0.0);
            medical7.setTemplateType("FREE");
            medical7.setBootstrapVersion("React / Tailwind CSS / Vite");
            medical7.setDemoUrl("/templates/medical/medical-6/index.html");
            medical7.setDownloadFile("");
            medical7.setPreviewImage("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80");
            medical7.setVersion("1.0");
            medical7.setStatus("PUBLISHED");
            medical7.setPagesCount(1);
            medical7.setDownloadsCount(1580);
            medical7.setTags(new ArrayList<>(Arrays.asList("medical", "healthcare", "booking", "portal", "Vite", "React")));
            templateRepository.save(medical7);
            logs.put("template_medical_7", "Created");

            // Seed Medical-8 (PulseCare)
            Template medical8 = new Template();
            medical8.setName("PulseCare — Modern Dynamic Healthcare Platform");
            medical8.setSlug("medical-7");
            medical8.setDescription("Discover top doctors, compare availability, book instant appointments, and manage health records securely with PulseCare Healthcare Platform.");
            medical8.setCategory(medicalCategory);
            medical8.setPrice(0.0);
            medical8.setTemplateType("FREE");
            medical8.setBootstrapVersion("HTML5 / CSS3 / Vanilla JS");
            medical8.setDemoUrl("/templates/medical/medical-7/index.html");
            medical8.setDownloadFile("");
            medical8.setPreviewImage("https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80");
            medical8.setVersion("1.0");
            medical8.setStatus("PUBLISHED");
            medical8.setPagesCount(1);
            medical8.setDownloadsCount(1750);
            medical8.setTags(new ArrayList<>(Arrays.asList("medical", "healthcare", "appointments", "records", "Vanilla JS")));
            templateRepository.save(medical8);
            logs.put("template_medical_8", "Created");
        }

        // 5. Seed Photography templates
        Category photography = catMap.get("photography");
        if (photography != null) {
            // SnapFolio template
            Template snapfolio = new Template();
            snapfolio.setName("SnapFolio — Dark Minimalist Portfolio");
            snapfolio.setSlug("photography-1");
            snapfolio.setDescription("A dark-themed photography portfolio featuring a floating glass sidebar navigation, animated typewriter hero headlines, responsive masonry layouts, next/prev arrow keyboard navigation lightbox, and integrated booking validation feedback.");
            snapfolio.setCategory(photography);
            snapfolio.setPrice(0.0);
            snapfolio.setTemplateType("FREE");
            snapfolio.setBootstrapVersion("HTML5 / Tailwind CSS");
            snapfolio.setDemoUrl("/templates/photography/photography-1/index.html");
            snapfolio.setDownloadFile("snapfolio-template.zip");
            snapfolio.setPreviewImage("https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80");
            snapfolio.setVersion("1.0.0");
            snapfolio.setStatus("PUBLISHED");
            snapfolio.setPagesCount(1);
            snapfolio.setDownloadsCount(12450);
            snapfolio.setTags(new ArrayList<>(Arrays.asList("Dark Theme", "Masonry Gallery", "Lightbox Modal")));
            templateRepository.save(snapfolio);
            logs.put("template_snapfolio", "Created");

            // Photo template
            Template photo = new Template();
            photo.setName("Photo — Editorial Photography Studio");
            photo.setSlug("photography-2");
            photo.setDescription("A high-end, editorial landing page template for creative photography studios. Features Apple-style scroll-linked canvas camera aperture and lens flare animations, split-layout typography, and interactive showcase grids.");
            photo.setCategory(photography);
            photo.setPrice(0.0);
            photo.setTemplateType("FREE");
            photo.setBootstrapVersion("HTML5 / Vanilla CSS");
            photo.setDemoUrl("/templates/photography/photography-2/index.html");
            photo.setDownloadFile("photo-template.zip");
            photo.setPreviewImage("https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80");
            photo.setVersion("1.0.0");
            photo.setStatus("PUBLISHED");
            photo.setPagesCount(1);
            photo.setDownloadsCount(15200);
            photo.setTags(new ArrayList<>(Arrays.asList("Editorial Layout", "Scroll Pinned Canvas", "Golden Hour Theme")));
            templateRepository.save(photo);
            logs.put("template_photo", "Created");

            // Wedding template (Lumière)
            Template wedding = new Template();
            wedding.setName("Lumière — High-End Wedding & Event Photography");
            wedding.setSlug("photography-3");
            wedding.setDescription("A responsive, high-end wedding and event photography portfolio web template with a warm ivory backdrop, center-split navigation, elegant serif headings, and sticky whatsapp/phone buttons.");
            wedding.setCategory(photography);
            wedding.setPrice(0.0);
            wedding.setTemplateType("FREE");
            wedding.setBootstrapVersion("HTML5 / Tailwind CSS");
            wedding.setDemoUrl("/templates/photography/photography-3/index.html");
            wedding.setDownloadFile("wedding-template.zip");
            wedding.setPreviewImage("https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80");
            wedding.setVersion("1.0.0");
            wedding.setStatus("PUBLISHED");
            wedding.setPagesCount(1);
            wedding.setDownloadsCount(1200);
            wedding.setTags(new ArrayList<>(Arrays.asList("Wedding Theme", "Ivory Background", "Serif Typography")));
            templateRepository.save(wedding);
            logs.put("template_wedding", "Created");

            // Seed Sage & Shutter (Photography-8)
            Template sageShutter = new Template();
            sageShutter.setName("Sage & Shutter — Fine Art Wedding Photography");
            sageShutter.setSlug("sage-shutter-photography");
            sageShutter.setDescription("An elegant, high-end fine art wedding photography showcase template. Features delicate earthy desaturated filters, parallax image carousels, custom cursor indicators, and responsive testimonial sliders.");
            sageShutter.setCategory(photography);
            sageShutter.setPrice(0.0);
            sageShutter.setTemplateType("FREE");
            sageShutter.setBootstrapVersion("React / Tailwind CSS / Motion");
            sageShutter.setDemoUrl("/templates/photography/photography-8/index.html");
            sageShutter.setDownloadFile("");
            sageShutter.setPreviewImage("https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80");
            sageShutter.setVersion("1.0.0");
            sageShutter.setStatus("PUBLISHED");
            sageShutter.setPagesCount(1);
            sageShutter.setDownloadsCount(2300);
            sageShutter.setTags(new ArrayList<>(Arrays.asList("Fine Art", "Wedding Photography", "Earthy Filters", "Tailwind CSS", "Motion")));
            templateRepository.save(sageShutter);
            logs.put("template_sageshutter_photography", "Created");

            // Seed Blush Lens (Photography-9)
            Template blushLens = new Template();
            blushLens.setName("Blush Lens — Fine Art Wedding Photography");
            blushLens.setSlug("blush-lens-photography");
            blushLens.setDescription("A premium React wedding photography template featuring romantic blush and warm ivory tones, editorial serif typography, interactive booking forms, and dynamic parallax portfolio galleries.");
            blushLens.setCategory(photography);
            blushLens.setPrice(0.0);
            blushLens.setTemplateType("FREE");
            blushLens.setBootstrapVersion("React / Tailwind CSS / Motion");
            blushLens.setDemoUrl("/templates/photography/photography-9/index.html");
            blushLens.setDownloadFile("");
            blushLens.setPreviewImage("/wedding_cover.png");
            blushLens.setVersion("1.0.0");
            blushLens.setStatus("PUBLISHED");
            blushLens.setPagesCount(1);
            blushLens.setDownloadsCount(1850);
            blushLens.setTags(new ArrayList<>(Arrays.asList("Fine Art", "Wedding Photography", "Blush Tones", "Tailwind CSS", "Motion")));
            templateRepository.save(blushLens);
            logs.put("template_blushlens_photography", "Created");

            // Seed Aether Studio (Photography-10)
            Template aetherStudio = new Template();
            aetherStudio.setName("Aether Studio — Fine Art Editorial Photography");
            aetherStudio.setSlug("aether-studio-photography");
            aetherStudio.setDescription("A high-end, editorial photography showcase template. Features custom slide overlays, parallax grid systems, desaturated earthy image styling, and elegant typewriter layout design.");
            aetherStudio.setCategory(photography);
            aetherStudio.setPrice(0.0);
            aetherStudio.setTemplateType("FREE");
            aetherStudio.setBootstrapVersion("React / Tailwind CSS / Motion");
            aetherStudio.setDemoUrl("/templates/photography/photography-10/index.html");
            aetherStudio.setDownloadFile("");
            aetherStudio.setPreviewImage("https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80");
            aetherStudio.setVersion("1.0.0");
            aetherStudio.setStatus("PUBLISHED");
            aetherStudio.setPagesCount(1);
            aetherStudio.setDownloadsCount(1480);
            aetherStudio.setTags(new ArrayList<>(Arrays.asList("Fine Art", "Editorial Photography", "Earthy Theme", "Tailwind CSS", "Motion")));
            templateRepository.save(aetherStudio);
            logs.put("template_aetherstudio_photography", "Created");

            // Seed Eden Rose (cinematic-wedding)
            Template edenRose = new Template();
            edenRose.setName("Eden Rose — Cinematic Luxury Wedding Portfolio");
            edenRose.setSlug("photography-4");
            edenRose.setDescription("A high-end cinematic wedding photography portfolio template with immersive slideshows, custom transitions, and smooth galleries.");
            edenRose.setCategory(photography);
            edenRose.setPrice(0.0);
            edenRose.setTemplateType("FREE");
            edenRose.setBootstrapVersion("HTML5 / Vanilla CSS");
            edenRose.setDemoUrl("/templates/photography/photography-4/index.html");
            edenRose.setDownloadFile("");
            edenRose.setPreviewImage("/cinematic_cover.png");
            edenRose.setVersion("1.0.0");
            edenRose.setStatus("PUBLISHED");
            edenRose.setPagesCount(1);
            edenRose.setDownloadsCount(1320);
            edenRose.setTags(new ArrayList<>(Arrays.asList("Wedding Portfolio", "Cinematic", "Vanilla CSS", "HTML5")));
            templateRepository.save(edenRose);
            logs.put("template_edenrose_photography", "Created");

            // Seed Aura (fineart-template)
            Template auraArt = new Template();
            auraArt.setName("—A—u—r—a— ——— —P—r—e—m—i—u—m— —F—i—n—e— —A—r—t— —S—t—u—d—i—o—");
            auraArt.setSlug("photography-5");
            auraArt.setDescription("A premium fine art and editorial studio portfolio featuring elegant dark-theme aesthetics, grid catalogs, and custom zoom-in lightboxes.");
            auraArt.setCategory(photography);
            auraArt.setPrice(0.0);
            auraArt.setTemplateType("FREE");
            auraArt.setBootstrapVersion("HTML5 / Vanilla CSS");
            auraArt.setDemoUrl("/templates/photography/photography-5/index.html");
            auraArt.setDownloadFile("");
            auraArt.setPreviewImage("/fineart_cover.png");
            auraArt.setVersion("1.0.0");
            auraArt.setStatus("PUBLISHED");
            auraArt.setPagesCount(1);
            auraArt.setDownloadsCount(1430);
            auraArt.setTags(new ArrayList<>(Arrays.asList("Fine Art", "Studio", "Dark Theme", "Grid Catalog")));
            templateRepository.save(auraArt);
            logs.put("template_aura_photography", "Created");

            // Seed Lume Studio (isteady-template)
            Template lumeStudio = new Template();
            lumeStudio.setName("Lume Studio — Fashion & Editorial Portfolio");
            lumeStudio.setSlug("photography-7");
            lumeStudio.setDescription("A fashion-focused editorial photography portfolio with clean minimalist grids, typography layouts, and interactive sliders.");
            lumeStudio.setCategory(photography);
            lumeStudio.setPrice(0.0);
            lumeStudio.setTemplateType("FREE");
            lumeStudio.setBootstrapVersion("HTML5 / Vanilla CSS");
            lumeStudio.setDemoUrl("/templates/photography/photography-7/index.html");
            lumeStudio.setDownloadFile("");
            lumeStudio.setPreviewImage("/lume_cover.png");
            lumeStudio.setVersion("1.0.0");
            lumeStudio.setStatus("PUBLISHED");
            lumeStudio.setPagesCount(1);
            lumeStudio.setDownloadsCount(1510);
            lumeStudio.setTags(new ArrayList<>(Arrays.asList("Fashion", "Editorial", "Minimalist Grid", "Vanilla CSS")));
            templateRepository.save(lumeStudio);
            logs.put("template_lumestudio_photography", "Created");

            // Seed Kairo (kairo-template)
            Template kairoPhoto = new Template();
            kairoPhoto.setName("Kairo — Modern 3D Photography Portfolio");
            kairoPhoto.setSlug("photography-6");
            kairoPhoto.setDescription("A modern, interactive photography portfolio featuring advanced 3D orbital interactions, custom cursor shaders, and horizontal scroll grids.");
            kairoPhoto.setCategory(photography);
            kairoPhoto.setPrice(0.0);
            kairoPhoto.setTemplateType("FREE");
            kairoPhoto.setBootstrapVersion("HTML5 / Three.js / Vanilla JS");
            kairoPhoto.setDemoUrl("/templates/photography/photography-6/index.html");
            kairoPhoto.setDownloadFile("");
            kairoPhoto.setPreviewImage("/kairo_cover.png");
            kairoPhoto.setVersion("1.0.0");
            kairoPhoto.setStatus("PUBLISHED");
            kairoPhoto.setPagesCount(1);
            kairoPhoto.setDownloadsCount(1820);
            kairoPhoto.setTags(new ArrayList<>(Arrays.asList("3D Space", "Three.js", "Modern Shaders", "Interactive")));
            templateRepository.save(kairoPhoto);
            logs.put("template_kairo_photography", "Created");
        }

        // Seed Block Magazine templates
        Category blockMagazineCategory = catMap.get("block-magazine");
        if (blockMagazineCategory != null) {
            // blog-1
            Template blog1 = new Template();
            blog1.setName("Chronicle — Typography-First Magazine");
            blog1.setSlug("chronicle-magazine");
            blog1.setDescription("A gorgeous, responsive typography-first blog and magazine publishing platform, designed with customizable reading progress bars, trending topic pills, and article bookmarking.");
            blog1.setCategory(blockMagazineCategory);
            blog1.setPrice(0.0);
            blog1.setTemplateType("FREE");
            blog1.setBootstrapVersion("React 19 / TypeScript / Tailwind CSS");
            blog1.setDemoUrl("/templates/block-magazine/blog-1/index.html");
            blog1.setDownloadFile("chronicle-magazine.zip");
            blog1.setPreviewImage("https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80");
            blog1.setVersion("1.0.0");
            blog1.setStatus("PUBLISHED");
            blog1.setPagesCount(1);
            blog1.setDownloadsCount(1250);
            blog1.setTags(new ArrayList<>(Arrays.asList("Typography", "Dark Mode Support", "Bookmarking")));
            templateRepository.save(blog1);
            logs.put("template_blog_1", "Created");

            // blog-2
            Template blog2 = new Template();
            blog2.setName("Elemental — Stories Behind the Science");
            blog2.setSlug("elemental-science");
            blog2.setDescription("A clean, modern science and technology magazine featuring card galleries, layout options, reading time estimation, newsletter box subscription, and dark mode support.");
            blog2.setCategory(blockMagazineCategory);
            blog2.setPrice(0.0);
            blog2.setTemplateType("FREE");
            blog2.setBootstrapVersion("React 19 / Vite / Tailwind CSS");
            blog2.setDemoUrl("/templates/block-magazine/blog-2/index.html");
            blog2.setDownloadFile("elemental-science.zip");
            blog2.setPreviewImage("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80");
            blog2.setVersion("1.0.0");
            blog2.setStatus("PUBLISHED");
            blog2.setPagesCount(1);
            blog2.setDownloadsCount(1640);
            blog2.setTags(new ArrayList<>(Arrays.asList("Science", "Reading Estimation", "Newsletter subscription")));
            templateRepository.save(blog2);
            logs.put("template_blog_2", "Created");

            // blog-3
            Template blog3 = new Template();
            blog3.setName("Future Intelligence — AI & Future Tech Magazine");
            blog3.setSlug("future-intelligence");
            blog3.setDescription("An immersive digital magazine layout with rich background visuals, interactive company metrics, tools directory, subscription overlay, and fluid animations.");
            blog3.setCategory(blockMagazineCategory);
            blog3.setPrice(0.0);
            blog3.setTemplateType("FREE");
            blog3.setBootstrapVersion("React 19 / Vite / Vanilla CSS");
            blog3.setDemoUrl("/templates/block-magazine/blog-3/index.html");
            blog3.setDownloadFile("future-intelligence.zip");
            blog3.setPreviewImage("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80");
            blog3.setVersion("1.0.0");
            blog3.setStatus("PUBLISHED");
            blog3.setPagesCount(1);
            blog3.setDownloadsCount(2100);
            blog3.setTags(new ArrayList<>(Arrays.asList("AI Tech", "Interactive Charts", "Fluid animations")));
            templateRepository.save(blog3);
            logs.put("template_blog_3", "Created");

            // blog-4
            Template blog4 = new Template();
            blog4.setName("Storiva — Digital Storytelling & Lifestyle Journal");
            blog4.setSlug("storiva-lifestyle");
            blog4.setDescription("A beautiful lifestyle, blogging, and digital storytelling platform. Features rich article layouts, bookmark contexts, 3D card interactions, category grids, and subscription modals.");
            blog4.setCategory(blockMagazineCategory);
            blog4.setPrice(0.0);
            blog4.setTemplateType("FREE");
            blog4.setBootstrapVersion("React / Tailwind CSS / Motion");
            blog4.setDemoUrl("/templates/block-magazine/blog-4/index.html");
            blog4.setDownloadFile("");
            blog4.setPreviewImage("https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80");
            blog4.setVersion("1.0.0");
            blog4.setStatus("PUBLISHED");
            blog4.setPagesCount(12);
            blog4.setDownloadsCount(3100);
            blog4.setTags(new ArrayList<>(Arrays.asList("Lifestyle", "Lifestyle Journal", "Blogging", "3D Cards", "Framer Motion")));
            templateRepository.save(blog4);
            logs.put("template_blog_4", "Created");

            // blog-5
            Template blog5 = new Template();
            blog5.setName("Z-MAG — Spatial Fashion & Architecture Monograph");
            blog5.setSlug("zmag-spatial");
            blog5.setDescription("Next-generation spatial editorial portfolio. Features 3D coverflow stacks, logo canvas renders, reading progress monitors, saved drawers, and full-screen overlay menus.");
            blog5.setCategory(blockMagazineCategory);
            blog5.setPrice(0.0);
            blog5.setTemplateType("FREE");
            blog5.setBootstrapVersion("React / Three.js / Tailwind CSS / Vite");
            blog5.setDemoUrl("/templates/block-magazine/blog-5/index.html");
            blog5.setDownloadFile("");
            blog5.setPreviewImage("https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80");
            blog5.setVersion("1.0.0");
            blog5.setStatus("PUBLISHED");
            blog5.setPagesCount(15);
            blog5.setDownloadsCount(2900);
            blog5.setTags(new ArrayList<>(Arrays.asList("Spatial Editorial", "Three.js", "Coverflow Stack", "Progress Monitors", "Saved Drawer")));
            templateRepository.save(blog5);
            logs.put("template_blog_5", "Created");

            // blog-6
            Template blog6 = new Template();
            blog6.setName("Design Mag — High-End Architecture & Design Dispatches");
            blog6.setSlug("designmag-dispatches");
            blog6.setDescription("An editorial design and architecture portfolio platform. Features cinematic parallax galleries, tactile bento grids, key takeaways blocks, mega menus, and an immersive dark mode.");
            blog6.setCategory(blockMagazineCategory);
            blog6.setPrice(0.0);
            blog6.setTemplateType("FREE");
            blog6.setBootstrapVersion("React / Tailwind CSS / Framer Motion / Vite");
            blog6.setDemoUrl("/templates/block-magazine/blog-6/index.html");
            blog6.setDownloadFile("");
            blog6.setPreviewImage("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80");
            blog6.setVersion("1.0.0");
            blog6.setStatus("PUBLISHED");
            blog6.setPagesCount(8);
            blog6.setDownloadsCount(2200);
            blog6.setTags(new ArrayList<>(Arrays.asList("Architecture", "Tactile Bento Grid", "Mega Menu", "Dark Mode", "Framer Motion")));
            templateRepository.save(blog6);
            logs.put("template_blog_6", "Created");

            // blog-7
            Template blog7 = new Template();
            blog7.setName("The Blog Observer — Modern Editorial & Opinion Hub");
            blog7.setSlug("blog-observer");
            blog7.setDescription("A premium opinion, journalism, and news publishing hub. Features category spread grids, audio player bars, breaks tickers, opinion rails, bookmark drawers, and velocity carousels.");
            blog7.setCategory(blockMagazineCategory);
            blog7.setPrice(0.0);
            blog7.setTemplateType("FREE");
            blog7.setBootstrapVersion("React / SCSS / Tailwind CSS / Vite");
            blog7.setDemoUrl("/templates/block-magazine/blog-7/index.html");
            blog7.setDownloadFile("");
            blog7.setPreviewImage("https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80");
            blog7.setVersion("1.0.0");
            blog7.setStatus("PUBLISHED");
            blog7.setPagesCount(14);
            blog7.setDownloadsCount(3800);
            blog7.setTags(new ArrayList<>(Arrays.asList("Journalism", "Opinion Rail", "Audio Player", "Bookmark Drawer", "Velocity Carousel")));
            templateRepository.save(blog7);
            logs.put("template_blog_7", "Created");

            // blog-8
            Template blog8 = new Template();
            blog8.setName("Xtra — Dopamine Maximalist Fashion & Culture Journal");
            blog8.setSlug("xtra-fashion");
            blog8.setDescription("A high-energy maximalist fashion, art, and dopamine culture journal. Features asymmetrical bento feeds, kinetic ribbon overlays, velocity text carousels, full-screen menus, and page transitions.");
            blog8.setCategory(blockMagazineCategory);
            blog8.setPrice(0.0);
            blog8.setTemplateType("FREE");
            blog8.setBootstrapVersion("React / Framer Motion / Tailwind / Vite");
            blog8.setDemoUrl("/templates/block-magazine/blog-8/index.html");
            blog8.setDownloadFile("");
            blog8.setPreviewImage("https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80");
            blog8.setVersion("1.0.0");
            blog8.setStatus("PUBLISHED");
            blog8.setPagesCount(10);
            blog8.setDownloadsCount(1750);
            blog8.setTags(new ArrayList<>(Arrays.asList("Maximalist", "Fashion Journal", "Dopamine Culture", "FullScreen Menu", "Velocity Text")));
            templateRepository.save(blog8);
            logs.put("template_blog_8", "Created");

            // blog-9 (Explorer)
            Template blog9 = new Template();
            blog9.setName("Explorer — Interactive Science & Field Notes");
            blog9.setSlug("blog-9");
            blog9.setDescription("A beautiful science and adventure storytelling journal. Features halftone reveals, depth carousels, immersive aura backdrops, and interactive article pages.");
            blog9.setCategory(blockMagazineCategory);
            blog9.setPrice(0.0);
            blog9.setTemplateType("FREE");
            blog9.setBootstrapVersion("React / Vite / CSS");
            blog9.setDemoUrl("/templates/block-magazine/blog-9/index.html");
            blog9.setDownloadFile("");
            blog9.setPreviewImage("https://images.unsplash.com/photo-1507633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80");
            blog9.setVersion("1.0.0");
            blog9.setStatus("PUBLISHED");
            blog9.setPagesCount(12);
            blog9.setDownloadsCount(1540);
            blog9.setTags(new ArrayList<>(Arrays.asList("Science Journal", "Halftone Reveal", "Aura Backdrop", "Storytelling", "Vite")));
            templateRepository.save(blog9);
            logs.put("template_blog_9", "Created");

            // blog-10 (Horizon Journal)
            Template blog10 = new Template();
            blog10.setName("Horizon Journal — Sunset Editorial");
            blog10.setSlug("blog-10");
            blog10.setDescription("An elegant editorial template featuring responsive full-screen drawer panels, custom search modals, bookmarks drawer, and sunset boulevard aura backgrounds.");
            blog10.setCategory(blockMagazineCategory);
            blog10.setPrice(0.0);
            blog10.setTemplateType("FREE");
            blog10.setBootstrapVersion("React / Tailwind / Vite / TS");
            blog10.setDemoUrl("/templates/block-magazine/blog-10/index.html");
            blog10.setDownloadFile("");
            blog10.setPreviewImage("https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80");
            blog10.setVersion("1.0.0");
            blog10.setStatus("PUBLISHED");
            blog10.setPagesCount(10);
            blog10.setDownloadsCount(1350);
            blog10.setTags(new ArrayList<>(Arrays.asList("Editorial", "Sunset Aura", "Drawer Panel", "Bookmarks Drawer", "React")));
            templateRepository.save(blog10);
            logs.put("template_blog_10", "Created");

            // blog-11 (AgriTech)
            Template blog11 = new Template();
            blog11.setName("AgriTech — Cybernetic Smart Farming Journal");
            blog11.setSlug("blog-11");
            blog11.setDescription("A high-tech agricultural research and smart farming science magazine. Features timeline explorers, interactive hotspots, bookmark drawers, and custom media grids.");
            blog11.setCategory(blockMagazineCategory);
            blog11.setPrice(0.0);
            blog11.setTemplateType("FREE");
            blog11.setBootstrapVersion("React / Tailwind / Vite / TS");
            blog11.setDemoUrl("/templates/block-magazine/blog-11/index.html");
            blog11.setDownloadFile("");
            blog11.setPreviewImage("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80");
            blog11.setVersion("1.0.0");
            blog11.setStatus("PUBLISHED");
            blog11.setPagesCount(15);
            blog11.setDownloadsCount(1680);
            blog11.setTags(new ArrayList<>(Arrays.asList("AgriTech", "Hotspots", "Timeline Explorer", "React", "TS")));
            templateRepository.save(blog11);
            logs.put("template_blog_11", "Created");
        }

        // 6. Seed Restaurant templates
        Category restaurantCategory = catMap.get("restaurant");
        if (restaurantCategory != null) {
            Template restaurant = new Template();
            restaurant.setName("Ember House — Artisan Dining & Gathering Space");
            restaurant.setSlug("ember-house");
            restaurant.setDescription("An elegant, full-featured artisan restaurant and gathering venue template. Features fine dining menu displays, inline reservation requests, slideshow lookbooks, team/chef highlights, and clean typography.");
            restaurant.setCategory(restaurantCategory);
            restaurant.setPrice(0.0);
            restaurant.setTemplateType("FREE");
            restaurant.setBootstrapVersion("React / Tailwind CSS / Motion");
            restaurant.setDemoUrl("/templates/restaurant/restaurant-1/index.html");
            restaurant.setDownloadFile("ember-house-restaurant.zip");
            restaurant.setPreviewImage("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80");
            restaurant.setVersion("1.0.0");
            restaurant.setStatus("PUBLISHED");
            restaurant.setPagesCount(8);
            restaurant.setDownloadsCount(2950);
            restaurant.setTags(new ArrayList<>(Arrays.asList("Fine Dining", "Artisan Kitchen", "Tailwind CSS", "Motion Animations", "Inline Reservation")));
            templateRepository.save(restaurant);
            logs.put("template_restaurant", "Created");

            // Seed Ember & Olive React template
            Template emberOliveReact = new Template();
            emberOliveReact.setName("Ember & Olive — Artisan Seasonal Restaurant");
            emberOliveReact.setSlug("ember-and-olive-react");
            emberOliveReact.setDescription("An elegant, premium React-refactored restaurant template featuring signature dish modals, scroll progress cursors, reservation sections, event highlights, and a gorgeous lightbox gallery.");
            emberOliveReact.setCategory(restaurantCategory);
            emberOliveReact.setPrice(0.0);
            emberOliveReact.setTemplateType("FREE");
            emberOliveReact.setBootstrapVersion("React / Tailwind CSS / Motion");
            emberOliveReact.setDemoUrl("/templates/restaurant/restaurant-2/index.html");
            emberOliveReact.setDownloadFile("ember-and-olive-restaurant-react.zip");
            emberOliveReact.setPreviewImage("https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80");
            emberOliveReact.setVersion("1.0.0");
            emberOliveReact.setStatus("PUBLISHED");
            emberOliveReact.setPagesCount(6);
            emberOliveReact.setDownloadsCount(9500);
            emberOliveReact.setTags(new ArrayList<>(Arrays.asList("Artisan Dining", "Signature Dish Modals", "Tailwind CSS", "Motion Animations", "Lightbox Gallery")));
            templateRepository.save(emberOliveReact);
            logs.put("template_ember_olive_react", "Created");

            // Seed Lumière React template
            Template lumiere = new Template();
            lumiere.setName("Lumière — Modern Culinary Concept Store");
            lumiere.setSlug("lumiere-restaurant");
            lumiere.setDescription("An immersive and cinematic restaurant concept showcase template. Features custom dynamic cursors, interactive floating dish hover cards, smooth scroll reveals, custom reservation modals, and structured storytelling panels.");
            lumiere.setCategory(restaurantCategory);
            lumiere.setPrice(0.0);
            lumiere.setTemplateType("FREE");
            lumiere.setBootstrapVersion("React / Tailwind CSS / Motion");
            lumiere.setDemoUrl("/templates/restaurant/restaurant-3/index.html");
            lumiere.setDownloadFile("lumiere-restaurant.zip");
            lumiere.setPreviewImage("https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80");
            lumiere.setVersion("1.0.0");
            lumiere.setStatus("PUBLISHED");
            lumiere.setPagesCount(1);
            lumiere.setDownloadsCount(1840);
            lumiere.setTags(new ArrayList<>(Arrays.asList("Immersive Concept", "Floating Dish Hover", "Tailwind CSS", "Motion Animations", "Custom Reservation Modal")));
            templateRepository.save(lumiere);
            logs.put("template_lumiere", "Created");

            // Seed Ember House Noire React template
            Template emberHouseNoire = new Template();
            emberHouseNoire.setName("Ember House Noire — Contemporary Garden Restaurant");
            emberHouseNoire.setSlug("ember-house-noire");
            emberHouseNoire.setDescription("A contemporary garden restaurant template styled in dark editorial aesthetics. Features botanical garden themes, interactive curatorial grids, testimonial slide bars, custom cursors, and reservation capture forms.");
            emberHouseNoire.setCategory(restaurantCategory);
            emberHouseNoire.setPrice(0.0);
            emberHouseNoire.setTemplateType("FREE");
            emberHouseNoire.setBootstrapVersion("React / CSS Modules / Vite");
            emberHouseNoire.setDemoUrl("/templates/restaurant/restaurant-4/index.html");
            emberHouseNoire.setDownloadFile("ember-house-noire.zip");
            emberHouseNoire.setPreviewImage("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80");
            emberHouseNoire.setVersion("1.0.0");
            emberHouseNoire.setStatus("PUBLISHED");
            emberHouseNoire.setPagesCount(1);
            emberHouseNoire.setDownloadsCount(1450);
            emberHouseNoire.setTags(new ArrayList<>(Arrays.asList("Garden Restaurant", "Dark Editorial", "React Components", "Curatorial Grid", "Custom Cursor")));
            templateRepository.save(emberHouseNoire);
            logs.put("template_ember_house_noire", "Created");

            // Seed NOIRE React template
            Template noire = new Template();
            noire.setName("NOIRE — Nocturnal Garden Bar & Grill");
            noire.setSlug("noire-restaurant");
            noire.setDescription("An premium, unconventional, and moody restaurant template featuring custom ambient audio lounge music, live fireplace hearth sections, dynamic parallax scroll effects, menu showcases, and reservation builders.");
            noire.setCategory(restaurantCategory);
            noire.setPrice(0.0);
            noire.setTemplateType("FREE");
            noire.setBootstrapVersion("React / TypeScript / Tailwind CSS");
            noire.setDemoUrl("/templates/restaurant/restaurant-5/index.html");
            noire.setDownloadFile("noire-restaurant.zip");
            noire.setPreviewImage("https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80");
            noire.setVersion("1.0.0");
            noire.setStatus("PUBLISHED");
            noire.setPagesCount(1);
            noire.setDownloadsCount(1200);
            noire.setTags(new ArrayList<>(Arrays.asList("Nocturnal Bar", "Ambient Audio", "React TypeScript", "Tailwind CSS v4", "Live Fire Hearth")));
            templateRepository.save(noire);
            logs.put("template_noire", "Created");

            // Seed Konkan Coast (restaurant-6)
            Template konkanCoast = new Template();
            konkanCoast.setName("Konkan Coast — Coastal Cuisine & Modern Table");
            konkanCoast.setSlug("konkan-coast");
            konkanCoast.setDescription("An elegant, premium React-refactored restaurant template featuring custom ambient audio lounge music, live fireplace hearth sections, dynamic parallax scroll effects, menu showcases, and reservation builders.");
            konkanCoast.setCategory(restaurantCategory);
            konkanCoast.setPrice(0.0);
            konkanCoast.setTemplateType("FREE");
            konkanCoast.setBootstrapVersion("React / TypeScript / Tailwind CSS");
            konkanCoast.setDemoUrl("/templates/restaurant/restaurant-6/index.html");
            konkanCoast.setDownloadFile("");
            konkanCoast.setPreviewImage("/templates/restaurant/restaurant-6/assets/images/hero.jpg");
            konkanCoast.setVersion("1.0.0");
            konkanCoast.setStatus("PUBLISHED");
            konkanCoast.setPagesCount(1);
            konkanCoast.setDownloadsCount(1650);
            konkanCoast.setTags(new ArrayList<>(Arrays.asList("Coastal Cuisine", "Ambient Audio", "React TypeScript", "Tailwind CSS", "Modern Table")));
            templateRepository.save(konkanCoast);
            logs.put("template_konkan_coast", "Created");

            // Seed Masala Atelier (restaurant-7)
            Template masalaAtelier = new Template();
            masalaAtelier.setName("Masala Atelier — Modern Indian Fusion");
            masalaAtelier.setSlug("masala-atelier");
            masalaAtelier.setDescription("A contemporary chic Indian fusion culinary studio in Mumbai. Asymmetric layouts, truffle paneer tikka, saffron cheesecake, and modern craft mocktails.");
            masalaAtelier.setCategory(restaurantCategory);
            masalaAtelier.setPrice(0.0);
            masalaAtelier.setTemplateType("FREE");
            masalaAtelier.setBootstrapVersion("React / JavaScript / Tailwind CSS");
            masalaAtelier.setDemoUrl("/templates/restaurant/restaurant-7/index.html");
            masalaAtelier.setDownloadFile("");
            masalaAtelier.setPreviewImage("https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80");
            masalaAtelier.setVersion("1.0.0");
            masalaAtelier.setStatus("PUBLISHED");
            masalaAtelier.setPagesCount(1);
            masalaAtelier.setDownloadsCount(1950);
            masalaAtelier.setTags(new ArrayList<>(Arrays.asList("Fusion", "Mumbai", "Minimalist", "Editorial")));
            templateRepository.save(masalaAtelier);
            logs.put("template_masala_atelier", "Created");

            // Seed Rang Mahal (restaurant-8)
            Template rangMahal = new Template();
            rangMahal.setName("Rang Mahal — Traditional Rajasthani");
            rangMahal.setSlug("rang-mahal");
            rangMahal.setDescription("A luxury Rajasthani heritage restaurant from Jaipur. Maroon-gold archways, traditional Dal Baati Churma dishes, and premium royal dining layouts.");
            rangMahal.setCategory(restaurantCategory);
            rangMahal.setPrice(0.0);
            rangMahal.setTemplateType("FREE");
            rangMahal.setBootstrapVersion("React / JavaScript / Tailwind CSS");
            rangMahal.setDemoUrl("/templates/restaurant/restaurant-8/index.html");
            rangMahal.setDownloadFile("");
            rangMahal.setPreviewImage("https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80");
            rangMahal.setVersion("1.0.0");
            rangMahal.setStatus("PUBLISHED");
            rangMahal.setPagesCount(1);
            rangMahal.setDownloadsCount(2200);
            rangMahal.setTags(new ArrayList<>(Arrays.asList("Rajasthani", "Jaipur", "Heritage", "Traditional")));
            templateRepository.save(rangMahal);
            logs.put("template_rang_mahal", "Created");

            // Seed The Royal Tandoor (restaurant-9)
            Template royalTandoor = new Template();
            royalTandoor.setName("The Royal Tandoor — Luxury North Indian");
            royalTandoor.setSlug("the-royal-tandoor");
            royalTandoor.setDescription("A high-end regal Mughlai dining experience located in New Delhi. Sophisticated gold-burgundy color palettes, buttery rich dal makhani, and premium tandoor grills.");
            royalTandoor.setCategory(restaurantCategory);
            royalTandoor.setPrice(0.0);
            royalTandoor.setTemplateType("FREE");
            royalTandoor.setBootstrapVersion("React / JavaScript / Tailwind CSS");
            royalTandoor.setDemoUrl("/templates/restaurant/restaurant-9/index.html");
            royalTandoor.setDownloadFile("");
            royalTandoor.setPreviewImage("https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80");
            royalTandoor.setVersion("1.0.0");
            royalTandoor.setStatus("PUBLISHED");
            royalTandoor.setPagesCount(1);
            royalTandoor.setDownloadsCount(2800);
            royalTandoor.setTags(new ArrayList<>(Arrays.asList("Mughlai", "Tandoori", "Delhi", "Luxury")));
            templateRepository.save(royalTandoor);
            logs.put("template_royal_tandoor", "Created");

            // Seed Southern Ember (restaurant-10)
            Template southernEmber = new Template();
            southernEmber.setName("Southern Ember — Modern South Indian");
            southernEmber.setSlug("southern-ember");
            southernEmber.setDescription("A premium modern South Indian culinary experience from Chennai. Features a golden ghee roast Dosa showcase, claypot idlis, filter coffee, and warm terracotta design accents.");
            southernEmber.setCategory(restaurantCategory);
            southernEmber.setPrice(0.0);
            southernEmber.setTemplateType("FREE");
            southernEmber.setBootstrapVersion("React / JavaScript / Tailwind CSS");
            southernEmber.setDemoUrl("/templates/restaurant/restaurant-10/index.html");
            southernEmber.setDownloadFile("");
            southernEmber.setPreviewImage("https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80");
            southernEmber.setVersion("1.0.0");
            southernEmber.setStatus("PUBLISHED");
            southernEmber.setPagesCount(1);
            southernEmber.setDownloadsCount(3100);
            southernEmber.setTags(new ArrayList<>(Arrays.asList("South Indian", "Traditional", "Bengaluru", "Vegetarian")));
            templateRepository.save(southernEmber);
            logs.put("template_southern_ember", "Created");
        }

        // Seed Travels templates
        Category travelsCategory = catMap.get("travels");
        if (travelsCategory != null) {
            Template travelverse = new Template();
            travelverse.setName("Travelverse — Interactive Travel & Trip Planner");
            travelverse.setSlug("travelverse");
            travelverse.setDescription("A premium, interactive React travel platform featuring dynamic page transitions, an interactive cyber world map, a custom trip builder, hotel booking cards, and stunning visual layouts.");
            travelverse.setCategory(travelsCategory);
            travelverse.setPrice(0.0);
            travelverse.setTemplateType("FREE");
            travelverse.setBootstrapVersion("React / JavaScript / Tailwind CSS");
            travelverse.setDemoUrl("/templates/travels/travel-1/index.html");
            travelverse.setDownloadFile("");
            travelverse.setPreviewImage("https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80");
            travelverse.setVersion("1.0.0");
            travelverse.setStatus("PUBLISHED");
            travelverse.setPagesCount(1);
            travelverse.setDownloadsCount(1850);
            travelverse.setTags(new ArrayList<>(Arrays.asList("Interactive Map", "GSAP", "Framer Motion", "Trip Planner", "Booking")));
            templateRepository.save(travelverse);
            logs.put("template_travelverse", "Created");

            // Seed Roamify (travel-2)
            Template travel2 = new Template();
            travel2.setName("Roamify — Immersive Travel & Tour Agency Portal");
            travel2.setSlug("roamify-travels");
            travel2.setDescription("A beautiful and fully-featured travel booking and tour discovery platform. Features custom-themed cursors, favorite wishlist managers, package filters, and travel guides.");
            travel2.setCategory(travelsCategory);
            travel2.setPrice(0.0);
            travel2.setTemplateType("FREE");
            travel2.setBootstrapVersion("React / Tailwind CSS / Motion");
            travel2.setDemoUrl("/templates/travels/travel-2/index.html");
            travel2.setDownloadFile("");
            travel2.setPreviewImage("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80");
            travel2.setVersion("1.0.0");
            travel2.setStatus("PUBLISHED");
            travel2.setPagesCount(15);
            travel2.setDownloadsCount(3100);
            travel2.setTags(new ArrayList<>(Arrays.asList("Tour Discovery", "Custom Cursors", "Wishlist Manager", "Vite", "Framer Motion")));
            templateRepository.save(travel2);
            logs.put("template_travel_2", "Created");

            // Seed Wayfarer (travel-3)
            Template travel3 = new Template();
            travel3.setName("Wayfarer — Immersive Parallax Adventure Guide");
            travel3.setSlug("wayfarer-adventure");
            travel3.setDescription("A stunning adventure and wild tourism showcase page. Features smooth scroll-driven parallax layouts, booking forms, testimonials, and category galleries.");
            travel3.setCategory(travelsCategory);
            travel3.setPrice(0.0);
            travel3.setTemplateType("FREE");
            travel3.setBootstrapVersion("React / Tailwind CSS / Vite");
            travel3.setDemoUrl("/templates/travels/travel-3/index.html");
            travel3.setDownloadFile("");
            travel3.setPreviewImage("https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80");
            travel3.setVersion("1.0.0");
            travel3.setStatus("PUBLISHED");
            travel3.setPagesCount(10);
            travel3.setDownloadsCount(2450);
            travel3.setTags(new ArrayList<>(Arrays.asList("Adventure Guide", "Parallax Scroll", "Testimonials", "Travel Showcase", "React")));
            templateRepository.save(travel3);
            logs.put("template_travel_3", "Created");

            // Seed Exploria (travel-4)
            Template travel4 = new Template();
            travel4.setName("Exploria — Modern Destination & Trekking Agency Hub");
            travel4.setSlug("exploria-trekking");
            travel4.setDescription("An elegant destination directory and trekking agency web application. Features package overlays, custom sliders, contact forms, and a responsive booking widget.");
            travel4.setCategory(travelsCategory);
            travel4.setPrice(0.0);
            travel4.setTemplateType("FREE");
            travel4.setBootstrapVersion("React / Tailwind CSS / Vite");
            travel4.setDemoUrl("/templates/travels/travel-4/index.html");
            travel4.setDownloadFile("");
            travel4.setPreviewImage("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80");
            travel4.setVersion("1.0.0");
            travel4.setStatus("PUBLISHED");
            travel4.setPagesCount(8);
            travel4.setDownloadsCount(1980);
            travel4.setTags(new ArrayList<>(Arrays.asList("Trekking", "Mountain Hiking", "Booking Widget", "Destination Grid", "React")));
            templateRepository.save(travel4);
            logs.put("template_travel_4", "Created");

            // Seed Wilderness (travel-5)
            Template travel5 = new Template();
            travel5.setName("Wilderness — Animated Outdoor Tourism Portal");
            travel5.setSlug("wilderness-tourism");
            travel5.setDescription("A beautiful animated outdoor, national park, and wilderness tourism platform. Features rich SVG animations, stats bands, destination overlays, and testimonial rails.");
            travel5.setCategory(travelsCategory);
            travel5.setPrice(0.0);
            travel5.setTemplateType("FREE");
            travel5.setBootstrapVersion("React / Framer Motion / Tailwind / Vite");
            travel5.setDemoUrl("/templates/travels/travel-5/index.html");
            travel5.setDownloadFile("");
            travel5.setPreviewImage("https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80");
            travel5.setVersion("1.0.0");
            travel5.setStatus("PUBLISHED");
            travel5.setPagesCount(6);
            travel5.setDownloadsCount(1650);
            travel5.setTags(new ArrayList<>(Arrays.asList("National Parks", "SVG Animations", "Outdoor Showcase", "Framer Motion", "Vite")));
            templateRepository.save(travel5);
            logs.put("template_travel_5", "Created");

            // Seed Nomad (travel-6)
            Template travel6 = new Template();
            travel6.setName("Nomad — Interactive Travel Planner & Booking Hub");
            travel6.setSlug("nomad-planner");
            travel6.setDescription("A premium interactive travel planning and itinerary creation platform. Features dynamic stats bands, reviews drawers, custom destination galleries, and newsletter CTAs.");
            travel6.setCategory(travelsCategory);
            travel6.setPrice(0.0);
            travel6.setTemplateType("FREE");
            travel6.setBootstrapVersion("React / Tailwind CSS / Vite");
            travel6.setDemoUrl("/templates/travels/travel-6/index.html");
            travel6.setDownloadFile("");
            travel6.setPreviewImage("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80");
            travel6.setVersion("1.0.0");
            travel6.setStatus("PUBLISHED");
            travel6.setPagesCount(12);
            travel6.setDownloadsCount(3400);
            travel6.setTags(new ArrayList<>(Arrays.asList("Travel Planner", "Itinerary Builder", "Dynamic Galleries", "Vite", "React")));
            templateRepository.save(travel6);
            logs.put("template_travel_6", "Created");

            // Seed Wanderlust Tales (travel-7)
            Template travel7 = new Template();
            travel7.setName("Wanderlust Tales — Elegant Travel & Hiking Blog Platform");
            travel7.setSlug("wanderlust-tales");
            travel7.setDescription("A beautiful destination blogging and hiking journal application. Features interactive maps, story lists, review grids, and pre-booking overlays.");
            travel7.setCategory(travelsCategory);
            travel7.setPrice(0.0);
            travel7.setTemplateType("FREE");
            travel7.setBootstrapVersion("React / Tailwind CSS / Vite");
            travel7.setDemoUrl("/templates/travels/travel-7/index.html");
            travel7.setDownloadFile("");
            travel7.setPreviewImage("https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80");
            travel7.setVersion("1.0.0");
            travel7.setStatus("PUBLISHED");
            travel7.setPagesCount(9);
            travel7.setDownloadsCount(2200);
            travel7.setTags(new ArrayList<>(Arrays.asList("Hiking Blog", "Blogging", "Hiking Journal", "Interactive Map", "React")));
            templateRepository.save(travel7);
            logs.put("template_travel_7", "Created");

            // Seed Aether (travel-8)
            Template travel8 = new Template();
            travel8.setName("Aether — Minimalist Luxury Travel & Resort Agency");
            travel8.setSlug("aether-resort");
            travel8.setDescription("A premium luxury travel agency and high-end resort booking platform. Features minimalist layouts, destination galleries, pricing packages, and review carousels.");
            travel8.setCategory(travelsCategory);
            travel8.setPrice(0.0);
            travel8.setTemplateType("FREE");
            travel8.setBootstrapVersion("React / Tailwind CSS / Vite");
            travel8.setDemoUrl("/templates/travels/travel-8/index.html");
            travel8.setDownloadFile("");
            travel8.setPreviewImage("https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80");
            travel8.setVersion("1.0.0");
            travel8.setStatus("PUBLISHED");
            travel8.setPagesCount(11);
            travel8.setDownloadsCount(2750);
            travel8.setTags(new ArrayList<>(Arrays.asList("Luxury Agency", "Minimalist Resort", "Pricing Packages", "Review Carousel", "Vite")));
            templateRepository.save(travel8);
            logs.put("template_travel_8", "Created");

            // Seed Exploria Pro (travel-9)
            Template travel9 = new Template();
            travel9.setName("Exploria Pro — Premium Hiking & Mountain Guide Showcase");
            travel9.setSlug("exploria-pro");
            travel9.setDescription("An advanced trekking, hiking, and mountain guide pre-booking platform. Features immersive background hero sections, interactive gear guides, and customer reviews.");
            travel9.setCategory(travelsCategory);
            travel9.setPrice(0.0);
            travel9.setTemplateType("FREE");
            travel9.setBootstrapVersion("React / Tailwind CSS / Vite");
            travel9.setDemoUrl("/templates/travels/travel-9/index.html");
            travel9.setDownloadFile("");
            travel9.setPreviewImage("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80");
            travel9.setVersion("1.0.0");
            travel9.setStatus("PUBLISHED");
            travel9.setPagesCount(10);
            travel9.setDownloadsCount(2100);
            travel9.setTags(new ArrayList<>(Arrays.asList("Mountain Guide", "Trekking Portal", "Gear Guide", "Reviews Grid", "React")));
            templateRepository.save(travel9);
            logs.put("template_travel_9", "Created");

            // Seed Adventure Parallax (travel-10)
            Template travel10 = new Template();
            travel10.setName("Adventure Parallax — Immersive Parallax Outdoor Journal");
            travel10.setSlug("adventure-parallax");
            travel10.setDescription("Next-generation adventure travel journal. Features dynamic scroll-driven parallax layouts, background environmental loops, booking widgets, and rich animations.");
            travel10.setCategory(travelsCategory);
            travel10.setPrice(0.0);
            travel10.setTemplateType("FREE");
            travel10.setBootstrapVersion("React / Tailwind CSS / Framer Motion / Vite");
            travel10.setDemoUrl("/templates/travels/travel-10/index.html");
            travel10.setDownloadFile("");
            travel10.setPreviewImage("https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80");
            travel10.setVersion("1.0.0");
            travel10.setStatus("PUBLISHED");
            travel10.setPagesCount(7);
            travel10.setDownloadsCount(1890);
            travel10.setTags(new ArrayList<>(Arrays.asList("Adventure Journal", "Parallax Scroll", "Environmental Loops", "Framer Motion", "Vite")));
            templateRepository.save(travel10);
            logs.put("template_travel_10", "Created");
        }

        // 7. Seed Ecommerce templates
        Category ecommerceCategory = catMap.get("ecommerce");
        if (ecommerceCategory != null) {


            // Seed Soft Glow template
            Template softGlow = new Template();
            softGlow.setName("Soft Glow — Clean Beauty & Skin-First Hydration");
            softGlow.setSlug("soft-glow");
            softGlow.setDescription("A high-end Next.js beauty and skincare storefront featuring dewy-gloss styles, peptide bundle builders, marquee notification bars, interactive review boards, and smooth scroll animations.");
            softGlow.setCategory(ecommerceCategory);
            softGlow.setPrice(0.0);
            softGlow.setTemplateType("FREE");
            softGlow.setBootstrapVersion("Next.js / React / Tailwind CSS");
            softGlow.setDemoUrl("/templates/ecommerce/ecommerce-1/index.html");
            softGlow.setDownloadFile("soft-glow-beauty.zip");
            softGlow.setPreviewImage("https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80");
            softGlow.setVersion("1.0.0");
            softGlow.setStatus("PUBLISHED");
            softGlow.setPagesCount(3);
            softGlow.setDownloadsCount(2450);
            softGlow.setTags(new ArrayList<>(Arrays.asList("Skincare", "Beauty Shop", "Next.js Store", "Tailwind CSS")));
            templateRepository.save(softGlow);
            logs.put("template_softglow", "Created");

            // Seed AURA template
            Template aura = new Template();
            aura.setName("AURA — Premium Acoustic & Luxury Archive");
            aura.setSlug("aura-commerce");
            aura.setDescription("An editorial, dark-themed e-commerce experience dedicated to premium acoustics, luxury timepieces, and structural apparel. Built with interactive cart drawers, wishlist triggers, and gold gradient finishes.");
            aura.setCategory(ecommerceCategory);
            aura.setPrice(0.0);
            aura.setTemplateType("FREE");
            aura.setBootstrapVersion("React / React Router / CSS Modules");
            aura.setDemoUrl("/templates/ecommerce/ecommerce-6/index.html");
            aura.setDownloadFile("aura-acoustic.zip");
            aura.setPreviewImage("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80");
            aura.setVersion("1.0.0");
            aura.setStatus("PUBLISHED");
            aura.setPagesCount(8);
            aura.setDownloadsCount(3100);
            aura.setTags(new ArrayList<>(Arrays.asList("Luxury Archive", "Premium Acoustics", "React Store", "Wishlist System")));
            templateRepository.save(aura);
            logs.put("template_aura", "Created");

            // Seed AURELIA template
            Template aurelia = new Template();
            aurelia.setName("AURELIA — Luxury Jewelry & Emerald Archive");
            aurelia.setSlug("aurelia-commerce");
            aurelia.setDescription("A premium, dark emerald & gold themed e-commerce template for high-end luxury jewelry, diamonds, and bridal collections. Styled with custom drawers, search overlay, and elegant product filters.");
            aurelia.setCategory(ecommerceCategory);
            aurelia.setPrice(0.0);
            aurelia.setTemplateType("FREE");
            aurelia.setBootstrapVersion("React / React Router / Vanilla CSS");
            aurelia.setDemoUrl("/templates/ecommerce/ecommerce-2/index.html");
            aurelia.setDownloadFile("aurelia-jewelry.zip");
            aurelia.setPreviewImage("https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80");
            aurelia.setVersion("1.0.0");
            aurelia.setStatus("PUBLISHED");
            aurelia.setPagesCount(9);
            aurelia.setDownloadsCount(1420);
            aurelia.setTags(new ArrayList<>(Arrays.asList("Jewelry Store", "Emerald Collection", "React Store", "Luxury Premium")));
            templateRepository.save(aurelia);
            logs.put("template_aurelia", "Created");



            // Seed ToyVerse template
            Template toyverse = new Template();
            toyverse.setName("ToyVerse — Interactive Toy & Hobby Store");
            toyverse.setSlug("toy-store");
            toyverse.setDescription("A vibrant and interactive online storefront designed for modern toy stores and hobby shops. Features a custom 3D flying toy canvas, whimsical category lists, responsive cart drawer, and interactive tracking.");
            toyverse.setCategory(ecommerceCategory);
            toyverse.setPrice(0.0);
            toyverse.setTemplateType("FREE");
            toyverse.setBootstrapVersion("React / TypeScript / GSAP");
            toyverse.setDemoUrl("/templates/ecommerce/ecommerce-8/index.html");
            toyverse.setDownloadFile("toyverse-hobby.zip");
            toyverse.setPreviewImage("https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=800&q=80");
            toyverse.setVersion("1.0.0");
            toyverse.setStatus("PUBLISHED");
            toyverse.setPagesCount(8);
            toyverse.setDownloadsCount(3200);
            toyverse.setTags(new ArrayList<>(Arrays.asList("Toy Store", "GSAP Animations", "3D Whimsical Layout", "Hobby Shop")));
            templateRepository.save(toyverse);
            logs.put("template_toyverse", "Created");

            // Seed NOVA template
            Template nova = new Template();
            nova.setName("NOVA — Futuristic Device & Ecosystem Store");
            nova.setSlug("nova-store");
            nova.setDescription("A futuristic and clean electronic product storefront dedicated to premium devices and smart ecosystem components. Features automated command search overlays, compare modals, interactive specifications, and cart drawers.");
            nova.setCategory(ecommerceCategory);
            nova.setPrice(0.0);
            nova.setTemplateType("FREE");
            nova.setBootstrapVersion("React / Lucide Icons / Vanilla CSS");
            nova.setDemoUrl("/templates/ecommerce/ecommerce-3/index.html");
            nova.setDownloadFile("nova-store.zip");
            nova.setPreviewImage("/templates/ecommerce/ecommerce-3/images/nova_x1_front.webp");
            nova.setVersion("1.0.0");
            nova.setStatus("PUBLISHED");
            nova.setPagesCount(4);
            nova.setDownloadsCount(4100);
            nova.setTags(new ArrayList<>(Arrays.asList("Futuristic Store", "Ecosystem Shop", "Lucide Icons", "Command Search", "Compare Modal")));
            templateRepository.save(nova);
            logs.put("template_nova", "Created");

            // Seed Orvana template
            Template orvana = new Template();
            orvana.setName("Orvana — Premium Design & Lifestyle Concept Store");
            orvana.setSlug("orvana-store");
            orvana.setDescription("A cinematic and immersive e-commerce storefront for lifestyle and fashion concept brands. Features rich animations, cinematic video hero headers, product quick view modals, interactive sorting, and detailed item configuration options.");
            orvana.setCategory(ecommerceCategory);
            orvana.setPrice(0.0);
            orvana.setTemplateType("FREE");
            orvana.setBootstrapVersion("React / Framer Motion / TypeScript");
            orvana.setDemoUrl("/templates/ecommerce/ecommerce-4/index.html");
            orvana.setDownloadFile("orvana-store.zip");
            orvana.setPreviewImage("https://images.unsplash.com/photo-1441984969733-d4df530a7731?auto=format&fit=crop&w=800&q=80");
            orvana.setVersion("1.0.0");
            orvana.setStatus("PUBLISHED");
            orvana.setPagesCount(14);
            orvana.setDownloadsCount(5120);
            orvana.setTags(new ArrayList<>(Arrays.asList("Immersive Concept Store", "Lifestyle Shop", "Framer Motion", "Mega Menu", "Interactive Sorting")));
            templateRepository.save(orvana);
            logs.put("template_orvana", "Created");

            // Seed AUREL template
            Template aurel = new Template();
            aurel.setName("AUREL — Minimalist Fashion & Lifestyle Store");
            aurel.setSlug("aurel-store");
            aurel.setDescription("A minimalist, structured e-commerce storefront for organic fashion and lifestyle labels. Features smooth scroll reveals, custom cursors, floating filter panels, and color/size cart controls.");
            aurel.setCategory(ecommerceCategory);
            aurel.setPrice(0.0);
            aurel.setTemplateType("FREE");
            aurel.setBootstrapVersion("React / TypeScript / Vanilla CSS");
            aurel.setDemoUrl("/templates/ecommerce/ecommerce-5/index.html");
            aurel.setDownloadFile("aurel-store.zip");
            aurel.setPreviewImage("https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop");
            aurel.setVersion("1.0.0");
            aurel.setStatus("PUBLISHED");
            aurel.setPagesCount(10);
            aurel.setDownloadsCount(3820);
            aurel.setTags(new ArrayList<>(Arrays.asList("Minimalist Fashion", "Structured Design", "Custom Cursors", "Scroll Reveals", "Color Size Selectors")));
            templateRepository.save(aurel);
            logs.put("template_aurel", "Created");

            // Seed BLUECORE (Ecommerce-9)
            Template bluecoreEcom = new Template();
            bluecoreEcom.setName("BLUECORE — Futuristic Device & Electronics Showroom");
            bluecoreEcom.setSlug("bluecore-showroom");
            bluecoreEcom.setDescription("A high-end, futuristic e-commerce showroom for devices and electronics. Features holographic UI styling, detailed product catalogs across 8 categories, interactive specification panels, and a sleek dark theme.");
            bluecoreEcom.setCategory(ecommerceCategory);
            bluecoreEcom.setPrice(0.0);
            bluecoreEcom.setTemplateType("FREE");
            bluecoreEcom.setBootstrapVersion("React / Framer Motion / Vanilla CSS");
            bluecoreEcom.setDemoUrl("/templates/ecommerce/ecommerce-9/index.html");
            bluecoreEcom.setDownloadFile("");
            bluecoreEcom.setPreviewImage("https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80");
            bluecoreEcom.setVersion("1.0.0");
            bluecoreEcom.setStatus("PUBLISHED");
            bluecoreEcom.setPagesCount(12);
            bluecoreEcom.setDownloadsCount(4500);
            bluecoreEcom.setTags(new ArrayList<>(Arrays.asList("Futuristic UI", "Electronics Showroom", "React", "Framer Motion", "Dark Theme")));
            templateRepository.save(bluecoreEcom);
            logs.put("template_bluecore_ecom", "Created");

            // Seed E-Commerce Hub (Ecommerce-10)
            Template ecomHub = new Template();
            ecomHub.setName("E-Commerce Hub — Modern Kids & Family Fashion Store");
            ecomHub.setSlug("ecom-hub-fashion");
            ecomHub.setDescription("A modern, responsive e-commerce storefront dedicated to family fashion and kids wear. Features animated custom cursors, product quick-view modals, search overlays, a wishlist manager, and a Spring Boot backend.");
            ecomHub.setCategory(ecommerceCategory);
            ecomHub.setPrice(0.0);
            ecomHub.setTemplateType("FREE");
            ecomHub.setBootstrapVersion("React / Tailwind / Spring Boot");
            ecomHub.setDemoUrl("/templates/ecommerce/ecommerce-10/index.html");
            ecomHub.setDownloadFile("");
            ecomHub.setPreviewImage("https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80");
            ecomHub.setVersion("1.0.0");
            ecomHub.setStatus("PUBLISHED");
            ecomHub.setPagesCount(18);
            ecomHub.setDownloadsCount(3600);
            ecomHub.setTags(new ArrayList<>(Arrays.asList("Kids Fashion", "Family Wear", "Animated Cursor", "Spring Boot")));
            templateRepository.save(ecomHub);
            logs.put("template_ecom_hub", "Created");

            // Seed Maison de L'Éclat (ecommerce-7)
            Template ecomMaison = new Template();
            ecomMaison.setName("Maison de L'Éclat — Premium High-Fashion Boutique & E-Commerce Hub");
            ecomMaison.setSlug("maison-eclat-ecommerce");
            ecomMaison.setDescription("A premium high-fashion boutique and e-commerce portal. Features custom glassmorphic navigation, product showcase grids, dynamic cart and checkout flows, wishlist managers, and order tracking.");
            ecomMaison.setCategory(ecommerceCategory);
            ecomMaison.setPrice(0.0);
            ecomMaison.setTemplateType("FREE");
            ecomMaison.setBootstrapVersion("React / Tailwind CSS / Vite");
            ecomMaison.setDemoUrl("/templates/ecommerce/ecommerce-7/index.html");
            ecomMaison.setDownloadFile("");
            ecomMaison.setPreviewImage("https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80");
            ecomMaison.setVersion("1.0.0");
            ecomMaison.setStatus("PUBLISHED");
            ecomMaison.setPagesCount(10);
            ecomMaison.setDownloadsCount(1950);
            ecomMaison.setTags(new ArrayList<>(Arrays.asList("High Fashion", "Boutique Shop", "Glassmorphic", "Order Tracking", "Vite")));
            templateRepository.save(ecomMaison);
            logs.put("template_maison_eclat_ecommerce", "Created");
        }

        // 8. Seed Coming Soon templates
        Category commingSoonCategory = catMap.get("comming-soon");
        if (commingSoonCategory != null) {
            Template comingSoon = new Template();
            comingSoon.setName("Orange 16  -  Coming Soon Template");
            comingSoon.setSlug("coming-soon-template");
            comingSoon.setDescription("A new experience of performance, photography and design is about to arrive. Explore the revolutionary Orange 16 with White and Black Titanium craft, O18 Pro chip, slow-motion video, and exploded engineering architecture.");
            comingSoon.setCategory(commingSoonCategory);
            comingSoon.setPrice(0.0);
            comingSoon.setTemplateType("FREE");
            comingSoon.setBootstrapVersion("HTML5 / Vanilla CSS");
            comingSoon.setDemoUrl("/templates/comming-soon/coming-soon-template/index.html");
            comingSoon.setPreviewImage("/templates/comming-soon/coming-soon-template/orange-cover.jpg");
            comingSoon.setVersion("1.0");
            comingSoon.setStatus("PUBLISHED");
            comingSoon.setPagesCount(1);
            comingSoon.setDownloadsCount(1200);
            comingSoon.setTags(new ArrayList<>(Arrays.asList("Orange 16", "Coming Soon", "Titanium Design")));
            templateRepository.save(comingSoon);

            Template novaSoon = new Template();
            novaSoon.setName("NOVA X1  -  Cinematic Coming Soon Template");
            novaSoon.setSlug("nova-x1-template");
            novaSoon.setDescription("A production-quality futuristic automotive showroom template. Explore the NOVA X1 electric SUV with interactive 3D WebGL visuals, scroll-driven camera reveals, dynamic paint customizer, performance analytics, and pre-booking capture.");
            novaSoon.setCategory(commingSoonCategory);
            novaSoon.setPrice(0.0);
            novaSoon.setTemplateType("FREE");
            novaSoon.setBootstrapVersion("React / Three.js / GSAP");
            novaSoon.setDemoUrl("/templates/comming-soon/cm-2/index.html");
            novaSoon.setPreviewImage("/templates/comming-soon/cm-2/car-cover.jpg");
            novaSoon.setVersion("1.0");
            novaSoon.setStatus("PUBLISHED");
            novaSoon.setPagesCount(1);
            novaSoon.setDownloadsCount(1850);
            novaSoon.setTags(new ArrayList<>(Arrays.asList("3D Showroom", "NOVA MOTORS", "Automotive", "GSAP ScrollTrigger")));
            templateRepository.save(novaSoon);

            Template auraSoon = new Template();
            auraSoon.setName("AURA SKY RESIDENCES  -  Premium Cinematic Building Launch Template");
            auraSoon.setSlug("aura-sky-template");
            auraSoon.setDescription("Create a modern, premium, cinematic coming soon website for luxury real-estate projects. Features continuous slow-motion building rendering background loops, Lenis smooth scrolling, architectural specification grids, and modular registration capture forms.");
            auraSoon.setCategory(commingSoonCategory);
            auraSoon.setPrice(0.0);
            auraSoon.setTemplateType("FREE");
            auraSoon.setBootstrapVersion("HTML5 / Tailwind CSS");
            auraSoon.setDemoUrl("/templates/comming-soon/cm-3/index.html");
            auraSoon.setPreviewImage("/templates/comming-soon/cm-3/buliding-jpg/ezgif-frame-001.jpg");
            auraSoon.setVersion("1.0");
            auraSoon.setStatus("PUBLISHED");
            auraSoon.setPagesCount(1);
            auraSoon.setDownloadsCount(950);
            auraSoon.setTags(new ArrayList<>(Arrays.asList("Real Estate", "Luxury Skyline", "Lenis Smooth Scroll", "Audio Engine")));
            templateRepository.save(auraSoon);

            Template botanicalSoon = new Template();
            botanicalSoon.setName("BOTANICAL STUDIES  -  Heritage Folio Book Launch Template");
            botanicalSoon.setSlug("botanical-studies-template");
            botanicalSoon.setDescription("An exquisite collector’s edition book coming soon website template. Features interactive 9-frame video background engine, live millisecond-precision countdown timer, Linnean author showcase, antiquarian Web Audio synthesizer, botanical plate inspector modal, and responsive laptop/tab/phone preview.");
            botanicalSoon.setCategory(commingSoonCategory);
            botanicalSoon.setPrice(0.0);
            botanicalSoon.setTemplateType("FREE");
            botanicalSoon.setBootstrapVersion("HTML5 / Tailwind / Vanilla JS");
            botanicalSoon.setDemoUrl("/templates/comming-soon/cm-4/index.html");
            botanicalSoon.setPreviewImage("/templates/comming-soon/cm-4/botanical-cover.jpg");
            botanicalSoon.setVersion("1.0");
            botanicalSoon.setStatus("PUBLISHED");
            botanicalSoon.setPagesCount(1);
            botanicalSoon.setDownloadsCount(1420);
            botanicalSoon.setTags(new ArrayList<>(Arrays.asList("Book Launch", "Heritage Folio", "Live Countdown", "Video Background", "Audio Synthesizer")));
            templateRepository.save(botanicalSoon);

            Template watchSoon = new Template();
            watchSoon.setName("AURELIA CHRONOS  -  18K Luxury Golden Watch Launch Template");
            watchSoon.setSlug("aurelia-chronos-template");
            watchSoon.setDescription("A luxurious 18k solid gold watch launch template. Features weightless floating antigravity 3D physics, interactive 360-degree studio orbit rotation, fluted crown and sunburst guilloché macro lens inspectors, 28,800 vph mechanical escapement audio synthesizer, and VIP allocation reservation capture.");
            watchSoon.setCategory(commingSoonCategory);
            watchSoon.setPrice(0.0);
            watchSoon.setTemplateType("FREE");
            watchSoon.setBootstrapVersion("HTML5 / Tailwind CSS / Vanilla JS");
            watchSoon.setDemoUrl("/templates/comming-soon/cm-5/index.html");
            watchSoon.setPreviewImage("/templates/comming-soon/cm-5/watch-hero.jpg");
            watchSoon.setVersion("1.0");
            watchSoon.setStatus("PUBLISHED");
            watchSoon.setPagesCount(1);
            watchSoon.setDownloadsCount(1680);
            watchSoon.setTags(new ArrayList<>(Arrays.asList("Golden Watch", "Antigravity 3D", "Haute Horlogerie", "360 Orbit", "Live Countdown")));
            templateRepository.save(watchSoon);
            logs.put("template_watch_soon", "Created");
        }

        // Seed Hotel templates
        Category hotelCategory = catMap.get("hotel");
        if (hotelCategory != null) {
            Template auraHavenResorts = new Template();
            auraHavenResorts.setName("Aura Haven Resorts — Luxury Sanctuary Resort");
            auraHavenResorts.setSlug("aura-haven-resorts");
            auraHavenResorts.setDescription("A luxury boutique sanctuary resort landing page. Features responsive editorial slideshows, immersive accommodation galleries, interactive basalt thermal spa sections, and fine dining reservation flow.");
            auraHavenResorts.setCategory(hotelCategory);
            auraHavenResorts.setPrice(0.0);
            auraHavenResorts.setTemplateType("FREE");
            auraHavenResorts.setBootstrapVersion("HTML5 / CSS3 / Vanilla JS");
            auraHavenResorts.setDemoUrl("/templates/hotel/hotel-1/index.html");
            auraHavenResorts.setDownloadFile("");
            auraHavenResorts.setPreviewImage("https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80");
            auraHavenResorts.setVersion("1.0.0");
            auraHavenResorts.setStatus("PUBLISHED");
            auraHavenResorts.setPagesCount(1);
            auraHavenResorts.setDownloadsCount(1850);
            auraHavenResorts.setTags(new ArrayList<>(Arrays.asList("Resort", "Luxury Hotel", "Boutique", "Reservation", "Editorial Slider")));
            templateRepository.save(auraHavenResorts);
            logs.put("template_aurahaven_hotel", "Created");

            // Seed Aethelred Resort (hotel-2)
            Template aethelredResort = new Template();
            aethelredResort.setName("Aethelred Resort — Luxury Hotel & Lodging");
            aethelredResort.setSlug("aethelred-resort");
            aethelredResort.setDescription("Aethelred Resort is an original luxury hotel and resort website template featuring booking bar, room showcase, amenities list, dining highlights, testimonials, and gallery.");
            aethelredResort.setCategory(hotelCategory);
            aethelredResort.setPrice(0.0);
            aethelredResort.setTemplateType("FREE");
            aethelredResort.setBootstrapVersion("HTML5 / CSS3 / Vanilla JS");
            aethelredResort.setDemoUrl("/templates/hotel/hotel-2/index.html");
            aethelredResort.setDownloadFile("");
            aethelredResort.setPreviewImage("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80");
            aethelredResort.setVersion("1.0.0");
            aethelredResort.setStatus("PUBLISHED");
            aethelredResort.setPagesCount(1);
            aethelredResort.setDownloadsCount(1900);
            aethelredResort.setTags(new ArrayList<>(Arrays.asList("Hotel", "Luxury Resort", "Lodging", "Booking", "Gallery")));
            templateRepository.save(aethelredResort);
            logs.put("template_aethelred_hotel", "Created");

            // Seed Aurelia Velvet Obsidian Resort (hotel-3)
            Template aureliaResort = new Template();
            aureliaResort.setName("Aurelia Velvet Obsidian Resort — Ultra-Luxury Sanctuary");
            aureliaResort.setSlug("aurelia-velvet-obsidian-resort");
            aureliaResort.setDescription("A private refuge offering luxury architectural pods crafted from volcanic stone, glass canopies, and polished teakwood.");
            aureliaResort.setCategory(hotelCategory);
            aureliaResort.setPrice(0.0);
            aureliaResort.setTemplateType("FREE");
            aureliaResort.setBootstrapVersion("HTML5 / CSS3 / Vanilla JS");
            aureliaResort.setDemoUrl("/templates/hotel/hotel-3/index.html");
            aureliaResort.setDownloadFile("");
            aureliaResort.setPreviewImage("https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80");
            aureliaResort.setVersion("1.0.0");
            aureliaResort.setStatus("PUBLISHED");
            aureliaResort.setPagesCount(1);
            aureliaResort.setDownloadsCount(1750);
            aureliaResort.setTags(new ArrayList<>(Arrays.asList("Hotel", "Ultra-Luxury", "Sanctuary", "Volcanic Stone", "Teakwood")));
            templateRepository.save(aureliaResort);
            logs.put("template_aurelia_hotel", "Created");

            // Seed Solitude Haven (hotel-4)
            Template solitudeHaven = new Template();
            solitudeHaven.setName("Solitude Haven — Luxury Forest Sanctuary");
            solitudeHaven.setSlug("solitude-haven");
            solitudeHaven.setDescription("An elegant, full-featured luxury forest sanctuary and wellness retreat template. Features bento-style accommodation cards, immersive experience sections, smooth scroll indicates, and responsive layouts.");
            solitudeHaven.setCategory(hotelCategory);
            solitudeHaven.setPrice(0.0);
            solitudeHaven.setTemplateType("FREE");
            solitudeHaven.setBootstrapVersion("HTML5 / CSS3 / Vanilla JS");
            solitudeHaven.setDemoUrl("/templates/hotel/hotel-4/index.html");
            solitudeHaven.setDownloadFile("");
            solitudeHaven.setPreviewImage("https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80");
            solitudeHaven.setVersion("1.0.0");
            solitudeHaven.setStatus("PUBLISHED");
            solitudeHaven.setPagesCount(1);
            solitudeHaven.setDownloadsCount(1490);
            solitudeHaven.setTags(new ArrayList<>(Arrays.asList("Hotel", "Forest Sanctuary", "Wellness", "Bento Cards", "Scroll Indicator")));
            templateRepository.save(solitudeHaven);
            logs.put("template_solitude_hotel", "Created");

            // Seed Aurelia Haven (hotel-7)
            Template aureliaHaven = new Template();
            aureliaHaven.setName("Aurelia Haven — Luxury Resort & Sanctuary");
            aureliaHaven.setSlug("aurelia-haven");
            aureliaHaven.setDescription("A complete premium luxury resort and hotel sanctuary template featuring clifftop parallax headers, interactive booking widgets, responsive room selectors, masonry filtering galleries with lightboxes, count-up statistics, and custom mixology menus.");
            aureliaHaven.setCategory(hotelCategory);
            aureliaHaven.setPrice(0.0);
            aureliaHaven.setTemplateType("FREE");
            aureliaHaven.setBootstrapVersion("React / Tailwind CSS / Motion");
            aureliaHaven.setDemoUrl("/templates/hotel/hotel-7/index.html");
            aureliaHaven.setDownloadFile("");
            aureliaHaven.setPreviewImage("https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80");
            aureliaHaven.setVersion("1.0.0");
            aureliaHaven.setStatus("PUBLISHED");
            aureliaHaven.setPagesCount(11);
            aureliaHaven.setDownloadsCount(1400);
            aureliaHaven.setTags(new ArrayList<>(Arrays.asList("Hotel", "Luxury Resort", "Sanctuary", "React", "Tailwind CSS", "Framer Motion")));
            templateRepository.save(aureliaHaven);
            logs.put("template_aurelia_haven_hotel", "Created");

            // Seed Suara Ulu (hotel-5)
            Template travelSuaraUlu = new Template();
            travelSuaraUlu.setName("Suara Ulu — Ultra-Luxury Wellness & Spa Resort");
            travelSuaraUlu.setSlug("suara-ulu-resort");
            travelSuaraUlu.setDescription("An ultra-luxury coastal sanctuary resort perched on the cliffs of Uluwatu, Bali. Features Italian luxury editorial typography, Obsidian Sanctuary dark mode, top-arched photo frames, interactive booking engine with live bill calculation, Michelin-level dining, and Ayurvedic spa reservations.");
            travelSuaraUlu.setCategory(hotelCategory);
            travelSuaraUlu.setPrice(0.0);
            travelSuaraUlu.setTemplateType("FREE");
            travelSuaraUlu.setBootstrapVersion("HTML5 / CSS3 / Vanilla JS");
            travelSuaraUlu.setDemoUrl("/templates/hotel/hotel-5/index.html");
            travelSuaraUlu.setDownloadFile("");
            travelSuaraUlu.setPreviewImage("https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80");
            travelSuaraUlu.setVersion("1.0.0");
            travelSuaraUlu.setStatus("PUBLISHED");
            travelSuaraUlu.setPagesCount(1);
            travelSuaraUlu.setDownloadsCount(1450);
            travelSuaraUlu.setTags(new ArrayList<>(Arrays.asList("Resort", "Uluwatu", "Wellness", "Vanilla JS", "Dark Mode")));
            templateRepository.save(travelSuaraUlu);
            logs.put("template_suara_ulu_hotel", "Created");

            // Seed VillaBliss (hotel-6)
            Template travelVillaBliss = new Template();
            travelVillaBliss.setName("VillaBliss — Luxury Mediterranean Villa & Exclusive Resort");
            travelVillaBliss.setSlug("villabliss-luxury-resort");
            travelVillaBliss.setDescription("An ultra-premium Mediterranean luxury villa and resort template. Features an editorial architectural layout, Spacious and cozy room category showcase, panoramic twilight reviews banner, curated experiences, and real-time interactive booking engine.");
            travelVillaBliss.setCategory(hotelCategory);
            travelVillaBliss.setPrice(0.0);
            travelVillaBliss.setTemplateType("FREE");
            travelVillaBliss.setBootstrapVersion("HTML5 / CSS3 / Vanilla JS");
            travelVillaBliss.setDemoUrl("/templates/hotel/hotel-6/index.html");
            travelVillaBliss.setDownloadFile("");
            travelVillaBliss.setPreviewImage("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80");
            travelVillaBliss.setVersion("1.0.0");
            travelVillaBliss.setStatus("PUBLISHED");
            travelVillaBliss.setPagesCount(1);
            travelVillaBliss.setDownloadsCount(1550);
            travelVillaBliss.setTags(new ArrayList<>(Arrays.asList("Mediterranean", "Villa Resort", "Architectural", "Vite", "Vanilla JS")));
            templateRepository.save(travelVillaBliss);
            logs.put("template_villabliss_hotel", "Created");

            // Seed Ananthara Heritage Hotel (hotel-8)
            Template travelAnanthara = new Template();
            travelAnanthara.setName("Ananthara Heritage Hotel Mewari Palace");
            travelAnanthara.setSlug("ananthara-heritage-hotel");
            travelAnanthara.setDescription("Ananthara Heritage Hotel is a ultra-luxury traditional resort situated in the heart of Udaipur. Features interactive card scanning chamber entry, overview slides, fine dining, spa, courtyard pools, and luxury booking overlays.");
            travelAnanthara.setCategory(hotelCategory);
            travelAnanthara.setPrice(0.0);
            travelAnanthara.setTemplateType("FREE");
            travelAnanthara.setBootstrapVersion("React / Modern CSS / Vite");
            travelAnanthara.setDemoUrl("/templates/hotel/hotel-8/index.html");
            travelAnanthara.setDownloadFile("");
            travelAnanthara.setPreviewImage("https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80");
            travelAnanthara.setVersion("1.0.0");
            travelAnanthara.setStatus("PUBLISHED");
            travelAnanthara.setPagesCount(1);
            travelAnanthara.setDownloadsCount(1600);
            travelAnanthara.setTags(new ArrayList<>(Arrays.asList("Traditional Hotel", "Udaipur Palace", "Card Scan", "Modals", "React")));
            templateRepository.save(travelAnanthara);
            logs.put("template_ananthara_hotel", "Created");

            // Seed HavenLuxe (hotel-9)
            Template travelHavenLuxe = new Template();
            travelHavenLuxe.setName("HavenLuxe Retreat & Sanctuary — Luxury Boutique Resort");
            travelHavenLuxe.setSlug("havenluxe-retreat");
            travelHavenLuxe.setDescription("An exclusive sanctuary carved into the coastline, where architecture merges with nature and time slows to a whisper. Features responsive editorial slideshows, immersive accommodation galleries, interactive basalt thermal spa sections, and fine dining reservation flow.");
            travelHavenLuxe.setCategory(hotelCategory);
            travelHavenLuxe.setPrice(0.0);
            travelHavenLuxe.setTemplateType("FREE");
            travelHavenLuxe.setBootstrapVersion("HTML5 / CSS3 / Vanilla JS");
            travelHavenLuxe.setDemoUrl("/templates/hotel/hotel-9/index.html");
            travelHavenLuxe.setDownloadFile("");
            travelHavenLuxe.setPreviewImage("https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80");
            travelHavenLuxe.setVersion("1.0.0");
            travelHavenLuxe.setStatus("PUBLISHED");
            travelHavenLuxe.setPagesCount(1);
            travelHavenLuxe.setDownloadsCount(1350);
            travelHavenLuxe.setTags(new ArrayList<>(Arrays.asList("Boutique Resort", "Coastline Sanctuary", "Slideshows", "Thermal Spa", "Vanilla JS")));
            templateRepository.save(travelHavenLuxe);
            logs.put("template_havenluxe_hotel", "Created");

            // Seed Aetheria Haven (hotel-10)
            Template travelAetheria = new Template();
            travelAetheria.setName("Aetheria Haven Resorts — Weightless Luxury, Timeless Solitude");
            travelAetheria.setSlug("aetheria-haven-resorts");
            travelAetheria.setDescription("A luxury boutique sanctuary resort landing page. Features a floating booking widget, interactive guest popup, suite class selector, responsive editorial slideshows, and immersive accommodation galleries.");
            travelAetheria.setCategory(hotelCategory);
            travelAetheria.setPrice(0.0);
            travelAetheria.setTemplateType("FREE");
            travelAetheria.setBootstrapVersion("HTML5 / CSS3 / Vanilla JS");
            travelAetheria.setDemoUrl("/templates/hotel/hotel-10/index.html");
            travelAetheria.setDownloadFile("");
            travelAetheria.setPreviewImage("https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80");
            travelAetheria.setVersion("1.0.0");
            travelAetheria.setStatus("PUBLISHED");
            travelAetheria.setPagesCount(1);
            travelAetheria.setDownloadsCount(1250);
            travelAetheria.setTags(new ArrayList<>(Arrays.asList("Boutique Sanctuary", "Suite Selector", "Slideshows", "Floating Widget", "Vanilla JS")));
            templateRepository.save(travelAetheria);
            logs.put("template_aetheria_hotel", "Created");
        }

        // 9. Seed Education templates
        Category educationCategory = catMap.get("education");
        if (educationCategory != null) {
            Template skillora = new Template();
            skillora.setName("Skillora — Online Education & Learning Platform");
            skillora.setSlug("skillora-education");
            skillora.setDescription("Skillora is a modern education platform offering practical courses, university programs, industry mentorship, and career certifications.");
            skillora.setCategory(educationCategory);
            skillora.setPrice(0.0);
            skillora.setTemplateType("FREE");
            skillora.setBootstrapVersion("React / TypeScript / Tailwind CSS");
            skillora.setDemoUrl("/templates/education/education-1/index.html");
            skillora.setDownloadFile("skillora-education.zip");
            skillora.setPreviewImage("https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80");
            skillora.setVersion("1.0.0");
            skillora.setStatus("PUBLISHED");
            skillora.setPagesCount(8);
            skillora.setDownloadsCount(3900);
            skillora.setTags(new ArrayList<>(Arrays.asList("E-Learning", "Online Courses", "University Programs", "React TypeScript", "Bento Grid")));
            templateRepository.save(skillora);
            logs.put("template_skillora", "Created");
        }

        // 10. Seed Events templates
        Category eventsCategory = catMap.get("events");
        if (eventsCategory != null) {
            Template eventora = new Template();
            eventora.setName("Eventora — Premier Tech & Leadership Summit Launch Platform");
            eventora.setSlug("eventora-event");
            eventora.setDescription("A premium tech and leadership event launching platform. Features dynamic schedules, speaker registries, digital ticket cards, countdown timers, and reservation capture modals.");
            eventora.setCategory(eventsCategory);
            eventora.setPrice(0.0);
            eventora.setTemplateType("FREE");
            eventora.setBootstrapVersion("React / Tailwind / Plus Jakarta Sans");
            eventora.setDemoUrl("/templates/events/events-1/index.html");
            eventora.setDownloadFile("");
            eventora.setPreviewImage("https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80");
            eventora.setVersion("1.0.0");
            eventora.setStatus("PUBLISHED");
            eventora.setPagesCount(12);
            eventora.setDownloadsCount(3200);
            eventora.setTags(new ArrayList<>(Arrays.asList("Event Platform", "Speakers Registry", "Schedule Drawer", "Digital Ticket", "Countdown")));
            templateRepository.save(eventora);
            logs.put("template_eventora", "Created");



            // Seed CyberNexus (Events-2)
            Template cybernexus = new Template();
            cybernexus.setName("CYBERNEXUS — Global Technology & Intelligence Summit");
            cybernexus.setSlug("cybernexus-event");
            cybernexus.setDescription("A premium, high-tech event landing page for technology and AI conferences. Features interactive scroll spies, customized cursor indicators, schedule registries, and ticket reservation forms.");
            cybernexus.setCategory(eventsCategory);
            cybernexus.setPrice(0.0);
            cybernexus.setTemplateType("FREE");
            cybernexus.setBootstrapVersion("React / Vanilla CSS / Vite");
            cybernexus.setDemoUrl("/templates/events/events-2/index.html");
            cybernexus.setDownloadFile("");
            cybernexus.setPreviewImage("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80");
            cybernexus.setVersion("1.0.0");
            cybernexus.setStatus("PUBLISHED");
            cybernexus.setPagesCount(8);
            cybernexus.setDownloadsCount(2800);
            cybernexus.setTags(new ArrayList<>(Arrays.asList("Technology Summit", "AI Conference", "Scroll Spy", "Dark Theme", "Registration Form")));
            templateRepository.save(cybernexus);
            logs.put("template_cybernexus_event", "Created");

            // Seed Vertex (Events-3)
            Template vertex = new Template();
            vertex.setName("VERTEX — Robotics & Quantum Tech Summit");
            vertex.setSlug("vertex-event");
            vertex.setDescription("A premium, light/dark responsive robotics and quantum technology event template. Features quantum style grid animations, particle canvas backgrounds, dynamic tracks, speaker panels, and a sleek modern dark mode design.");
            vertex.setCategory(eventsCategory);
            vertex.setPrice(0.0);
            vertex.setTemplateType("FREE");
            vertex.setBootstrapVersion("React / Space Grotesk / Vite");
            vertex.setDemoUrl("/templates/events/events-3/index.html");
            vertex.setDownloadFile("");
            vertex.setPreviewImage("https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80");
            vertex.setVersion("1.0.0");
            vertex.setStatus("PUBLISHED");
            vertex.setPagesCount(10);
            vertex.setDownloadsCount(2900);
            vertex.setTags(new ArrayList<>(Arrays.asList("Robotics", "Quantum Tech", "Particle BG", "Light Dark Theme", "Vite")));
            templateRepository.save(vertex);
            logs.put("template_vertex_event", "Created");

            // Seed Iron Ascent (Events-4)
            Template ironAscent = new Template();
            ironAscent.setName("VORTEX FORGE FITNESS — IRON ASCENT 2026");
            ironAscent.setSlug("iron-ascent-event");
            ironAscent.setDescription("A premium athletic and fitness challenge event launching template. Features trainer portfolios, class schedules, program cards, equipment showcases, pricing tables, and registration capture.");
            ironAscent.setCategory(eventsCategory);
            ironAscent.setPrice(0.0);
            ironAscent.setTemplateType("FREE");
            ironAscent.setBootstrapVersion("React / Tailwind / Montserrat");
            ironAscent.setDemoUrl("/templates/events/events-4/index.html");
            ironAscent.setDownloadFile("");
            ironAscent.setPreviewImage("https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80");
            ironAscent.setVersion("1.0.0");
            ironAscent.setStatus("PUBLISHED");
            ironAscent.setPagesCount(15);
            ironAscent.setDownloadsCount(2700);
            ironAscent.setTags(new ArrayList<>(Arrays.asList("Fitness Event", "Gym Portal", "Workout Schedule", "Trainer Profiles", "Tailwind")));
            templateRepository.save(ironAscent);
            logs.put("template_ironascent_event", "Created");

            // Seed AquaVexa (Events-5)
            Template aquavexa = new Template();
            aquavexa.setName("AQUAVEXA AUTO SPA — Premium Car Wash & Detailing Studio");
            aquavexa.setSlug("aquavexa-autospa");
            aquavexa.setDescription("A premium automotive wash, detailing, and paint studio platform. Features services grids, pricing cards, equipment showcases, paint studios, booking panels, and a reactive dark mode design.");
            aquavexa.setCategory(eventsCategory);
            aquavexa.setPrice(0.0);
            aquavexa.setTemplateType("FREE");
            aquavexa.setBootstrapVersion("React / Tailwind CSS / Vite");
            aquavexa.setDemoUrl("/templates/events/events-5/index.html");
            aquavexa.setDownloadFile("");
            aquavexa.setPreviewImage("https://images.unsplash.com/photo-1520340356584-f9917d1eed69?auto=format&fit=crop&w=800&q=80");
            aquavexa.setVersion("1.0.0");
            aquavexa.setStatus("PUBLISHED");
            aquavexa.setPagesCount(12);
            aquavexa.setDownloadsCount(2100);
            aquavexa.setTags(new ArrayList<>(Arrays.asList("Car Wash", "Auto Detailing", "Booking Studio", "Paint Studio", "React")));
            templateRepository.save(aquavexa);
            logs.put("template_aquavexa_autospa", "Created");

            // Seed Innovate SF (Events-6)
            Template innovateSf = new Template();
            innovateSf.setName("Innovate SF — Global Tech Summit & Startup Launchpad");
            innovateSf.setSlug("innovate-sf");
            innovateSf.setDescription("A premium tech and leadership event launching platform. Features dynamic schedules, speaker registries, digital ticket cards, countdown timers, and reservation capture modals.");
            innovateSf.setCategory(eventsCategory);
            innovateSf.setPrice(0.0);
            innovateSf.setTemplateType("FREE");
            innovateSf.setBootstrapVersion("React / Tailwind / Plus Jakarta Sans");
            innovateSf.setDemoUrl("/templates/events/events-6/index.html");
            innovateSf.setDownloadFile("");
            innovateSf.setPreviewImage("https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80");
            innovateSf.setVersion("1.0.0");
            innovateSf.setStatus("PUBLISHED");
            innovateSf.setPagesCount(12);
            innovateSf.setDownloadsCount(3200);
            innovateSf.setTags(new ArrayList<>(Arrays.asList("Event Platform", "Speakers Registry", "Schedule Drawer", "Digital Ticket", "Countdown")));
            templateRepository.save(innovateSf);
            logs.put("template_innovatesf", "Created");

            // Seed Quantum Sphere (Events-7)
            Template quantumSphere = new Template();
            quantumSphere.setName("Quantum Sphere — Physics & Deep Tech Colloquium");
            quantumSphere.setSlug("quantum-sphere");
            quantumSphere.setDescription("A premium, high-tech event landing page for technology and AI conferences. Features interactive scroll spies, customized cursor indicators, schedule registries, and ticket reservation forms.");
            quantumSphere.setCategory(eventsCategory);
            quantumSphere.setPrice(0.0);
            quantumSphere.setTemplateType("FREE");
            quantumSphere.setBootstrapVersion("React / Vanilla CSS / Vite");
            quantumSphere.setDemoUrl("/templates/events/events-7/index.html");
            quantumSphere.setDownloadFile("");
            quantumSphere.setPreviewImage("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80");
            quantumSphere.setVersion("1.0.0");
            quantumSphere.setStatus("PUBLISHED");
            quantumSphere.setPagesCount(8);
            quantumSphere.setDownloadsCount(2800);
            quantumSphere.setTags(new ArrayList<>(Arrays.asList("Technology Summit", "AI Conference", "Scroll Spy", "Dark Theme", "Registration Form")));
            templateRepository.save(quantumSphere);
            logs.put("template_quantumsphere", "Created");

            // Seed Aero Ascent (Events-8)
            Template aeroAscent = new Template();
            aeroAscent.setName("Aero Ascent — Vertical Flight & Drone Expo");
            aeroAscent.setSlug("aero-ascent");
            aeroAscent.setDescription("A premium, light/dark responsive robotics and quantum technology event template. Features quantum style grid animations, particle canvas backgrounds, dynamic tracks, speaker panels, and a sleek modern dark mode design.");
            aeroAscent.setCategory(eventsCategory);
            aeroAscent.setPrice(0.0);
            aeroAscent.setTemplateType("FREE");
            aeroAscent.setBootstrapVersion("React / Space Grotesk / Vite");
            aeroAscent.setDemoUrl("/templates/events/events-8/index.html");
            aeroAscent.setDownloadFile("");
            aeroAscent.setPreviewImage("https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80");
            aeroAscent.setVersion("1.0.0");
            aeroAscent.setStatus("PUBLISHED");
            aeroAscent.setPagesCount(10);
            aeroAscent.setDownloadsCount(2900);
            aeroAscent.setTags(new ArrayList<>(Arrays.asList("Robotics", "Quantum Tech", "Particle BG", "Light Dark Theme", "Vite")));
            templateRepository.save(aeroAscent);
            logs.put("template_aeroascent", "Created");

            // Seed Apex Fit (Events-9)
            Template apexFit = new Template();
            apexFit.setName("Apex Fit — Global Hybrid Functional Fitness Showcase");
            apexFit.setSlug("apex-fit");
            apexFit.setDescription("A premium athletic and fitness challenge event launching template. Features trainer portfolios, class schedules, program cards, equipment showcases, pricing tables, and registration capture.");
            apexFit.setCategory(eventsCategory);
            apexFit.setPrice(0.0);
            apexFit.setTemplateType("FREE");
            apexFit.setBootstrapVersion("React / Tailwind / Montserrat");
            apexFit.setDemoUrl("/templates/events/events-9/index.html");
            apexFit.setDownloadFile("");
            apexFit.setPreviewImage("https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80");
            apexFit.setVersion("1.0.0");
            apexFit.setStatus("PUBLISHED");
            apexFit.setPagesCount(15);
            apexFit.setDownloadsCount(2700);
            apexFit.setTags(new ArrayList<>(Arrays.asList("Fitness Event", "Gym Portal", "Workout Schedule", "Trainer Profiles", "Tailwind")));
            templateRepository.save(apexFit);
            logs.put("template_apexfit", "Created");

            // Seed Hydro Shine (Events-10)
            Template hydroShine = new Template();
            hydroShine.setName("Hydro Shine — Premier Car Detailing & Wash Studio Platform");
            hydroShine.setSlug("hydro-shine");
            hydroShine.setDescription("A premium automotive wash, detailing, and paint studio platform. Features services grids, pricing cards, equipment showcases, paint studios, booking panels, and a reactive dark mode design.");
            hydroShine.setCategory(eventsCategory);
            hydroShine.setPrice(0.0);
            hydroShine.setTemplateType("FREE");
            hydroShine.setBootstrapVersion("React / Tailwind CSS / Vite");
            hydroShine.setDemoUrl("/templates/events/events-10/index.html");
            hydroShine.setDownloadFile("");
            hydroShine.setPreviewImage("https://images.unsplash.com/photo-1520340356584-f9917d1eed69?auto=format&fit=crop&w=800&q=80");
            hydroShine.setVersion("1.0.0");
            hydroShine.setStatus("PUBLISHED");
            hydroShine.setPagesCount(12);
            hydroShine.setDownloadsCount(2100);
            hydroShine.setTags(new ArrayList<>(Arrays.asList("Car Wash", "Auto Detailing", "Booking Studio", "Paint Studio", "React")));
            templateRepository.save(hydroShine);
            logs.put("template_hydroshine", "Created");
        }

        // 11. Seed Construction templates
        Category constructionCategory = catMap.get("construction");
        if (constructionCategory != null) {
            Template advConstruction = new Template();
            advConstruction.setName("Advanced Construction — Heavy Civil Engineering & Crane Infrastructure");
            advConstruction.setSlug("advanced-construction");
            advConstruction.setDescription("A premium commercial construction and heavy engineering landing page. Features customized pricing cost-estimators, milestone trackers, service portfolios, and a full dark mode design system.");
            advConstruction.setCategory(constructionCategory);
            advConstruction.setPrice(0.0);
            advConstruction.setTemplateType("FREE");
            advConstruction.setBootstrapVersion("React / Outfit / Plus Jakarta Sans");
            advConstruction.setDemoUrl("/templates/construction/construction-1/index.html");
            advConstruction.setDownloadFile("");
            advConstruction.setPreviewImage("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80");
            advConstruction.setVersion("1.0.0");
            advConstruction.setStatus("PUBLISHED");
            advConstruction.setPagesCount(8);
            advConstruction.setDownloadsCount(3400);
            advConstruction.setTags(new ArrayList<>(Arrays.asList("Civil Engineering", "Construction Estimator", "Heavy Infrastructure", "React", "Dark Mode")));
            templateRepository.save(advConstruction);
            logs.put("template_advanced_construction", "Created");

            // Seed BuildHub Constructions (construction-2)
            Template buildhubConst = new Template();
            buildhubConst.setName("BuildHub Constructions — Premier Architecture & 3D BIM");
            buildhubConst.setSlug("buildhub-construction");
            buildhubConst.setDescription("A premium React architectural and construction design studio template. Features an interactive 3D digital twin BIM model preview, cost calculators, structural project showcases, and a responsive theme toggle.");
            buildhubConst.setCategory(constructionCategory);
            buildhubConst.setPrice(0.0);
            buildhubConst.setTemplateType("FREE");
            buildhubConst.setBootstrapVersion("React / Three.js / Lucide");
            buildhubConst.setDemoUrl("/templates/construction/construction-2/index.html");
            buildhubConst.setDownloadFile("");
            buildhubConst.setPreviewImage("https://images.unsplash.com/photo-1503387762-592dec58ef4e?auto=format&fit=crop&w=800&q=80");
            buildhubConst.setVersion("1.0.0");
            buildhubConst.setStatus("PUBLISHED");
            buildhubConst.setPagesCount(12);
            buildhubConst.setDownloadsCount(2900);
            buildhubConst.setTags(new ArrayList<>(Arrays.asList("3D BIM Model", "Three.js", "Architecture", "Construction Estimator", "React")));
            templateRepository.save(buildhubConst);
            logs.put("template_buildhub_construction", "Created");

            // Seed Futurix Constructions (construction-3)
            Template futurixConst = new Template();
            futurixConst.setName("Futurix Constructions — 3D BIM Technology");
            futurixConst.setSlug("futurix-constructions");
            futurixConst.setDescription("Next-generation commercial construction and BIM engineering landing page with real-time 3D telemetry, parametric cost estimator, live statistics, and Java Spring Boot REST backend.");
            futurixConst.setCategory(constructionCategory);
            futurixConst.setPrice(0.0);
            futurixConst.setTemplateType("FREE");
            futurixConst.setBootstrapVersion("React / Three.js / Glassmorphism");
            futurixConst.setDemoUrl("/templates/construction/construction-3/index.html");
            futurixConst.setDownloadFile("");
            futurixConst.setPreviewImage("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80");
            futurixConst.setVersion("1.0.0");
            futurixConst.setStatus("PUBLISHED");
            futurixConst.setPagesCount(1);
            futurixConst.setDownloadsCount(1750);
            futurixConst.setTags(new ArrayList<>(Arrays.asList("3D Telemetry", "Three.js", "BIM Technology", "React", "Glassmorphism")));
            templateRepository.save(futurixConst);
            logs.put("template_futurix_construction", "Created");

            // Seed Knack Design Build (construction-4)
            Template knackConst = new Template();
            knackConst.setName("Knack Design Build — Bespoke Architecture");
            knackConst.setSlug("knack-design-build");
            knackConst.setDescription("A luxury architecture and bespoke general contracting landing page. Features dynamic villa portfolios, 3D BIM integration methodology showcases, on-time milestone stats, and custom consultation request flow.");
            knackConst.setCategory(constructionCategory);
            knackConst.setPrice(0.0);
            knackConst.setTemplateType("FREE");
            knackConst.setBootstrapVersion("React / Tailwind CSS / Ambient");
            knackConst.setDemoUrl("/templates/construction/construction-4/index.html");
            knackConst.setDownloadFile("");
            knackConst.setPreviewImage("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80");
            knackConst.setVersion("1.0.0");
            knackConst.setStatus("PUBLISHED");
            knackConst.setPagesCount(1);
            knackConst.setDownloadsCount(1200);
            knackConst.setTags(new ArrayList<>(Arrays.asList("Luxury Architecture", "Contracting", "Vite", "React", "Milestones")));
            templateRepository.save(knackConst);
            logs.put("template_knack_construction", "Created");

            // Seed Bespoke Lakefront Villas (construction-5)
            Template swissVillas = new Template();
            swissVillas.setName("Bespoke Lakefront Villas — Swiss Design Studio");
            swissVillas.setSlug("swiss-lakefront-villas");
            swissVillas.setDescription("A luxury lakefront residential and bespoke architectural configurator landing page. Features interactive 3D style customizer, geo-coordinates villa catalog, and RESTful configurator server.");
            swissVillas.setCategory(constructionCategory);
            swissVillas.setPrice(0.0);
            swissVillas.setTemplateType("FREE");
            swissVillas.setBootstrapVersion("React / Tailwind CSS / Configurator");
            swissVillas.setDemoUrl("/templates/construction/construction-5/index.html");
            swissVillas.setDownloadFile("");
            swissVillas.setPreviewImage("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80");
            swissVillas.setVersion("1.0.0");
            swissVillas.setStatus("PUBLISHED");
            swissVillas.setPagesCount(1);
            swissVillas.setDownloadsCount(1380);
            swissVillas.setTags(new ArrayList<>(Arrays.asList("Lakefront Villas", "Configurator", "Swiss Design", "React", "Water Reflect")));
            templateRepository.save(swissVillas);
            logs.put("template_swiss_construction", "Created");

            // Seed Arcstone Architects (construction-6)
            Template arcstoneConst = new Template();
            arcstoneConst.setName("Arcstone Architects — Luxury Residential Design");
            arcstoneConst.setSlug("arcstone-architects");
            arcstoneConst.setDescription("A luxury residential and commercial architecture studio landing page. Features scroll-bound video transformations, custom lightboxes, bento portfolios, and RESTful project server.");
            arcstoneConst.setCategory(constructionCategory);
            arcstoneConst.setPrice(0.0);
            arcstoneConst.setTemplateType("FREE");
            arcstoneConst.setBootstrapVersion("React / Vanilla CSS / Scroll Video");
            arcstoneConst.setDemoUrl("/templates/construction/construction-6/index.html");
            arcstoneConst.setDownloadFile("");
            arcstoneConst.setPreviewImage("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80");
            arcstoneConst.setVersion("1.0.0");
            arcstoneConst.setStatus("PUBLISHED");
            arcstoneConst.setPagesCount(1);
            arcstoneConst.setDownloadsCount(1650);
            arcstoneConst.setTags(new ArrayList<>(Arrays.asList("Arcstone Design", "Scroll Video", "Architecture", "React", "Vanilla CSS")));
            templateRepository.save(arcstoneConst);
            logs.put("template_arcstone_construction", "Created");

            // Seed Aurelius Renovations (construction-7)
            Template aureliusRen = new Template();
            aureliusRen.setName("Aurelius — High-End Historical Renovation & Heritage Atelier");
            aureliusRen.setSlug("aurelius-renovation");
            aureliusRen.setDescription("A premium, high-end renovation and heritage contracting atelier template. Features interactive restoration comparisons, craft galleries, masonry portfolios, and consultation booking.");
            aureliusRen.setCategory(constructionCategory);
            aureliusRen.setPrice(0.0);
            aureliusRen.setTemplateType("FREE");
            aureliusRen.setBootstrapVersion("HTML5 / CSS3 / Vanilla JS");
            aureliusRen.setDemoUrl("/templates/construction/construction-7/index.html");
            aureliusRen.setDownloadFile("");
            aureliusRen.setPreviewImage("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80");
            aureliusRen.setVersion("1.0.0");
            aureliusRen.setStatus("PUBLISHED");
            aureliusRen.setPagesCount(1);
            aureliusRen.setDownloadsCount(1600);
            aureliusRen.setTags(new ArrayList<>(Arrays.asList("Historical Renovation", "Heritage", "Static HTML", "Atelier")));
            templateRepository.save(aureliusRen);
            logs.put("template_aurelius_construction", "Created");

            // Seed BuildX Biophilic (construction-8)
            Template buildxBio = new Template();
            buildxBio.setName("BuildX — Sustainable Biophilic Architecture & Living Facades");
            buildxBio.setSlug("buildx-biophilic");
            buildxBio.setDescription("A sustainable architecture landing page featuring living biophilic facade simulators, aerodynamic estimators, telemetry HUDs, and biophilic design specification cards.");
            buildxBio.setCategory(constructionCategory);
            buildxBio.setPrice(0.0);
            buildxBio.setTemplateType("FREE");
            buildxBio.setBootstrapVersion("React / Tailwind CSS / Vite");
            buildxBio.setDemoUrl("/templates/construction/construction-8/index.html");
            buildxBio.setDownloadFile("");
            buildxBio.setPreviewImage("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80");
            buildxBio.setVersion("1.0.0");
            buildxBio.setStatus("PUBLISHED");
            buildxBio.setPagesCount(1);
            buildxBio.setDownloadsCount(1980);
            buildxBio.setTags(new ArrayList<>(Arrays.asList("Biophilic", "Facades", "Vite", "React", "Green Architecture")));
            templateRepository.save(buildxBio);
            logs.put("template_buildx_construction", "Created");

            // Seed Chronos Brutalist (construction-9)
            Template chronosBrut = new Template();
            chronosBrut.setName("Chronos — Monolithic Brutalist Architecture & Concrete Engineering");
            chronosBrut.setSlug("chronos-brutalist");
            chronosBrut.setDescription("A brutalist architectural and engineering showcase template. Features custom brutalist typography, concrete telemetry estimation simulators, weather atmosphere dashboards, and live HUD trackers.");
            chronosBrut.setCategory(constructionCategory);
            chronosBrut.setPrice(0.0);
            chronosBrut.setTemplateType("FREE");
            chronosBrut.setBootstrapVersion("React / Tailwind CSS / Vite");
            chronosBrut.setDemoUrl("/templates/construction/construction-9/index.html");
            chronosBrut.setDownloadFile("");
            chronosBrut.setPreviewImage("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80");
            chronosBrut.setVersion("1.0.0");
            chronosBrut.setStatus("PUBLISHED");
            chronosBrut.setPagesCount(1);
            chronosBrut.setDownloadsCount(2200);
            chronosBrut.setTags(new ArrayList<>(Arrays.asList("Brutalist", "Concrete", "Vite", "React", "Monolithic")));
            templateRepository.save(chronosBrut);
            logs.put("template_chronos_construction", "Created");

            // Seed Aerovision Skyrise (construction-10)
            Template aerovisionSky = new Template();
            aerovisionSky.setName("Aerovision — Kinetic Skyrise & Aerodynamic Architecture");
            aerovisionSky.setSlug("aerovision-skyrise");
            aerovisionSky.setDescription("Next-generation aerodynamic skyrise portal. Features biophilic 3D kinetic facade simulators, aerodynamic estimators, machinery fleet telemetry hubs, and wind tunnel streamlined overlays.");
            aerovisionSky.setCategory(constructionCategory);
            aerovisionSky.setPrice(0.0);
            aerovisionSky.setTemplateType("FREE");
            aerovisionSky.setBootstrapVersion("React / Tailwind CSS / Vite");
            aerovisionSky.setDemoUrl("/templates/construction/construction-10/index.html");
            aerovisionSky.setDownloadFile("");
            aerovisionSky.setPreviewImage("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80");
            aerovisionSky.setVersion("1.0.0");
            aerovisionSky.setStatus("PUBLISHED");
            aerovisionSky.setPagesCount(1);
            aerovisionSky.setDownloadsCount(3100);
            aerovisionSky.setTags(new ArrayList<>(Arrays.asList("Supertall", "Kinetic Facade", "Vite", "React", "Wind Tunnel")));
            templateRepository.save(aerovisionSky);
            logs.put("template_aerovision_construction", "Created");
        }

        // Seed Education templates (1 to 10)
        educationCategory = catMap.get("education");
        if (educationCategory != null) {
            // education-2
            Template edu2 = new Template();
            edu2.setName("MySchool — Parent Inquiry & K-12 School Portal");
            edu2.setSlug("myschool-parent-portal");
            edu2.setDescription("K-12 school portal featuring parent inquiry panels, progress logs, fee configurators, class curriculum schedules, and event boards.");
            edu2.setCategory(educationCategory);
            edu2.setPrice(0.0);
            edu2.setTemplateType("FREE");
            edu2.setBootstrapVersion("HTML5 / Vanilla CSS / JS");
            edu2.setDemoUrl("/templates/education/education-2/index.html");
            edu2.setDownloadFile("");
            edu2.setPreviewImage("https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80");
            edu2.setVersion("1.0.0");
            edu2.setStatus("PUBLISHED");
            edu2.setPagesCount(12);
            edu2.setDownloadsCount(2100);
            edu2.setTags(new ArrayList<>(Arrays.asList("School", "Parents", "Curriculum", "Static HTML", "CSS")));
            templateRepository.save(edu2);
            logs.put("template_education_2", "Created");

            // education-3
            Template edu3 = new Template();
            edu3.setName("Modern University — Premium Academic & Research Hub");
            edu3.setSlug("modern-university-hub");
            edu3.setDescription("A premium modern university portal with interactive research timelines, department directories, and full admission customizer panels.");
            edu3.setCategory(educationCategory);
            edu3.setPrice(0.0);
            edu3.setTemplateType("FREE");
            edu3.setBootstrapVersion("HTML5 / Tailwind CSS / Vanilla JS");
            edu3.setDemoUrl("/templates/education/education-3/index.html");
            edu3.setDownloadFile("");
            edu3.setPreviewImage("https://images.unsplash.com/photo-1541178735483-a7bbd74c9e59?auto=format&fit=crop&w=800&q=80");
            edu3.setVersion("1.0.0");
            edu3.setStatus("PUBLISHED");
            edu3.setPagesCount(1);
            edu3.setDownloadsCount(1890);
            edu3.setTags(new ArrayList<>(Arrays.asList("University", "Research", "Academics", "Static HTML", "Tailwind")));
            templateRepository.save(edu3);
            logs.put("template_education_3", "Created");

            // education-4
            Template edu4 = new Template();
            edu4.setName("EduNexus — Next-Gen Student Portal & Campus Management");
            edu4.setSlug("edunexus-student-portal");
            edu4.setDescription("Next-generation academic dashboard and campus administration hub. Features slot booking customizers, department catalogues, and advanced student registries.");
            edu4.setCategory(educationCategory);
            edu4.setPrice(0.0);
            edu4.setTemplateType("FREE");
            edu4.setBootstrapVersion("React 19 / Vite / Tailwind CSS");
            edu4.setDemoUrl("/templates/education/education-4/index.html");
            edu4.setDownloadFile("");
            edu4.setPreviewImage("https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80");
            edu4.setVersion("1.0.0");
            edu4.setStatus("PUBLISHED");
            edu4.setPagesCount(1);
            edu4.setDownloadsCount(3200);
            edu4.setTags(new ArrayList<>(Arrays.asList("Student Portal", "Campus", "Management", "React", "Tailwind")));
            templateRepository.save(edu4);
            logs.put("template_education_4", "Created");

            // education-5
            Template edu5 = new Template();
            edu5.setName("MelodyCademy — Music Academy Portal");
            edu5.setSlug("melodycademy-music-portal");
            edu5.setDescription("A premium, responsive music school and learning platform featuring interactive course registries, instrument catalogs, private class inquiry, and event timelines.");
            edu5.setCategory(educationCategory);
            edu5.setPrice(0.0);
            edu5.setTemplateType("FREE");
            edu5.setBootstrapVersion("React / Vite / CSS");
            edu5.setDemoUrl("/templates/education/education-5/index.html");
            edu5.setDownloadFile("");
            edu5.setPreviewImage("https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80");
            edu5.setVersion("1.0.0");
            edu5.setStatus("PUBLISHED");
            edu5.setPagesCount(1);
            edu5.setDownloadsCount(1850);
            edu5.setTags(new ArrayList<>(Arrays.asList("Music School", "Instrument Catalog", "React", "Vite")));
            templateRepository.save(edu5);
            logs.put("template_education_5", "Created");

            // education-6
            Template edu6 = new Template();
            edu6.setName("BusinessCollege — Professional Academic Landing Page");
            edu6.setSlug("business-college-landing");
            edu6.setDescription("A clean, professional education and college landing page template with inquiry lead capture, testimonials carousel, and key highlights.");
            edu6.setCategory(educationCategory);
            edu6.setPrice(0.0);
            edu6.setTemplateType("FREE");
            edu6.setBootstrapVersion("React / Vite / CSS");
            edu6.setDemoUrl("/templates/education/education-6/index.html");
            edu6.setDownloadFile("");
            edu6.setPreviewImage("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80");
            edu6.setVersion("1.0.0");
            edu6.setStatus("PUBLISHED");
            edu6.setPagesCount(1);
            edu6.setDownloadsCount(1900);
            edu6.setTags(new ArrayList<>(Arrays.asList("College", "Landing Page", "Lead Capture", "React", "Vite")));
            templateRepository.save(edu6);
            logs.put("template_education_6", "Created");

            // education-7
            Template edu7 = new Template();
            edu7.setName("Westridge — University Multi-page Portal");
            edu7.setSlug("westridge-university-portal");
            edu7.setDescription("A fully featured university website with 7 pages, including admissions guides, course search, events registers, and shop layouts.");
            edu7.setCategory(educationCategory);
            edu7.setPrice(0.0);
            edu7.setTemplateType("FREE");
            edu7.setBootstrapVersion("React / Vite / CSS");
            edu7.setDemoUrl("/templates/education/education-7/index.html");
            edu7.setDownloadFile("");
            edu7.setPreviewImage("https://images.unsplash.com/photo-1498243691581-b145c3f54a5c?auto=format&fit=crop&w=800&q=80");
            edu7.setVersion("1.0.0");
            edu7.setStatus("PUBLISHED");
            edu7.setPagesCount(7);
            edu7.setDownloadsCount(2150);
            edu7.setTags(new ArrayList<>(Arrays.asList("University", "Multi-page", "Admissions", "Shop", "React")));
            templateRepository.save(edu7);
            logs.put("template_education_7", "Created");

            // education-8
            Template edu8 = new Template();
            edu8.setName("EdTech — Interactive E-Learning Platform");
            edu8.setSlug("edtech-elearning-platform");
            edu8.setDescription("An immersive learning dashboard template featuring progress trackers, interactive course syllabi, quizzes, and live tutor panels.");
            edu8.setCategory(educationCategory);
            edu8.setPrice(0.0);
            edu8.setTemplateType("FREE");
            edu8.setBootstrapVersion("React / Vite / CSS");
            edu8.setDemoUrl("/templates/education/education-8/index.html");
            edu8.setDownloadFile("");
            edu8.setPreviewImage("https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80");
            edu8.setVersion("1.0.0");
            edu8.setStatus("PUBLISHED");
            edu8.setPagesCount(1);
            edu8.setDownloadsCount(2400);
            edu8.setTags(new ArrayList<>(Arrays.asList("E-Learning", "Dashboard", "Quizzes", "React", "Vite")));
            templateRepository.save(edu8);
            logs.put("template_education_8", "Created");

            // education-9
            Template edu9 = new Template();
            edu9.setName("LearningInMotion — Premium Gamified Education Dashboard");
            edu9.setSlug("learning-in-motion");
            edu9.setDescription("A premium interactive education portal with gamified features, integrated student dashboards, and clean modern aesthetic.");
            edu9.setCategory(educationCategory);
            edu9.setPrice(0.0);
            edu9.setTemplateType("FREE");
            edu9.setBootstrapVersion("React / Vite / CSS");
            edu9.setDemoUrl("/templates/education/education-9/index.html");
            edu9.setDownloadFile("");
            edu9.setPreviewImage("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80");
            edu9.setVersion("1.0.0");
            edu9.setStatus("PUBLISHED");
            edu9.setPagesCount(1);
            edu9.setDownloadsCount(2800);
            edu9.setTags(new ArrayList<>(Arrays.asList("Gamified", "Interactive", "Student Dashboard", "React", "Vite")));
            templateRepository.save(edu9);
            logs.put("template_education_9", "Created");
        }

        // Seed Coming Soon templates (comming-soon)
        Category commingSoonCategoryNew = catMap.get("comming-soon");
        if (commingSoonCategoryNew != null) {
            // comingsoon-6
            Template soon6 = new Template();
            soon6.setName("Aura Pro X1 — Next-Gen 3D Device Launch Hub");
            soon6.setSlug("aura-pro-x1");
            soon6.setDescription("A beautiful 3D interactive hardware and smartphone coming soon launch platform. Features a responsive 3D interactive model previewer, countdown launch timer, product specifications tray, and subscription capture form.");
            soon6.setCategory(commingSoonCategoryNew);
            soon6.setPrice(0.0);
            soon6.setTemplateType("FREE");
            soon6.setBootstrapVersion("React / Three.js / Tailwind CSS / Vite");
            soon6.setDemoUrl("/templates/comming-soon/comingsoon-6/index.html");
            soon6.setDownloadFile("");
            soon6.setPreviewImage("https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80");
            soon6.setVersion("1.0.0");
            soon6.setStatus("PUBLISHED");
            soon6.setPagesCount(1);
            soon6.setDownloadsCount(2450);
            soon6.setTags(new ArrayList<>(Arrays.asList("Three.js", "Device Launch", "Countdown", "Specs Tray", "Vite")));
            templateRepository.save(soon6);
            logs.put("template_comingsoon_6", "Created");

            // comingsoon-7
            Template soon7 = new Template();
            soon7.setName("AeroStride — Premium Sportswear Store Pre-launch Showcase");
            soon7.setSlug("aerostride-prelaunch");
            soon7.setDescription("A stunning sportswear and footwear launch teaser landing page. Features digital interactive shoe galleries, pre-launch countdown, interactive specs drawer, customer review sliders, and product pre-order capture forms.");
            soon7.setCategory(commingSoonCategoryNew);
            soon7.setPrice(0.0);
            soon7.setTemplateType("FREE");
            soon7.setBootstrapVersion("React / Tailwind CSS / Vite");
            soon7.setDemoUrl("/templates/comming-soon/comingsoon-7/index.html");
            soon7.setDownloadFile("");
            soon7.setPreviewImage("https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80");
            soon7.setVersion("1.0.0");
            soon7.setStatus("PUBLISHED");
            soon7.setPagesCount(1);
            soon7.setDownloadsCount(1980);
            soon7.setTags(new ArrayList<>(Arrays.asList("Sportswear", "Pre-launch", "Countdown", "Reviews Slider", "Vite")));
            templateRepository.save(soon7);
            logs.put("template_comingsoon_7", "Created");

            // comingsoon-8
            Template soon8 = new Template();
            soon8.setName("HTM 350 DUDE — 3D Interactive Riding Showcase");
            soon8.setSlug("comingsoon-8");
            soon8.setDescription("A premium interactive motorcycle showcase and coming soon page. Features a fully controllable 3D motorcycle model canvas, interactive control dock, and reservation modal.");
            soon8.setCategory(commingSoonCategoryNew);
            soon8.setPrice(0.0);
            soon8.setTemplateType("FREE");
            soon8.setBootstrapVersion("React / Three.js / Tailwind CSS / Vite");
            soon8.setDemoUrl("/templates/comming-soon/comingsoon-8/index.html");
            soon8.setDownloadFile("");
            soon8.setPreviewImage("https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80");
            soon8.setVersion("1.0.0");
            soon8.setStatus("PUBLISHED");
            soon8.setPagesCount(1);
            soon8.setDownloadsCount(2540);
            soon8.setTags(new ArrayList<>(Arrays.asList("Three.js", "Motorcycle", "Interactive 3D", "Vite", "React")));
            templateRepository.save(soon8);
            logs.put("template_comingsoon_8", "Created");

            // comingsoon-9
            Template soon9 = new Template();
            soon9.setName("Aura — Next-Gen Multipurpose Launchpad");
            soon9.setSlug("comingsoon-9");
            soon9.setDescription("An elegant multipurpose pre-launch landing page. Features modern typography, countdown timer, responsive visual showcases, and newsletter capture forms.");
            soon9.setCategory(commingSoonCategoryNew);
            soon9.setPrice(0.0);
            soon9.setTemplateType("FREE");
            soon9.setBootstrapVersion("React / Tailwind CSS / Vite");
            soon9.setDemoUrl("/templates/comming-soon/comingsoon-9/index.html");
            soon9.setDownloadFile("");
            soon9.setPreviewImage("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80");
            soon9.setVersion("1.0.0");
            soon9.setStatus("PUBLISHED");
            soon9.setPagesCount(1);
            soon9.setDownloadsCount(2120);
            soon9.setTags(new ArrayList<>(Arrays.asList("Multipurpose", "Launchpad", "Countdown", "Vite", "React")));
            templateRepository.save(soon9);
            logs.put("template_comingsoon_9", "Created");

            // comingsoon-10
            Template soon10 = new Template();
            soon10.setName("Studio 10 — Multipurpose Event Coming Soon Teaser");
            soon10.setSlug("comingsoon-10");
            soon10.setDescription("A premium multi-design landing page template for events coming soon showcases. Features clean grids, responsive visual transitions, and client contact selectors.");
            soon10.setCategory(commingSoonCategoryNew);
            soon10.setPrice(0.0);
            soon10.setTemplateType("FREE");
            soon10.setBootstrapVersion("React / Tailwind CSS / Vite");
            soon10.setDemoUrl("/templates/comming-soon/comingsoon-10/index.html");
            soon10.setDownloadFile("");
            soon10.setPreviewImage("https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80");
            soon10.setVersion("1.0.0");
            soon10.setStatus("PUBLISHED");
            soon10.setPagesCount(1);
            soon10.setDownloadsCount(1890);
            soon10.setTags(new ArrayList<>(Arrays.asList("Events", "Studio", "Teaser", "Vite", "React")));
            templateRepository.save(soon10);
            logs.put("template_comingsoon_10", "Created");
        }

        Category cooperateCategory = catMap.get("cooperate");
        if (cooperateCategory != null) {
            // cooperate-1 (Nexora)
            Template coop1 = new Template();
            coop1.setName("Nexora — Premium Enterprise Corporate");
            coop1.setSlug("cooperate-1");
            coop1.setDescription("A premium enterprise consulting and corporate website featuring 13+ production-ready pages, services bento grids, and career portals.");
            coop1.setCategory(cooperateCategory);
            coop1.setPrice(0.0);
            coop1.setTemplateType("FREE");
            coop1.setBootstrapVersion("React / Tailwind CSS / Vite / React Router");
            coop1.setDemoUrl("/templates/cooperate/cooperate-1/index.html");
            coop1.setDownloadFile("");
            coop1.setPreviewImage("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80");
            coop1.setVersion("1.0.0");
            coop1.setStatus("PUBLISHED");
            coop1.setPagesCount(13);
            coop1.setDownloadsCount(1850);
            coop1.setTags(new ArrayList<>(Arrays.asList("Enterprise", "Consulting", "Bento Grid", "Multi-page", "React")));
            templateRepository.save(coop1);
            logs.put("template_cooperate_1", "Created");

            // cooperate-2 (Orion)
            Template coop2 = new Template();
            coop2.setName("Orion — Corporate Strategy Showcase");
            coop2.setSlug("cooperate-2");
            coop2.setDescription("A clean, executive strategy and consulting template featuring bento portfolio layouts, interactive solution selectors, and case study detail views.");
            coop2.setCategory(cooperateCategory);
            coop2.setPrice(0.0);
            coop2.setTemplateType("FREE");
            coop2.setBootstrapVersion("React / Tailwind CSS / Vite / React Router");
            coop2.setDemoUrl("/templates/cooperate/cooperate-2/index.html");
            coop2.setDownloadFile("");
            coop2.setPreviewImage("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80");
            coop2.setVersion("1.0.0");
            coop2.setStatus("PUBLISHED");
            coop2.setPagesCount(8);
            coop2.setDownloadsCount(1420);
            coop2.setTags(new ArrayList<>(Arrays.asList("Strategy", "Corporate", "Bento Layout", "Vite", "React")));
            templateRepository.save(coop2);
            logs.put("template_cooperate_2", "Created");

            // cooperate-3 (Vantage)
            Template coop3 = new Template();
            coop3.setName("Vantage — Global Business Transformation");
            coop3.setSlug("cooperate-3");
            coop3.setDescription("An elegant corporate consulting and global advisory template featuring capability checklists, transition timelines, and leadership boards.");
            coop3.setCategory(cooperateCategory);
            coop3.setPrice(0.0);
            coop3.setTemplateType("FREE");
            coop3.setBootstrapVersion("React / Tailwind CSS / Vite / React Router");
            coop3.setDemoUrl("/templates/cooperate/cooperate-3/index.html");
            coop3.setDownloadFile("");
            coop3.setPreviewImage("https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80");
            coop3.setVersion("1.0.0");
            coop3.setStatus("PUBLISHED");
            coop3.setPagesCount(9);
            coop3.setDownloadsCount(1560);
            coop3.setTags(new ArrayList<>(Arrays.asList("Consulting", "Advisory", "Timeline", "Vite", "React")));
            templateRepository.save(coop3);
            logs.put("template_cooperate_3", "Created");

            // cooperate-4 (Kinesis Global)
            Template coop4 = new Template();
            coop4.setName("Kinesis Global — Enterprise AI & Systems");
            coop4.setSlug("cooperate-4");
            coop4.setDescription("A high-tech digital systems engineering and corporate AI consultant website featuring dark mode details, dynamic capability stacks, and interactive project brief builders.");
            coop4.setCategory(cooperateCategory);
            coop4.setPrice(0.0);
            coop4.setTemplateType("FREE");
            coop4.setBootstrapVersion("React / Tailwind CSS / Vite / React Router");
            coop4.setDemoUrl("/templates/cooperate/cooperate-4/index.html");
            coop4.setDownloadFile("");
            coop4.setPreviewImage("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80");
            coop4.setVersion("1.0.0");
            coop4.setStatus("PUBLISHED");
            coop4.setPagesCount(12);
            coop4.setDownloadsCount(1920);
            coop4.setTags(new ArrayList<>(Arrays.asList("Systems Engineering", "Enterprise AI", "Project Brief", "Vite", "React")));
            templateRepository.save(coop4);
            logs.put("template_cooperate_4", "Created");

            // cooperate-5 (Axiom Systems)
            Template coop5 = new Template();
            coop5.setName("Axiom Systems — Global Enterprise Technology");
            coop5.setSlug("cooperate-5");
            coop5.setDescription("A premium corporate systems integration and partner platform featuring vertical solutions, global offices catalog, and interactive inquiry selectors.");
            coop5.setCategory(cooperateCategory);
            coop5.setPrice(0.0);
            coop5.setTemplateType("FREE");
            coop5.setBootstrapVersion("React / Tailwind CSS / Vite / React Router");
            coop5.setDemoUrl("/templates/cooperate/cooperate-5/index.html");
            coop5.setDownloadFile("");
            coop5.setPreviewImage("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80");
            coop5.setVersion("1.0.0");
            coop5.setStatus("PUBLISHED");
            coop5.setPagesCount(10);
            coop5.setDownloadsCount(1740);
            coop5.setTags(new ArrayList<>(Arrays.asList("Systems Integration", "Technology Partner", "Inquiry", "Vite", "React")));
            templateRepository.save(coop5);
            logs.put("template_cooperate_5", "Created");

            // cooperate-6 (Vanguard)
            Template coop6 = new Template();
            coop6.setName("Vanguard — Corporate Mobility Solutions");
            coop6.setSlug("cooperate-6");
            coop6.setDescription("A premium corporate travel management and executive mobility showcase. Built with React, Tailwind CSS, and React Router, featuring custom consultation modules and route safety logs.");
            coop6.setCategory(cooperateCategory);
            coop6.setPrice(0.0);
            coop6.setTemplateType("FREE");
            coop6.setBootstrapVersion("React / Tailwind / Vite / TS");
            coop6.setDemoUrl("/templates/cooperate/cooperate-6/index.html");
            coop6.setDownloadFile("");
            coop6.setPreviewImage("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80");
            coop6.setVersion("1.0.0");
            coop6.setStatus("PUBLISHED");
            coop6.setPagesCount(13);
            coop6.setDownloadsCount(1850);
            coop6.setTags(new ArrayList<>(Arrays.asList("Corporate Travel", "Mobility", "React", "Tailwind", "TS")));
            templateRepository.save(coop6);
            logs.put("template_cooperate_6", "Created");

            // cooperate-7 (Apex Solutions)
            Template coop7 = new Template();
            coop7.setName("Apex Solutions — Enterprise Tech Consultant");
            coop7.setSlug("cooperate-7");
            coop7.setDescription("A clean and professional corporate solutions and tech consulting landing page. Features a complete set of service outlines, client portfolios, interactive career boards, and legal policies.");
            coop7.setCategory(cooperateCategory);
            coop7.setPrice(0.0);
            coop7.setTemplateType("FREE");
            coop7.setBootstrapVersion("React / Tailwind / Vite / TS");
            coop7.setDemoUrl("/templates/cooperate/cooperate-7/index.html");
            coop7.setDownloadFile("");
            coop7.setPreviewImage("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80");
            coop7.setVersion("1.0.0");
            coop7.setStatus("PUBLISHED");
            coop7.setPagesCount(22);
            coop7.setDownloadsCount(1650);
            coop7.setTags(new ArrayList<>(Arrays.asList("Consulting", "Tech Advisory", "Career Board", "React", "Tailwind")));
            templateRepository.save(coop7);
            logs.put("template_cooperate_7", "Created");

            // cooperate-8 (Sync Agency)
            Template coop8 = new Template();
            coop8.setName("Sync Agency — Strategic Business Advisors");
            coop8.setSlug("cooperate-8");
            coop8.setDescription("A modern strategy, branding, and business consulting portfolio. Built with React, Tailwind CSS, and Framer Motion, featuring custom interactive capability highlights and scoping modals.");
            coop8.setCategory(cooperateCategory);
            coop8.setPrice(0.0);
            coop8.setTemplateType("FREE");
            coop8.setBootstrapVersion("React / Tailwind / Vite / TS");
            coop8.setDemoUrl("/templates/cooperate/cooperate-8/index.html");
            coop8.setDownloadFile("");
            coop8.setPreviewImage("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80");
            coop8.setVersion("1.0.0");
            coop8.setStatus("PUBLISHED");
            coop8.setPagesCount(11);
            coop8.setDownloadsCount(1420);
            coop8.setTags(new ArrayList<>(Arrays.asList("Advisory", "Branding", "Scoping Modal", "React", "Framer Motion")));
            templateRepository.save(coop8);
            logs.put("template_cooperate_8", "Created");

            // cooperate-9 (Finora)
            Template coop9 = new Template();
            coop9.setName("Finora — Premium Corporate Finance");
            coop9.setSlug("cooperate-9");
            coop9.setDescription("A beautiful financial advisory and corporate strategy portal. Features clean typography, bento performance metrics, and a custom interactive booking system.");
            coop9.setCategory(cooperateCategory);
            coop9.setPrice(0.0);
            coop9.setTemplateType("FREE");
            coop9.setBootstrapVersion("React / Tailwind / Vite / TS");
            coop9.setDemoUrl("/templates/cooperate/cooperate-9/index.html");
            coop9.setDownloadFile("");
            coop9.setPreviewImage("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80");
            coop9.setVersion("1.0.0");
            coop9.setStatus("PUBLISHED");
            coop9.setPagesCount(1);
            coop9.setDownloadsCount(1920);
            coop9.setTags(new ArrayList<>(Arrays.asList("Finance", "Bento Metrics", "Advisory", "React", "Vite")));
            templateRepository.save(coop9);
            logs.put("template_cooperate_9", "Created");

            // cooperate-10 (Aurelia Capital)
            Template coop10 = new Template();
            coop10.setName("Aurelia Capital — Institutional Asset Management");
            coop10.setSlug("cooperate-10");
            coop10.setDescription("An advanced institutional wealth management and investment advisory platform. Features live stock index ribbons, interactive retirement calculators, comparison matrix portals, and detailed client reporting views.");
            coop10.setCategory(cooperateCategory);
            coop10.setPrice(0.0);
            coop10.setTemplateType("FREE");
            coop10.setBootstrapVersion("React / Tailwind / Vite / TS");
            coop10.setDemoUrl("/templates/cooperate/cooperate-10/index.html");
            coop10.setDownloadFile("");
            coop10.setPreviewImage("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80");
            coop10.setVersion("1.0.0");
            coop10.setStatus("PUBLISHED");
            coop10.setPagesCount(15);
            coop10.setDownloadsCount(1740);
            coop10.setTags(new ArrayList<>(Arrays.asList("Asset Management", "Calculators", "Client Portal", "React", "Vite")));
            templateRepository.save(coop10);
            logs.put("template_cooperate_10", "Created");
        }

        Category businessCategory = catMap.get("buisness");
        if (businessCategory != null) {
            // Business-1 (ABC Business)
            Template biz1 = new Template();
            biz1.setName("ABC Business — Premium Corporate Systems");
            biz1.setSlug("Business-1");
            biz1.setDescription("A premium corporate systems and business advisory platform featuring custom page transitions, services showcases, and client inquiry panels.");
            biz1.setCategory(businessCategory);
            biz1.setPrice(0.0);
            biz1.setTemplateType("FREE");
            biz1.setBootstrapVersion("React / Tailwind CSS / Framer Motion / Vite");
            biz1.setDemoUrl("/templates/buisness/Business-1/index.html");
            biz1.setDownloadFile("");
            biz1.setPreviewImage("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80");
            biz1.setVersion("1.0.0");
            biz1.setStatus("PUBLISHED");
            biz1.setPagesCount(12);
            biz1.setDownloadsCount(2150);
            biz1.setTags(new ArrayList<>(Arrays.asList("Corporate", "Advisory", "Framer Motion", "Vite", "React")));
            templateRepository.save(biz1);
            logs.put("template_business_1", "Created");

            // Business-2 (Agency Prime)
            Template biz2 = new Template();
            biz2.setName("Agency Prime — Creative & Digital Hub");
            biz2.setSlug("Business-2");
            biz2.setDescription("An elegant digital agency and portfolio template. Features interactive counters, animated page entries, custom project detail overlays, and responsive contact forms.");
            biz2.setCategory(businessCategory);
            biz2.setPrice(0.0);
            biz2.setTemplateType("FREE");
            biz2.setBootstrapVersion("React / Tailwind CSS / Framer Motion / Vite");
            biz2.setDemoUrl("/templates/buisness/Business-2/index.html");
            biz2.setDownloadFile("");
            biz2.setPreviewImage("https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80");
            biz2.setVersion("1.0.0");
            biz2.setStatus("PUBLISHED");
            biz2.setPagesCount(10);
            biz2.setDownloadsCount(1820);
            biz2.setTags(new ArrayList<>(Arrays.asList("Digital Agency", "Portfolio", "Framer Motion", "Vite", "React")));
            templateRepository.save(biz2);
            logs.put("template_business_2", "Created");

            // Business-3 (Enterprise Apex)
            Template biz3 = new Template();
            biz3.setName("Enterprise Apex — Professional Consulting Platform");
            biz3.setSlug("Business-3");
            biz3.setDescription("A premium corporate consulting and financial advisory template featuring interactive counter animations, project showcase galleries, and structured service modules.");
            biz3.setCategory(businessCategory);
            biz3.setPrice(0.0);
            biz3.setTemplateType("FREE");
            biz3.setBootstrapVersion("React / Tailwind CSS / Framer Motion / Vite");
            biz3.setDemoUrl("/templates/buisness/Business-3/index.html");
            biz3.setDownloadFile("");
            biz3.setPreviewImage("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80");
            biz3.setVersion("1.0.0");
            biz3.setStatus("PUBLISHED");
            biz3.setPagesCount(9);
            biz3.setDownloadsCount(1670);
            biz3.setTags(new ArrayList<>(Arrays.asList("Consulting", "Finance", "Portfolio", "Vite", "React")));
            templateRepository.save(biz3);
            logs.put("template_business_3", "Created");

            // Business-4 (Aurelis)
            Template biz4 = new Template();
            biz4.setName("Aurelis — Premium Business Showcase");
            biz4.setSlug("Business-4");
            biz4.setDescription("A premium, modern showcase template for corporate systems, advisory firms, and agencies. Built with React, Tailwind CSS, and Framer Motion, featuring smooth animations and custom page sections.");
            biz4.setCategory(businessCategory);
            biz4.setPrice(0.0);
            biz4.setTemplateType("FREE");
            biz4.setBootstrapVersion("React / Tailwind CSS / Framer Motion / Vite");
            biz4.setDemoUrl("/templates/buisness/Business-4/index.html");
            biz4.setDownloadFile("");
            biz4.setPreviewImage("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80");
            biz4.setVersion("1.0.0");
            biz4.setStatus("PUBLISHED");
            biz4.setPagesCount(1);
            biz4.setDownloadsCount(1850);
            biz4.setTags(new ArrayList<>(Arrays.asList("Corporate", "Showcase", "Framer Motion", "Vite", "React")));
            templateRepository.save(biz4);
            logs.put("template_business_4", "Created");

            // Business-5 (Lumora Labs)
            Template biz5 = new Template();
            biz5.setName("Lumora Labs — Advanced Technology Hub");
            biz5.setSlug("Business-5");
            biz5.setDescription("An animated technology startup showcase featuring custom interactive elements, team bios, services slider, and client contact integration.");
            biz5.setCategory(businessCategory);
            biz5.setPrice(0.0);
            biz5.setTemplateType("FREE");
            biz5.setBootstrapVersion("React / GSAP / Spring Boot");
            biz5.setDemoUrl("/templates/buisness/Business-5/index.html");
            biz5.setDownloadFile("");
            biz5.setPreviewImage("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80");
            biz5.setVersion("1.0.0");
            biz5.setStatus("PUBLISHED");
            biz5.setPagesCount(5);
            biz5.setDownloadsCount(2100);
            biz5.setTags(new ArrayList<>(Arrays.asList("Technology", "Agency", "React", "Spring Boot", "GSAP")));
            templateRepository.save(biz5);
            logs.put("template_business_5", "Created");

            // Business-6 (Nexora)
            Template biz6 = new Template();
            biz6.setName("Nexora — Enterprise Technology Solutions");
            biz6.setSlug("Business-6");
            biz6.setDescription("A modern, dark-themed corporate technology platform featuring interactive charts, custom layouts, and a clean minimalist design for enterprise services.");
            biz6.setCategory(businessCategory);
            biz6.setPrice(0.0);
            biz6.setTemplateType("FREE");
            biz6.setBootstrapVersion("React / Tailwind CSS / Framer Motion / Vite");
            biz6.setDemoUrl("/templates/buisness/Business-6/index.html");
            biz6.setDownloadFile("");
            biz6.setPreviewImage("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80");
            biz6.setVersion("1.0.0");
            biz6.setStatus("PUBLISHED");
            biz6.setPagesCount(1);
            biz6.setDownloadsCount(1650);
            biz6.setTags(new ArrayList<>(Arrays.asList("Enterprise", "Technology", "Framer Motion", "Vite", "React")));
            templateRepository.save(biz6);
            logs.put("template_business_6", "Created");

            // Business-7 (Strativa)
            Template biz7 = new Template();
            biz7.setName("Strativa — Modern Consulting Platform");
            biz7.setSlug("Business-7");
            biz7.setDescription("A clean corporate consulting and strategic advisory platform featuring interactive bento grids, client reviews, capability lists, and dynamic query builders.");
            biz7.setCategory(businessCategory);
            biz7.setPrice(0.0);
            biz7.setTemplateType("FREE");
            biz7.setBootstrapVersion("React / Tailwind CSS / Framer Motion / Vite");
            biz7.setDemoUrl("/templates/buisness/Business-7/index.html");
            biz7.setDownloadFile("");
            biz7.setPreviewImage("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80");
            biz7.setVersion("1.0.0");
            biz7.setStatus("PUBLISHED");
            biz7.setPagesCount(1);
            biz7.setDownloadsCount(1450);
            biz7.setTags(new ArrayList<>(Arrays.asList("Consulting", "Strategy", "Framer Motion", "Vite", "React")));
            templateRepository.save(biz7);
            logs.put("template_business_7", "Created");

            // Business-8 (Vanta Studio)
            Template biz8 = new Template();
            biz8.setName("Vanta Studio — Premium Business Showcase");
            biz8.setSlug("Business-8");
            biz8.setDescription("A premium, modern showcase template for design collectives, digital-first brands, and agencies. Built with React, Tailwind CSS, and Framer Motion, featuring smooth animations and a dark editorial layout.");
            biz8.setCategory(businessCategory);
            biz8.setPrice(0.0);
            biz8.setTemplateType("FREE");
            biz8.setBootstrapVersion("React / Tailwind CSS / Framer Motion / Vite");
            biz8.setDemoUrl("/templates/buisness/Business-8/index.html");
            biz8.setDownloadFile("");
            biz8.setPreviewImage("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80");
            biz8.setVersion("1.0.0");
            biz8.setStatus("PUBLISHED");
            biz8.setPagesCount(1);
            biz8.setDownloadsCount(1250);
            biz8.setTags(new ArrayList<>(Arrays.asList("Agency", "Design", "Showcase", "Vite", "React")));
            templateRepository.save(biz8);
            logs.put("template_business_8", "Created");
        }

        Category portfolioCategory = catMap.get("portfolio");
        if (portfolioCategory != null) {
            // Portfolio-1 (Architecture)
            Template port1 = new Template();
            port1.setName("Aethelgard — Minimalist Architecture Portfolio");
            port1.setSlug("portfolio-1");
            port1.setDescription("A minimalist architecture and luxury property design portfolio featuring custom horizontal slide entries, detailed structural specification tables, and interactive project image modal previews.");
            port1.setCategory(portfolioCategory);
            port1.setPrice(0.0);
            port1.setTemplateType("FREE");
            port1.setBootstrapVersion("React / Vite / Tailwind CSS");
            port1.setDemoUrl("/templates/portfolio/portfolio-1/index.html");
            port1.setDownloadFile("");
            port1.setPreviewImage("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80");
            port1.setVersion("1.0.0");
            port1.setStatus("PUBLISHED");
            port1.setPagesCount(1);
            port1.setDownloadsCount(1450);
            port1.setTags(new ArrayList<>(Arrays.asList("Architecture", "Minimalist", "Design", "Vite", "React")));
            templateRepository.save(port1);
            logs.put("template_portfolio_1", "Created");

            // Portfolio-2 (Personal)
            Template port2 = new Template();
            port2.setName("Aiden Drake — Modern Dark Personal Portfolio");
            port2.setSlug("portfolio-2");
            port2.setDescription("A modern, high-contrast dark theme developer and visual designer personal bio page. Features animated skill progress bars, structured project tags, and custom card grids.");
            port2.setCategory(portfolioCategory);
            port2.setPrice(0.0);
            port2.setTemplateType("FREE");
            port2.setBootstrapVersion("React / Vite / Tailwind CSS");
            port2.setDemoUrl("/templates/portfolio/portfolio-2/index.html");
            port2.setDownloadFile("");
            port2.setPreviewImage("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80");
            port2.setVersion("1.0.0");
            port2.setStatus("PUBLISHED");
            port2.setPagesCount(1);
            port2.setDownloadsCount(1580);
            port2.setTags(new ArrayList<>(Arrays.asList("Personal", "Developer Portfolio", "Dark Theme", "Vite", "React")));
            templateRepository.save(port2);
            logs.put("template_portfolio_2", "Created");

            // Portfolio-3 (Creative)
            Template port3 = new Template();
            port3.setName("Sasha Grey — Bold High-Contrast Creative Portfolio");
            port3.setSlug("portfolio-3");
            port3.setDescription("A bold, high-contrast modern portfolio built for designers and creators. Features responsive interactive masonry layout, detailed project image lightbox zooms, and structured work archive pages.");
            port3.setCategory(portfolioCategory);
            port3.setPrice(0.0);
            port3.setTemplateType("FREE");
            port3.setBootstrapVersion("React / Vite / Tailwind CSS");
            port3.setDemoUrl("/templates/portfolio/portfolio-3/index.html");
            port3.setDownloadFile("");
            port3.setPreviewImage("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80");
            port3.setVersion("1.0.0");
            port3.setStatus("PUBLISHED");
            port3.setPagesCount(1);
            port3.setDownloadsCount(1720);
            port3.setTags(new ArrayList<>(Arrays.asList("Creative", "Masonry", "Lightbox", "Vite", "React")));
            templateRepository.save(port3);
            logs.put("template_portfolio_3", "Created");

            // Portfolio-4 (Minimal)
            Template port4 = new Template();
            port4.setName("Clara Oswald — Airy Minimalist Portfolio");
            port4.setSlug("portfolio-4");
            port4.setDescription("An airy, clean minimalist layout with spacious grids and light backgrounds. Perfect for copywriters, writers, and digital consultants.");
            port4.setCategory(portfolioCategory);
            port4.setPrice(0.0);
            port4.setTemplateType("FREE");
            port4.setBootstrapVersion("React / Vite / Tailwind CSS");
            port4.setDemoUrl("/templates/portfolio/portfolio-4/index.html");
            port4.setDownloadFile("");
            port4.setPreviewImage("https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80");
            port4.setVersion("1.0.0");
            port4.setStatus("PUBLISHED");
            port4.setPagesCount(1);
            port4.setDownloadsCount(1390);
            port4.setTags(new ArrayList<>(Arrays.asList("Minimalist", "Spacious", "Clean", "Vite", "React")));
            templateRepository.save(port4);
            logs.put("template_portfolio_4", "Created");

            // Portfolio-5 (Multipage)
            Template port5 = new Template();
            port5.setName("Evelyn Vance — Routed Multipage Portfolio");
            port5.setSlug("portfolio-5");
            port5.setDescription("A fully routed multipage portfolio containing integrated Home, About, Projects, and Contact pages, custom transitions, and smooth global headers.");
            port5.setCategory(portfolioCategory);
            port5.setPrice(0.0);
            port5.setTemplateType("FREE");
            port5.setBootstrapVersion("React / Vite / Tailwind CSS / Router");
            port5.setDemoUrl("/templates/portfolio/portfolio-5/index.html");
            port5.setDownloadFile("");
            port5.setPreviewImage("https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80");
            port5.setVersion("1.0.0");
            port5.setStatus("PUBLISHED");
            port5.setPagesCount(4);
            port5.setDownloadsCount(1650);
            port5.setTags(new ArrayList<>(Arrays.asList("Multipage", "Routing", "Transitions", "Vite", "React")));
            templateRepository.save(port5);
            logs.put("template_portfolio_5", "Created");

            // Portfolio-6 (Agency)
            Template port6 = new Template();
            port6.setName("Synthetix — Tech-Forward Software Agency");
            port6.setSlug("portfolio-6");
            port6.setDescription("A tech-forward, modern multipage digital agency and portfolio template. Features interactive skill bars, animated company grids, custom project card showcases, and responsive newsletter forms.");
            port6.setCategory(portfolioCategory);
            port6.setPrice(0.0);
            port6.setTemplateType("FREE");
            port6.setBootstrapVersion("React / Vite / Tailwind CSS / Router");
            port6.setDemoUrl("/templates/portfolio/portfolio-6/index.html");
            port6.setDownloadFile("");
            port6.setPreviewImage("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80");
            port6.setVersion("1.0.0");
            port6.setStatus("PUBLISHED");
            port6.setPagesCount(4);
            port6.setDownloadsCount(1890);
            port6.setTags(new ArrayList<>(Arrays.asList("Software Agency", "Bento Grid", "Newsletter", "Vite", "React")));
            templateRepository.save(port6);
            logs.put("template_portfolio_6", "Created");

            // Portfolio-7 (Gradient)
            Template port7 = new Template();
            port7.setName("Jared Vance — Warm Gradient Portfolio");
            port7.setSlug("portfolio-7");
            port7.setDescription("A beautiful personal showcase featuring warm CSS mesh gradients, elegant editorial serif typography, interactive case study cards, and sleek contact links.");
            port7.setCategory(portfolioCategory);
            port7.setPrice(0.0);
            port7.setTemplateType("FREE");
            port7.setBootstrapVersion("React / Vite / Tailwind CSS");
            port7.setDemoUrl("/templates/portfolio/portfolio-7/index.html");
            port7.setDownloadFile("");
            port7.setPreviewImage("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80");
            port7.setVersion("1.0.0");
            port7.setStatus("PUBLISHED");
            port7.setPagesCount(1);
            port7.setDownloadsCount(1520);
            port7.setTags(new ArrayList<>(Arrays.asList("Gradients", "Mesh Gradient", "Typography", "Vite", "React")));
            templateRepository.save(port7);
            logs.put("template_portfolio_7", "Created");

            // Portfolio-8 (Editorial)
            Template port8 = new Template();
            port8.setName("Evelyn Oswald — Editorial Operations Portfolio");
            port8.setSlug("portfolio-8");
            port8.setDescription("A modern typography-first layout with high-end editorial grids and subtle hover interactions, perfect for project managers and operation leads.");
            port8.setCategory(portfolioCategory);
            port8.setPrice(0.0);
            port8.setTemplateType("FREE");
            port8.setBootstrapVersion("React / Vite / Tailwind CSS");
            port8.setDemoUrl("/templates/portfolio/portfolio-8/index.html");
            port8.setDownloadFile("");
            port8.setPreviewImage("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80");
            port8.setVersion("1.0.0");
            port8.setStatus("PUBLISHED");
            port8.setPagesCount(1);
            port8.setDownloadsCount(1410);
            port8.setTags(new ArrayList<>(Arrays.asList("Editorial", "Typography", "Clean Grid", "Vite", "React")));
            templateRepository.save(port8);
            logs.put("template_portfolio_8", "Created");

            // Portfolio-9 (Photography)
            Template port9 = new Template();
            port9.setName("Sasha Grey — Monochrome Editorial Photography");
            port9.setSlug("portfolio-9");
            port9.setDescription("An elegant black-and-white theme photography portfolio template featuring structured photo galleries, horizontal slider interactions, and styled info pages.");
            port9.setCategory(portfolioCategory);
            port9.setPrice(0.0);
            port9.setTemplateType("FREE");
            port9.setBootstrapVersion("React / Vite / Tailwind CSS / Router");
            port9.setDemoUrl("/templates/portfolio/portfolio-9/index.html");
            port9.setDownloadFile("");
            port9.setPreviewImage("https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80");
            port9.setVersion("1.0.0");
            port9.setStatus("PUBLISHED");
            port9.setPagesCount(3);
            port9.setDownloadsCount(1620);
            port9.setTags(new ArrayList<>(Arrays.asList("Monochrome", "Photography", "Slider", "Vite", "React")));
            templateRepository.save(port9);
            logs.put("template_portfolio_9", "Created");

            // Portfolio-10 (Creative Multipage)
            Template port10 = new Template();
            port10.setName("Sasha Grey — Creative Multipage Portfolio");
            port10.setSlug("portfolio-10");
            port10.setDescription("An premium, clean-cut creative multipage digital agency and portfolio template. Features interactive work grids, detail modals, team showcases, and custom contact forms.");
            port10.setCategory(portfolioCategory);
            port10.setPrice(0.0);
            port10.setTemplateType("FREE");
            port10.setBootstrapVersion("React / Vite / Tailwind CSS / Router");
            port10.setDemoUrl("/templates/portfolio/portfolio-10/index.html");
            port10.setDownloadFile("");
            port10.setPreviewImage("https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80");
            port10.setVersion("1.0.0");
            port10.setStatus("PUBLISHED");
            port10.setPagesCount(4);
            port10.setDownloadsCount(1750);
            port10.setTags(new ArrayList<>(Arrays.asList("Creative Multipage", "Team Showcase", "Modals", "Vite", "React")));
            templateRepository.save(port10);
            logs.put("template_portfolio_10", "Created");
        }

        Category landingPageCategory = catMap.get("landing-page");
        if (landingPageCategory != null) {
            // landing-page-1 (Booky)
            Template lp1 = new Template();
            lp1.setName("Booky — Lead Generation & Authors Platform");
            lp1.setSlug("landing-page-1");
            lp1.setDescription("A professional and clean landing page for authors, books, and publications. Features call-to-action buttons, pricing tables, chapter highlights, and reviews.");
            lp1.setCategory(landingPageCategory);
            lp1.setPrice(0.0);
            lp1.setTemplateType("FREE");
            lp1.setBootstrapVersion("React / Tailwind / Vite");
            lp1.setDemoUrl("/templates/landing-page/landing-page-1/index.html");
            lp1.setDownloadFile("");
            lp1.setPreviewImage("https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80");
            lp1.setVersion("1.0.0");
            lp1.setStatus("PUBLISHED");
            lp1.setPagesCount(1);
            lp1.setDownloadsCount(1450);
            lp1.setTags(new ArrayList<>(Arrays.asList("Authors", "Lead Generation", "React", "Vite")));
            templateRepository.save(lp1);
            logs.put("template_landing_page_1", "Created");

            // landing-page-2 (StatusBusy)
            Template lp2 = new Template();
            lp2.setName("StatusBusy — Lead Capture & App Promotion");
            lp2.setSlug("landing-page-2");
            lp2.setDescription("A modern SaaS and app promotion landing page with clean lead-capture forms, dynamic feature lists, pricing matrices, and clean typography.");
            lp2.setCategory(landingPageCategory);
            lp2.setPrice(0.0);
            lp2.setTemplateType("FREE");
            lp2.setBootstrapVersion("React / Vite / CSS");
            lp2.setDemoUrl("/templates/landing-page/landing-page-2/index.html");
            lp2.setDownloadFile("");
            lp2.setPreviewImage("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80");
            lp2.setVersion("1.0.0");
            lp2.setStatus("PUBLISHED");
            lp2.setPagesCount(1);
            lp2.setDownloadsCount(1380);
            lp2.setTags(new ArrayList<>(Arrays.asList("SaaS", "App Promotion", "Lead Capture", "React")));
            templateRepository.save(lp2);
            logs.put("template_landing_page_2", "Created");

            // landing-page-3 (ExquDrive)
            Template lp3 = new Template();
            lp3.setName("ExquDrive — Dynamic Product Landing Page");
            lp3.setSlug("landing-page-3");
            lp3.setDescription("An elegant product launch landing page featuring immersive product grids, dynamic feature comparison tables, interactive customer reviews, and contact sections.");
            lp3.setCategory(landingPageCategory);
            lp3.setPrice(0.0);
            lp3.setTemplateType("FREE");
            lp3.setBootstrapVersion("React / Vite / CSS");
            lp3.setDemoUrl("/templates/landing-page/landing-page-3/index.html");
            lp3.setDownloadFile("");
            lp3.setPreviewImage("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80");
            lp3.setVersion("1.0.0");
            lp3.setStatus("PUBLISHED");
            lp3.setPagesCount(1);
            lp3.setDownloadsCount(1510);
            lp3.setTags(new ArrayList<>(Arrays.asList("Product Launch", "Comparison Table", "Reviews", "React")));
            templateRepository.save(lp3);
            logs.put("template_landing_page_3", "Created");



            // landing-page-6 (Lunara Press)
            Template lp6 = new Template();
            lp6.setName("Lunara Press — Author & Book Landing Page");
            lp6.setSlug("landing-page-6");
            lp6.setDescription("A gorgeous book launch and author promotional landing page featuring a virtual 3D flip-book preview, interactive story timelines, chapters explorer, and reviews.");
            lp6.setCategory(landingPageCategory);
            lp6.setPrice(0.0);
            lp6.setTemplateType("FREE");
            lp6.setBootstrapVersion("React / Vite / CSS");
            lp6.setDemoUrl("/templates/landing-page/landing-page-6/index.html");
            lp6.setDownloadFile("");
            lp6.setPreviewImage("https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80");
            lp6.setVersion("1.0.0");
            lp6.setStatus("PUBLISHED");
            lp6.setPagesCount(1);
            lp6.setDownloadsCount(1530);
            lp6.setTags(new ArrayList<>(Arrays.asList("Authors", "Flipbook", "React", "Vite")));
            templateRepository.save(lp6);
            logs.put("template_landing_page_6", "Created");

            // landing-page-4 (Flowzen)
            Template lp4 = new Template();
            lp4.setName("Flowzen — Premium SaaS Landing Page");
            lp4.setSlug("landing-page-4");
            lp4.setDescription("A premium SaaS and product landing page with modern dark mode aesthetic, interactive features list, custom modal overlays, and pricing calculator.");
            lp4.setCategory(landingPageCategory);
            lp4.setPrice(0.0);
            lp4.setTemplateType("FREE");
            lp4.setBootstrapVersion("React / Tailwind / Vite");
            lp4.setDemoUrl("/templates/landing-page/landing-page-4/index.html");
            lp4.setDownloadFile("");
            lp4.setPreviewImage("https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80");
            lp4.setVersion("1.0.0");
            lp4.setStatus("PUBLISHED");
            lp4.setPagesCount(1);
            lp4.setDownloadsCount(1420);
            lp4.setTags(new ArrayList<>(Arrays.asList("SaaS", "Dark Mode", "React", "Tailwind")));
            templateRepository.save(lp4);
            logs.put("template_landing_page_4", "Created");

            // landing-page-7 (SaaSify)
            Template lp7 = new Template();
            lp7.setName("SaaSify — Next-Gen App Promotion Landing Page");
            lp7.setSlug("landing-page-7");
            lp7.setDescription("A premium tech startup landing page featuring rich pricing sliders, interactive product showcases, statistics panels, and testimonials carousel.");
            lp7.setCategory(landingPageCategory);
            lp7.setPrice(0.0);
            lp7.setTemplateType("FREE");
            lp7.setBootstrapVersion("React / CSS / Vite");
            lp7.setDemoUrl("/templates/landing-page/landing-page-7/index.html");
            lp7.setDownloadFile("");
            lp7.setPreviewImage("https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80");
            lp7.setVersion("1.0.0");
            lp7.setStatus("PUBLISHED");
            lp7.setPagesCount(1);
            lp7.setDownloadsCount(1390);
            lp7.setTags(new ArrayList<>(Arrays.asList("SaaS", "App Promotion", "Vite", "React")));
            templateRepository.save(lp7);
            logs.put("template_landing_page_7", "Created");

            // landing-page-8 (Vanta Studio)
            Template lp8 = new Template();
            lp8.setName("Vanta Studio — Creative Agency Showcase");
            lp8.setSlug("landing-page-8");
            lp8.setDescription("Ultra-premium creative agency showcase and digital portfolio landing page featuring sleek dark design, interactive casework grids, and immersive contact CTA layouts.");
            lp8.setCategory(landingPageCategory);
            lp8.setPrice(0.0);
            lp8.setTemplateType("FREE");
            lp8.setBootstrapVersion("React / Tailwind / Vite");
            lp8.setDemoUrl("/templates/landing-page/landing-page-8/index.html");
            lp8.setDownloadFile("");
            lp8.setPreviewImage("https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80");
            lp8.setVersion("1.0.0");
            lp8.setStatus("PUBLISHED");
            lp8.setPagesCount(1);
            lp8.setDownloadsCount(1410);
            lp8.setTags(new ArrayList<>(Arrays.asList("Agency", "Creative", "Tailwind", "React")));
            templateRepository.save(lp8);
            logs.put("template_landing_page_8", "Created");
        }

        Category onepageCategory = catMap.get("onepage");
        if (onepageCategory != null) {
            // onepage-1 (Dharma)
            Template op1 = new Template();
            op1.setName("Dharma — Zen & Wellness Onepage Scroll");
            op1.setSlug("onepage-1");
            op1.setDescription("A calm, serene Zen meditation and health retreat single-page website. Features smooth scroll navigation, detailed program cards, and interactive schedule boards.");
            op1.setCategory(onepageCategory);
            op1.setPrice(0.0);
            op1.setTemplateType("FREE");
            op1.setBootstrapVersion("React / Tailwind / Vite");
            op1.setDemoUrl("/templates/onepage/onepage-1/index.html");
            op1.setDownloadFile("");
            op1.setPreviewImage("https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80");
            op1.setVersion("1.0.0");
            op1.setStatus("PUBLISHED");
            op1.setPagesCount(1);
            op1.setDownloadsCount(1390);
            op1.setTags(new ArrayList<>(Arrays.asList("Wellness", "Zen", "Single Page", "Vite")));
            templateRepository.save(op1);
            logs.put("template_onepage_1", "Created");

            // onepage-2 (Echoes)
            Template op2 = new Template();
            op2.setName("Echoes — Modern Narrative Onepage Portal");
            op2.setSlug("onepage-2");
            op2.setDescription("A minimalist horizontal scrolling storytelling landing page featuring high-definition custom video banners, bento grids, and responsive contact overlays.");
            op2.setCategory(onepageCategory);
            op2.setPrice(0.0);
            op2.setTemplateType("FREE");
            op2.setBootstrapVersion("React / Tailwind / Vite / TS");
            op2.setDemoUrl("/templates/onepage/onepage-2/index.html");
            op2.setDownloadFile("");
            op2.setPreviewImage("https://images.unsplash.com/photo-1542204172-e7052809f852?auto=format&fit=crop&w=800&q=80");
            op2.setVersion("1.0.0");
            op2.setStatus("PUBLISHED");
            op2.setPagesCount(1);
            op2.setDownloadsCount(1420);
            op2.setTags(new ArrayList<>(Arrays.asList("Storytelling", "Narrative", "Tailwind", "React")));
            templateRepository.save(op2);
            logs.put("template_onepage_2", "Created");

            // onepage-3 (INTENT)
            Template op3 = new Template();
            op3.setName("INTENT — Creative Digital Agency");
            op3.setSlug("onepage-3");
            op3.setDescription("A premium, high-impact Next.js one-page creative digital agency layout featuring dynamic motion animations, services lists, process grids, results counters, and contact booking panels.");
            op3.setCategory(onepageCategory);
            op3.setPrice(0.0);
            op3.setTemplateType("FREE");
            op3.setBootstrapVersion("Next.js 15 / Tailwind CSS");
            op3.setDemoUrl("/templates/onepage/onepage-3/index.html");
            op3.setDownloadFile("");
            op3.setPreviewImage("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80");
            op3.setVersion("1.0.0");
            op3.setStatus("PUBLISHED");
            op3.setPagesCount(1);
            op3.setDownloadsCount(1510);
            op3.setTags(new ArrayList<>(Arrays.asList("Agency", "Creative", "Single Page", "NextJS")));
            templateRepository.save(op3);
            logs.put("template_onepage_3", "Created");

            // onepage-4 (Aetheria)
            Template op4 = new Template();
            op4.setName("Aetheria — Next-Gen Product & Brand Agency");
            op4.setSlug("onepage-4");
            op4.setDescription("An elegant, futuristic digital product and brand showcase with ambient particle canvases, responsive service grids, team sliders, and custom project modals.");
            op4.setCategory(onepageCategory);
            op4.setPrice(0.0);
            op4.setTemplateType("FREE");
            op4.setBootstrapVersion("React / Vite / CSS");
            op4.setDemoUrl("/templates/onepage/onepage-4/index.html");
            op4.setDownloadFile("");
            op4.setPreviewImage("https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80");
            op4.setVersion("1.0.0");
            op4.setStatus("PUBLISHED");
            op4.setPagesCount(1);
            op4.setDownloadsCount(1490);
            op4.setTags(new ArrayList<>(Arrays.asList("Brand Agency", "Future", "Particle Canvas", "Vite")));
            templateRepository.save(op4);
            logs.put("template_onepage_4", "Created");

            // onepage-5 (Vertex)
            Template op5 = new Template();
            op5.setName("Vertex — Business Solutions & Digital Showcase");
            op5.setSlug("onepage-5");
            op5.setDescription("A sleek corporate business solutions layout featuring performance dashboards, interactive pricing matrices, logo clouds, FAQ accordions, and clean service grids.");
            op5.setCategory(onepageCategory);
            op5.setPrice(0.0);
            op5.setTemplateType("FREE");
            op5.setBootstrapVersion("React / Vite / CSS");
            op5.setDemoUrl("/templates/onepage/onepage-5/index.html");
            op5.setDownloadFile("");
            op5.setPreviewImage("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80");
            op5.setVersion("1.0.0");
            op5.setStatus("PUBLISHED");
            op5.setPagesCount(1);
            op5.setDownloadsCount(1380);
            op5.setTags(new ArrayList<>(Arrays.asList("Corporate", "Business Solutions", "Dashboard", "Vite")));
            templateRepository.save(op5);
            logs.put("template_onepage_5", "Created");

            // onepage-6 (Intent v2)
            Template op6 = new Template();
            op6.setName("INTENT — Creative & Digital Strategy");
            op6.setSlug("onepage-6");
            op6.setDescription("A modern digital agency template with client-side portfolio grids, capabilities list, process maps, and custom client sections.");
            op6.setCategory(onepageCategory);
            op6.setPrice(0.0);
            op6.setTemplateType("FREE");
            op6.setBootstrapVersion("Next.js 16 / Tailwind CSS");
            op6.setDemoUrl("/templates/onepage/onepage-6/index.html");
            op6.setDownloadFile("");
            op6.setPreviewImage("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80");
            op6.setVersion("1.0.0");
            op6.setStatus("PUBLISHED");
            op6.setPagesCount(1);
            op6.setDownloadsCount(1400);
            op6.setTags(new ArrayList<>(Arrays.asList("Agency", "Creative Studio", "Next.js", "Tailwind")));
            templateRepository.save(op6);
            logs.put("template_onepage_6", "Created");

            // onepage-7 (Fonix)
            Template op7 = new Template();
            op7.setName("Fonix 3D Landing Page & PRD Studio");
            op7.setSlug("onepage-7");
            op7.setDescription("Comprehensive Product Requirements Document (PRD) and live interactive 3D WebGL showcase for the Fonix one-page brand experience.");
            op7.setCategory(onepageCategory);
            op7.setPrice(0.0);
            op7.setTemplateType("FREE");
            op7.setBootstrapVersion("React / Vite / CSS");
            op7.setDemoUrl("/templates/onepage/onepage-7/index.html");
            op7.setDownloadFile("");
            op7.setPreviewImage("https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80");
            op7.setVersion("1.0.0");
            op7.setStatus("PUBLISHED");
            op7.setPagesCount(1);
            op7.setDownloadsCount(1350);
            op7.setTags(new ArrayList<>(Arrays.asList("3D Showcase", "PRD", "WebGL", "Vite")));
            templateRepository.save(op7);
            logs.put("template_onepage_7", "Created");

            // onepage-8 (AI Human Machine CS Portfolio)
            Template op8 = new Template();
            op8.setName("AI // HUMAN // MACHINE - 3D Interactive AI/ML Portfolio");
            op8.setSlug("onepage-8");
            op8.setDescription("An immersive 3D interactive portfolio and digital laboratory for an AI/ML Computer Science Engineer and Developer, featuring real-time WebGL experiences.");
            op8.setCategory(onepageCategory);
            op8.setPrice(0.0);
            op8.setTemplateType("FREE");
            op8.setBootstrapVersion("React / Vite / CSS");
            op8.setDemoUrl("/templates/onepage/onepage-8/index.html");
            op8.setDownloadFile("");
            op8.setPreviewImage("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80");
            op8.setVersion("1.0.0");
            op8.setStatus("PUBLISHED");
            op8.setPagesCount(1);
            op8.setDownloadsCount(1450);
            op8.setTags(new ArrayList<>(Arrays.asList("AI Portfolio", "WebGL", "Computer Science", "Vite")));
            templateRepository.save(op8);
            logs.put("template_onepage_8", "Created");

            // onepage-9 (Vertex v2 Strategy & Advisory)
            Template op9 = new Template();
            op9.setName("Vertex — Strategy & Advisory");
            op9.setSlug("onepage-9");
            op9.setDescription("A modern strategy & advisory corporate showcase with pricing schedules, team grids, performance dashboards, and interactive process timelines.");
            op9.setCategory(onepageCategory);
            op9.setPrice(0.0);
            op9.setTemplateType("FREE");
            op9.setBootstrapVersion("React / Vite / CSS");
            op9.setDemoUrl("/templates/onepage/onepage-9/index.html");
            op9.setDownloadFile("");
            op9.setPreviewImage("https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80");
            op9.setVersion("1.0.0");
            op9.setStatus("PUBLISHED");
            op9.setPagesCount(1);
            op9.setDownloadsCount(1380);
            op9.setTags(new ArrayList<>(Arrays.asList("Corporate", "Strategy", "Dashboard", "Vite")));
            templateRepository.save(op9);
            logs.put("template_onepage_9", "Created");

            // onepage-10 (Aetheria v2)
            Template op10 = new Template();
            op10.setName("Aetheria — Digital Benchmark Platforms");
            op10.setSlug("onepage-10");
            op10.setDescription("A sleek interactive digital benchmark experiences platform featuring real-time metric counters, why us accordions, and custom client sections.");
            op10.setCategory(onepageCategory);
            op10.setPrice(0.0);
            op10.setTemplateType("FREE");
            op10.setBootstrapVersion("React / Vite / CSS");
            op10.setDemoUrl("/templates/onepage/onepage-10/index.html");
            op10.setDownloadFile("");
            op10.setPreviewImage("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80");
            op10.setVersion("1.0.0");
            op10.setStatus("PUBLISHED");
            op10.setPagesCount(1);
            op10.setDownloadsCount(1420);
            op10.setTags(new ArrayList<>(Arrays.asList("Benchmark", "Metrics", "WebGL", "Vite")));
            templateRepository.save(op10);
            logs.put("template_onepage_10", "Created");
        }

        // 19. Seed Real Estate templates
        Category realEstateCategory = catMap.get("real-estate");
        if (realEstateCategory != null) {
            String[][] realEstateData = {
                {"Estate Prime — Signature Real Estate Branding", "estate-prime", "Confidential premium estate listing portal featuring luxury residential showcases, dynamic specifications, and booking tour capture.", "real-estate-1", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", "Real Estate, Estate Prime, Luxury Villa, React"},
                {"Urbanova — Cosmopolitan Property Collection", "urbanova", "A sophisticated urban residential and condominium directory featuring premium neighborhood stats, pricing calculators, and interactive slot bookings.", "real-estate-2", "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80", "Real Estate, Condominium, Urbanova, React"},
                {"Luxora Estates — Elite Architectural Portfolios", "luxora-estates", "Elite real estate showcase tailored for ultra-high-net-worth acquisitions, featuring full-screen immersive galleries, BIM integration, and private consultation forms.", "real-estate-3", "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80", "Real Estate, Luxora, Architectural, React"},
                {"Skyline Collective — Metropolitan Penthouse Suites", "skyline-collective", "Premium property list curated for penthouses and sky-high luxury suites, featuring custom height inspectors, wind-load data, and private tour registries.", "real-estate-4", "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80", "Real Estate, Skyline, Penthouse, React"},
                {"Terra Living — Eco-Friendly Residential Designs", "terra-living", "Sustainably built family houses and residential community layouts, featuring carbon offset stats, solar energy calculators, and garden lot customizers.", "real-estate-5", "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80", "Real Estate, Green Housing, Terra Living, React"},
                {"MetroHaus — Smart Urban Apartments & Lofts", "metrohaus", "A minimalist loft and modern downtown apartment guide, featuring smart home spec lists, interactive room planners, and neighborhood commute estimators.", "real-estate-6", "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80", "Real Estate, Lofts, Downtown, React"},
                {"Heritage Homes — Restored Classic Estates", "heritage-homes", "Classic Tudor, Victorian, and mid-century modern historical restoration listings, featuring historical context timelines and materials registers.", "real-estate-7", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80", "Real Estate, Historical, Heritage, React"},
                {"Vertex Properties — Industrial & Commercial Spaces", "vertex-properties", "Premium warehouse, office park, and co-working property listings, featuring custom floor space calculators and lease term customizers.", "real-estate-8", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", "Real Estate, Commercial, Vertex, React"},
                {"Haven Realty — Coastal Vacation Homes & Villas", "haven-realty", "Elite waterfront property directory featuring sea-level stats, private beach indices, boat slip availability, and seasonal booking calculators.", "real-estate-9", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", "Real Estate, Coastal, Waterfront, React"},
                {"Monument Estates — Historic Castle & Manor Listings", "monument-estates", "Ultra-luxury castle, château, and private island listings, featuring gatehouse specs, helipad registries, and confidentiality agreements.", "real-estate-10", "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80", "Real Estate, Castles, Ultra Luxury, React"}
            };

            for (String[] data : realEstateData) {
                Template t = new Template();
                t.setName(data[0]);
                t.setSlug(data[1]);
                t.setDescription(data[2]);
                t.setCategory(realEstateCategory);
                t.setPrice(0.0);
                t.setTemplateType("FREE");
                t.setBootstrapVersion("React 19 / Vite / Tailwind CSS");
                t.setDemoUrl("/templates/real-estate/" + data[3] + "/index.html");
                t.setDownloadFile("");
                t.setPreviewImage(data[4]);
                t.setVersion("1.0.0");
                t.setStatus("PUBLISHED");
                t.setPagesCount(1);
                t.setDownloadsCount(1800);
                t.setTags(new ArrayList<>(Arrays.asList(data[5].split(", "))));
                templateRepository.save(t);
                logs.put("template_" + data[1].replace("-", "_"), "Created");
            }
        }

        Category transportationCategory = categoryRepository.findBySlug("transportation").orElse(null);
        if (transportationCategory != null) {
            String[][] transportationData = {
                {"Voltway — Smart EV Transit & Logistics", "voltway", "Next-generation electric vehicle fleet operator dashboard and logistics solution portal featuring live charger mapping, battery state tracking, and smart scheduling integrations.", "transportation-1", "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80", "Transportation, EV, Transit, Logistics, React"},
                {"Roadline — Modern Freight Operations", "roadline", "Modern heavy-freight and national trucking operations interface featuring route optimizations, shipment telemetry, and real-time delivery status alerts.", "transportation-2", "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80", "Transportation, Freight, Trucking, React"},
                {"Fleetrise — Smart Fleet Intelligence & Analytics", "fleetrise", "Professional fleet tracking and diagnostic software layout featuring detailed driver safety telemetry, OBD metrics, and fuel consumption charts.", "transportation-3", "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=800&q=80", "Transportation, Fleet, Tracking, React"},
                {"Skyroute — Global Air Charter Systems", "skyroute", "Luxury air charter registry and flight scheduling portal featuring private terminal bookings, cargo capacity calculations, and custom route quote estimators.", "transportation-4", "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80", "Transportation, Air Charter, Flight, React"},
                {"Citymove — Local Courier & Moving Solutions", "citymove", "Sleek on-demand package courier and moving agency portal featuring weight pricing matrices, live distance estimations, and drop-off time selectors.", "transportation-5", "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=800&q=80", "Transportation, Courier, Moving, React"},
                {"Transitflow — Regional Supply Chain Management", "transitflow", "Regional multi-modal hub distribution and sorting layout featuring custom transit timetables, warehouse capacity tracking, and carrier integration lists.", "transportation-6", "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", "Transportation, Supply Chain, Logistics, React"},
                {"Cargomax — Heavy Cargo & Shipping Enterprise", "cargomax", "Heavy cargo logistics and industrial distribution portal featuring customs form generators, dimensional weight calculators, and container lot registers.", "transportation-7", "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80", "Transportation, Shipping, Cargo, React"},
                {"Rideora — Smart Urban Ride-Hailing Network", "rideora", "Interactive rideshare and taxi network portal featuring fare calculators, driver onboarding flows, regional service heatmaps, and ride booking previews.", "transportation-8", "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80", "Transportation, Ride Hailing, Rideshare, React"},
                {"Railnova — Automated Rail Transit & Operations", "railnova", "Urban light rail and intercity rail operations platform featuring automated switchboard simulations, carriage occupancy metrics, and delay tracker alerts.", "transportation-9", "https://images.unsplash.com/photo-1515165504669-42308707f15c?auto=format&fit=crop&w=800&q=80", "Transportation, Rail, Subway, React"},
                {"Oceanlink — International Maritime Operations", "oceanlink", "Global maritime freight, vessel scheduling, and seaport coordination system featuring cargo draft calculators, shipping lane weather overlays, and port ETA registries.", "transportation-10", "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80", "Transportation, Maritime, Port, React"}
            };

            for (String[] data : transportationData) {
                Template t = new Template();
                t.setName(data[0]);
                t.setSlug(data[1]);
                t.setDescription(data[2]);
                t.setCategory(transportationCategory);
                t.setPrice(0.0);
                t.setTemplateType("FREE");
                t.setBootstrapVersion("React 19 / Vite / Tailwind CSS");
                t.setDemoUrl("/templates/transportation/" + data[3] + "/index.html");
                t.setDownloadFile("");
                t.setPreviewImage(data[4]);
                t.setVersion("1.0.0");
                t.setStatus("PUBLISHED");
                t.setPagesCount(1);
                t.setDownloadsCount(1540);
                t.setTags(new ArrayList<>(Arrays.asList(data[5].split(", "))));
                templateRepository.save(t);
                logs.put("template_" + data[1].replace("-", "_"), "Created");
            }
        }

        Category resumeCategory = categoryRepository.findBySlug("resume").orElse(null);
        if (resumeCategory != null) {
            String[][] resumeData = {
                {"—J—o—r—d—a—n— —D—a—v—i—s— —|— —S—o—f—t—w—a—r—e— —E—n—g—i—n—e—e—r— —&— —F—u—l—l— —S—t—a—c—k— —D—e—v—e—l—o—p—e—r—", "resume-1", "A clean, professional minimalist resume template with smooth scroll navigation, detailed experience timeline, skills visualization, and contact form.", "resume-1", "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80", "Resume, Minimalist, CV, React"},
                {"—D—r—.— —M—a—y—a— —E—l—l—i—s—o—n— —|— —C—o—n—s—u—l—t—a—n—t— —C—a—r—d—i—o—l—o—g—i—s—t—", "resume-2", "A self-contained professional medical CV template tailored for doctors and researchers featuring timeline accomplishments, certifications, and publications.", "resume-2", "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80", "Resume, Medical CV, Cardiologist, React"},
                {"—D—r—.— —A—r—i—n— —S—o—l—b—e—r—g— ——— —A—e—r—o—s—p—a—c—e— —S—y—s—t—e—m—s— —E—n—g—i—n—e—e—r— —|— —P—o—r—t—f—o—l—i—o— —&— —R—e—s—u—m—e—", "resume-3", "A bold, high-contrast creative resume and portfolio template featuring asymmetrical sections, work lookbook, and contact overlays.", "resume-3", "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80", "Resume, Creative Director, Art Portfolio, React"},
                {"—N—o—a—h— —E—v—e—r—w—o—o—d— ——— —W—i—l—d—l—i—f—e— —P—h—o—t—o—g—r—a—p—h—e—r— —&— —D—o—c—u—m—e—n—t—a—r—y— —S—t—o—r—y—t—e—l—l—e—r— —P—o—r—t—f—o—l—i—o—", "resume-4", "A sleek dark-theme software developer resume template featuring interactive tech stack badges, GitHub project showcases, and career progress lines.", "resume-4", "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80", "Resume, Software Engineer, GitHub, React"},
                {"—A—d—r—i—a—n— —V—a—l—e— ——— —A—r—c—h—i—t—e—c—t— —&— —S—p—a—t—i—a—l— —D—e—s—i—g—n—e—r— —|— —P—o—r—t—f—o—l—i—o— —&— —C—V—", "resume-5", "An elegant, typography-focused CV template for product designers featuring portfolio showcases, service grids, and experience milestones.", "resume-5", "https://images.unsplash.com/photo-1541462608141-2ff580ee0e66?auto=format&fit=crop&w=800&q=80", "Resume, Product Design, UX Portfolio, React"},
                {"—E—l—e—n—a— —M—a—r—l—o—w—e— —|— —C—r—e—a—t—i—v—e— —D—i—r—e—c—t—o—r— —&— —B—r—a—n—d— —S—t—r—a—t—e—g—i—s—t—", "resume-6", "A corporate-ready executive profile template with a clean layout, highlights, professional overview, and structured career history.", "resume-6", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80", "Resume, Executive, Corporate Profile, React"},
                {"—L—u—c—i—e—n— —M—o—r—e—a—u— ——— —E—x—e—c—u—t—i—v—e— —C—h—e—f— —&— —C—u—l—i—n—a—r—y— —D—i—r—e—c—t—o—r—", "resume-7", "A unique, image-rich culinary portfolio and CV template for chefs and culinary artists featuring signature dishes, concept timelines, and collaborations.", "resume-7", "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80", "Resume, Chef CV, Culinary Art, React"},
                {"—E—l—a—r—a— —V—o—s—s— ——— —F—a—s—h—i—o—n— —D—e—s—i—g—n—e—r— —&— —C—r—e—a—t—i—v—e— —D—i—r—e—c—t—o—r— —|— —B—e—r—l—i—n—", "resume-8", "A premium portfolio and resume template for visual creatives and photographers featuring elegant image galleries, CV modals, and lookbooks.", "resume-8", "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=800&q=80", "Resume, Photography, Visual CV, React"}
            };

            for (String[] data : resumeData) {
                Template t = new Template();
                t.setName(data[0]);
                t.setSlug(data[1]);
                t.setDescription(data[2]);
                t.setCategory(resumeCategory);
                t.setPrice(0.0);
                t.setTemplateType("FREE");
                t.setBootstrapVersion("React / Vite / CSS");
                t.setDemoUrl("/templates/resume/" + data[3] + "/index.html");
                t.setDownloadFile("");
                t.setPreviewImage(data[4]);
                t.setVersion("1.0.0");
                t.setStatus("PUBLISHED");
                t.setPagesCount(1);
                t.setDownloadsCount(1400);
                t.setTags(new ArrayList<>(Arrays.asList(data[5].split(", "))));
                templateRepository.save(t);
                logs.put("template_" + data[1].replace("-", "_"), "Created");
            }
        }

        Category agencyCategory = categoryRepository.findBySlug("agency").orElse(null);
        if (agencyCategory == null) {
            agencyCategory = catMap.get("agency");
        }
        if (agencyCategory != null) {
            String[][] agencyData = {
                {"—F—o—l—d—l—i—n—e— ——— —D—e—s—i—g—n— —&— —T—e—c—h—n—o—l—o—g—y— —S—t—u—d—i—o—", "agency-1", "A clean, modern digital agency template with portfolio filtering, project sliders, team sections, and custom contact forms.", "agency-1", "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80", "Agency, Creative Studio, Portfolio, React, Vite"},
                {"—V—A—L—E—N—C—E— ——— —I—n—d—e—p—e—n—d—e—n—t— —C—r—e—a—t—i—v—e— —S—t—u—d—i—o— —&— —M—o—t—i—o—n— —A—r—c—h—i—t—e—c—t—u—r—e—", "agency-2", "Immersive branding and digital marketing template featuring interactive service cards, case study lists, and detailed lead forms.", "agency-2", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", "Agency, Marketing, Branding, React, Tailwind"},
                {"NovaDesign — Next-Gen Creative Agency", "agency-3", "A premium Next.js template for design agencies featuring smooth client-side routing, work showcases, client testimonial carousels, and services catalogs.", "agency-3", "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80", "Agency, Design Studio, NextJS, Tailwind"},
                {"—A—U—R—E—L—I—A— ——— —I—n—d—e—p—e—n—d—e—n—t— —C—r—e—a—t—i—v—e— —S—t—u—d—i—o—", "agency-4", "Premium creative production agency layout featuring detailed team cards, client reviews, dynamic video portfolios, and consult bookings.", "agency-4", "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80", "Agency, Video Production, Creative, React"},
                {"—B—Y—T—E—O—R—A— ——— —P—r—e—m—i—u—m— —D—i—g—i—t—a—l— —A—g—e—n—c—y— —|— —W—E— —B—U—I—L—D— —W—H—A—T—'—S— —N—E—X—T—", "agency-5", "Clean corporate consulting agency template with interactive client testimonials, department registers, and contact scheduling panels.", "agency-5", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", "Agency, Corporate, Consulting, React"},
                {"—V—A—N—T—A— —F—O—R—M— ——— —B—o—l—d— —A—r—c—h—i—t—e—c—t—u—r—e— —&— —S—y—s—t—e—m—s—", "agency-6", "Sleek interactive agency template featuring modern grid layouts, animated team member profiles, and detailed service timelines.", "agency-6", "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80", "Agency, Interactive, Tech, React"},
                {"—M—y— —G—o—o—g—l—e— —A—I— —S—t—u—d—i—o— —A—p—p—", "agency-7", "An experimental, high-end 3D spatial design agency website featuring UI/UX case studies, interactive design wall, 3D entrance experience, and editorial design showcases.", "agency-7", "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80", "3D, Spatial Design, Interactive, Vite"}
            };

            for (String[] data : agencyData) {
                Template t = new Template();
                t.setName(data[0]);
                t.setSlug(data[1]);
                t.setDescription(data[2]);
                t.setCategory(agencyCategory);
                t.setPrice(0.0);
                t.setTemplateType("FREE");
                t.setBootstrapVersion(data[1].equals("agency-3") ? "Next.js 15 / Tailwind CSS" : "React / Vite / CSS");
                t.setDemoUrl("/templates/agency/" + data[3] + "/index.html");
                t.setDownloadFile("");
                t.setPreviewImage(data[4]);
                t.setVersion("1.0.0");
                t.setStatus("PUBLISHED");
                t.setPagesCount(1);
                t.setDownloadsCount(1700);
                t.setTags(new ArrayList<>(Arrays.asList(data[5].split(", "))));
                templateRepository.save(t);
                logs.put("template_" + data[1].replace("-", "_"), "Created");
            }
        }

        Category personalCategory = categoryRepository.findBySlug("personal").orElse(null);
        if (personalCategory == null) {
            personalCategory = catMap.get("personal");
        }
        if (personalCategory != null) {
            Template t = new Template();
            t.setName("—J—U—L—I—A—N— —R—I—V—I—E—R—A— ——— —C—r—e—a—t—i—v—e— —T—e—c—h—n—o—l—o—g—i—s—t— —&— —A—I— —E—x—p—e—r—i—e—n—c—e— —A—r—c—h—i—t—e—c—t—");
            t.setSlug("personal-1");
            t.setDescription("An ultra-premium, cinematic personal showcase with editorial layout columns, asymmetric case study explorers, custom cursor physics, and contact scheduling panels.");
            t.setCategory(personalCategory);
            t.setPrice(0.0);
            t.setTemplateType("FREE");
            t.setBootstrapVersion("React / Vite / CSS");
            t.setDemoUrl("/templates/personal/personal-1/index.html");
            t.setDownloadFile("");
            t.setPreviewImage("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80");
            t.setVersion("1.0.0");
            t.setStatus("PUBLISHED");
            t.setPagesCount(1);
            t.setDownloadsCount(1480);
            t.setTags(new ArrayList<>(Arrays.asList("Personal Showcase", "Cinematic", "3D Elements", "Vite")));
            templateRepository.save(t);
            logs.put("template_personal_1", "Created");

            Template tp2 = new Template();
            tp2.setName("Arjun Mehta — AI Engineer Portfolio");
            tp2.setSlug("personal-2");
            tp2.setDescription("A cutting-edge personal portfolio for AI engineers featuring research showcases, interactive neural node graphs, and project timelines.");
            tp2.setCategory(personalCategory);
            tp2.setPrice(0.0);
            tp2.setTemplateType("FREE");
            tp2.setBootstrapVersion("React / Vite / CSS");
            tp2.setDemoUrl("/templates/personal/personal-2/index.html");
            tp2.setDownloadFile("");
            tp2.setPreviewImage("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80");
            tp2.setVersion("1.0.0");
            tp2.setStatus("PUBLISHED");
            tp2.setPagesCount(1);
            tp2.setDownloadsCount(1650);
            tp2.setTags(new ArrayList<>(Arrays.asList("AI Engineer", "Portfolio", "Research", "React", "Vite")));
            templateRepository.save(tp2);
            logs.put("template_personal_2", "Created");

            Template tp3 = new Template();
            tp3.setName("Vance Magazine — Editorial Portfolio");
            tp3.setSlug("personal-3");
            tp3.setDescription("A premium interactive digital magazine personal showcase layout built with React and custom CSS animation panels.");
            tp3.setCategory(personalCategory);
            tp3.setPrice(0.0);
            tp3.setTemplateType("FREE");
            tp3.setBootstrapVersion("React / Vite / CSS");
            tp3.setDemoUrl("/templates/personal/personal-3/index.html");
            tp3.setDownloadFile("");
            tp3.setPreviewImage("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80");
            tp3.setVersion("1.0.0");
            tp3.setStatus("PUBLISHED");
            tp3.setPagesCount(1);
            tp3.setDownloadsCount(1520);
            tp3.setTags(new ArrayList<>(Arrays.asList("Editorial", "Magazine", "Portfolio", "React", "Vite")));
            templateRepository.save(tp3);
            logs.put("template_personal_3", "Created");

            Template tp4 = new Template();
            tp4.setName("Aetherius — Experimental Digital Universe");
            tp4.setSlug("personal-4");
            tp4.setDescription("An experimental interactive digital universe portfolio with ambient canvas shaders, laboratory projects, and audio engines.");
            tp4.setCategory(personalCategory);
            tp4.setPrice(0.0);
            tp4.setTemplateType("FREE");
            tp4.setBootstrapVersion("React / Vite / CSS");
            tp4.setDemoUrl("/templates/personal/personal-4/index.html");
            tp4.setDownloadFile("");
            tp4.setPreviewImage("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80");
            tp4.setVersion("1.0.0");
            tp4.setStatus("PUBLISHED");
            tp4.setPagesCount(1);
            tp4.setDownloadsCount(1780);
            tp4.setTags(new ArrayList<>(Arrays.asList("Experimental", "Canvas", "Digital Universe", "React", "Vite")));
            templateRepository.save(tp4);
            logs.put("template_personal_4", "Created");

            Template tp5 = new Template();
            tp5.setName("Samuel — Living Digital Canvas");
            tp5.setSlug("personal-5");
            tp5.setDescription("A creative digital canvas personal portfolio showcasing work collections, philosophy walls, and interactive contact portals.");
            tp5.setCategory(personalCategory);
            tp5.setPrice(0.0);
            tp5.setTemplateType("FREE");
            tp5.setBootstrapVersion("React / Vite / CSS");
            tp5.setDemoUrl("/templates/personal/personal-5/index.html");
            tp5.setDownloadFile("");
            tp5.setPreviewImage("https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80");
            tp5.setVersion("1.0.0");
            tp5.setStatus("PUBLISHED");
            tp5.setPagesCount(1);
            tp5.setDownloadsCount(1490);
            tp5.setTags(new ArrayList<>(Arrays.asList("Digital Canvas", "Creative", "Portfolio", "React", "Vite")));
            templateRepository.save(tp5);
            logs.put("template_personal_5", "Created");

            Template tp6 = new Template();
            tp6.setName("Aether — Minimalist Creative Portfolio");
            tp6.setSlug("personal-6");
            tp6.setDescription("A minimalist creative showcase template featuring smooth scroll animations, experience timelines, and skill matrices.");
            tp6.setCategory(personalCategory);
            tp6.setPrice(0.0);
            tp6.setTemplateType("FREE");
            tp6.setBootstrapVersion("React / Vite / CSS");
            tp6.setDemoUrl("/templates/personal/personal-6/index.html");
            tp6.setDownloadFile("");
            tp6.setPreviewImage("https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80");
            tp6.setVersion("1.0.0");
            tp6.setStatus("PUBLISHED");
            tp6.setPagesCount(1);
            tp6.setDownloadsCount(1390);
            tp6.setTags(new ArrayList<>(Arrays.asList("Minimalist", "Creative", "Portfolio", "React", "Vite")));
            templateRepository.save(tp6);
            logs.put("template_personal_6", "Created");

            Template tp7 = new Template();
            tp7.setName("Alex Vance — Interactive Studio Setup");
            tp7.setSlug("personal-7");
            tp7.setDescription("An interactive desk setup personal portfolio featuring vector workspace widgets, growth journey plants, and custom audio keycaps.");
            tp7.setCategory(personalCategory);
            tp7.setPrice(0.0);
            tp7.setTemplateType("FREE");
            tp7.setBootstrapVersion("React / Vite / CSS");
            tp7.setDemoUrl("/templates/personal/personal-7/index.html");
            tp7.setDownloadFile("");
            tp7.setPreviewImage("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80");
            tp7.setVersion("1.0.0");
            tp7.setStatus("PUBLISHED");
            tp7.setPagesCount(1);
            tp7.setDownloadsCount(1820);
            tp7.setTags(new ArrayList<>(Arrays.asList("Studio", "Interactive", "Desk Setup", "React", "Vite")));
            templateRepository.save(tp7);
            logs.put("template_personal_7", "Created");

            Template tp8 = new Template();
            tp8.setName("Kaelen — Interactive Personal Showcase");
            tp8.setSlug("personal-8");
            tp8.setDescription("A modern developer portfolio featuring day/night theme toggles, project filter cards, and interactive milestone trackers.");
            tp8.setCategory(personalCategory);
            tp8.setPrice(0.0);
            tp8.setTemplateType("FREE");
            tp8.setBootstrapVersion("React / Vite / CSS");
            tp8.setDemoUrl("/templates/personal/personal-8/index.html");
            tp8.setDownloadFile("");
            tp8.setPreviewImage("https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80");
            tp8.setVersion("1.0.0");
            tp8.setStatus("PUBLISHED");
            tp8.setPagesCount(1);
            tp8.setDownloadsCount(1560);
            tp8.setTags(new ArrayList<>(Arrays.asList("Developer", "Day Night Theme", "Interactive", "React", "Vite")));
            templateRepository.save(tp8);
            logs.put("template_personal_8", "Created");

            Template tp9 = new Template();
            tp9.setName("Sakthi — Modern Engineering Portfolio");
            tp9.setSlug("personal-9");
            tp9.setDescription("A sleek developer portfolio with dark theme aesthetic, project grids, and downloadable CV modal integrations.");
            tp9.setCategory(personalCategory);
            tp9.setPrice(0.0);
            tp9.setTemplateType("FREE");
            tp9.setBootstrapVersion("React / Vite / CSS");
            tp9.setDemoUrl("/templates/personal/personal-9/index.html");
            tp9.setDownloadFile("");
            tp9.setPreviewImage("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80");
            tp9.setVersion("1.0.0");
            tp9.setStatus("PUBLISHED");
            tp9.setPagesCount(1);
            tp9.setDownloadsCount(1410);
            tp9.setTags(new ArrayList<>(Arrays.asList("Engineering", "Dark Theme", "CV Modal", "React", "Vite")));
            templateRepository.save(tp9);
            logs.put("template_personal_9", "Created");

            Template tp10 = new Template();
            tp10.setName("Nova — Cyberpunk Tech Portfolio");
            tp10.setSlug("personal-10");
            tp10.setDescription("A futuristic tech portfolio showcasing system engineering skills, project case studies, and interactive contact forms.");
            tp10.setCategory(personalCategory);
            tp10.setPrice(0.0);
            tp10.setTemplateType("FREE");
            tp10.setBootstrapVersion("React / Vite / CSS");
            tp10.setDemoUrl("/templates/personal/personal-10/index.html");
            tp10.setDownloadFile("");
            tp10.setPreviewImage("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80");
            tp10.setVersion("1.0.0");
            tp10.setStatus("PUBLISHED");
            tp10.setPagesCount(1);
            tp10.setDownloadsCount(1680);
            tp10.setTags(new ArrayList<>(Arrays.asList("Cyberpunk", "Tech Portfolio", "Futuristic", "React", "Vite")));
            templateRepository.save(tp10);
            logs.put("template_personal_10", "Created");
        }

        // 8 New Templates Seeding Block
        Category eduCat = categoryRepository.findBySlug("education").orElse(null);
        if (eduCat == null) eduCat = catMap.get("education");
        if (eduCat != null) {
            Template t1 = new Template();
            t1.setName("Eduora — Modern Academy Platform");
            t1.setSlug("education-10");
            t1.setDescription("A modern online education academy website featuring interactive course cards, filterable catalogs, and student portals.");
            t1.setCategory(eduCat);
            t1.setPrice(0.0);
            t1.setTemplateType("FREE");
            t1.setBootstrapVersion("React / Vite / CSS");
            t1.setDemoUrl("/templates/education/education-10/index.html");
            t1.setDownloadFile("");
            t1.setPreviewImage("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80");
            t1.setVersion("1.0.0");
            t1.setStatus("PUBLISHED");
            t1.setPagesCount(1);
            t1.setDownloadsCount(1620);
            t1.setTags(new ArrayList<>(Arrays.asList("Academy", "Online Courses", "Education", "React", "Vite")));
            templateRepository.save(t1);
            logs.put("template_education_10", "Created");
        }

        Category bizCat = categoryRepository.findBySlug("buisness").orElse(null);
        if (bizCat == null) bizCat = catMap.get("buisness");
        if (bizCat != null) {
            Template t2 = new Template();
            t2.setName("Ember & Olive — Premium Restaurant Website");
            t2.setSlug("business-9");
            t2.setDescription("A commercial-grade premium restaurant template with seasonal menu explorers, reservation booking controls, and custom gallery showcases.");
            t2.setCategory(bizCat);
            t2.setPrice(0.0);
            t2.setTemplateType("FREE");
            t2.setBootstrapVersion("React / Vite / CSS");
            t2.setDemoUrl("/templates/buisness/Business-9/index.html");
            t2.setDownloadFile("");
            t2.setPreviewImage("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80");
            t2.setVersion("1.0.0");
            t2.setStatus("PUBLISHED");
            t2.setPagesCount(1);
            t2.setDownloadsCount(1450);
            t2.setTags(new ArrayList<>(Arrays.asList("Restaurant", "Menu", "Booking", "React", "Vite")));
            templateRepository.save(t2);
            logs.put("template_business_9", "Created");

            Template t3 = new Template();
            t3.setName("NEXUS — Global Business Consultancy");
            t3.setSlug("business-10");
            t3.setDescription("A sleek enterprise consultancy template featuring interactive service grids, client success metrics, and booking systems.");
            t3.setCategory(bizCat);
            t3.setPrice(0.0);
            t3.setTemplateType("FREE");
            t3.setBootstrapVersion("React / Vite / CSS");
            t3.setDemoUrl("/templates/buisness/Business-10/index.html");
            t3.setDownloadFile("");
            t3.setPreviewImage("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80");
            t3.setVersion("1.0.0");
            t3.setStatus("PUBLISHED");
            t3.setPagesCount(1);
            t3.setDownloadsCount(1530);
            t3.setTags(new ArrayList<>(Arrays.asList("Consultancy", "Enterprise", "Business", "React", "Vite")));
            templateRepository.save(t3);
            logs.put("template_business_10", "Created");
        }

        Category landCat = categoryRepository.findBySlug("landing-page").orElse(null);
        if (landCat == null) landCat = catMap.get("landing-page");
        if (landCat != null) {
            Template t4 = new Template();
            t4.setName("ExquDrive — Luxury Vehicle Rental");
            t4.setSlug("landing-page-9");
            t4.setDescription("A high-impact cinematic vehicle rental landing page with animated stat banners, fleet showcase slideshows, and instant booking modal flows.");
            t4.setCategory(landCat);
            t4.setPrice(0.0);
            t4.setTemplateType("FREE");
            t4.setBootstrapVersion("React / Vite / CSS");
            t4.setDemoUrl("/templates/landing-page/landing-page-9/index.html");
            t4.setDownloadFile("");
            t4.setPreviewImage("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80");
            t4.setVersion("1.0.0");
            t4.setStatus("PUBLISHED");
            t4.setPagesCount(1);
            t4.setDownloadsCount(1720);
            t4.setTags(new ArrayList<>(Arrays.asList("Car Rental", "Luxury", "Automotive", "React", "Vite")));
            templateRepository.save(t4);
            logs.put("template_landing_page_9", "Created");

            Template t5 = new Template();
            t5.setName("Aurelia — Premium Wellness & Yoga Studio");
            t5.setSlug("landing-page-10");
            t5.setDescription("A premium luxury wellness landing page featuring programs gallery, daily rhythm grids, and client trust testimonies.");
            t5.setCategory(landCat);
            t5.setPrice(0.0);
            t5.setTemplateType("FREE");
            t5.setBootstrapVersion("React / Vite / CSS");
            t5.setDemoUrl("/templates/landing-page/landing-page-10/index.html");
            t5.setDownloadFile("");
            t5.setPreviewImage("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80");
            t5.setVersion("1.0.0");
            t5.setStatus("PUBLISHED");
            t5.setPagesCount(1);
            t5.setDownloadsCount(1390);
            t5.setTags(new ArrayList<>(Arrays.asList("Wellness", "Yoga", "Health", "React", "Vite")));
            templateRepository.save(t5);
            logs.put("template_landing_page_10", "Created");
        }

        Category medCat = categoryRepository.findBySlug("Medical").orElse(null);
        if (medCat == null) medCat = catMap.get("Medical");
        if (medCat != null) {
            Template t6 = new Template();
            t6.setName("PulseCare — Modern Healthcare Platform");
            t6.setSlug("Medical-8");
            t6.setDescription("A comprehensive medical hub featuring doctor discovery lists, secure health vault portals, and instant booking engines.");
            t6.setCategory(medCat);
            t6.setPrice(0.0);
            t6.setTemplateType("FREE");
            t6.setBootstrapVersion("React / Vite / CSS");
            t6.setDemoUrl("/templates/Medical/Medical-8/index.html");
            t6.setDownloadFile("");
            t6.setPreviewImage("https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80");
            t6.setVersion("1.0.0");
            t6.setStatus("PUBLISHED");
            t6.setPagesCount(1);
            t6.setDownloadsCount(1800);
            t6.setTags(new ArrayList<>(Arrays.asList("Healthcare", "Doctor booking", "Medical Portal", "HTML", "CSS")));
            templateRepository.save(t6);
            logs.put("template_Medical_8", "Created");
        }

        Category resCat = categoryRepository.findBySlug("resume").orElse(null);
        if (resCat == null) resCat = catMap.get("resume");
        if (resCat != null) {
            Template t7 = new Template();
            t7.setName("Mira — Creative Visual Portfolio");
            t7.setSlug("resume-9");
            t7.setDescription("A sleek visual artist resume with interactive grids, filterable portfolios, and custom contact sections.");
            t7.setCategory(resCat);
            t7.setPrice(0.0);
            t7.setTemplateType("FREE");
            t7.setBootstrapVersion("React / Vite / CSS");
            t7.setDemoUrl("/templates/resume/resume-9/index.html");
            t7.setDownloadFile("");
            t7.setPreviewImage("https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80");
            t7.setVersion("1.0.0");
            t7.setStatus("PUBLISHED");
            t7.setPagesCount(1);
            t7.setDownloadsCount(1410);
            t7.setTags(new ArrayList<>(Arrays.asList("Portfolio", "Artist", "Resume", "React", "Vite")));
            templateRepository.save(t7);
            logs.put("template_resume_9", "Created");

            Template t8 = new Template();
            t8.setName("FilmDirector — Cinematic Portfolio");
            t8.setSlug("resume-10");
            t8.setDescription("An editorial cinematic director resume showcasing movie portfolios, philosophy statements, and contact inquiries.");
            t8.setCategory(resCat);
            t8.setPrice(0.0);
            t8.setTemplateType("FREE");
            t8.setBootstrapVersion("React / Vite / CSS");
            t8.setDemoUrl("/templates/resume/resume-10/index.html");
            t8.setDownloadFile("");
            t8.setPreviewImage("https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80");
            t8.setVersion("1.0.0");
            t8.setStatus("PUBLISHED");
            t8.setPagesCount(1);
            t8.setDownloadsCount(1350);
            t8.setTags(new ArrayList<>(Arrays.asList("Director", "Movie Portfolio", "Filmmaker", "React", "Vite")));
            templateRepository.save(t8);
            logs.put("template_resume_10", "Created");
        }

        logs.put("status", "Database Seeding Completed Successfully! All templates seeded.");
        return ResponseEntity.ok(logs);
    }
}
