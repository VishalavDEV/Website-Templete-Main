package com.business.backend.service;

import com.business.backend.model.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class MockDataService {

    private final List<ServiceItem> services = new ArrayList<>();
    private final List<ProjectItem> projects = new ArrayList<>();
    private final List<TeamMember> teamMembers = new ArrayList<>();
    private final List<Testimonial> testimonials = new ArrayList<>();
    private final List<BlogItem> blogs = new ArrayList<>();

    public MockDataService() {
        initServices();
        initProjects();
        initTeam();
        initTestimonials();
        initBlogs();
    }

    private void initServices() {
        services.add(new ServiceItem(
            "business-consulting",
            "Business Consulting",
            "Briefcase",
            "Navigate market complexities with our expert advisory and operations strategy.",
            "Unlock organizational capability and structural alignment. We help companies restructure, optimize management frameworks, identify inefficiencies, and execute robust business model transformations that adapt to modern market requirements.",
            List.of("Increase operational efficiency by 35%", "Identify and capture new market avenues", "Minimize business risks and cost structures"),
            List.of("Operational Audits", "Organizational Design", "Change Management Programs", "Risk Assessment & Mitigation"),
            List.of("Discovery & Analysis", "Custom Strategy Formulation", "Execution & Team Alignment", "Performance Auditing"),
            List.of("Microsoft PowerBI", "Miro", "Jira", "Slack"),
            List.of(
                new FaqItem("What business categories do you consult for?", "We specialize in startups, scale-ups, enterprise technology, and modern digital commerce services."),
                new FaqItem("How long does a standard engagement last?", "Our consulting packages range from 4-week diagnostic sprints to 12-month transformation partnerships.")
            )
        ));

        services.add(new ServiceItem(
            "digital-transformation",
            "Digital Transformation",
            "Cpu",
            "Reinvent your operating models using modern digital capabilities and architecture.",
            "Accelerate your adaptation to the digital age. We evaluate legacy architecture, restructure workflow workflows, and inject smart technological tools directly into the core of your business operations to enable faster scaling and greater resilience.",
            List.of("Transition away from manual bottleneck processes", "Unify operations under modern digital nodes", "Enhance client experiences with automation"),
            List.of("Legacy Architecture Audits", "Cloud Migration Planning", "Operational Redesign", "Custom Integration Mapping"),
            List.of("Technology Assessment", "Architecture Redesign", "Integration Phase", "Team Onboarding & Training"),
            List.of("AWS", "Kubernetes", "Docker", "MuleSoft"),
            List.of(
                new FaqItem("Is digital transformation expensive?", "We design modular strategies that allow phasing of investments, ensuring a high ROI at each step of the roadmap."),
                new FaqItem("How do you handle team resistance to new tools?", "Our package includes comprehensive change-management programs, hands-on training, and documentation.")
            )
        ));

        services.add(new ServiceItem(
            "software-development",
            "Software Development",
            "Code",
            "Build secure, scalable, and beautifully designed custom applications.",
            "From mobile products to enterprise microservices, our software engineering team designs, develops, and delivers applications that perform flawlessly, scale smoothly, and boast premium user experiences.",
            List.of("100% custom-tailored to your exact business logic", "Highly scalable microservice architecture", "Premium, modern UI/UX design"),
            List.of("Custom Web & Mobile Apps", "Microservice Architectures", "API Integrations & Custom SDKs", "Performance Optimization"),
            List.of("UX & Prototype Design", "Agile Development Sprints", "Continuous QA & Test Automation", "Cloud Deployment & Scaling"),
            List.of("React.js", "Java Spring Boot", "Node.js", "TypeScript"),
            List.of(
                new FaqItem("Do we own the source code?", "Absolutely. All intellectual property and source code are transferred to your company upon project completion."),
                new FaqItem("Do you provide post-launch support?", "Yes, we offer ongoing maintenance, optimization, and scaling packages tailored to your user growth.")
            )
        ));

        services.add(new ServiceItem(
            "marketing-solutions",
            "Marketing Solutions",
            "Megaphone",
            "Acquire and retain customers through targeted high-impact digital campaigns.",
            "Scale your brand visibility. We combine data analysis with creative messaging to construct digital marketing machines that consistently generate high-value leads and convert users into passionate advocates.",
            List.of("Accelerate lead generation by up to 180%", "Lower customer acquisition costs (CAC)", "Build measurable, scalable marketing funnels"),
            List.of("SEO & Growth Hacking", "Social Media Strategy", "Pay-Per-Click (PPC) Management", "Email Funnel Optimization"),
            List.of("Market & Competitor Research", "Funnel Design & Setup", "Campaign Launches", "A/B Testing & Optimization"),
            List.of("Google Analytics", "HubSpot", "Semrush", "Figma"),
            List.of(
                new FaqItem("How quickly do we see results?", "While PPC and email funnels yield results in weeks, SEO and organic growth strategy typically show exponential returns in 3 to 6 months."),
                new FaqItem("Do you manage advertising budgets?", "Yes, we manage, track, and optimize budgets across Google, Meta, LinkedIn, and programmatic channels.")
            )
        ));

        services.add(new ServiceItem(
            "data-analytics",
            "Data & Analytics",
            "BarChart",
            "Translate raw data points into actionable strategy and predictive business models.",
            "Stop guessing and start knowing. We construct real-time data pipelines, design interactive dashboards, and apply statistical modeling to discover trends, optimize operations, and predict customer behavior.",
            List.of("Enable data-driven corporate decision making", "Uncover hidden revenue leakage points", "Build automated, custom reporting structures"),
            List.of("Data Pipeline Setup", "Dashboard Development", "Predictive Customer Modeling", "Business Intelligence Audits"),
            List.of("Data Source Audits", "Pipeline Infrastructure Setup", "Dashboard Customization", "Insights Delivery & Handoff"),
            List.of("Python", "Tableau", "Snowflake", "dbt"),
            List.of(
                new FaqItem("Can you connect to our legacy database?", "Yes, we build robust connectors that safely draw data from SQL, NoSQL, ERPs, CRMs, and flat files."),
                new FaqItem("Is data privacy protected?", "We enforce strict security protocols, field-level encryption, and ensure full GDPR/CCPA compliance.")
            )
        ));

        services.add(new ServiceItem(
            "strategy-consulting",
            "Strategy Consulting",
            "Compass",
            "Formulate corporate strategies to expand market share and drive innovation.",
            "Plan your next decade. We partner with executive teams to analyze industry trends, run competitive intelligence, evaluate M&A options, and structure business plans that unlock explosive growth.",
            List.of("Clarify long-term vision and metrics", "Identify disruption threats and defenses", "Position products for maximum market share"),
            List.of("Market Entry Analysis", "M&A Advisory Support", "Product Strategy Mapping", "Innovation Workshop Facilitation"),
            List.of("Industry Analysis & Briefing", "Scenario Planning", "Strategic Alignment Sessions", "Implementation Roadmap"),
            List.of("Miro", "Notion", "Tableau", "Teams"),
            List.of(
                new FaqItem("What types of industries do you strategize for?", "Our core focus lies in technology sectors, financial services, digital commerce, and modern logistics companies."),
                new FaqItem("Do you assist in execution?", "Yes, every strategy we deliver includes a structured milestone-based implementation roadmap and advisory check-ins.")
            )
        ));

        services.add(new ServiceItem(
            "business-automation",
            "Business Automation",
            "Zap",
            "Eliminate repetitive tasks and streamline workflows through custom automation.",
            "Save thousands of manual hours. We configure software bots, customize workflow triggers, and integrate system bridges that seamlessly handle data transfers, notifications, and client routing without human error.",
            List.of("Save an average of 15 hours per employee/week", "Eliminate human input and data entry errors", "Speed up customer response times by 10x"),
            List.of("Robotic Process Automation (RPA)", "CRM & ERP Integrations", "Auto-Notification Workflows", "Custom API Bridge Construction"),
            List.of("Process Mapping & Audit", "Automation Architecture Design", "Implementation & Trigger Setup", "Maintenance & Scalability Monitoring"),
            List.of("Make.com", "Zapier", "n8n", "Python"),
            List.of(
                new FaqItem("Do we need to write code to manage automations?", "No, we construct visual dashboards and error-alert mechanisms that make monitoring simple for non-technical teams."),
                new FaqItem("Will automation replace our staff?", "Automation handles repetitive tasks, freeing your team to focus on high-value creative, strategic, and relational duties.")
            )
        ));

        services.add(new ServiceItem(
            "cloud-solutions",
            "Cloud Solutions",
            "Cloud",
            "Deploy secure, auto-scaling, and cost-efficient global cloud architectures.",
            "Build your business in the cloud. We design and manage serverless applications, orchestrate Kubernetes clusters, and run cloud migration programs that reduce infrastructure expenses while guaranteeing 99.99% uptime.",
            List.of("Reduce hosting and server bills by 30-50%", "Ensure enterprise-grade global cybersecurity", "Enable instantaneous auto-scaling capacity"),
            List.of("Serverless Architectures", "Multi-Cloud Migrations", "DevOps & CI/CD Pipelines", "Disaster Recovery Frameworks"),
            List.of("Infrastructure Assessment", "Cloud Architecture Blueprinting", "Zero-Downtime Migration", "24/7 Security & Performance Monitoring"),
            List.of("AWS", "Google Cloud", "Terraform", "Kubernetes"),
            List.of(
                new FaqItem("Which cloud provider do you recommend?", "We evaluate your cost targets, geographic needs, and compliance rules to recommend AWS, GCP, or Azure."),
                new FaqItem("How do you ensure zero-downtime migration?", "We employ shadow environments, blue-green deployments, and gradual traffic shifting to ensure zero service disruption.")
            )
        ));
    }

    private void initProjects() {
        projects.add(new ProjectItem(
            "transforming-finance",
            "Next-Gen Digital Banking App",
            "Finance",
            "A complete digital transformation of an international bank's customer portal.",
            "banking_mockup",
            List.of("React Native", "Spring Boot", "AWS", "Framer Motion"),
            "The client, a traditional global financial institution, was losing market share to agile fintech startups due to a slow, outdated mobile application and high transaction times.",
            "We designed and built a modular, serverless digital banking application featuring instant peer-to-peer transfers, AI-driven budget insights, and biometrically secured authorization.",
            "Using React Native for cross-platform efficiency and Java Spring Boot for high-performance transactions, we migrated user data, integrated microservices, and ran comprehensive security penetration checks.",
            List.of("+140% Mobile Engagement", "99.99% Transaction Uptime", "Under 1.2s Transfer Time"),
            "ABC Business's engineering team exceeded expectations. They transformed our customer experience in record time and set a new standard for our core engineering capabilities.",
            "Sarah Jenkins",
            "VP of Digital Products, Apex Capital"
        ));

        projects.add(new ProjectItem(
            "retail-digital-shift",
            "E-Commerce Automation Framework",
            "Technology",
            "Automated inventory, supply chain routing, and checkout systems for global retail.",
            "retail_mockup",
            List.of("Node.js", "GraphQL", "Kubernetes", "Next.js"),
            "A fast-growing direct-to-consumer retail brand struggled with inventory synchronization lag, resulting in overselling and shipping bottlenecks during peak seasons.",
            "We constructed an event-driven automation middleware that synchronized inventory across warehouse systems, local Shopify storefronts, and third-party logistics channels in real time.",
            "By mapping legacy ERP connections, building API gateways, and deploying on auto-scaling Kubernetes nodes, we built a self-healing pipeline capable of handling 50k requests per minute.",
            List.of("Zero Overselling Incidents", "35% Faster Order Fulfillment", "50% Savings on Hosting Costs"),
            "This solution streamlined our entire operational flow. We successfully navigated Black Friday with zero crashes and massive efficiency gains.",
            "David Chen",
            "COO, Vanguard Style"
        ));

        projects.add(new ProjectItem(
            "ai-predictive-marketing",
            "Predictive Analytics Funnel",
            "Marketing",
            "AI-powered consumer behavior modeling tool for targeted ad campaign spends.",
            "marketing_analytics_mockup",
            List.of("Python", "TensorFlow", "Snowflake", "React"),
            "An enterprise software-as-a-service company needed to maximize the ROI of their high-budget advertising campaigns across digital networks by predicting which leads were ready to convert.",
            "We engineered a machine learning predictive analysis pipeline that scores leads, predicts subscription churn risk, and triggers automated personalized discount emails.",
            "We gathered historical user interaction data into Snowflake, trained a custom classification model, and built an interactive marketing control dashboard.",
            List.of("45% Increase in Ad ROI", "22% Drop in Subscriber Churn", "Lead Scoring in under 500ms"),
            "The predictive model proved highly accurate. We stopped wasting budget on cold leads and focused our sales agents on qualified, ready-to-buy targets.",
            "Elena Rostova",
            "Chief Marketing Officer, CloudSync"
        ));

        projects.add(new ProjectItem(
            "sustainable-supply-chain",
            "Logistics Optimization System",
            "Consulting",
            "Strategic advisory and tracking software implementation for eco-friendly logistics.",
            "logistics_mockup",
            List.of("Miro", "Tableau", "AWS Lambda", "Go"),
            "A multinational logistics provider aimed to reduce carbon emissions and vehicle idle times while optimizing dispatch schedules across 500 cities.",
            "Our consulting and engineering teams mapped route algorithms, designed real-time tracking, and established fuel conservation metrics for driver behaviors.",
            "We ran operational audits, implemented route-optimization software connected to vehicle IoT chips, and delivered employee change management programs.",
            List.of("18% Reduction in Fuel Spend", "80% Route Allocation Accuracy", "30,000 Tons CO2 Saved Annually"),
            "Their strategic insights changed the way we manage our global fleet. The carbon savings were matched by massive fuel cost reductions.",
            "Marcus Vance",
            "Director of Logistics, GreenFreight Global"
        ));

        projects.add(new ProjectItem(
            "healthcare-cloud-migration",
            "Secure Cloud Health Portal",
            "Technology",
            "Migrating patient medical records and data portals into a secure, HIPAA-compliant cloud.",
            "healthcare_mockup",
            List.of("AWS Security Hub", "Terraform", "Java", "Angular"),
            "A hospital network needed to migrate records for over 2 million patients to the cloud while maintaining absolute security and satisfying rigorous compliance criteria.",
            "We architected a secure landing zone on AWS, utilizing automated security policies, file encryption, and multi-factor validation portals.",
            "Using Terraform, we built and deployed secure database infrastructure, structured microservice APIs, and executed a secure data migration process.",
            List.of("100% HIPAA Compliance", "99.9% Migration Integrity", "Zero Patient Care Interruptions"),
            "Security is paramount in our field. ABC Business proved they had the enterprise security capabilities and technical architecture to make our cloud migration a success.",
            "Dr. Amanda Ross",
            "Chief Medical Information Officer, UnityHealth"
        ));

        projects.add(new ProjectItem(
            "corporate-brand-launch",
            "Brand Acceleration Launchpad",
            "Marketing",
            "Visual rebranding and global market introduction strategy for a renewable energy startup.",
            "branding_mockup",
            List.of("Figma", "Webflow", "After Effects", "Google Ads"),
            "An innovative hydrogen energy startup lacked a premium, compelling brand identity and digital presence, making it difficult to secure Phase-2 venture capital funding.",
            "We created a futuristic, clean brand identity, generated premium business presentations, and built a highly interactive digital web portal.",
            "We crafted typography, animations, designed 3D renders, ran target investor marketing campaigns, and optimization strategies.",
            List.of("$40M Venture Capital Secured", "2M Unique Brand Impressions", "98% Positive Investor Feedback"),
            "The web portal and rebranding blew our investors away. It successfully conveyed our vision of clean technology and helped us secure our Series B funding.",
            "Julian Albright",
            "CEO, H2Go Systems"
        ));
    }

    private void initTeam() {
        teamMembers.add(new TeamMember(
            "alex-rivera",
            "Alex Rivera",
            "CEO & Founder",
            "alex_rivera",
            "Ex-Stripe engineering leader and strategy advisor with over 15 years of experience building scalable systems and directing business operations.",
            "Executive",
            List.of("Corporate Strategy", "Product Innovation", "Venture Capital"),
            Map.of("linkedin", "https://linkedin.com", "twitter", "https://twitter.com", "github", "https://github.com")
        ));

        teamMembers.add(new TeamMember(
            "sarah-chen",
            "Dr. Sarah Chen",
            "Chief Technology Officer",
            "sarah_chen",
            "PhD in Distributed Systems. Former Principal Architect at AWS with expertise in high-concurrency cloud design and serverless operations.",
            "Engineering",
            List.of("Cloud Architecture", "Distributed Databases", "Technical Mentorship"),
            Map.of("linkedin", "https://linkedin.com", "github", "https://github.com")
        ));

        teamMembers.add(new TeamMember(
            "marcus-thompson",
            "Marcus Thompson",
            "Head of Creative & Design",
            "marcus_thompson",
            "Award-winning digital artist and UI/UX designer. Passionate about micro-interactions, motion systems, and crafting memorable brand identities.",
            "Creative",
            List.of("UI/UX Design", "Motion Graphics", "Brand Identity"),
            Map.of("linkedin", "https://linkedin.com", "twitter", "https://twitter.com")
        ));

        teamMembers.add(new TeamMember(
            "elena-rostova",
            "Elena Rostova",
            "VP of Growth & Marketing",
            "elena_rostova",
            "Growth strategist specializing in B2B SaaS marketing. Over 10 years of experience designing performance marketing engines and scaling lead pipelines.",
            "Growth",
            List.of("Performance Marketing", "Funnel Optimization", "Data Analytics"),
            Map.of("linkedin", "https://linkedin.com", "twitter", "https://twitter.com")
        ));

        teamMembers.add(new TeamMember(
            "james-patel",
            "James Patel",
            "Lead Software Architect",
            "james_patel",
            "Full-stack engineer specialized in building high-performance microservices and secure transactional systems using Java, Spring, and React.",
            "Engineering",
            List.of("Java Spring Boot", "React.js", "API Design"),
            Map.of("linkedin", "https://linkedin.com", "github", "https://github.com")
        ));

        teamMembers.add(new TeamMember(
            "sophia-vance",
            "Sophia Vance",
            "Director of Strategy Consulting",
            "sophia_vance",
            "Former McKinsey consultant. Helps executives clarify business strategies, structure product roadmaps, and implement change programs.",
            "Consulting",
            List.of("Business Transformation", "Market Research", "M&A Advisory"),
            Map.of("linkedin", "https://linkedin.com")
        ));
    }

    private void initTestimonials() {
        testimonials.add(new Testimonial(
            "test-1",
            "Sarah Jenkins",
            "Apex Capital",
            "VP of Digital Products",
            "ABC Business's engineering team exceeded expectations. They transformed our customer experience in record time and set a new standard for our core engineering capabilities.",
            5,
            "sarah_jenkins"
        ));

        testimonials.add(new Testimonial(
            "test-2",
            "David Chen",
            "Vanguard Style",
            "COO",
            "This solution streamlined our entire operational flow. We successfully navigated Black Friday with zero crashes and massive efficiency gains.",
            5,
            "david_chen"
        ));

        testimonials.add(new Testimonial(
            "test-3",
            "Elena Rostova",
            "CloudSync",
            "Chief Marketing Officer",
            "The predictive model proved highly accurate. We stopped wasting budget on cold leads and focused our sales agents on qualified, ready-to-buy targets.",
            5,
            "elena_rostova"
        ));

        testimonials.add(new Testimonial(
            "test-4",
            "Julian Albright",
            "H2Go Systems",
            "CEO",
            "The web portal and rebranding blew our investors away. It successfully conveyed our vision of clean technology and helped us secure our Series B funding.",
            5,
            "julian_albright"
        ));

        testimonials.add(new Testimonial(
            "test-5",
            "Dr. Amanda Ross",
            "UnityHealth",
            "Chief Medical Information Officer",
            "Security is paramount in our field. ABC Business proved they had the enterprise security capabilities and technical architecture to make our cloud migration a success.",
            5,
            "amanda_ross"
        ));
    }

    private void initBlogs() {
        blogs.add(new BlogItem(
            "future-of-ai-in-business",
            "The Future of AI Integration in Modern Enterprise",
            "Innovation",
            "How AI is transitioning from simple chatbots to complex core decision-making systems.",
            "Artificial intelligence is rapidly progressing beyond basic user support and email copy drafts. Today, modern enterprises are leveraging machine learning to automate complex logistics routes, predict B2B sales cycles, and run real-time security scanning. In this article, we outline the roadmap for integrating intelligent models directly into your company's core software stack, detailing standard pitfalls and architectural guidelines to guarantee performance and compliance.",
            "Dr. Sarah Chen",
            "CTO",
            "Aug 18, 2026",
            "6 min read",
            "ai_blog"
        ));

        blogs.add(new BlogItem(
            "scaling-react-applications",
            "Architecting React Applications for Extreme Scale",
            "Technology",
            "A guide to component organization, custom state managers, and fluid animation trees.",
            "Building application dashboards that render 100k data points while maintaining smooth 60fps animations requires deep optimization. We cover how to decouple state triggers from UI render trees, maximize performance using React.memo and useMemo, implement lightweight lazy-loading routes, and design animation systems using Framer Motion that won't lag on mobile screens.",
            "Marcus Thompson",
            "Head of Creative",
            "Aug 15, 2026",
            "8 min read",
            "react_blog"
        ));

        blogs.add(new BlogItem(
            "mastering-spring-boot-apis",
            "Building Secure, High-Performance Spring Boot Rest APIs",
            "Technology",
            "Best practices for request validation, global exception handlers, and security headers.",
            "Rest API architecture represents the backbone of modern web applications. We explore how to configure robust Java Spring Boot servers, enforce field validation annotations, structure clear global exception classes, and configure CORS parameters to prevent cross-origin issues during local and production staging deployments.",
            "James Patel",
            "Lead Software Architect",
            "Aug 10, 2026",
            "5 min read",
            "spring_blog"
        ));

        blogs.add(new BlogItem(
            "corporate-growth-strategies",
            "B2B Growth Sprints: Transitioning from Startup to Scaleup",
            "Strategy",
            "How high-growth companies restructure operations and expand market presence.",
            "Crossing the scale-up chasm requires shift in focus from product-market fit to repeatable execution engines. We look at standard operational bottlenecks, how to redesign team frameworks, implement automation routines, and organize strategic advisory checkpoints to make sure your organization scales smoothly.",
            "Alex Rivera",
            "CEO & Founder",
            "Aug 05, 2026",
            "7 min read",
            "strategy_blog"
        ));

        blogs.add(new BlogItem(
            "rebranding-digital-commerce",
            "The Direct Impact of UI/UX Motion Design on Sales Funnels",
            "Marketing",
            "Why premium micro-interactions and animations convert more web traffic.",
            "Modern web users form visual opinions on corporate platforms in less than 200 milliseconds. Simple static templates are ignored. We analyze performance data showing how custom animations, fluid hover feedback, and clear scrolling indicators improve brand trust and directly lead to a 20-30% increase in checkout conversions.",
            "Elena Rostova",
            "VP of Growth",
            "Jul 28, 2026",
            "5 min read",
            "marketing_blog"
        ));

        blogs.add(new BlogItem(
            "navigating-cloud-costs",
            "FinOps Guide: Optimizing Kubernetes & Serverless Budgets",
            "Business",
            "Practical methods to analyze and reduce cloud hosting bills without sacrificing server performance.",
            "Deploying on global cloud structures guarantees reliability, but cost tracking can quickly run out of control. We break down concrete tactics to monitor AWS/GCP resources, configure auto-scaling rules based on real traffic spikes, delete idle staging servers, and employ serverless microservices to reduce resource billing by up to 40%.",
            "Sophia Vance",
            "Director of Strategy",
            "Jul 22, 2026",
            "9 min read",
            "cloud_blog"
        ));
    }

    public List<ServiceItem> getServices() {
        return services;
    }

    public List<ProjectItem> getProjects() {
        return projects;
    }

    public List<TeamMember> getTeamMembers() {
        return teamMembers;
    }

    public List<Testimonial> getTestimonials() {
        return testimonials;
    }

    public List<BlogItem> getBlogs() {
        return blogs;
    }

    public ServiceItem getServiceById(String id) {
        return services.stream().filter(s -> s.getId().equals(id)).findFirst().orElse(null);
    }

    public ProjectItem getProjectById(String id) {
        return projects.stream().filter(p -> p.getId().equals(id)).findFirst().orElse(null);
    }
}
