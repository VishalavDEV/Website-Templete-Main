package com.ecommerce.api.controller;

import com.ecommerce.api.model.User;
import com.ecommerce.api.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String password = payload.get("password");

        if (email == null || password == null) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email and password are required"));
        }

        User user = authService.login(email, password);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Invalid email or password"));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (user.getEmail() == null || user.getPassword() == null || user.getName() == null) {
            return ResponseEntity.badRequest().body(Map.of("message", "Name, email, and password are required"));
        }

        User registered = authService.register(user);
        if (registered != null) {
            return ResponseEntity.ok(registered);
        }
        return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("message", "User with this email already exists"));
    }

    @GetMapping("/me")
    public ResponseEntity<User> getMe() {
        User user = authService.getLoggedInUser();
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout() {
        authService.logout();
        return ResponseEntity.ok().build();
    }
}
