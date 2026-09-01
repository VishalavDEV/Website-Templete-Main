package com.lumora.backend.controller;

import com.lumora.backend.dto.ApiResponse;
import com.lumora.backend.dto.ContactRequest;
import com.lumora.backend.model.ServiceInfo;
import com.lumora.backend.model.TeamMember;
import com.lumora.backend.model.Testimonial;
import com.lumora.backend.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ApiController {

    private final ContactService contactService;

    public ApiController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping("/services")
    public ResponseEntity<ApiResponse<List<ServiceInfo>>> getServices() {
        List<ServiceInfo> services = List.of(
            // Venture Scope categories
            new ServiceInfo("SaaS Platforms", "CORE CAPABILITY", "B2B workflows, pipeline automation tools, and real-time database interfaces.", "Layers"),
            new ServiceInfo("Consumer Apps", "CORE CAPABILITY", "Mobile fintech ledgers, fractional investing systems, and interactive tools.", "Rocket"),
            new ServiceInfo("Web3 & Security", "CORE CAPABILITY", "Sovereign ledger trails, envelope encryption setups, and credentials caches.", "Globe"),
            
            // Proprietary plugins
            new ServiceInfo("Pulse Editor", "DESIGN UTILITY", "Auto-layout responsive engine for Figma schemas.", "Settings"),
            new ServiceInfo("Flow Ledger", "FINANCIAL SDK", "Securing transaction audit trails under 8ms.", "Activity")
        );
        return ResponseEntity.ok(new ApiResponse<>(true, "Services fetched successfully", services));
    }

    @GetMapping("/team")
    public ResponseEntity<ApiResponse<List<TeamMember>>> getTeam() {
        List<TeamMember> team = List.of(
            new TeamMember(
                "Sylvia Cole", 
                "Venture Architect", 
                "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&h=400&q=80",
                Map.of("linkedin", "https://linkedin.com", "twitter", "https://twitter.com")
            ),
            new TeamMember(
                "Ethan Vance", 
                "Head of Engineering", 
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=400&q=80",
                Map.of("linkedin", "https://linkedin.com", "github", "https://github.com")
            )
        );
        return ResponseEntity.ok(new ApiResponse<>(true, "Team fetched successfully", team));
    }

    @GetMapping("/testimonials")
    public ResponseEntity<ApiResponse<List<Testimonial>>> getTestimonials() {
        List<Testimonial> testimonials = List.of(
            new Testimonial(
                "Lumora Labs co-built our MVP in four weeks. Their VC contacts got us in front of major seed funds, raising $3.5M within months.",
                "Sylvia Cole",
                "Solas App"
            )
        );
        return ResponseEntity.ok(new ApiResponse<>(true, "Testimonials fetched successfully", testimonials));
    }

    @PostMapping("/contact")
    public ResponseEntity<ApiResponse<String>> submitContact(@Valid @RequestBody ContactRequest contactRequest) {
        contactService.processContactSubmission(contactRequest);
        return ResponseEntity.ok(new ApiResponse<>(true, "Message received successfully!"));
    }
}
