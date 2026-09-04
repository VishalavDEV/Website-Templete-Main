package com.technosprint.marketplace.controller;

import com.technosprint.marketplace.dto.*;
import com.technosprint.marketplace.security.UserPrincipal;
import com.technosprint.marketplace.service.AuthService;
import com.technosprint.marketplace.service.BookmarkService;
import com.technosprint.marketplace.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final AuthService authService;
    private final BookmarkService bookmarkService;

    @GetMapping({"/api/users/profile", "/api/user/profile"})
    public ResponseEntity<UserProfileResponse> getProfile(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        UserProfileResponse profile = authService.getCurrentUser(userPrincipal.getId());
        return ResponseEntity.ok(profile);
    }

    @PutMapping({"/api/users/profile", "/api/user/profile"})
    public ResponseEntity<UserProfileResponse> updateProfile(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @RequestBody UpdateProfileRequest request) {
        UserProfileResponse updated = userService.updateProfile(userPrincipal.getId(), request);
        return ResponseEntity.ok(updated);
    }

    @GetMapping("/api/user/orders")
    public ResponseEntity<List<OrderDto>> getUserOrders(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        List<OrderDto> orders = userService.getUserOrders(userPrincipal.getId());
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/api/user/licenses")
    public ResponseEntity<List<LicenseDto>> getUserLicenses(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        List<LicenseDto> licenses = userService.getUserLicenses(userPrincipal.getId());
        return ResponseEntity.ok(licenses);
    }

    @GetMapping("/api/user/downloads")
    public ResponseEntity<List<TemplateDto>> getUserDownloads(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        List<TemplateDto> downloads = userService.getUserDownloads(userPrincipal.getId());
        return ResponseEntity.ok(downloads);
    }

    @GetMapping("/api/user/projects")
    public ResponseEntity<List<ProjectDto>> getUserProjects(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        List<ProjectDto> projects = userService.getUserProjects(userPrincipal.getId());
        return ResponseEntity.ok(projects);
    }

    @GetMapping("/api/user/favorites")
    public ResponseEntity<List<BookmarkDto>> getUserFavorites(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        List<BookmarkDto> favorites = bookmarkService.getUserBookmarks(userPrincipal.getId());
        return ResponseEntity.ok(favorites);
    }
}
