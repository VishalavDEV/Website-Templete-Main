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
public class ProjectDto {
    private Long id;
    private Long templateId;
    private String templateName;
    private String templateSlug;
    private String previewImage;
    private String name;
    private String status;
    private String customSettings;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
