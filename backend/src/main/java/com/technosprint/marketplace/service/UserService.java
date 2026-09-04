package com.technosprint.marketplace.service;

import com.technosprint.marketplace.dto.*;
import com.technosprint.marketplace.entity.*;
import com.technosprint.marketplace.exception.ResourceNotFoundException;
import com.technosprint.marketplace.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final OrderRepository orderRepository;
    private final LicenseRepository licenseRepository;
    private final DownloadRecordRepository downloadRecordRepository;
    private final ProjectRepository projectRepository;
    private final PasswordEncoder passwordEncoder;
    private final TemplateService templateService;

    @Transactional
    public UserProfileResponse updateProfile(Long userId, UpdateProfileRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        if (request.getName() != null && !request.getName().trim().isEmpty()) {
            user.setName(request.getName().trim());
        }

        String avatar = request.getAvatarUrl() != null ? request.getAvatarUrl() : request.getAvatar();
        if (avatar != null && !avatar.trim().isEmpty()) {
            user.setAvatarUrl(avatar.trim());
        }

        if (request.getPassword() != null && !request.getPassword().trim().isEmpty()) {
            user.setPassword(passwordEncoder.encode(request.getPassword().trim()));
        }

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

    @Transactional(readOnly = true)
    public List<OrderDto> getUserOrders(Long userId) {
        return orderRepository.findByUserIdOrderByCreatedAtDesc(userId).stream()
                .map(this::mapToOrderDto)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<LicenseDto> getUserLicenses(Long userId) {
        return licenseRepository.findByUserIdOrderByCreatedAtDesc(userId).stream()
                .map(this::mapToLicenseDto)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<TemplateDto> getUserDownloads(Long userId) {
        return downloadRecordRepository.findByUserIdOrderByDownloadedAtDesc(userId).stream()
                .map(record -> templateService.mapToDto(record.getTemplate()))
                .distinct()
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<ProjectDto> getUserProjects(Long userId) {
        return projectRepository.findByUserIdOrderByCreatedAtDesc(userId).stream()
                .map(this::mapToProjectDto)
                .collect(Collectors.toList());
    }

    private OrderDto mapToOrderDto(Order order) {
        List<OrderItemDto> itemDtos = order.getItems().stream()
                .map(item -> OrderItemDto.builder()
                        .id(item.getId())
                        .templateId(item.getTemplate().getId())
                        .templateName(item.getTemplate().getName())
                        .templateSlug(item.getTemplate().getSlug())
                        .previewImage(item.getTemplate().getPreviewImage())
                        .price(item.getPrice())
                        .licenseType(item.getLicenseType())
                        .build())
                .collect(Collectors.toList());

        return OrderDto.builder()
                .id(order.getId())
                .orderNumber(order.getOrderNumber())
                .totalAmount(order.getTotalAmount())
                .status(order.getStatus())
                .paymentMethod(order.getPaymentMethod())
                .items(itemDtos)
                .createdAt(order.getCreatedAt())
                .build();
    }

    private LicenseDto mapToLicenseDto(License license) {
        return LicenseDto.builder()
                .id(license.getId())
                .templateId(license.getTemplate().getId())
                .templateName(license.getTemplate().getName())
                .templateSlug(license.getTemplate().getSlug())
                .licenseKey(license.getLicenseKey())
                .licenseType(license.getLicenseType())
                .status(license.getStatus())
                .expiresAt(license.getExpiresAt())
                .createdAt(license.getCreatedAt())
                .build();
    }

    private ProjectDto mapToProjectDto(Project project) {
        return ProjectDto.builder()
                .id(project.getId())
                .templateId(project.getTemplate().getId())
                .templateName(project.getTemplate().getName())
                .templateSlug(project.getTemplate().getSlug())
                .previewImage(project.getTemplate().getPreviewImage())
                .name(project.getName())
                .status(project.getStatus())
                .customSettings(project.getCustomSettings())
                .createdAt(project.getCreatedAt())
                .updatedAt(project.getUpdatedAt())
                .build();
    }
}
