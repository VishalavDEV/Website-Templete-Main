package com.ecommerce.api.service;

import com.ecommerce.api.model.CartItem;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class CartService {
    private final List<CartItem> cartItems = new ArrayList<>();

    public List<CartItem> getCart() {
        return cartItems;
    }

    public CartItem addToCart(CartItem item) {
        // Check if item with same product, size, and color already exists
        for (CartItem existing : cartItems) {
            if (existing.getProduct().getId().equals(item.getProduct().getId()) &&
                existing.getSize().equals(item.getSize()) &&
                existing.getColor().equals(item.getColor())) {
                existing.setQuantity(existing.getQuantity() + item.getQuantity());
                return existing;
            }
        }
        item.setId(UUID.randomUUID().toString());
        cartItems.add(item);
        return item;
    }

    public CartItem updateQuantity(String id, int quantity) {
        for (CartItem existing : cartItems) {
            if (existing.getId().equals(id)) {
                existing.setQuantity(quantity);
                return existing;
            }
        }
        return null;
    }

    public boolean removeFromCart(String id) {
        return cartItems.removeIf(item -> item.getId().equals(id));
    }

    public void clearCart() {
        cartItems.clear();
    }
}
