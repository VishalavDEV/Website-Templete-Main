package com.technosprint.templates.controller;

import com.technosprint.templates.entity.User;
import com.technosprint.templates.repository.UserRepository;
import com.technosprint.templates.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtils;

    public static class RegisterRequest {
        public String name;
        public String email;
        public String password;
    }

    public static class LoginRequest {
        public String email;
        public String password;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest request) {
        if (userRepository.existsByEmail(request.email)) {
            return ResponseEntity.badRequest().body(Map.of("message", "Error: Email is already in use!"));
        }

        User user = new User(
                request.name,
                request.email,
                passwordEncoder.encode(request.password),
                "ROLE_USER",
                "ACTIVE"
        );

        userRepository.save(user);
        return ResponseEntity.ok(Map.of("message", "User registered successfully!"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest request) {
        User user = userRepository.findByEmail(request.email).orElse(null);
        if (user == null || !passwordEncoder.matches(request.password, user.getPassword())) {
            return ResponseEntity.status(401).body(Map.of("message", "Error: Invalid email or password!"));
        }

        if (!"ACTIVE".equals(user.getStatus())) {
            return ResponseEntity.status(403).body(Map.of("message", "Error: Account is deactivated!"));
        }

        String jwt = jwtUtils.generateJwtToken(user.getEmail());

        Map<String, Object> response = new HashMap<>();
        response.put("token", jwt);
        response.put("id", user.getId());
        response.put("name", user.getName());
        response.put("email", user.getEmail());
        response.put("role", user.getRole());

        return ResponseEntity.ok(response);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logoutUser() {
        return ResponseEntity.ok(Map.of("message", "Logged out successfully"));
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        if (userRepository.existsByEmail(email)) {
            return ResponseEntity.ok(Map.of("message", "Password reset instructions have been sent to your email."));
        }
        return ResponseEntity.badRequest().body(Map.of("message", "Error: Email address not found!"));
    }
}
