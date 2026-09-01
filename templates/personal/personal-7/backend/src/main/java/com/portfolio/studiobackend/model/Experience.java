package com.portfolio.studiobackend.model;

import java.util.List;

public record Experience(
    String id,
    String company,
    String role,
    String duration,
    List<String> points
) {}
