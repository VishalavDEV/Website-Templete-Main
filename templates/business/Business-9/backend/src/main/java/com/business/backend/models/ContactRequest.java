package com.business.backend.models;

public record ContactRequest(
    String fullName,
    String email,
    String phone,
    String company,
    String service,
    String message
) {}
