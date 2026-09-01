package com.vishalos.backend.controller;

import com.vishalos.backend.dto.ContactFormDto;
import com.vishalos.backend.dto.ContactResponseDto;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(originPatterns = "*", allowCredentials = "true")
public class ApiController {

    private Map<String, Object> mapOf(Object... keyValues) {
        Map<String, Object> map = new LinkedHashMap<>();
        for (int i = 0; i < keyValues.length; i += 2) {
            map.put((String) keyValues[i], keyValues[i + 1]);
        }
        return map;
    }

    @GetMapping("/profile")
    public ResponseEntity<Map<String, Object>> getProfile() {
        Map<String, Object> profile = new LinkedHashMap<>();
        profile.put("name", "Marcus Sterling");
        profile.put("title", "Full Stack Developer & AI Engineer");
        profile.put("tagline", "Architecting high-performance web systems and intelligent interactive experiences.");
        profile.put("location", "San Francisco, CA / Remote");
        profile.put("email", "marcus.dev@portfolio.io");
        profile.put("status", "AVAILABLE FOR NEW OPPORTUNITIES");
        profile.put("roles", Arrays.asList("CREATOR", "LEARNER", "DEVELOPER", "PROBLEM SOLVER"));
        profile.put("bio", "I'm a passionate engineer crafting modern scalable web architectures, high-concurrency Spring Boot backend microservices, and reactive fluid user experiences in React.");
        profile.put("stats", mapOf(
            "projects", "12+",
            "technologies", "15+",
            "achievements", "10+",
            "experienceYears", "4+"
        ));
        return ResponseEntity.ok(profile);
    }

    @GetMapping("/skills")
    public ResponseEntity<List<Map<String, Object>>> getSkills() {
        List<Map<String, Object>> skills = new ArrayList<>();

        skills.add(mapOf(
            "category", "FRONTEND",
            "items", Arrays.asList(
                mapOf("name", "React.js", "level", 95, "icon", "Atom", "experience", "4 Yrs", "desc", "Modern SPA Architecture, Hooks, Context, Framer Motion, State Management"),
                mapOf("name", "JavaScript (ES6+)", "level", 92, "icon", "Code2", "experience", "5 Yrs", "desc", "Async/Await, DOM manipulation, Functional Programming"),
                mapOf("name", "TypeScript", "level", 88, "icon", "FileCode", "experience", "3 Yrs", "desc", "Strict typing, generic interfaces, API client definitions"),
                mapOf("name", "GSAP / Framer Motion", "level", 90, "icon", "Sparkles", "experience", "3 Yrs", "desc", "Complex timeline orchestration, 60fps GPU micro-interactions")
            )
        ));

        skills.add(mapOf(
            "category", "BACKEND",
            "items", Arrays.asList(
                mapOf("name", "Java", "level", 90, "icon", "Coffee", "experience", "4 Yrs", "desc", "Java 21, Concurrency, OOP Architecture, Streams & Lambdas"),
                mapOf("name", "Spring Boot", "level", 88, "icon", "Server", "experience", "3.5 Yrs", "desc", "REST APIs, Spring Security, Validation, Exception Handling"),
                mapOf("name", "Python", "level", 82, "icon", "Terminal", "experience", "3 Yrs", "desc", "Automation, Data Parsing, Flask/FastAPI REST APIs"),
                mapOf("name", "REST APIs / JSON", "level", 95, "icon", "Network", "experience", "4 Yrs", "desc", "Contract Design, Swagger/OpenAPI, Dynamic Payloads")
            )
        ));

        skills.add(mapOf(
            "category", "TOOLS",
            "items", Arrays.asList(
                mapOf("name", "Git & GitHub", "level", 90, "icon", "GitBranch", "experience", "4 Yrs", "desc", "Branching workflows, Pull Requests, GitHub Actions CI/CD"),
                mapOf("name", "Docker", "level", 80, "icon", "Container", "experience", "2 Yrs", "desc", "Containerization, Multi-stage builds, Compose setups"),
                mapOf("name", "Vite / Webpack", "level", 88, "icon", "Zap", "experience", "3 Yrs", "desc", "Build optimization, HMR, Asset bundling")
            )
        ));

        skills.add(mapOf(
            "category", "AI / ML",
            "items", Arrays.asList(
                mapOf("name", "OpenAI / LLM APIs", "level", 85, "icon", "Cpu", "experience", "2 Yrs", "desc", "Prompt Engineering, Agentic Workflows, Function Calling"),
                mapOf("name", "Computer Vision", "level", 78, "icon", "Eye", "experience", "1.5 Yrs", "desc", "OpenCV image processing & object recognition pipelines")
            )
        ));

        return ResponseEntity.ok(skills);
    }

