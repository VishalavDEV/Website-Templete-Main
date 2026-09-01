package com.technosprint.templates.controller;

import com.technosprint.templates.entity.Category;
import com.technosprint.templates.entity.User;
import com.technosprint.templates.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    private boolean isAdmin() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof User) {
            return "ROLE_ADMIN".equals(((User) principal).getRole());
        }
        return false;
    }

    @GetMapping
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCategoryById(@PathVariable Long id) {
        Category category = categoryRepository.findById(id).orElse(null);
        if (category == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(category);
    }

    @PostMapping
    public ResponseEntity<?> createCategory(@RequestBody Category category) {
        if (!isAdmin()) {
            return ResponseEntity.status(403).body(Map.of("message", "Access denied: Admins only!"));
        }
        if (categoryRepository.existsByName(category.getName())) {
            return ResponseEntity.badRequest().body(Map.of("message", "Category name already exists!"));
        }
        Category saved = categoryRepository.save(category);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCategory(@PathVariable Long id, @RequestBody Category categoryDetails) {
        if (!isAdmin()) {
            return ResponseEntity.status(403).body(Map.of("message", "Access denied: Admins only!"));
        }
        Category category = categoryRepository.findById(id).orElse(null);
        if (category == null) {
            return ResponseEntity.notFound().build();
        }
        category.setName(categoryDetails.getName());
        category.setSlug(categoryDetails.getSlug());
        category.setDescription(categoryDetails.getDescription());
        category.setStatus(categoryDetails.getStatus());
        Category updated = categoryRepository.save(category);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id) {
        if (!isAdmin()) {
            return ResponseEntity.status(403).body(Map.of("message", "Access denied: Admins only!"));
        }
        Category category = categoryRepository.findById(id).orElse(null);
        if (category == null) {
            return ResponseEntity.notFound().build();
        }
        categoryRepository.delete(category);
        return ResponseEntity.ok(Map.of("message", "Category deleted successfully!"));
    }
}
