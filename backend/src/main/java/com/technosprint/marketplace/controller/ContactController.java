package com.technosprint.marketplace.controller;

import com.technosprint.marketplace.dto.ApiResponse;
import com.technosprint.marketplace.dto.ContactRequest;
import com.technosprint.marketplace.entity.ContactMessage;
import com.technosprint.marketplace.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<ApiResponse> submitContact(@Valid @RequestBody ContactRequest request) {
        ContactMessage saved = contactService.submitContactMessage(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(
                ApiResponse.builder()
                        .success(true)
                        .message("Your message has been received! Our support team will get back to you shortly.")
                        .data(saved)
                        .build()
        );
    }
}
