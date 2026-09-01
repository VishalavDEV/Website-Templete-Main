package com.admin.dashboard.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "payments")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @Column(name = "payment_date")
    private LocalDateTime paymentDate;

    @Column(nullable = false)
    private Double amount;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PaymentStatus status;

    @Column(name = "transaction_id")
    private String transactionId;

    @PrePersist
    protected void onCreate() {
        this.paymentDate = LocalDateTime.now();
        if (this.status == null) {
            this.status = PaymentStatus.PENDING;
        }
    }
}
