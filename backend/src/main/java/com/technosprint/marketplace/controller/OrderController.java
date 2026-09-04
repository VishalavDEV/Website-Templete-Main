package com.technosprint.marketplace.controller;

import com.technosprint.marketplace.dto.OrderDto;
import com.technosprint.marketplace.dto.OrderItemDto;
import com.technosprint.marketplace.entity.Order;
import com.technosprint.marketplace.entity.OrderItem;
import com.technosprint.marketplace.entity.Template;
import com.technosprint.marketplace.entity.User;
import com.technosprint.marketplace.exception.BadRequestException;
import com.technosprint.marketplace.exception.ResourceNotFoundException;
import com.technosprint.marketplace.repository.OrderRepository;
import com.technosprint.marketplace.repository.TemplateRepository;
import com.technosprint.marketplace.repository.UserRepository;
import com.technosprint.marketplace.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderRepository orderRepository;
    private final TemplateRepository templateRepository;
    private final UserRepository userRepository;

    @GetMapping
    @org.springframework.transaction.annotation.Transactional(readOnly = true)
    public ResponseEntity<List<OrderDto>> getMyOrders(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        if (userPrincipal == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        List<Order> orders = orderRepository.findByUserIdOrderByCreatedAtDesc(userPrincipal.getId());
        return ResponseEntity.ok(orders.stream().map(this::mapToDto).collect(Collectors.toList()));
    }

    @GetMapping("/all")
    @org.springframework.transaction.annotation.Transactional(readOnly = true)
    public ResponseEntity<List<OrderDto>> getAllOrders() {
        List<Order> orders = orderRepository.findAll();
        return ResponseEntity.ok(orders.stream().map(this::mapToDto).collect(Collectors.toList()));
    }

    @PostMapping
    @org.springframework.transaction.annotation.Transactional
    public ResponseEntity<OrderDto> createOrder(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @RequestBody Map<String, Object> body) {
        if (userPrincipal == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));

        List<Integer> templateIds = (List<Integer>) body.get("templateIds");
        if (templateIds == null || templateIds.isEmpty()) {
            throw new BadRequestException("templateIds is required");
        }

        Order order = Order.builder()
                .user(user)
                .orderNumber("ORD-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase())
                .status("PENDING")
                .totalAmount(BigDecimal.ZERO)
                .paymentMethod("CREDIT_CARD")
                .build();

        BigDecimal total = BigDecimal.ZERO;
        for (Integer tid : templateIds) {
            Template t = templateRepository.findById(tid.longValue()).orElse(null);
            if (t != null) {
                BigDecimal price = t.getPrice() != null ? t.getPrice() : BigDecimal.ZERO;
                total = total.add(price);
                OrderItem item = OrderItem.builder()
                        .order(order)
                        .template(t)
                        .price(price)
                        .licenseType(t.getTemplateType().equalsIgnoreCase("PRO") ? "Commercial" : "Standard")
                        .build();
                order.getItems().add(item);
            }
        }
        order.setTotalAmount(total);

        Order saved = orderRepository.save(order);
        return ResponseEntity.status(HttpStatus.CREATED).body(mapToDto(saved));
    }

    @PostMapping("/{orderId}/confirm")
    public ResponseEntity<OrderDto> confirmPayment(@PathVariable Long orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order", "id", orderId));
        order.setStatus("COMPLETED");
        Order saved = orderRepository.save(order);
        return ResponseEntity.ok(mapToDto(saved));
    }

    private OrderDto mapToDto(Order order) {
        List<OrderItemDto> itemDtos = order.getItems().stream()
                .map(item -> OrderItemDto.builder()
                        .id(item.getId())
                        .templateId(item.getTemplate().getId())
                        .templateName(item.getTemplate().getName())
                        .templateSlug(item.getTemplate().getSlug())
                        .previewImage(item.getTemplate().getPreviewImage())
                        .price(item.getPrice())
                        .licenseType(item.getLicenseType())
                        .build())
                .collect(Collectors.toList());

        return OrderDto.builder()
                .id(order.getId())
                .orderNumber(order.getOrderNumber())
                .totalAmount(order.getTotalAmount())
                .status(order.getStatus())
                .paymentMethod(order.getPaymentMethod())
                .items(itemDtos)
                .createdAt(order.getCreatedAt())
                .build();
    }
}
