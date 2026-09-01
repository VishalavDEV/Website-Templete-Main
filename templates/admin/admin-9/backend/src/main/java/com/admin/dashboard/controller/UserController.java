package com.admin.dashboard.controller;

import com.admin.dashboard.entity.User;
import com.admin.dashboard.entity.UserRole;
import com.admin.dashboard.entity.UserStatus;
import com.admin.dashboard.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@PreAuthorize("hasRole('ROLE_SUPER_ADMIN') or hasRole('ROLE_ADMIN')")
public class UserController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));
        return ResponseEntity.ok(user);
    }

    @PostMapping
    public ResponseEntity<?> createUser(@Valid @RequestBody User user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body(Map.of("message", "Username is already taken."));
        }
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email is already in use."));
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        if (user.getProfileImage() == null || user.getProfileImage().trim().isEmpty()) {
            user.setProfileImage("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150");
        }
        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));

        // Check unique fields if changing
        if (!user.getUsername().equals(userDetails.getUsername()) && userRepository.existsByUsername(userDetails.getUsername())) {
            return ResponseEntity.badRequest().body(Map.of("message", "Username is already taken."));
        }
        if (!user.getEmail().equals(userDetails.getEmail()) && userRepository.existsByEmail(userDetails.getEmail())) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email is already in use."));
        }

        user.setUsername(userDetails.getUsername());
        user.setEmail(userDetails.getEmail());
        user.setPhone(userDetails.getPhone());
        user.setRole(userDetails.getRole());
        user.setStatus(userDetails.getStatus());
        if (userDetails.getProfileImage() != null) {
            user.setProfileImage(userDetails.getProfileImage());
        }

        // Only update password if provided
        if (userDetails.getPassword() != null && !userDetails.getPassword().trim().isEmpty()) {
            user.setPassword(passwordEncoder.encode(userDetails.getPassword()));
        }

        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));
        userRepository.delete(user);
        return ResponseEntity.ok(Map.of("message", "User deleted successfully."));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<User> updateUserStatus(@PathVariable Long id, @RequestBody Map<String, String> body) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));
        
        UserStatus status = UserStatus.valueOf(body.get("status").toUpperCase());
        user.setStatus(status);
        
        return ResponseEntity.ok(userRepository.save(user));
    }

    @PatchMapping("/{id}/role")
    public ResponseEntity<User> updateUserRole(@PathVariable Long id, @RequestBody Map<String, String> body) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));
        
        UserRole role = UserRole.valueOf(body.get("role").toUpperCase());
        user.setRole(role);
        
        return ResponseEntity.ok(userRepository.save(user));
    }
}
