package com.ecommerce.api.service;

import com.ecommerce.api.model.Product;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WishlistService {
    private final List<Product> wishlist = new ArrayList<>();

    public List<Product> getWishlist() {
        return wishlist;
    }

    public Product toggleWishlist(Product product) {
        boolean removed = wishlist.removeIf(p -> p.getId().equals(product.getId()));
        if (!removed) {
            wishlist.add(product);
            return product; // Added
        }
        return null; // Removed
    }

    public boolean isInWishlist(String productId) {
        return wishlist.stream().anyMatch(p -> p.getId().equals(productId));
    }
}
