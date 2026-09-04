package com.technosprint.marketplace.controller;

import com.technosprint.marketplace.dto.*;
import com.technosprint.marketplace.security.UserPrincipal;
import com.technosprint.marketplace.service.ReviewService;
import com.technosprint.marketplace.service.TemplateService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/templates")
@RequiredArgsConstructor
public class TemplateController {

    private final TemplateService templateService;
    private final ReviewService reviewService;

    @GetMapping
    public ResponseEntity<?> getTemplates(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false, defaultValue = "12") Integer size) {

        if (page != null) {
            TemplatePageResponse pagedResponse = templateService.getPagedTemplates(category, type, search, sort, page, size);
            return ResponseEntity.ok(pagedResponse);
        } else {
            List<TemplateDto> templates = templateService.getAllTemplates(category, type, search, sort);
            return ResponseEntity.ok(templates);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<TemplateDto> getTemplateById(@PathVariable Long id) {
        TemplateDto template = templateService.getTemplateById(id);
        return ResponseEntity.ok(template);
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<TemplateDto> getTemplateBySlug(@PathVariable String slug) {
        TemplateDto template = templateService.getTemplateBySlug(slug);
        return ResponseEntity.ok(template);
    }

    @GetMapping("/category/{categorySlug}")
    public ResponseEntity<List<TemplateDto>> getTemplatesByCategory(@PathVariable String categorySlug) {
        List<TemplateDto> templates = templateService.getTemplatesByCategory(categorySlug);
        return ResponseEntity.ok(templates);
    }

    @GetMapping("/featured")
    public ResponseEntity<List<TemplateDto>> getFeaturedTemplates() {
        List<TemplateDto> featured = templateService.getFeaturedTemplates();
        return ResponseEntity.ok(featured);
    }

    @GetMapping("/popular")
    public ResponseEntity<List<TemplateDto>> getPopularTemplates() {
        List<TemplateDto> popular = templateService.getPopularTemplates();
        return ResponseEntity.ok(popular);
    }

    @GetMapping("/search")
    public ResponseEntity<List<TemplateDto>> searchTemplates(@RequestParam(name = "q", required = false) String query) {
        List<TemplateDto> results = templateService.searchTemplates(query);
        return ResponseEntity.ok(results);
    }

    @GetMapping("/{id}/reviews")
    public ResponseEntity<List<ReviewDto>> getReviews(@PathVariable Long id) {
        List<ReviewDto> reviews = reviewService.getReviewsByTemplateId(id);
        return ResponseEntity.ok(reviews);
    }

    @PostMapping("/{id}/reviews")
    public ResponseEntity<ReviewDto> addReview(
            @PathVariable Long id,
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @Valid @RequestBody CreateReviewRequest request) {
        if (userPrincipal == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        ReviewDto review = reviewService.addReview(id, userPrincipal.getId(), request);
        return ResponseEntity.status(HttpStatus.CREATED).body(review);
    }

    @PostMapping("/{id}/download")
    public ResponseEntity<DownloadResponseDto> downloadTemplate(
            @PathVariable Long id,
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            HttpServletRequest request) {

        Long userId = (userPrincipal != null) ? userPrincipal.getId() : null;
        String ipAddress = request.getRemoteAddr();

        TemplateDto updated = templateService.recordDownload(id, userId, ipAddress);

        DownloadResponseDto response = DownloadResponseDto.builder()
                .downloadUrl(updated.getDownloadFile())
                .downloadFile(updated.getDownloadFile())
                .downloadsCount(updated.getDownloadsCount())
                .message("Download recorded successfully")
                .build();

        return ResponseEntity.ok(response);
    }

    @PostMapping("/{id}/download-token")
    public ResponseEntity<DownloadResponseDto> getDownloadToken(
            @PathVariable Long id,
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            HttpServletRequest request) {

        Long userId = (userPrincipal != null) ? userPrincipal.getId() : null;
        String ipAddress = request.getRemoteAddr();

        TemplateDto updated = templateService.recordDownload(id, userId, ipAddress);

        DownloadResponseDto response = DownloadResponseDto.builder()
                .downloadUrl(updated.getDownloadFile())
                .downloadFile(updated.getDownloadFile())
                .token(UUID.randomUUID().toString())
                .downloadsCount(updated.getDownloadsCount())
                .message("Token generated")
                .build();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/downloads-history")
    public ResponseEntity<List<TemplateDto>> getDownloadsHistory(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        if (userPrincipal == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok(templateService.getPopularTemplates());
    }
}
