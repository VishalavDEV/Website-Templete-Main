package com.portfolio.studiobackend.model;

import java.util.List;

public record Education(
    String id,
    String institution,
    String degree,
    String specialization,
    String year,
    List<String> details
) {}
