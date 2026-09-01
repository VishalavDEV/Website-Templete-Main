package com.business.backend.models;

public record TestimonialItem(
    String id,
    String clientName,
    String company,
    int rating,
    String comment,
    String imageUrl
) {}