    @GetMapping("/projects")
    public ResponseEntity<List<Map<String, Object>>> getProjects() {
        List<Map<String, Object>> projects = new ArrayList<>();

        projects.add(mapOf(
            "id", "smart-city-dashboard",
            "title", "Smart City Traffic Management Dashboard",
            "fileName", "smart-city-dashboard.project",
            "category", "WEB DEVELOPMENT",
            "problem", "Urban metropolitan traffic controllers lacked real-time multi-junction telemetry visualization, resulting in manual gridlock delays.",
            "solution", "Engineered a reactive React + Java Spring Boot dashboard with WebSockets streaming sensor data across 45 intersections.",
            "technologies", Arrays.asList("React.js", "Spring Boot", "Java 21", "WebSocket", "Recharts", "CSS Grid"),
            "github", "https://github.com/vishal-dev/smart-city-dashboard",
            "demo", "https://smart-city-demo.vishalos.dev",
            "featured", true,
            "badge", "PROD READY"
        ));

        projects.add(mapOf(
            "id", "ecommerce-platform",
            "title", "Hyper-Responsive Headless E-Commerce Platform",
            "fileName", "ecommerce-platform.project",
            "category", "WEB DEVELOPMENT",
            "problem", "Legacy monolithic store suffered 3.8s page response latency during seasonal flash sales.",
            "solution", "Decoupled frontend into a sub-second SPA and optimized Spring REST microservices with caching, dropping p99 latency to 180ms.",
            "technologies", Arrays.asList("React.js", "Java Spring Boot", "Framer Motion", "REST API", "TailwindCSS"),
            "github", "https://github.com/vishal-dev/nextgen-ecommerce",
            "demo", "https://store-demo.vishalos.dev",
            "featured", true,
            "badge", "POPULAR"
        ));

        projects.add(mapOf(
            "id", "ai-detection",
            "title", "Real-Time AI Defect Detection Pipeline",
            "fileName", "ai-detection.project",
            "category", "AI PROJECTS",
            "problem", "Manual manufacturing quality assurance inspects only 10% of hardware PCB boards with human error margins.",
            "solution", "Created a computer vision model pipeline serving predictions through a Java API with instant overlay visual alerts in React.",
            "technologies", Arrays.asList("Python", "Java Spring Boot", "OpenCV", "React.js", "Canvas API"),
            "github", "https://github.com/vishal-dev/ai-defect-scanner",
            "demo", "https://ai-scanner.vishalos.dev",
            "featured", true,
            "badge", "AI DRIVEN"
        ));

        projects.add(mapOf(
            "id", "traffic-management",
            "title", "Automated Fleet & Logistics Controller",
            "fileName", "traffic-management.project",
            "category", "SOFTWARE",
            "problem", "Disparate GPS trackers led to route inefficiencies and untracked driver downtime.",
            "solution", "Built an automated route planning engine utilizing Dijkstra pathing algorithms and interactive map canvas.",
            "technologies", Arrays.asList("Java", "Spring Boot", "React.js", "GSAP Map", "REST APIs"),
            "github", "https://github.com/vishal-dev/fleet-logistics-os",
            "demo", "https://fleet.vishalos.dev",
            "featured", false,
            "badge", "ENTERPRISE"
        ));

        projects.add(mapOf(
            "id", "os-portfolio-experiments",
            "title", "Personal OS Desktop Engine",
            "fileName", "personal-os-desktop.project",
            "category", "EXPERIMENTS",
            "problem", "Standard portfolio websites are static, generic, and unmemorable.",
            "solution", "Designed an interactive desktop operating system with draggable windowing system, custom desktop apps, and Spring Boot backend integration.",
            "technologies", Arrays.asList("React.js", "Framer Motion", "GSAP", "Java Spring Boot", "Custom CSS System"),
            "github", "https://github.com/vishal-dev/vishal-os-portfolio",
            "demo", "https://vishalos.dev",
            "featured", true,
            "badge", "FEATURED"
        ));

        return ResponseEntity.ok(projects);
    }

