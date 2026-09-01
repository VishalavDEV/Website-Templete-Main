package com.aura.backend.controller;

import com.aura.backend.dto.MessageResponse;
import com.aura.backend.model.Product;
import com.aura.backend.model.User;
import com.aura.backend.repository.ProductRepository;
import com.aura.backend.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {

    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    public WishlistController(UserRepository userRepository, ProductRepository productRepository) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    private User getAuthenticatedUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Authenticated user not found"));
    }

    @GetMapping
    public ResponseEntity<Set<Product>> getWishlist() {
        User user = getAuthenticatedUser();
        return ResponseEntity.ok(user.getWishlist());
    }

    @PostMapping("/toggle/{productId}")
    public ResponseEntity<?> toggleWishlistProduct(@PathVariable Long productId) {
        User user = getAuthenticatedUser();
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        Set<Product> wishlist = user.getWishlist();
        boolean removed = wishlist.removeIf(p -> p.getId().equals(productId));

        if (!removed) {
            wishlist.add(product);
            userRepository.save(user);
            return ResponseEntity.ok(new MessageResponse("Product added to wishlist"));
        } else {
            userRepository.save(user);
            return ResponseEntity.ok(new MessageResponse("Product removed from wishlist"));
        }
    }
}
