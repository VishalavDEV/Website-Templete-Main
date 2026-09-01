package com.technosprint.templates.controller;

import com.technosprint.templates.entity.License;
import com.technosprint.templates.entity.User;
import com.technosprint.templates.repository.LicenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/licenses")
public class LicenseController {

    @Autowired
    private LicenseRepository licenseRepository;

    private User getCurrentUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof User) {
            return (User) principal;
        }
        return null;
    }

    @GetMapping
    public ResponseEntity<?> getMyLicenses() {
        User user = getCurrentUser();
        if (user == null) {
            return ResponseEntity.status(401).body(Map.of("message", "User must be logged in!"));
        }

        List<License> licenses = licenseRepository.findByUser(user);
        return ResponseEntity.ok(licenses);
    }

    @GetMapping("/validate/{key}")
    public ResponseEntity<?> validateLicense(@PathVariable String key) {
        License license = licenseRepository.findByLicenseKey(key).orElse(null);
        if (license == null) {
            return ResponseEntity.badRequest().body(Map.of("valid", false, "message", "License key does not exist."));
        }

        if (!"ACTIVE".equals(license.getStatus())) {
            return ResponseEntity.ok(Map.of("valid", false, "message", "License is " + license.getStatus().toLowerCase() + "."));
        }

        if (license.getExpiryDate() != null && license.getExpiryDate().isBefore(LocalDateTime.now())) {
            license.setStatus("EXPIRED");
            licenseRepository.save(license);
            return ResponseEntity.ok(Map.of("valid", false, "message", "License key has expired."));
        }

        return ResponseEntity.ok(Map.of(
                "valid", true,
                "licenseType", license.getLicenseType(),
                "templateName", license.getTemplate().getName(),
                "userName", license.getUser().getName(),
                "expiryDate", license.getExpiryDate() != null ? license.getExpiryDate().toString() : "Lifetime"
        ));
    }
}
