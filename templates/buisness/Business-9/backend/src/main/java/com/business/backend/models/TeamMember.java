package com.business.backend.models;

import java.util.Map;

public record TeamMember(
    String id,
    String name,
    String role,
    String bio,
    String imageUrl,
    Map<String, String> socialLinks
) {}
