package com.technosprint.templates.controller;

import com.technosprint.templates.entity.*;
import com.technosprint.templates.repository.LicenseRepository;
import com.technosprint.templates.repository.OrderRepository;
import com.technosprint.templates.repository.TemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private TemplateRepository templateRepository;

    @Autowired
    private LicenseRepository licenseRepository;

    private User getCurrentUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof User) {
            return (User) principal;
        }
        return null;
    }

    private boolean isAdmin() {
        User user = getCurrentUser();
        return user != null && "ROLE_ADMIN".equals(user.getRole());
    }

    public static class OrderRequest {
        public List<Long> templateIds;
    }

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody OrderRequest request) {
        User user = getCurrentUser();
        if (user == null) {
            return ResponseEntity.status(401).body(Map.of("message", "User must be logged in!"));
        }

        if (request.templateIds == null || request.templateIds.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Cart is empty!"));
        }

        Order order = new Order();
        order.setUser(user);
        order.setPaymentStatus("PENDING");
        order.setOrderStatus("PENDING");

        double totalAmount = 0.0;
        List<OrderItem> items = new ArrayList<>();

        for (Long templateId : request.templateIds) {
            Template template = templateRepository.findById(templateId).orElse(null);
            if (template == null) {
                return ResponseEntity.badRequest().body(Map.of("message", "Invalid template ID: " + templateId));
            }
            totalAmount += template.getPrice();
            OrderItem item = new OrderItem(order, template, template.getPrice());
            items.add(item);
        }

        order.setTotalAmount(totalAmount);
        order.setItems(items);

        Order savedOrder = orderRepository.save(order);
        return ResponseEntity.ok(savedOrder);
    }

    @PostMapping("/{id}/confirm")
    public ResponseEntity<?> confirmPayment(@PathVariable Long id) {
        User user = getCurrentUser();
        if (user == null) {
            return ResponseEntity.status(401).body(Map.of("message", "User must be logged in!"));
        }

        Order order = orderRepository.findById(id).orElse(null);
        if (order == null) {
            return ResponseEntity.notFound().build();
        }

        // Verify the order belongs to the user or request is from admin
        if (!order.getUser().getId().equals(user.getId()) && !isAdmin()) {
            return ResponseEntity.status(403).body(Map.of("message", "Access denied: Order does not belong to you!"));
        }

        order.setPaymentStatus("COMPLETED");
        order.setOrderStatus("COMPLETED");

        // Generate licenses for each item
        for (OrderItem item : order.getItems()) {
            License license = new License();
            license.setUser(order.getUser());
            license.setTemplate(item.getTemplate());
            license.setOrder(order);
            license.setLicenseType(item.getTemplate().getPrice() > 0 ? "PREMIUM_LICENSE" : "FREE_LICENSE");
            license.setLicenseKey("TS-LIC-" + UUID.randomUUID().toString().toUpperCase().substring(0, 18));
            license.setExpiryDate(LocalDateTime.now().plusYears(1)); // 1 year validity
            license.setStatus("ACTIVE");

            licenseRepository.save(license);
        }

        Order updatedOrder = orderRepository.save(order);
        return ResponseEntity.ok(updatedOrder);
    }

    @GetMapping
    public ResponseEntity<?> getMyOrders() {
        User user = getCurrentUser();
        if (user == null) {
            return ResponseEntity.status(401).body(Map.of("message", "User must be logged in!"));
        }

        List<Order> orders = orderRepository.findByUserOrderByCreatedAtDesc(user);
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllOrders() {
        if (!isAdmin()) {
            return ResponseEntity.status(403).body(Map.of("message", "Access denied: Admins only!"));
        }
        List<Order> orders = orderRepository.findAll();
        return ResponseEntity.ok(orders);
    }
}
