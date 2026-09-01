package com.ecommerce.api.controller;

import com.ecommerce.api.model.Product;
import com.ecommerce.api.service.WishlistService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {
    private final WishlistService wishlistService;

    public WishlistController(WishlistService wishlistService) {
        this.wishlistService = wishlistService;
    }

    @GetMapping
    public ResponseEntity<List<Product>> getWishlist() {
        return ResponseEntity.ok(wishlistService.getWishlist());
    }

    @PostMapping
    public ResponseEntity<Product> toggleWishlist(@RequestBody Product product) {
        if (product == null || product.getId() == null) {
            return ResponseEntity.badRequest().build();
        }
        Product toggled = wishlistService.toggleWishlist(product);
        return ResponseEntity.ok(toggled); // Returns product if added, null if removed
    }
}
