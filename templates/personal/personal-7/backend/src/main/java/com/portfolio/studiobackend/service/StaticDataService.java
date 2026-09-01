package com.portfolio.studiobackend.service;

import com.portfolio.studiobackend.model.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class StaticDataService {

    private final Profile profile;
    private final List<Project> projects;
    private final List<Education> education;
    private final List<Experience> experience;
    private final List<Achievement> achievements;
    private final Stats stats;
    private final List<ContactMessage> receivedMessages = new ArrayList<>();

    public StaticDataService() {
        // Initialize Profile
        this.profile = new Profile(
            "Alex Vance",
            "Creative Engineer & Full-Stack Developer",
            "I build immersive web applications, AI-driven experiences, and microservices. I bridge the gap between aesthetic design and robust systems engineering.",
            Arrays.asList(
                "Java", "Spring Boot", "React.js", "JavaScript (ES6+)", "Python", 
                "Docker", "REST APIs", "GSAP", "Framer Motion", "CSS3/HTML5", 
                "PostgreSQL", "NoSQL", "Git", "Maven"
            ),
            "alex.vance@example.com",
            "https://github.com/alexvance",
            "https://linkedin.com/in/alexvance",
            "/resume.pdf"
        );

        // Initialize Projects
        this.projects = Arrays.asList(
            new Project(
                "proj-1",
                "Neural Dreamscape",
                "An AI-powered creative dashboard that interprets user text prompts into real-time generative canvas layouts and interactive CSS canvas elements.",
                "AI",
                Arrays.asList("React.js", "Python", "FastAPI", "WebSockets", "GSAP"),
                "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
                "https://github.com/alexvance/neural-dreamscape",
                "https://dreamscape.alexvance.dev"
            ),
            new Project(
                "proj-2",
                "Quantum Flow Engine",
                "A high-performance CSS 3D physics renderer that visualizes particle collisions and vector field math interactively in modern browsers.",
                "EXPERIMENTS",
                Arrays.asList("JavaScript", "CSS 3D Transforms", "GSAP", "HTML5 Canvas"),
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
                "https://github.com/alexvance/quantum-flow",
                "https://quantumflow.alexvance.dev"
            ),
            new Project(
                "proj-3",
                "Studio OS Dashboard",
                "A desktop-style virtual operating system operating inside web browsers, featuring multiple draggable windows, theme customizers, and an integrated editor.",
                "WEB",
                Arrays.asList("React.js", "Framer Motion", "Tailwind CSS", "Spring Boot"),
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
                "https://github.com/alexvance/studio-os",
                "https://studioos.alexvance.dev"
            ),
            new Project(
                "proj-4",
                "OmniDB Desktop Client",
                "A native-feeling database desktop explorer designed with Electron and Java core components. Handles real-time queries and index visualizations.",
                "SOFTWARE",
                Arrays.asList("Java", "JavaFX", "Electron", "SQLite", "Node.js"),
                "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
                "https://github.com/alexvance/omnidb-client",
                "https://omnidb.alexvance.dev"
            )
        );

        // Initialize Education
        this.education = Arrays.asList(
            new Education(
                "edu-1",
                "Stanford University",
                "Bachelor of Science",
                "Computer Science (Intelligent Systems track)",
                "2020 - 2024",
                Arrays.asList(
                    "Graduated with Distinction (GPA 3.9/4.0).",
                    "Core coursework: Operating Systems, Machine Learning, Web Architectures, Interactive Systems Design.",
                    "Research Assistant in Stanford Human-Computer Interaction Group."
                )
            ),
            new Education(
                "edu-2",
                "DeepLearning.AI",
                "Professional Specialization",
                "Deep Learning & Generative AI",
                "2025",
                Arrays.asList(
                    "Comprehensive course sequence on neural networks, convolutional structures, sequence models, and transformer architectures.",
                    "Built 15+ coding projects using PyTorch and Hugging Face API."
                )
            )
        );

        // Initialize Experience
        this.experience = Arrays.asList(
            new Experience(
                "exp-1",
                "PixelCraft Labs",
                "Lead Creative Engineer",
                "2024 - Present",
                Arrays.asList(
                    "Engineered highly interactive client web applications using React, GSAP, and Spring Boot, boosting user engagement by 40%.",
                    "Pioneered in-house CSS 3D components library used by 5 developer teams.",
                    "Architected high-throughput microservices returning low-latency responses for real-time applications."
                )
            ),
            new Experience(
                "exp-2",
                "TechNexus Solutions",
                "Full Stack Developer Intern",
                "2023 (6 Months)",
                Arrays.asList(
                    "Collaborated on migration of legacy monolithic system to Spring Boot microservices.",
                    "Refactored frontend UI using React Router and context-based state management, cutting load times by 25%.",
                    "Implemented rigorous unit test suites with JUnit 5 and Mockito."
                )
            )
        );

        // Initialize Achievements
        this.achievements = Arrays.asList(
            new Achievement(
                "ach-1",
                "1st Place Hackathon Winners",
                "Trophy",
                "Stanford TechFest Hackathon",
                "2023",
                "Awarded first place among 120 teams for engineering 'VocalLink', a real-time browser speech translation overlay."
            ),
            new Achievement(
                "ach-2",
                "Outstanding Graduate Medal",
                "Medal",
                "Stanford CS Graduation Awards",
                "2024",
                "Awarded for exceptional academic record and outstanding contribution as a research assistant."
            ),
            new Achievement(
                "ach-3",
                "AWS Solutions Architect",
                "Certificate",
                "Amazon Web Services (AWS)",
                "2025",
                "Certified Solutions Architect - Associate. Demonstrating capability in designing cloud architectures and microservices deployments."
            ),
            new Achievement(
                "ach-4",
                "GitHub Top Contributor Badge",
                "Badge",
                "GitHub Developer Program",
                "2025",
                "Recognized as a Top Contributor in community UI/UX visual layout libraries."
            )
        );

        // Initialize Stats
        this.stats = new Stats(25, 15, 10, 12, 3);
    }

    public Profile getProfile() {
        return profile;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public List<Education> getEducation() {
        return education;
    }

    public List<Experience> getExperience() {
        return experience;
    }

    public List<Achievement> getAchievements() {
        return achievements;
    }

    public Stats getStats() {
        return stats;
    }

    public synchronized void addContactMessage(ContactMessage message) {
        receivedMessages.add(message);
        System.out.println("New message received from: " + message.name() + " (" + message.email() + ")");
        System.out.println("Subject: " + message.subject());
        System.out.println("Content: " + message.message());
    }

    public List<ContactMessage> getReceivedMessages() {
        return receivedMessages;
    }
}
