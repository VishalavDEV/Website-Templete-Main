package com.technosprint.marketplace.controller;

import com.technosprint.marketplace.dto.ApiResponse;
import com.technosprint.marketplace.dto.NewsletterRequest;
import com.technosprint.marketplace.entity.NewsletterSubscriber;
import com.technosprint.marketplace.service.NewsletterService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/newsletter")
@RequiredArgsConstructor
public class NewsletterController {

    private final NewsletterService newsletterService;

    @PostMapping("/subscribe")
    public ResponseEntity<ApiResponse> subscribe(@Valid @RequestBody NewsletterRequest request) {
        NewsletterSubscriber subscriber = newsletterService.subscribe(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(
                ApiResponse.builder()
                        .success(true)
                        .message("Successfully subscribed to TechnoSprint newsletter!")
                        .data(subscriber)
                        .build()
        );
    }
}
