package com.portfolio.studiobackend.controller;

import com.portfolio.studiobackend.model.ContactMessage;
import com.portfolio.studiobackend.service.StaticDataService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class ContactController {

    private final StaticDataService dataService;

    public ContactController(StaticDataService dataService) {
        this.dataService = dataService;
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, Object>> handleContact(@Valid @RequestBody ContactMessage contactMessage) {
        dataService.addContactMessage(contactMessage);
        return ResponseEntity.ok(Map.of(
            "success", true,
            "message", "Your message was sent successfully! Alex will get back to you soon."
        ));
    }
}
