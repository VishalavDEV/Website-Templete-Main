package com.admin.dashboard.controller;

import com.admin.dashboard.entity.Order;
import com.admin.dashboard.entity.OrderStatus;
import com.admin.dashboard.repository.OrderRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @GetMapping
    public ResponseEntity<?> getAllOrders(
            @RequestParam(required = false) String search,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "orderDate") String sortBy,
            @RequestParam(defaultValue = "desc") String direction) {

        Sort sort = direction.equalsIgnoreCase("desc") ? Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Order> orderPage;

        if (search != null && !search.trim().isEmpty()) {
            orderPage = orderRepository.findByCustomerNameContainingIgnoreCaseOrTrackingNumberContainingIgnoreCase(search, search, pageable);
        } else {
            orderPage = orderRepository.findAll(pageable);
        }

        return ResponseEntity.ok(orderPage);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Order not found with id: " + id));
        return ResponseEntity.ok(order);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Order> updateOrderStatus(@PathVariable Long id, @RequestBody Map<String, String> body) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Order not found with id: " + id));

        OrderStatus status = OrderStatus.valueOf(body.get("status").toUpperCase());
        order.setOrderStatus(status);

        return ResponseEntity.ok(orderRepository.save(order));
    }

    @PutMapping("/{id}/tracking")
    public ResponseEntity<Order> updateOrderTracking(@PathVariable Long id, @RequestBody Map<String, String> body) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Order not found with id: " + id));

        order.setTrackingNumber(body.get("trackingNumber"));

        return ResponseEntity.ok(orderRepository.save(order));
    }
}
