package com.asentus.dto;

public record FaqDto(
    Long id,
    String question,
    String answer,
    String category
) {}
