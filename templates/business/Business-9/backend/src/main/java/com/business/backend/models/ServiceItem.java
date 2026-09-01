package com.business.backend.models;

import java.util.List;

public record ServiceItem(
    String id,
    String title,
    String description,
    String iconName,
    String category,
    String longDescription,
    List<String> benefits
) {}
