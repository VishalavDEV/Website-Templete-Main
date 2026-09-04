package com.technosprint.marketplace.service;

import com.technosprint.marketplace.dto.CreateReviewRequest;
import com.technosprint.marketplace.dto.ReviewDto;
import com.technosprint.marketplace.entity.Review;
import com.technosprint.marketplace.entity.Template;
import com.technosprint.marketplace.entity.User;
import com.technosprint.marketplace.exception.ResourceNotFoundException;
import com.technosprint.marketplace.repository.ReviewRepository;
import com.technosprint.marketplace.repository.TemplateRepository;
import com.technosprint.marketplace.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final TemplateRepository templateRepository;
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public List<ReviewDto> getReviewsByTemplateId(Long templateId) {
        return reviewRepository.findByTemplateIdOrderByCreatedAtDesc(templateId).stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public ReviewDto addReview(Long templateId, Long userId, CreateReviewRequest request) {
        Template template = templateRepository.findById(templateId)
                .orElseThrow(() -> new ResourceNotFoundException("Template", "id", templateId));

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        Review review = Review.builder()
                .template(template)
                .user(user)
                .userName(user.getName())
                .rating(request.getRating())
                .comment(request.getComment())
                .build();

        Review saved = reviewRepository.save(review);

        // Recalculate average rating
        List<Review> allReviews = reviewRepository.findByTemplate(template);
        if (!allReviews.isEmpty()) {
            double avg = allReviews.stream().mapToInt(Review::getRating).average().orElse(5.0);
            template.setRating(Math.round(avg * 10.0) / 10.0);
            templateRepository.save(template);
        }

        return mapToDto(saved);
    }

    @Transactional
    public void deleteReview(Long reviewId) {
        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new ResourceNotFoundException("Review", "id", reviewId));
        reviewRepository.delete(review);
    }

    public ReviewDto mapToDto(Review review) {
        return ReviewDto.builder()
                .id(review.getId())
                .templateId(review.getTemplate().getId())
                .userId(review.getUser().getId())
                .userName(review.getUserName() != null ? review.getUserName() : review.getUser().getName())
                .rating(review.getRating())
                .comment(review.getComment())
                .createdAt(review.getCreatedAt())
                .build();
    }
}
