package com.asentus.dto;

public record HeroSlideDto(
    Long id,
    String title,
    String subtitle,
    String bgImage,
    String ctaText,
    String ctaLink
) {}
