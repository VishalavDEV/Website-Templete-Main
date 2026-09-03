package com.bencarson.portfolio.service;

import com.bencarson.portfolio.dto.ContactRequestDto;
import com.bencarson.portfolio.dto.PortfolioItemDto;
import com.bencarson.portfolio.dto.ServiceItemDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class PortfolioDataService {

    private static final Logger log = LoggerFactory.getLogger(PortfolioDataService.class);

    private final List<ServiceItemDto> services = new ArrayList<>();
    private final List<PortfolioItemDto> portfolioItems = new ArrayList<>();
    private final List<ContactRequestDto> contactSubmissions = new CopyOnWriteArrayList<>();

    public PortfolioDataService() {
        initData();
    }

    private void initData() {
        // Services
        services.add(new ServiceItemDto(
                1L,
                "Web Development",
                "High-performance, modern, and responsive web applications engineered with precision, speed, and seamless interactivity.",
                "code",
                "Development"
        ));
        services.add(new ServiceItemDto(
                2L,
                "UI / UX Design",
                "Intuitive, elegant user interfaces crafted with an emphasis on visual harmony, minimalism, and engaging user journeys.",
                "layout",
                "Design"
        ));
        services.add(new ServiceItemDto(
                3L,
                "Digital Branding",
                "Distinct visual identities and design systems tailored to elevate your brand presence and command attention in the market.",
                "feather",
                "Branding"
        ));

        // Portfolio items
        portfolioItems.add(new PortfolioItemDto(
                1L,
                "Minimalist Architectural Journal",
                "UI/UX Design & Frontend",
                "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
                "#"
        ));
        portfolioItems.add(new PortfolioItemDto(
                2L,
                "Artisan Coffee E-Commerce",
                "Full Stack Web App",
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
                "#"
        ));
        portfolioItems.add(new PortfolioItemDto(
                3L,
                "Fintech Analytics Dashboard",
                "Web Application",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
                "#"
        ));
    }

    public List<ServiceItemDto> getAllServices() {
        return services;
    }

    public List<PortfolioItemDto> getAllPortfolioItems() {
        return portfolioItems;
    }

    public void saveContactSubmission(ContactRequestDto contact) {
        contactSubmissions.add(contact);
        log.info("Received contact inquiry from {} <{}>: {}", contact.name(), contact.email(), contact.message());
    }

    public List<ContactRequestDto> getContactSubmissions() {
        return contactSubmissions;
    }
}
