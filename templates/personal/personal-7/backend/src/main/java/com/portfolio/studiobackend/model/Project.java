package com.portfolio.studiobackend.model;

import java.util.List;

public record Project(
    String id,
    String name,
    String description,
    String category, // "WEB", "AI", "SOFTWARE", "EXPERIMENTS"
    List<String> technologies,
    String imageUrl,
    String githubUrl,
    String demoUrl
) {}
