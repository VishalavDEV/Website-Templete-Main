package com.admin.dashboard.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {
    private String accessToken;
    private String tokenType = "Bearer";
    private String username;
    private String email;
    private String role;
    private String status;
    private String profileImage;
}
