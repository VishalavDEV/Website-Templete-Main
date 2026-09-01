package com.admin.dashboard.controller;

import com.admin.dashboard.dto.AuthResponse;
import com.admin.dashboard.dto.ForgotPasswordRequest;
import com.admin.dashboard.dto.LoginRequest;
import com.admin.dashboard.dto.ResetPasswordRequest;
import com.admin.dashboard.entity.User;
import com.admin.dashboard.repository.UserRepository;
import com.admin.dashboard.security.JwtTokenProvider;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider tokenProvider;

    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository,
                          PasswordEncoder passwordEncoder, JwtTokenProvider tokenProvider) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = tokenProvider.generateToken(authentication);

        User user = userRepository.findByUsername(loginRequest.getUsername())
                .orElseGet(() -> userRepository.findByEmail(loginRequest.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found")));

        return ResponseEntity.ok(new AuthResponse(
                jwt,
                "Bearer",
                user.getUsername(),
                user.getEmail(),
                user.getRole().name(),
                user.getStatus().name(),
                user.getProfileImage()
        ));
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@Valid @RequestBody ForgotPasswordRequest request) {
        // Find if user exists
        boolean exists = userRepository.existsByEmail(request.getEmail());
        if (!exists) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "User with this email does not exist."));
        }

        // Simulate password reset token sending
        System.out.println("SIMULATION: Sent password reset link to " + request.getEmail());
        return ResponseEntity.ok(Map.of("message", "Password reset link has been sent to your email."));
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@Valid @RequestBody ResetPasswordRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + request.getEmail()));

        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);

        return ResponseEntity.ok(Map.of("message", "Password has been reset successfully."));
    }
}
