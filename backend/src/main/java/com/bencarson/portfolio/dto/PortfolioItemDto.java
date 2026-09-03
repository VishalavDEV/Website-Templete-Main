package com.bencarson.portfolio.dto;

public record PortfolioItemDto(
    Long id,
    String title,
    String category,
    String imageUrl,
    String projectUrl
) {}
