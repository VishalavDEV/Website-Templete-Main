package com.portfolio.studiobackend.model;

import java.util.List;

public record Profile(
    String name,
    String title,
    String bio,
    List<String> skills,
    String email,
    String github,
    String linkedin,
    String resumeUrl
) {}
