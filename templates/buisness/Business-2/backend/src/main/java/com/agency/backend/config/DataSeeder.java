package com.agency.backend.config;

import com.agency.backend.entity.*;
import com.agency.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private TestimonialRepository testimonialRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // Seed Admin User
        if (userRepository.count() == 0) {
            User admin = new User();
            admin.setUsername("admin");
            admin.setPassword(passwordEncoder.encode("AdminPassword123!"));
            admin.setRole("ROLE_ADMIN");
            userRepository.save(admin);
            System.out.println("Seeded Default Admin User: admin / AdminPassword123!");
        }

        // Seed Services
        if (serviceRepository.count() == 0) {
            serviceRepository.save(new Service("Web Development", "Build lightning fast, SEO-optimized web applications using React, Next.js, and Spring Boot.", "Globe", 1));
            serviceRepository.save(new Service("Mobile App Development", "Create native-feeling cross-platform iOS and Android apps with React Native.", "Smartphone", 2));
            serviceRepository.save(new Service("UI/UX Design", "Craft intuitive, user-centered interface designs that ensure maximum conversion and retention.", "Layers", 3));
            serviceRepository.save(new Service("Cloud Solutions", "Deploy scalable infrastructure using AWS, Docker, and Kubernetes for modern cloud reliability.", "Cloud", 4));
            serviceRepository.save(new Service("Digital Transformation", "Consulting and execution for upgrading legacy systems into sleek, automated platforms.", "Cpu", 5));
            serviceRepository.save(new Service("Business Automation", "Optimize workflows with automated email triggers, CRM systems, and AI chat assistants.", "Zap", 6));
            System.out.println("Seeded Default Services.");
        }

        // Seed Projects
        if (projectRepository.count() == 0) {
            projectRepository.save(new Project("SaaS Analytics Dashboard", "A real-time data visualization dashboard designed for cloud business monitoring, featuring beautiful charts, real-time alerts, and highly customizable UI widgets.", "Web Development", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", "React, Tailwind, Recharts, Spring Boot", "https://example.com"));
            projectRepository.save(new Project("FinTech Mobile Wallet", "A high-performance digital wallet and crypto trading application featuring biometric authentication, instant bank transfers, and automated budget analytics.", "Mobile App Development", "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800", "React Native, Node.js, PostgreSQL", "https://example.com"));
            projectRepository.save(new Project("Creative Studio Portfolio", "Minimalist visual portfolio design and premium smooth-scrolling experience crafted for a luxury design and architecture studio.", "UI/UX Design", "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800", "Figma, Framer Motion, Next.js", "https://example.com"));
            projectRepository.save(new Project("Microservices Cloud Orchestration", "A containerized e-commerce infrastructure deployment handling over 10,000 requests per second with high availability and load-balancing configurations.", "Cloud Solutions", "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800", "Spring Boot, Docker, AWS, Kubernetes, Terraform", "https://example.com"));
            System.out.println("Seeded Default Projects.");
        }

        // Seed Testimonials
        if (testimonialRepository.count() == 0) {
            testimonialRepository.save(new Testimonial("Sarah Jenkins", "Product Director", "TechCorp", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150", 5, "Working with this team was an absolute game changer. They took our vague concept and designed and built a premium web app that our users love. Outstanding communication throughout the process!"));
            testimonialRepository.save(new Testimonial("Michael Chen", "Co-Founder", "FinFlow", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150", 5, "Their expertise in Spring Boot and security was evident from day one. They delivered a highly secure fintech solution ahead of schedule. We couldn't be happier with the outcome."));
            testimonialRepository.save(new Testimonial("Emma Rodriguez", "Marketing Manager", "Luxe Brand", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150", 5, "The UI/UX design changes alone increased our user engagement by 40%. The animations feel smooth and polished, giving our brand the premium aesthetic we wanted."));
            System.out.println("Seeded Default Testimonials.");
        }
    }
}
