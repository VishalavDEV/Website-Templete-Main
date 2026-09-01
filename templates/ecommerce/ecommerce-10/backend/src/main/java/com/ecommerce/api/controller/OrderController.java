package com.ecommerce.api.controller;

import com.ecommerce.api.model.Order;
import com.ecommerce.api.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable String id) {
        Order order = orderService.getOrderById(id);
        if (order != null) {
            return ResponseEntity.ok(order);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Order> placeOrder(@RequestBody Order order) {
        if (order == null) {
            return ResponseEntity.badRequest().build();
        }
        Order placed = orderService.placeOrder(order);
        return ResponseEntity.ok(placed);
    }
}
