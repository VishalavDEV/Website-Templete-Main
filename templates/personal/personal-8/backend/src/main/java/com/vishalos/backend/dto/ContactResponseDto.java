package com.vishalos.backend.dto;

import java.time.LocalDateTime;

public class ContactResponseDto {
    private boolean success;
    private String message;
    private String timestamp;

    public ContactResponseDto(boolean success, String message) {
        this.success = success;
        this.message = message;
        this.timestamp = LocalDateTime.now().toString();
    }

    public boolean isSuccess() { return success; }
    public String getMessage() { return message; }
    public String getTimestamp() { return timestamp; }
}
