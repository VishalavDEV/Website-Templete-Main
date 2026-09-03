package com.asentus.service;

import com.asentus.dto.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class AsentusDataService {

    private static final Logger log = LoggerFactory.getLogger(AsentusDataService.class);

    private final List<HeroSlideDto> slides = new ArrayList<>();
    private final List<FeatureDto> features = new ArrayList<>();
    private final List<PricingDto> pricingPlans = new ArrayList<>();
    private final List<ProductDto> products = new ArrayList<>();
    private final List<FaqDto> faqs = new ArrayList<>();
    private final List<ContactRequestDto> contactSubmissions = new CopyOnWriteArrayList<>();

    public AsentusDataService() {
        initData();
    }

    private void initData() {
        // Hero Slides
        slides.add(new HeroSlideDto(
            1L,
            "HI-TECH DESIGN",
            "Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim minim estudiat veniam siad venumus dolore",
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80",
            "EXPLORE",
            "#features"
        ));
        slides.add(new HeroSlideDto(
            2L,
            "CREATIVE SOLUTIONS",
            "Pioneering digital experiences engineered with structural elegance, computational speed, and architectural beauty.",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
            "DISCOVER",
            "#products"
        ));
        slides.add(new HeroSlideDto(
            3L,
            "MODERN ARCHITECTURE",
            "Transforming conceptual designs into high-performance web systems with timeless minimal aesthetics.",
            "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80",
            "GET STARTED",
            "#pricing"
        ));

        // Core 3 Features (from user screenshot)
        features.add(new FeatureDto(
            1L,
            "Art Of Coding",
            "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor with precision and modular architecture.",
            "code"
        ));
        features.add(new FeatureDto(
            2L,
            "Responsive Design",
            "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor across all modern displays and screens.",
            "smartphone"
        ));
        features.add(new FeatureDto(
            3L,
            "Feature Reach",
            "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor empowering your brand to scale globally.",
            "award"
        ));

        // Products / Portfolio
        products.add(new ProductDto(
            1L,
            "Valence Architectural Pavilion",
            "Architecture",
            "Avant-garde curvilinear steel and glass structure designed for modern urban expositions.",
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
            "#"
        ));
        products.add(new ProductDto(
            2L,
            "Nordic Minimalist Tower",
            "Engineering",
            "Sustainable smart-energy commercial headquarters with integrated photovoltaic facade.",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
            "#"
        ));
        products.add(new ProductDto(
            3L,
            "Cybernetic Kinetic Canopy",
            "Hi-Tech",
            "Adaptive kinetic shading system reacting dynamically to solar trajectory.",
            "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
            "#"
        ));
        products.add(new ProductDto(
            4L,
            "Helix Spatial Complex",
            "Architecture",
            "Double-helical pedestrian observatory bridge spanning metropolitan waterways.",
            "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=800&q=80",
            "#"
        ));
        products.add(new ProductDto(
            5L,
            "Metropolis Grid Matrix",
            "Hi-Tech",
            "Algorithmic urban logistics interface and telemetry control visualization.",
            "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80",
            "#"
        ));
        products.add(new ProductDto(
            6L,
            "Zenith Monolith HQ",
            "Engineering",
            "Brutalist-inspired aerodynamic skyscraper engineered for supreme seismic resilience.",
            "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
            "#"
        ));

        // Pricing Plans
        pricingPlans.add(new PricingDto(
            1L,
            "Starter",
            "$29",
            "per month",
            "Ideal for emerging agencies and boutique design studios.",
            List.of("Up to 5 Projects", "Standard High-Tech UI Kit", "Basic API Integration", "Community Support", "Free Updates"),
            false,
            "Get Started"
        ));
        pricingPlans.add(new PricingDto(
            2L,
            "Business",
            "$79",
            "per month",
            "Engineered for high-growth architectural firms and tech enterprises.",
            List.of("Unlimited Projects", "Full Architectural UI Library", "Dedicated Spring Boot API", "Priority 24/7 Support", "Custom Domain & CDN", "Analytics Dashboard"),
            true,
            "Choose Business"
        ));
        pricingPlans.add(new PricingDto(
            3L,
            "Enterprise",
            "$199",
            "per month",
            "Tailored for global conglomerates with custom infrastructure demands.",
            List.of("Custom Infrastructure", "Dedicated Cloud Instances", "SLA Guarantee 99.99%", "Custom Microservices", "White Glove Onboarding", "Dedicated Tech Lead"),
            false,
            "Contact Sales"
        ));

        // FAQ Items
        faqs.add(new FaqDto(
            1L,
            "What makes Asentus hi-tech design distinct?",
            "Asentus blends minimalist European architectural geometry with responsive high-speed frontend engineering and resilient Java Spring Boot microservices.",
            "General"
        ));
        faqs.add(new FaqDto(
            2L,
            "Can I customize the typography and theme palette?",
            "Yes, all design tokens, font families, and color gradients are configured via standard CSS variables and React design props.",
            "Customization"
        ));
        faqs.add(new FaqDto(
            3L,
            "How does the Spring Boot backend connect to the UI?",
            "The Vite frontend communicates via asynchronous REST endpoints providing real-time data for slides, services, portfolio items, and validated contact inquiries.",
            "Technical"
        ));
        faqs.add(new FaqDto(
            4L,
            "Is Asentus fully responsive across mobile and 4K displays?",
            "Yes, the layout uses fluid typographic scales and responsive flex/grid layouts specifically tested for seamless adaptability from mobile phones to ultra-wide displays.",
            "Compatibility"
        ));
    }

    public List<HeroSlideDto> getSlides() { return slides; }
    public List<FeatureDto> getFeatures() { return features; }
    public List<PricingDto> getPricingPlans() { return pricingPlans; }
    public List<ProductDto> getProducts() { return products; }
    public List<FaqDto> getFaqs() { return faqs; }

    public void saveContactSubmission(ContactRequestDto contact) {
        contactSubmissions.add(contact);
        log.info("Received contact request from {} <{}>: {}", contact.name(), contact.email(), contact.message());
    }

    public List<ContactRequestDto> getContactSubmissions() { return contactSubmissions; }
}
