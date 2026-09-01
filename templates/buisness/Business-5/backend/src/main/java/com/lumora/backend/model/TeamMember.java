package com.lumora.backend.model;

import java.util.Map;

public record TeamMember(
    String name,
    String role,
    String image,
    Map<String, String> socials
) {}
