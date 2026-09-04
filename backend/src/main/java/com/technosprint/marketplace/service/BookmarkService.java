package com.technosprint.marketplace.service;

import com.technosprint.marketplace.dto.BookmarkDto;
import com.technosprint.marketplace.entity.Bookmark;
import com.technosprint.marketplace.entity.Template;
import com.technosprint.marketplace.entity.User;
import com.technosprint.marketplace.exception.ResourceNotFoundException;
import com.technosprint.marketplace.repository.BookmarkRepository;
import com.technosprint.marketplace.repository.TemplateRepository;
import com.technosprint.marketplace.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookmarkService {

    private final BookmarkRepository bookmarkRepository;
    private final TemplateRepository templateRepository;
    private final UserRepository userRepository;
    private final TemplateService templateService;

    @Transactional(readOnly = true)
    public List<BookmarkDto> getUserBookmarks(Long userId) {
        return bookmarkRepository.findByUserIdOrderByCreatedAtDesc(userId).stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public BookmarkDto addBookmark(Long userId, Long templateId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        Template template = templateRepository.findById(templateId)
                .orElseThrow(() -> new ResourceNotFoundException("Template", "id", templateId));

        Bookmark bookmark = bookmarkRepository.findByUserIdAndTemplateId(userId, templateId)
                .orElseGet(() -> Bookmark.builder()
                        .user(user)
                        .template(template)
                        .build());

        Bookmark saved = bookmarkRepository.save(bookmark);
        return mapToDto(saved);
    }

    @Transactional
    public void removeBookmark(Long userId, Long templateId) {
        bookmarkRepository.findByUserIdAndTemplateId(userId, templateId)
                .ifPresent(bookmarkRepository::delete);
    }

    public BookmarkDto mapToDto(Bookmark bookmark) {
        return BookmarkDto.builder()
                .id(bookmark.getId())
                .userId(bookmark.getUser().getId())
                .templateId(bookmark.getTemplate().getId())
                .template(templateService.mapToDto(bookmark.getTemplate()))
                .createdAt(bookmark.getCreatedAt())
                .build();
    }
}
