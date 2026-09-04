package com.technosprint.marketplace.controller;

import com.technosprint.marketplace.dto.*;
import com.technosprint.marketplace.entity.ContactMessage;
import com.technosprint.marketplace.service.*;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;
    private final CategoryService categoryService;
    private final TemplateService templateService;
    private final ReviewService reviewService;
    private final ContactService contactService;

    @GetMapping("/stats")
    public ResponseEntity<AdminStatsDto> getStats() {
        AdminStatsDto stats = adminService.getAdminStats();
        return ResponseEntity.ok(stats);
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserProfileResponse>> getAllUsers() {
        List<UserProfileResponse> users = adminService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable Long id) {
        adminService.deleteUser(id);
        return ResponseEntity.ok(ApiResponse.builder().success(true).message("User deleted successfully").build());
    }

    @PutMapping("/users/{id}/role")
    public ResponseEntity<UserProfileResponse> updateUserRole(@PathVariable Long id, @RequestBody Map<String, String> body) {
        String role = body.getOrDefault("role", "ROLE_USER");
        UserProfileResponse updated = adminService.updateUserRole(id, role);
        return ResponseEntity.ok(updated);
    }

    // Category CRUD
    @PostMapping("/categories")
    public ResponseEntity<CategoryDto> createCategory(@Valid @RequestBody CategoryDto dto) {
        CategoryDto created = categoryService.createCategory(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/categories/{id}")
    public ResponseEntity<CategoryDto> updateCategory(@PathVariable Long id, @RequestBody CategoryDto dto) {
        CategoryDto updated = categoryService.updateCategory(id, dto);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/categories/{id}")
    public ResponseEntity<ApiResponse> deleteCategory(@PathVariable Long id) {
        categoryService.deleteCategory(id);
        return ResponseEntity.ok(ApiResponse.builder().success(true).message("Category deleted successfully").build());
    }

    // Template CRUD
    @PostMapping("/templates")
    public ResponseEntity<TemplateDto> createTemplate(@Valid @RequestBody TemplateDto dto) {
        TemplateDto created = templateService.createTemplate(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/templates/{id}")
    public ResponseEntity<TemplateDto> updateTemplate(@PathVariable Long id, @RequestBody TemplateDto dto) {
        TemplateDto updated = templateService.updateTemplate(id, dto);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/templates/{id}")
    public ResponseEntity<ApiResponse> deleteTemplate(@PathVariable Long id) {
        templateService.deleteTemplate(id);
        return ResponseEntity.ok(ApiResponse.builder().success(true).message("Template deleted successfully").build());
    }

    // Messages & Reviews
    @GetMapping("/messages")
    public ResponseEntity<List<ContactMessage>> getContactMessages() {
        List<ContactMessage> messages = contactService.getAllMessages();
        return ResponseEntity.ok(messages);
    }

    @DeleteMapping("/reviews/{id}")
    public ResponseEntity<ApiResponse> deleteReview(@PathVariable Long id) {
        reviewService.deleteReview(id);
        return ResponseEntity.ok(ApiResponse.builder().success(true).message("Review deleted successfully").build());
    }
}
