package com.neura.dashboard.entity;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order {
    @Id
    private String id;

    @Column(name = "customer_name", nullable = false)
    private String customer;

    @Column(name = "product_name", nullable = false)
    private String product;

    @Column(nullable = false)
    private BigDecimal amount;

    @Column(nullable = false)
    private String status;

    @Column(name = "created_date", nullable = false)
    private LocalDate date;
}
