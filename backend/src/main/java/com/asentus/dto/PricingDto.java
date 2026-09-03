package com.asentus.dto;

import java.util.List;

public record PricingDto(
    Long id,
    String name,
    String price,
    String period,
    String description,
    List<String> features,
    boolean isPopular,
    String buttonText
) {}
