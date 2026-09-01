package com.nexus.business.response;

import com.fasterxml.jackson.annotation.JsonInclude;

/**
 * Generic JSON response wrapper for all API endpoints.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponse {

    private boolean success;
    private String message;
    private Object data;

    // --- Constructors ---

    public ApiResponse() {}

    public ApiResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public ApiResponse(boolean success, String message, Object data) {
        this.success = success;
        this.message = message;
        this.data = data;
    }

    // --- Static factory methods ---

    public static ApiResponse ok(String message) {
        return new ApiResponse(true, message);
    }

    public static ApiResponse error(String message) {
        return new ApiResponse(false, message);
    }

    // --- Getters & Setters ---

    public boolean isSuccess() { return success; }
    public void setSuccess(boolean success) { this.success = success; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public Object getData() { return data; }
    public void setData(Object data) { this.data = data; }
}
