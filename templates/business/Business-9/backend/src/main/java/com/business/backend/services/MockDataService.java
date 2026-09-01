package com.business.backend.services;

import com.business.backend.models.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class MockDataService {

    private final List<ServiceItem> services = new ArrayList<>();
    private final List<ProjectItem> projects = new ArrayList<>();
    private final List<TestimonialItem> testimonials = new ArrayList<>();
    private final List<TeamMember> teamMembers = new ArrayList<>();
    private final List<FaqItem> faqs = new ArrayList<>();

    public MockDataService() {
        initServices();
        initProjects();
        initTestimonials();
        initTeam();
        initFaqs();
    }

    private void initServices() {
        services.add(new ServiceItem(
            "srv-1",
            "Business Consulting",
            "Guide your leadership team through complex organizational decisions, mergers, market entries, and risk management.",
            "Briefcase",
            "Consulting",
            "Our advisory services empower executives with market insights, organizational restructuring plans, and feasibility analyses. We help streamline operational efficiency and navigate volatile market landscapes with data-backed business models.",
            List.of("Strategic Market Feasibility Analysis", "Corporate Restructuring & Integration", "Risk Management & Regulatory Compliance", "Executive Advisory & Leadership Alignment")
        ));

        services.add(new ServiceItem(
            "srv-2",
            "Digital Transformation",
            "Transition legacy infrastructures to agile, cloud-native workflows that improve productivity and collaboration.",
            "Cpu",
            "Technology",
            "Leverage the power of cutting-edge technology to automate workflows, migrate legacy storage, and digitize customer touchpoints. We help minimize manual process overhead and maximize collaboration efficiency.",
            List.of("Legacy Infrastructure Audits", "Cloud Transition & Scalability Roadmap", "Workflow Automation Integrations", "Digital Workspace & Tools Migration")
        ));

        services.add(new ServiceItem(
            "srv-3",
            "Technology Solutions",
            "Architect, build, and deploy custom enterprise web applications, mobile apps, and microservice APIs.",
            "Code2",
            "Technology",
            "We engineer custom application ecosystems designed to scale dynamically under load. From custom SaaS dashboards to robust REST APIs, our code bases are modular, thoroughly tested, and future-proof.",
            List.of("Custom Full-Stack Web & Mobile Apps", "Scalable Microservice Architecture", "API Engineering & Systems Integration", "Secure Infrastructure Engineering")
        ));

        services.add(new ServiceItem(
            "srv-4",
            "Marketing & Branding",
            "Position your brand as an industry leader through modern visual design systems, copywriting, and campaigns.",
            "Sparkles",
            "Marketing",
            "We construct coherent brand stories across digital and print footprints. Through targeted campaign assets, modern typography, cohesive color systems, and digital marketing strategies, we make your message unforgettable.",
            List.of("Visual Identity Design & Guidelines", "Cross-Platform Digital Ad Campaigns", "High-Converting Copywriting Strategy", "Social Media Placement & Growth")
        ));

        services.add(new ServiceItem(
            "srv-5",
            "Business Analytics",
            "Convert raw metrics into real-time visual dashboards that drive revenue forecasting and customer insights.",
            "BarChart3",
            "Finance",
            "Harness data streams to isolate bottleneck activities. We integrate BI reporting, predictive modeling pipelines, and user event tracking tools to translate raw interaction numbers into actionable conversion metrics.",
            List.of("Interactive BI Dashboard Engineering", "Predictive Customer Retention Modeling", "A/B Testing Framework Integration", "Data Flow Pipeline Architecture")
        ));

        services.add(new ServiceItem(
            "srv-6",
            "Growth Strategy",
            "Identify untapped markets and design low-customer-acquisition-cost strategies to double conversion rates.",
            "TrendingUp",
            "Startup",
            "Launch new product offerings, find product-market fit, and establish scalable distribution pipelines. We focus on conversion rate optimization, organic search presence (SEO), and low-friction onboarding funnels.",
            List.of("Product-Market Fit & Ideation Workshops", "Growth Funnel Optimization Audits", "Organic SEO & Content Authority Strategy", "High-Yield Acquisition Pipelines")
        ));
    }

    private void initProjects() {
        projects.add(new ProjectItem(
            "prj-1",
            "Apex Fintech Suite",
            "Finance",
            "A secure cloud portal handling high-volume transactions for venture-backed startups.",
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
            "Apex Global Ltd.",
            "2025",
            List.of("React", "Spring Boot", "AWS", "Docker"),
            "Apex needed a low-latency gateway that complied with strict PCI-DSS regulations while offering a simple API for SaaS clients.",
            "We delivered a microservices-based API gateway with an interactive dashboard built on top of glassmorphism UI principles, lowering average transaction delay to under 45ms."
        ));

        projects.add(new ProjectItem(
            "prj-2",
            "Nova Brand Campaign",
            "Marketing",
            "A full digital rebranding scheme that increased lead volume by 120% in three quarters.",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            "Nova Space Corp.",
            "2024",
            List.of("Framer Motion", "Figma", "Webflow", "SEO"),
            "Nova was struggling to capture the attention of Gen Z enterprise software buyers with their legacy corporate identity.",
            "We refreshed their color palette using vibrant gradients, modernized their message focus, and launched a multi-channel interactive ad campaign that went viral on LinkedIn."
        ));

        projects.add(new ProjectItem(
            "prj-3",
            "Stratos SaaS Launch",
            "Startup",
            "Designed and developed a sleek cloud storage portal from MVP definition to market exit.",
            "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80",
            "Stratos Inc.",
            "2025",
            List.of("Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"),
            "Stratos wanted to compete with major file hosting giants by offering military-grade file encryption in a single click.",
            "We engineered an end-to-end encrypted file sharing app with real-time websocket synchronization, helping them acquire 100k users in their first month."
        ));

        projects.add(new ProjectItem(
            "prj-4",
            "Alpha Advisory Audit",
            "Consulting",
            "Restructured internal support processes for a multi-national logistics company.",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
            "Alpha Logistics Europe",
            "2024",
            List.of("BI Analytics", "Jira", "Process Mapping", "SQL"),
            "Alpha was losing millions due to delays in communication between their cargo sorting hubs and regional offices.",
            "We analyzed their communication pipelines, replaced obsolete email updates with automatic status dashboards, and trained 450+ employees on agile operations."
        ));

        projects.add(new ProjectItem(
            "prj-5",
            "Quantum Engine",
            "Technology",
            "An enterprise server-side compiler optimization tool for high-performance computing.",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
            "Quantum Tech Labs",
            "2025",
            List.of("Java 21", "Kubernetes", "gRPC", "Prometheus"),
            "High computation costs were draining Quantum's operating budget during heavy machine learning model compilations.",
            "We rewrote their parsing pipeline in Java 21 using virtual threads (Project Loom), cutting server CPU utilization by 40% under peak load conditions."
        ));

        projects.add(new ProjectItem(
            "prj-6",
            "Beta Retail Analytics",
            "Consulting",
            "Created a real-time buyer analytics tool for 45 retail stores across the country.",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            "Beta Merchandisers",
            "2025",
            List.of("Python", "React", "Tableau API", "Docker"),
            "Store managers lacked real-time visibility into checkout speeds and popular stock trends, leading to inventory surpluses.",
            "We built interactive data dashboards that refreshed hourly, linking cash register inputs directly to supplier delivery forecasts."
        ));
    }

    private void initTestimonials() {
        testimonials.add(new TestimonialItem(
            "tst-1",
            "Sarah Jenkins",
            "CEO at Nova Space Corp.",
            5,
            "Working with this agency completely transformed our business metrics. Our digital presence has never looked so premium, and our lead volume literally doubled inside of six months.",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
        ));

        testimonials.add(new TestimonialItem(
            "tst-2",
            "Marcus Chen",
            "CTO at Apex Global Ltd.",
            5,
            "The engineering precision they delivered on our transaction platform was exceptional. They didn't just write code; they optimized our architecture to scale. Highly recommended.",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
        ));

        testimonials.add(new TestimonialItem(
            "tst-3",
            "Sophia Rodriguez",
            "VP of Growth at Stratos Inc.",
            5,
            "Their user-centric design approach and rapid execution allowed us to beat our competitors to market. The light orange branding system is highly engaging and received praise from our investors.",
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
        ));

        testimonials.add(new TestimonialItem(
            "tst-4",
            "David Foster",
            "Operations Manager at Alpha Logistics",
            4,
            "The process restructuring they advised us on eliminated dozens of unnecessary email threads. Operation workflows are much smoother now, and we have real-time progress charts.",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
        ));
    }

    private void initTeam() {
        teamMembers.add(new TeamMember(
            "tm-1",
            "Elena Vance",
            "Founder & CEO",
            "Former strategy director with 15+ years of experience helping Fortune 500 companies adopt agile business models.",
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80",
            Map.of("linkedin", "https://linkedin.com", "twitter", "https://twitter.com", "github", "https://github.com")
        ));

        teamMembers.add(new TeamMember(
            "tm-2",
            "Dr. Liam Kincaid",
            "Chief Technology Officer",
            "Systems architect and software veteran. Passionate about Java microservice speed, security, and cloud scalability.",
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80",
            Map.of("linkedin", "https://linkedin.com", "github", "https://github.com")
        ));

        teamMembers.add(new TeamMember(
            "tm-3",
            "Naomi Sterling",
            "Head of Brand Design",
            "Award-winning designer obsessed with responsive layouts, typography, CSS animations, and interactive interfaces.",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80",
            Map.of("linkedin", "https://linkedin.com", "dribbble", "https://dribbble.com")
        ));

        teamMembers.add(new TeamMember(
            "tm-4",
            "Amir Al-Jamil",
            "Lead Business Analyst",
            "Data scientist focused on turning checkout metrics and customer support logs into interactive business intelligence dashboards.",
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80",
            Map.of("linkedin", "https://linkedin.com", "twitter", "https://twitter.com")
        ));
    }

    private void initFaqs() {
        faqs.add(new FaqItem(
            "faq-1",
            "What services do you provide?",
            "We offer a complete suite of services including strategy consulting, custom application development, digital transformation, brand positioning, marketing campaign creation, and interactive business analytics.",
            "General"
        ));

        faqs.add(new FaqItem(
            "faq-2",
            "How do you work with businesses?",
            "We begin with a discovery phase to review your business bottlenecks, design custom solutions in Figma/architecture maps, develop components in rapid iterations, and run continuous testing before launch.",
            "Process"
        ));

        faqs.add(new FaqItem(
            "faq-3",
            "How long does a project take?",
            "An MVP development or visual rebranding usually takes 4-8 weeks, while full enterprise transformations, microservices integrations, and comprehensive analytics setups can take 3-6 months.",
            "Timeline"
        ));

        faqs.add(new FaqItem(
            "faq-4",
            "Do you provide customized solutions?",
            "Yes, we do not believe in templates. Every user interface is customized using vanilla styling systems, and every backend API is tailored specifically to your data formats and volume requirements.",
            "General"
        ));

        faqs.add(new FaqItem(
            "faq-5",
            "How can I start a project?",
            "Simply fill out our interactive contact form, select your requested service tier, and one of our client leads will follow up within 24 hours to schedule an introductory workshop.",
            "Process"
        ));
    }

    public List<ServiceItem> getAllServices() { return services; }
    public List<ProjectItem> getAllProjects() { return projects; }
    public List<TestimonialItem> getAllTestimonials() { return testimonials; }
    public List<TeamMember> getAllTeamMembers() { return teamMembers; }
    public List<FaqItem> getAllFaqs() { return faqs; }
}
