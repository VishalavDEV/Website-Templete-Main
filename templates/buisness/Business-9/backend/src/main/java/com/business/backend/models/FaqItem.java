package com.business.backend.models;

public record FaqItem(
    String id,
    String question,
    String answer,
    String category
) {}
