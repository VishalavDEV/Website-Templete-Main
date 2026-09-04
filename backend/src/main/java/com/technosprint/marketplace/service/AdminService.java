package com.technosprint.marketplace.service;

import com.technosprint.marketplace.dto.AdminStatsDto;
import com.technosprint.marketplace.dto.UserProfileResponse;
import com.technosprint.marketplace.entity.User;
import com.technosprint.marketplace.exception.ResourceNotFoundException;
import com.technosprint.marketplace.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final TemplateRepository templateRepository;
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final ReviewRepository reviewRepository;
    private final NewsletterSubscriberRepository newsletterSubscriberRepository;
    private final ContactMessageRepository contactMessageRepository;
    private final OrderRepository orderRepository;

    @Transactional(readOnly = true)
    public AdminStatsDto getAdminStats() {
        long templatesCount = templateRepository.count();
        long usersCount = userRepository.count();
        long categoriesCount = categoryRepository.count();
        Long totalDownloads = templateRepository.getTotalDownloadsCount();
        BigDecimal revenue = orderRepository.getTotalRevenue();
        long reviewsCount = reviewRepository.count();
        long subscribersCount = newsletterSubscriberRepository.count();
        long messagesCount = contactMessageRepository.count();

        return AdminStatsDto.builder()
                .totalTemplates(templatesCount)
                .totalUsers(usersCount)
                .totalCategories(categoriesCount)
                .totalDownloads(totalDownloads != null ? totalDownloads : 0L)
                .totalRevenue(revenue != null ? revenue : BigDecimal.ZERO)
                .totalReviews(reviewsCount)
                .totalSubscribers(subscribersCount)
                .totalMessages(messagesCount)
                .build();
    }

    @Transactional(readOnly = true)
    public List<UserProfileResponse> getAllUsers() {
        return userRepository.findAll().stream()
                .map(user -> UserProfileResponse.builder()
                        .id(user.getId())
                        .name(user.getName())
                        .email(user.getEmail())
                        .role(user.getRole())
                        .avatar(user.getAvatarUrl())
                        .avatarUrl(user.getAvatarUrl())
                        .createdAt(user.getCreatedAt())
                        .build())
                .collect(Collectors.toList());
    }

    @Transactional
    public void deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
        userRepository.delete(user);
    }

    @Transactional
    public UserProfileResponse updateUserRole(Long id, String role) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
        String roleFormatted = role.startsWith("ROLE_") ? role : "ROLE_" + role;
        user.setRole(roleFormatted);
        User saved = userRepository.save(user);

        return UserProfileResponse.builder()
                .id(saved.getId())
                .name(saved.getName())
                .email(saved.getEmail())
                .role(saved.getRole())
                .avatar(saved.getAvatarUrl())
                .avatarUrl(saved.getAvatarUrl())
                .createdAt(saved.getCreatedAt())
                .build();
    }
}
