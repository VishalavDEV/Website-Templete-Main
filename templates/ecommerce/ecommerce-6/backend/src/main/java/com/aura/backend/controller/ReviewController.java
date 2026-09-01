package com.aura.backend.controller;

import com.aura.backend.dto.MessageResponse;
import com.aura.backend.dto.ReviewRequest;
import com.aura.backend.model.Product;
import com.aura.backend.model.Review;
import com.aura.backend.model.User;
import com.aura.backend.repository.ProductRepository;
import com.aura.backend.repository.ReviewRepository;
import com.aura.backend.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products/{productId}/reviews")
public class ReviewController {

    private final ReviewRepository reviewRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    public ReviewController(ReviewRepository reviewRepository, ProductRepository productRepository, UserRepository userRepository) {
        this.reviewRepository = reviewRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<List<Review>> getReviewsByProduct(@PathVariable Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        return ResponseEntity.ok(reviewRepository.findByProductOrderByCreatedAtDesc(product));
    }

    @PostMapping
    public ResponseEntity<?> addReview(@PathVariable Long productId, @RequestBody ReviewRequest reviewReq) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Authenticated user not found"));

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        if (reviewReq.getRating() < 1 || reviewReq.getRating() > 5) {
            return ResponseEntity.badRequest().body(new MessageResponse("Rating must be between 1 and 5"));
        }

        Review review = new Review(user, product, reviewReq.getRating(), reviewReq.getComment(), reviewReq.getImageUrl());
        reviewRepository.save(review);

        // Recalculate product rating
        List<Review> allReviews = reviewRepository.findByProductOrderByCreatedAtDesc(product);
        double ratingSum = 0.0;
        for (Review r : allReviews) {
            ratingSum += r.getRating();
        }
        double avgRating = Math.round((ratingSum / allReviews.size()) * 10.0) / 10.0;
        product.setRating(avgRating);
        productRepository.save(product);

        return ResponseEntity.ok(review);
    }
}
