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
public class BookmarkDto {
    private Long id;
    private Long userId;
    private Long templateId;
    private TemplateDto template;
    private LocalDateTime createdAt;
}
