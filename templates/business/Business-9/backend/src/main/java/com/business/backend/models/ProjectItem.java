package com.business.backend.models;

import java.util.List;

public record ProjectItem(
    String id,
    String title,
    String category,
    String description,
    String imageUrl,
    String client,
    String year,
    List<String> technologies,
    String challenge,
    String solution
) {}
