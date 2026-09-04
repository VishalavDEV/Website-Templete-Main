package com.technosprint.marketplace.controller;

import com.technosprint.marketplace.dto.ApiResponse;
import com.technosprint.marketplace.dto.BookmarkDto;
import com.technosprint.marketplace.security.UserPrincipal;
import com.technosprint.marketplace.service.BookmarkService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookmarks")
@RequiredArgsConstructor
public class BookmarkController {

    private final BookmarkService bookmarkService;

    @GetMapping
    public ResponseEntity<List<BookmarkDto>> getUserBookmarks(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        if (userPrincipal == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        List<BookmarkDto> bookmarks = bookmarkService.getUserBookmarks(userPrincipal.getId());
        return ResponseEntity.ok(bookmarks);
    }

    @PostMapping("/{templateId}")
    public ResponseEntity<BookmarkDto> addBookmark(
            @PathVariable Long templateId,
            @AuthenticationPrincipal UserPrincipal userPrincipal) {
        if (userPrincipal == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        BookmarkDto bookmark = bookmarkService.addBookmark(userPrincipal.getId(), templateId);
        return ResponseEntity.status(HttpStatus.CREATED).body(bookmark);
    }

    @DeleteMapping("/{templateId}")
    public ResponseEntity<ApiResponse> removeBookmark(
            @PathVariable Long templateId,
            @AuthenticationPrincipal UserPrincipal userPrincipal) {
        if (userPrincipal == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        bookmarkService.removeBookmark(userPrincipal.getId(), templateId);
        return ResponseEntity.ok(ApiResponse.builder().success(true).message("Bookmark removed successfully").build());
    }
}
