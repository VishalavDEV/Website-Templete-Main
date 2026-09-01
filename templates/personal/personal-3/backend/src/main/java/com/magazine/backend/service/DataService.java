package com.magazine.backend.service;

import com.magazine.backend.model.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class DataService {

    private Profile profile;
    private List<Project> projects = new ArrayList<>();
    private List<Skill> skills = new ArrayList<>();
    private List<Experience> experiences = new ArrayList<>();
    private List<Education> education = new ArrayList<>();
    private List<Achievement> achievements = new ArrayList<>();
    private List<Certification> certifications = new ArrayList<>();
    private List<PlaygroundItem> playgroundItems = new ArrayList<>();
    private List<ContactMessage> messages = new ArrayList<>();

    public DataService() {
        initData();
    }

    private void initData() {
        // Initialize Profile
        profile = new Profile(
                "Siddharth Mehta",
                "CREATIVE DEVELOPER",
                "PERSONAL EDITION · 2026",
                "I'm Siddharth, a developer who enjoys turning ideas into useful digital experiences.",
                "Siddharth Mehta is a full-stack developer and designer based in Mumbai, specializing in immersive experiences, custom interactive graphics, and robust backend services. He bridges the gap between engineering and art to tell visual stories.",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800", // Portrait URL
                "MUMBAI, INDIA",
                "DEVELOPMENT / AI / WEB GL",
                "BUILDING & LEARNING"
        );

        // Initialize Projects
        projects.add(new Project(
                "1",
                "01",
                "ELIXIR JOURNAL",
                "WEB EXPERIENCE",
                "A high-fidelity editorial web app that translates classical literature into immersive interactive page layouts.",
                Arrays.asList("React", "Spring Boot", "Three.js", "Framer Motion"),
                "Digital readers suffer from flat layouts. We designed a web layout engine that flows text dynamically into interactive shapes based on narrative tone.",
                "Built with a responsive grid and Spring Boot server rendering structural data. Framer Motion handles standard viewport reveals while Three.js binds particle effects to cursor movement.",
                "An award-winning platform that increases average reading session duration by 140% and integrates modern typography in dynamic viewports.",
                "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
                "https://example.com/elixir"
        ));

        projects.add(new Project(
                "2",
                "02",
                "CHRONO CLAY",
                "CREATIVE EXPERIENCE",
                "A 3D interactive sandpile simulation rendering memory pathways from user biography files.",
                Arrays.asList("React", "Spring Boot", "WebGL", "GSAP"),
                "Biographies are static. We wanted to represent a user's life journey as shifting granules of virtual sand reacting to temporal scroll speeds.",
                "Calculated particle physics coordinates in React, fetching custom event streams from Spring Boot endpoints. Integrated custom GSAP timeline sequences to morph the structures.",
                "Over 50,000 simulations rendered in the first week. Users explored their timelines through touch and swipe interactions.",
                "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800",
                "https://example.com/chrono"
        ));

        projects.add(new Project(
                "3",
                "03",
                "AURA AGENT",
                "AI ENGINE",
                "An orchestration engine visualizing semantic web relationships and agent thought streams.",
                Arrays.asList("React", "Spring Boot", "Python", "REST API"),
                "AI reasoning steps are black boxes. We needed a tool to trace multi-agent task planning visually.",
                "Spring Boot runs an agent client executing Python subprocesses. The status and reasoning tokens are streamed in real-time to a React canvas mapping abstract nodes.",
                "Helped developer teams debug long-running AI workflows in half the time by highlighting semantic blockages visually.",
                "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
                "https://example.com/aura"
        ));

        // Initialize Skills
        skills.add(new Skill("React", "Frontend", "Declarative UI and interactive components with clean hooks."));
        skills.add(new Skill("Javascript", "Frontend", "Asynchronous operations, custom DOM manipulations, ES6+ features."));
        skills.add(new Skill("Java", "Backend", "Strong OOP patterns, multi-threading, clean code structures."));
        skills.add(new Skill("Spring Boot", "Backend", "High-performance REST API services and secure configurations."));
        skills.add(new Skill("Python", "AI/ML", "Subprocess execution, data scripts, and AI integrations."));
        skills.add(new Skill("HTML", "Frontend", "Semantic elements, layout templates, SEO friendly markup."));
        skills.add(new Skill("CSS", "Frontend", "Custom styling, animations, flexbox, grid, paper overlays."));
        skills.add(new Skill("Git", "Utilities", "Version control, branching systems, collaborative development."));
        skills.add(new Skill("REST API", "Backend", "Endpoint structure, JSON payload transfer, schema validation."));
        skills.add(new Skill("AI / ML", "AI/ML", "Agent modeling, large language models, prompt workflows."));

        // Initialize Journey (Experience & Education)
        experiences.add(new Experience("BEGINNING", "2019", "The Spark", "Wrote the first lines of HTML/CSS. Discovered the thrill of making things move on screen.", "circle"));
        experiences.add(new Experience("LEARNING", "2020 - 2021", "Core Architecture", "Dived deep into Java OOP and Spring Boot systems, understanding design patterns.", "square"));
        experiences.add(new Experience("FIRST PROJECT", "2022", "Production Launch", "Built a fully functional student portal handling real-time sessions and data streaming.", "triangle"));
        experiences.add(new Experience("EXPERIMENTING", "2023", "Creative Web & WebGL", "Integrated interactive visualizer tools, moving away from standard boxy layouts.", "star"));
        experiences.add(new Experience("BUILDING", "2024", "Full Stack Sync", "Joined a creative lab connecting RESTful APIs to immersive React canvases.", "hexagon"));
        experiences.add(new Experience("ACHIEVING", "2025", "Award Wins", "Won the Regional Hackathon for a collaborative workspace visualizer tool.", "diamond"));
        experiences.add(new Experience("NOW", "2026", "The Next Page", "Pushing limits of editorial development and AI reasoning streams.", "plus"));

        education.add(new Education("1", "2018 - 2022", "B.Tech in Computer Science", "Mumbai Institute of Technology", "Specialized in Software Engineering and Distributed Systems."));
        education.add(new Education("2", "2022 - 2023", "Interactive Media Post-Grad", "Academy of Digital Design", "Acquired design foundations, layouts, user flows, and animation theory."));

        // Initialize Achievements & Certifications (Moments)
        achievements.add(new Achievement("1", "01", "1st Place - Visual Hack", "HACKATHON", "2024", "Designed an interactive node-editor in 24 hours."));
        achievements.add(new Achievement("2", "02", "Professional Java Developer", "CERTIFICATION", "2024", "Certified by Oracle in enterprise application design."));
        achievements.add(new Achievement("3", "03", "Featured on SiteInspire", "PROJECT", "2025", "Elixir Journal was featured under design showcases."));
        achievements.add(new Achievement("4", "04", "Design Excellence Award", "AWARD", "2025", "Honored for interactive digital journalism layouts."));

        certifications.add(new Certification("1", "AWS Certified Developer", "Amazon Web Services", "2023", "https://aws.amazon.com"));
        certifications.add(new Certification("2", "Advanced React & Redux", "Frontend Masters", "2024", "https://frontendmasters.com"));

        // Initialize Playground
        playgroundItems.add(new PlaygroundItem("1", "Liquid Typography", "Animation", "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400", "https://example.com/play-1"));
        playgroundItems.add(new PlaygroundItem("2", "Magnetic Grid System", "Interaction", "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=400", "https://example.com/play-2"));
        playgroundItems.add(new PlaygroundItem("3", "Infinite Scroll Canvas", "UI", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400", "https://example.com/play-3"));
        playgroundItems.add(new PlaygroundItem("4", "AI Chat Node Map", "Code", "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=400", "https://example.com/play-4"));
        playgroundItems.add(new PlaygroundItem("5", "Granular Sandbox", "WebGL", "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=400", "https://example.com/play-5"));
    }

    // Service methods
    public Profile getProfile() { return profile; }
    public List<Project> getProjects() { return projects; }
    public Project getProjectById(String id) {
        return projects.stream().filter(p -> p.getId().equals(id)).findFirst().orElse(null);
    }
    public List<Skill> getSkills() { return skills; }
    public List<Experience> getExperiences() { return experiences; }
    public List<Education> getEducation() { return education; }
    public List<Achievement> getAchievements() { return achievements; }
    public List<Certification> getCertifications() { return certifications; }
    public List<PlaygroundItem> getPlaygroundItems() { return playgroundItems; }

    public void addContactMessage(ContactMessage message) {
        messages.add(message);
        // Print message to console for debug tracking
        System.out.println("New Contact Message Received: " + message.getName() + " (" + message.getEmail() + ") - " + message.getSubject());
        System.out.println("Message Content: " + message.getMessage());
    }
}
