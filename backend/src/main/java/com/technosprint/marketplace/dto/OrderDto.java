package com.technosprint.marketplace.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderDto {
    private Long id;
    private String orderNumber;
    private BigDecimal totalAmount;
    private String status;
    private String paymentMethod;
    private List<OrderItemDto> items;
    private LocalDateTime createdAt;
}
