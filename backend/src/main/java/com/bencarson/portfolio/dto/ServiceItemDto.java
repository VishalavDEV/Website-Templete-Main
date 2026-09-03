package com.bencarson.portfolio.dto;

public record ServiceItemDto(
    Long id,
    String title,
    String description,
    String icon,
    String category
) {}
