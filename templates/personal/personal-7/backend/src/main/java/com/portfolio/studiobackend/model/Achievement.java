package com.portfolio.studiobackend.model;

public record Achievement(
    String id,
    String title,
    String category, // "Trophy", "Medal", "Certificate", "Badge"
    String event,
    String year,
    String description
) {}
