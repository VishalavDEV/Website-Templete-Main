package com.agency.backend.controller;

import com.agency.backend.dto.ContactRequest;
import com.agency.backend.entity.ContactEnquiry;
import com.agency.backend.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public ResponseEntity<?> submitEnquiry(@Valid @RequestBody ContactRequest request) {
        ContactEnquiry enquiry = new ContactEnquiry(
                request.getName(),
                request.getEmail(),
                request.getPhone(),
                request.getCompany(),
                request.getSubject(),
                request.getMessage()
        );
        contactService.saveEnquiry(enquiry);
        
        Map<String, String> response = new HashMap<>();
        response.put("message", "Thank you for contacting us! Your message has been received.");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
