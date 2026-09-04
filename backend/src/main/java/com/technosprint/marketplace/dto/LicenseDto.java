package com.technosprint.marketplace.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LicenseDto {
    private Long id;
    private Long templateId;
    private String templateName;
    private String templateSlug;
    private String licenseKey;
    private String licenseType;
    private String status;
    private LocalDateTime expiresAt;
    private LocalDateTime createdAt;
}
