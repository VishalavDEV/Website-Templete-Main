package com.aura.backend.dto;

import com.aura.backend.model.Product;
import java.util.Set;

public class UserResponse {
    private Long id;
    private String username;
    private String email;
    private String role;
    private Set<Product> wishlist;

    public UserResponse(Long id, String username, String email, String role, Set<Product> wishlist) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.role = role;
        this.wishlist = wishlist;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public Set<Product> getWishlist() { return wishlist; }
    public void setWishlist(Set<Product> wishlist) { this.wishlist = wishlist; }
}
