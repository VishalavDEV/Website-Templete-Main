package com.business.backend.controller;

import com.business.backend.dto.ContactRequest;
import com.business.backend.dto.NewsletterRequest;
import com.business.backend.model.*;
import com.business.backend.service.MockDataService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ApiController {

    private final MockDataService mockDataService;

    @Autowired
    public ApiController(MockDataService mockDataService) {
        this.mockDataService = mockDataService;
    }

    @GetMapping("/services")
    public ResponseEntity<List<ServiceItem>> getServices() {
        return ResponseEntity.ok(mockDataService.getServices());
    }

    @GetMapping("/services/{id}")
    public ResponseEntity<ServiceItem> getServiceById(@PathVariable String id) {
        ServiceItem service = mockDataService.getServiceById(id);
        if (service == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(service);
    }

    @GetMapping("/projects")
    public ResponseEntity<List<ProjectItem>> getProjects() {
        return ResponseEntity.ok(mockDataService.getProjects());
    }

    @GetMapping("/projects/{id}")
    public ResponseEntity<ProjectItem> getProjectById(@PathVariable String id) {
        ProjectItem project = mockDataService.getProjectById(id);
        if (project == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(project);
    }

    @GetMapping("/team")
    public ResponseEntity<List<TeamMember>> getTeam() {
        return ResponseEntity.ok(mockDataService.getTeamMembers());
    }

    @GetMapping("/testimonials")
    public ResponseEntity<List<Testimonial>> getTestimonials() {
        return ResponseEntity.ok(mockDataService.getTestimonials());
    }

    @GetMapping("/blogs")
    public ResponseEntity<List<BlogItem>> getBlogs() {
        return ResponseEntity.ok(mockDataService.getBlogs());
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> submitContact(@Valid @RequestBody ContactRequest request) {
        // System log to simulate storing the submission
        System.out.println("New Contact Submission Received from " + request.getName());
        System.out.println("Email: " + request.getEmail() + " | Subject: " + request.getSubject());
        System.out.println("Message: " + request.getMessage());

        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Thank you, " + request.getName() + "! Your message has been received and our team will contact you shortly.");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/newsletter")
    public ResponseEntity<Map<String, String>> submitNewsletter(@Valid @RequestBody NewsletterRequest request) {
        // System log to simulate storing the newsletter subscriber
        System.out.println("New Newsletter Subscription: " + request.getEmail());

        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Success! " + request.getEmail() + " has been registered for weekly technology & business insights.");
        return ResponseEntity.ok(response);
    }
}
