package com.asentus.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ContactRequestDto(
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100, message = "Name must be at least 2 characters")
    String name,

    @NotBlank(message = "Email is required")
    @Email(message = "Please enter a valid email address")
    String email,

    String phone,

    String subject,

    @NotBlank(message = "Message cannot be empty")
    @Size(min = 2, max = 2000, message = "Message must be at least 2 characters")
    String message
) {}