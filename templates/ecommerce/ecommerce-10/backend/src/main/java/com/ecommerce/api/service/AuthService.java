package com.ecommerce.api.service;

import com.ecommerce.api.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthService {
    private final List<User> users = new ArrayList<>();
    private User loggedInUser = null;

    public AuthService() {
        // Pre-create a default test user
        users.add(new User("Lavender Princess", "princess@lavender.com", "+1234567890", "password123"));
    }

    public User register(User user) {
        // Check if user already exists
        for (User existing : users) {
            if (existing.getEmail().equalsIgnoreCase(user.getEmail())) {
                return null; // Email taken
            }
        }
        users.add(user);
        loggedInUser = user;
        return user;
    }

    public User login(String email, String password) {
        for (User user : users) {
            if (user.getEmail().equalsIgnoreCase(email) && user.getPassword().equals(password)) {
                loggedInUser = user;
                return user;
            }
        }
        return null;
    }

    public User getLoggedInUser() {
        return loggedInUser;
    }

    public void logout() {
        loggedInUser = null;
    }
}
