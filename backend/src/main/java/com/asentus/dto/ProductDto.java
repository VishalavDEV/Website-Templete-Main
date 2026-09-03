package com.asentus.dto;

public record ProductDto(
    Long id,
    String title,
    String category,
    String description,
    String image,
    String link
) {}
