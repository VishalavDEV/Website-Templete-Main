package com.admin.dashboard.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "customers")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    private String phone;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserStatus status; // ACTIVE or INACTIVE

    @Column(name = "total_orders")
    private Integer totalOrders = 0;

    @Column(name = "total_spending")
    private Double totalSpending = 0.0;

    @Column(name = "last_order_date")
    private LocalDateTime lastOrderDate;

    @Column(name = "profile_image")
    private String profileImage;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        if (this.status == null) {
            this.status = UserStatus.ACTIVE;
        }
        if (this.totalOrders == null) {
            this.totalOrders = 0;
        }
        if (this.totalSpending == null) {
            this.totalSpending = 0.0;
        }
    }
}
