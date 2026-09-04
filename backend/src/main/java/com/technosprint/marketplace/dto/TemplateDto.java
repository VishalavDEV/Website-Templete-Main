package com.technosprint.marketplace.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TemplateDto {
    private Long id;
    private String name;
    private String slug;
    private String description;
    private String detailedDescription;
    private CategoryNestedDto category;
    private String templateType;
    private BigDecimal price;
    private Integer pagesCount;
    private Integer downloadsCount;
    private String bootstrapVersion;
    private String version;
    private String status;
    private Double rating;
    private Boolean responsive;
    private Boolean animated;
    private String previewImage;
    private String demoUrl;
    private String downloadFile;
    private String githubUrl;
    private String author;
    private Integer views;
    private Boolean featured;
    private Boolean popular;
    private List<String> tags;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