    @GetMapping("/experience")
    public ResponseEntity<List<Map<String, Object>>> getExperience() {
        List<Map<String, Object>> route = new ArrayList<>();

        route.add(mapOf(
            "id", "start",
            "node", "START",
            "title", "Hello World & Computer Science Foundations",
            "year", "2020",
            "location", "University Computer Lab",
            "desc", "Ignited passion for software development. Built first CLI utilities in Java and created responsive HTML/CSS web pages."
        ));

        route.add(mapOf(
            "id", "learning",
            "node", "LEARNING",
            "title", "Mastering Full Stack Architecture",
            "year", "2021",
            "location", "Deep Tech Exploration",
            "desc", "Deep-dived into React component lifecycles, state management, REST API architecture, and Java Spring Boot framework fundamentals."
        ));

        route.add(mapOf(
            "id", "first-project",
            "node", "FIRST PROJECT",
            "title", "First Full-Stack Deployment",
            "year", "2022",
            "location", "Production Launch",
            "desc", "Deployed a complete full-stack web application serving live users with zero downtime using React and Spring Boot."
        ));

        route.add(mapOf(
            "id", "experience",
            "node", "EXPERIENCE",
            "title", "Software Engineer - Tech Solutions Inc.",
            "year", "2023 - 2025",
            "location", "San Francisco / Remote",
            "desc", "Led frontend feature development for high-traffic enterprise web applications. Engineered resilient Spring Boot microservices."
        ));

        route.add(mapOf(
            "id", "achievements",
            "node", "ACHIEVEMENTS",
            "title", "Hackathon Winner & Tech Lead",
            "year", "2025",
            "location", "Global Developer Summit",
            "desc", "Awarded 1st Place for building an AI-assisted real-time collaborative workspace in 48 hours."
        ));

        route.add(mapOf(
            "id", "current",
            "node", "CURRENT",
            "title", "Senior Full Stack Engineer & Open Source Creator",
            "year", "2026",
            "location", "VISHAL OS Innovation Studio",
            "desc", "Currently crafting next-gen interactive web applications, desktop-grade web experiences, and microservices."
        ));

        route.add(mapOf(
            "id", "future",
            "node", "FUTURE",
            "title", "Next Frontier - Spatial & Agentic OS Systems",
            "year", "Beyond",
            "location", "The Horizon",
            "desc", "Exploring AI agent integrations, WebGL 3D canvases, and next-generation operating system visual interfaces."
        ));

        return ResponseEntity.ok(route);
    }

    @GetMapping("/education")
    public ResponseEntity<List<Map<String, Object>>> getEducation() {
        List<Map<String, Object>> edu = new ArrayList<>();

        edu.add(mapOf(
            "institution", "California State University",
            "degree", "Bachelor of Science in Computer Science",
            "specialization", "Software Engineering & Intelligent Systems",
            "year", "2020 - 2024",
            "gpa", "3.9 / 4.0",
            "keyLearnings", Arrays.asList(
                "Data Structures & Algorithms in Java & C++",
                "Software Engineering Principles & Clean Architecture",
                "Database Systems & Distributed API Protocols",
                "Web Application Engineering & Mobile Systems"
            )
        ));

        edu.add(mapOf(
            "institution", "Full-Stack Web Architecture Fellowship",
            "degree", "Advanced Certification in React & Cloud Microservices",
            "specialization", "High Performance Web Systems",
            "year", "2024",
            "gpa", "Honors",
            "keyLearnings", Arrays.asList(
                "Advanced React Patterns & GPU Animations",
                "Spring Boot Security, OAuth2, and JWT",
                "Docker Containerization & CI/CD Pipelines",
                "Performance Profiling & Web Vitals Optimization"
            )
        ));

        return ResponseEntity.ok(edu);
    }

