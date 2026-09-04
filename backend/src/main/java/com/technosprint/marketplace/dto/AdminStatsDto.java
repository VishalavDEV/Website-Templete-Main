package com.technosprint.marketplace.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdminStatsDto {
    private long totalTemplates;
    private long totalUsers;
    private long totalCategories;
    private long totalDownloads;
    private BigDecimal totalRevenue;
    private long totalReviews;
    private long totalSubscribers;
    private long totalMessages;
}
