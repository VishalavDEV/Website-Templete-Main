package com.business.backend.controllers;

import com.business.backend.models.ContactRequest;
import com.business.backend.models.ContactResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @PostMapping
    public ResponseEntity<ContactResponse> submitContactForm(@RequestBody ContactRequest request) {
        // Validation checks
        if (request.fullName() == null || request.fullName().trim().isEmpty()) {
            return ResponseEntity.badRequest().body(new ContactResponse("error", "Full Name is required."));
        }
        if (request.email() == null || request.email().trim().isEmpty()) {
            return ResponseEntity.badRequest().body(new ContactResponse("error", "Email Address is required."));
        }
        if (!request.email().contains("@")) {
            return ResponseEntity.badRequest().body(new ContactResponse("error", "A valid Email Address is required."));
        }
        if (request.message() == null || request.message().trim().isEmpty()) {
            return ResponseEntity.badRequest().body(new ContactResponse("error", "Message content cannot be empty."));
        }

        // Simulating form saving/logging
        System.out.println("--- RECEIVED CONTACT FORM SUBMISSION ---");
        System.out.println("Name: " + request.fullName());
        System.out.println("Email: " + request.email());
        System.out.println("Phone: " + request.phone());
        System.out.println("Company: " + request.company());
        System.out.println("Service: " + request.service());
        System.out.println("Message: " + request.message());
        System.out.println("----------------------------------------");

        String successMessage = String.format("Thank you, %s! Your inquiry regarding '%s' has been received. Our team will contact you at %s shortly.", 
            request.fullName(), 
            request.service() != null && !request.service().isEmpty() ? request.service() : "General Consulting",
            request.email()
        );

        return ResponseEntity.ok(new ContactResponse("success", successMessage));
    }
}