    @GetMapping("/achievements")
    public ResponseEntity<List<Map<String, Object>>> getAchievements() {
        List<Map<String, Object>> achievements = new ArrayList<>();

        achievements.add(mapOf(
            "id", "hackathon-1st",
            "title", "1st Place - Global Dev Hackathon 2025",
            "category", "Hackathons",
            "icon", "Trophy",
            "year", "2025",
            "issuer", "Tech Innovation Guild",
            "description", "Built a live collaborative canvas engine using React & Spring Boot WebSockets within 48 hours."
        ));

        achievements.add(mapOf(
            "id", "best-architect",
            "title", "Best System Architecture Award",
            "category", "Awards",
            "icon", "Award",
            "year", "2024",
            "issuer", "CS University Annual Summit",
            "description", "Recognized for designing a micro-latency Spring Boot REST backend with zero data loss during load tests."
        ));

        achievements.add(mapOf(
            "id", "top-contributor",
            "title", "Top Open Source Contributor",
            "category", "Milestones",
            "icon", "Star",
            "year", "2024 - 2026",
            "issuer", "GitHub Community",
            "description", "Over 1,200+ commits and contributions across React UI tools and Java Spring open-source libraries."
        ));

        achievements.add(mapOf(
            "id", "speed-coder",
            "title", "Gold Medalist - Speed Coding Contest",
            "category", "Competitions",
            "icon", "Medal",
            "year", "2023",
            "issuer", "Inter-College Code League",
            "description", "Solved 6 complex algorithmic challenges in 45 minutes using Java 21 and clean code practices."
        ));

        return ResponseEntity.ok(achievements);
    }

    @GetMapping("/certifications")
    public ResponseEntity<List<Map<String, Object>>> getCertifications() {
        List<Map<String, Object>> certs = new ArrayList<>();

        certs.add(mapOf(
            "id", "cert-spring-expert",
            "title", "Spring Certified Professional Developer",
            "organization", "VMware / Broadcom",
            "date", "March 2025",
            "credentialId", "SPRING-CERT-99201",
            "description", "Validated expertise in Spring Boot 3, REST APIs, Dependency Injection, Security, and Data Access."
        ));

        certs.add(mapOf(
            "id", "cert-react-pro",
            "title", "Meta Certified Senior React Developer",
            "organization", "Meta / Coursera",
            "date", "January 2025",
            "credentialId", "META-REACT-77402",
            "description", "Advanced state management, custom hook architecture, performance optimization, and testing."
        ));

        certs.add(mapOf(
            "id", "cert-aws-arch",
            "title", "AWS Certified Solutions Architect",
            "organization", "Amazon Web Services",
            "date", "August 2024",
            "credentialId", "AWS-ASA-55319",
            "description", "Designing resilient, high-availability cloud deployments, ECS containers, and API Gateways."
        ));

        return ResponseEntity.ok(certs);
    }

    @GetMapping("/settings")
    public ResponseEntity<Map<String, Object>> getSettings() {
        Map<String, Object> settings = mapOf(
            "osVersion", "VISHAL OS v3.0",
            "defaultTheme", "light",
            "accentColor", "blue",
            "soundEffects", false,
            "animationsEnabled", true
        );
        return ResponseEntity.ok(settings);
    }

    @PostMapping("/contact")
    public ResponseEntity<ContactResponseDto> submitContactForm(@Valid @RequestBody ContactFormDto form) {
        System.out.println(">>> [VISHAL OS Messenger] Message received from: " + form.getName() + " (" + form.getEmail() + ")");
        System.out.println("Subject: " + form.getSubject());
        System.out.println("Message: " + form.getMessage());

        ContactResponseDto response = new ContactResponseDto(
            true,
            "Thank you, " + form.getName() + "! Your message has been transmitted successfully to Marcus Sterling."
        );

        return ResponseEntity.ok(response);
    }
}
