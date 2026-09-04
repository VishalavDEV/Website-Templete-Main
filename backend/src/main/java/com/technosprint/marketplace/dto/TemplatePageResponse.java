package com.technosprint.marketplace.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TemplatePageResponse {
    private List<TemplateDto> content;
    private int page;
    private int size;
    private long totalElements;
    private int totalPages;
    private boolean last;
}
