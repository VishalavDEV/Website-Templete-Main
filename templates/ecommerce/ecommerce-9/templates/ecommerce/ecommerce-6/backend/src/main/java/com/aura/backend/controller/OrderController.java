package com.aura.backend.controller;

import com.aura.backend.dto.MessageResponse;
import com.aura.backend.dto.OrderItemRequest;
import com.aura.backend.dto.OrderRequest;
import com.aura.backend.model.Order;
import com.aura.backend.model.OrderItem;
import com.aura.backend.model.Product;
import com.aura.backend.model.User;
import com.aura.backend.model.Coupon;
import com.aura.backend.repository.OrderRepository;
import com.aura.backend.repository.ProductRepository;
import com.aura.backend.repository.UserRepository;
import com.aura.backend.repository.CouponRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;
    private final CouponRepository couponRepository;

    public OrderController(UserRepository userRepository, ProductRepository productRepository, 
                           OrderRepository orderRepository, CouponRepository couponRepository) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
        this.couponRepository = couponRepository;
    }

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody OrderRequest orderRequest) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Authenticated user not found."));

        if (orderRequest.getItems() == null || orderRequest.getItems().isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Order must contain at least one item."));
        }

        double subtotal = 0.0;
        Order order = new Order(user, 0.0, orderRequest.getShippingAddress());

        // Validate items and compute subtotal
        for (OrderItemRequest itemReq : orderRequest.getItems()) {
            Product product = productRepository.findById(itemReq.getProductId())
                    .orElseThrow(() -> new RuntimeException("Product not found with id: " + itemReq.getProductId()));

            if (product.getStock() < itemReq.getQuantity()) {
                return ResponseEntity.badRequest()
                        .body(new MessageResponse("Insufficient stock for product: " + product.getName() + 
                                                  " (Available: " + product.getStock() + ")"));
            }

            product.setStock(product.getStock() - itemReq.getQuantity());
            productRepository.save(product);

            OrderItem orderItem = new OrderItem(product, itemReq.getQuantity(), product.getPrice());
            order.addOrderItem(orderItem);

            subtotal += product.getPrice() * itemReq.getQuantity();
        }

        // Apply discount if coupon code is present
        double discountAmount = 0.0;
        if (orderRequest.getCouponCode() != null && !orderRequest.getCouponCode().isEmpty()) {
            Coupon coupon = couponRepository.findByCodeIgnoreCase(orderRequest.getCouponCode()).orElse(null);
            if (coupon != null && Boolean.TRUE.equals(coupon.getActive())) {
                discountAmount = subtotal * coupon.getDiscountPercent();
            }
        }

        // Calculate shipping and tax
        double taxableAmount = Math.max(0.0, subtotal - discountAmount);
        double taxAmount = Math.round((taxableAmount * 0.18) * 100.0) / 100.0; // 18% GST (CGST 9% + SGST 9%)
        double shippingCharge = taxableAmount > 15000.0 || taxableAmount == 0 ? 0.0 : 350.0; // Free over ₹15,000, else ₹350

        double finalTotal = Math.round((taxableAmount + taxAmount + shippingCharge) * 100.0) / 100.0;

        order.setDiscountAmount(discountAmount);
        order.setTaxAmount(taxAmount);
        order.setShippingCharge(shippingCharge);
        order.setTotalAmount(finalTotal);

        orderRepository.save(order);
        return ResponseEntity.ok(order);
    }

    @GetMapping
    public ResponseEntity<List<Order>> getMyOrders() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Authenticated user not found."));

        List<Order> orders = orderRepository.findByUserOrderByOrderDateDesc(user);
        return ResponseEntity.ok(orders);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateOrderStatus(@PathVariable Long id, @RequestParam String status) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Authenticated user not found."));

        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        // Only allow order cancellation or return if owned by authenticated user
        if (!order.getUser().getId().equals(user.getId())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Unauthorized action"));
        }

        String currentStatus = order.getStatus();
        
        // If canceling or returning, restore product stock
        if (("CANCELLED".equalsIgnoreCase(status) || "RETURNED".equalsIgnoreCase(status)) 
             && !"CANCELLED".equalsIgnoreCase(currentStatus) && !"RETURNED".equalsIgnoreCase(currentStatus)) {
            
            for (OrderItem item : order.getOrderItems()) {
                Product product = item.getProduct();
                product.setStock(product.getStock() + item.getQuantity());
                productRepository.save(product);
            }
        }

        order.setStatus(status.toUpperCase());
        orderRepository.save(order);

        return ResponseEntity.ok(order);
    }
}
