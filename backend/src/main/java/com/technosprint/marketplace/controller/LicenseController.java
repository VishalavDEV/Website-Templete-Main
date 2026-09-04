package com.technosprint.marketplace.controller;

import com.technosprint.marketplace.dto.LicenseDto;
import com.technosprint.marketplace.entity.License;
import com.technosprint.marketplace.repository.LicenseRepository;
import com.technosprint.marketplace.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/licenses")
@RequiredArgsConstructor
public class LicenseController {

    private final LicenseRepository licenseRepository;

    @GetMapping
    public ResponseEntity<List<LicenseDto>> getMyLicenses(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        if (userPrincipal == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        List<License> licenses = licenseRepository.findByUserIdOrderByCreatedAtDesc(userPrincipal.getId());
        return ResponseEntity.ok(licenses.stream().map(this::mapToDto).collect(Collectors.toList()));
    }

    @GetMapping("/validate/{key}")
    public ResponseEntity<Map<String, Object>> validateLicense(@PathVariable String key) {
        Optional<License> licenseOpt = licenseRepository.findByLicenseKey(key);
        Map<String, Object> res = new HashMap<>();
        if (licenseOpt.isPresent()) {
            License lic = licenseOpt.get();
            res.put("valid", "ACTIVE".equalsIgnoreCase(lic.getStatus()));
            res.put("licenseKey", lic.getLicenseKey());
            res.put("licenseType", lic.getLicenseType());
            res.put("templateName", lic.getTemplate().getName());
        } else {
            res.put("valid", false);
            res.put("licenseKey", key);
            res.put("message", "License not found or expired");
        }
        return ResponseEntity.ok(res);
    }

    private LicenseDto mapToDto(License license) {
        return LicenseDto.builder()
                .id(license.getId())
                .templateId(license.getTemplate().getId())
                .templateName(license.getTemplate().getName())
                .templateSlug(license.getTemplate().getSlug())
                .licenseKey(license.getLicenseKey())
                .licenseType(license.getLicenseType())
                .status(license.getStatus())
                .expiresAt(license.getExpiresAt())
                .createdAt(license.getCreatedAt())
                .build();
    }
}
