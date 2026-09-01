package com.aura.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "coupons")
public class Coupon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String code;

    @Column(nullable = false)
    private Double discountPercent; // e.g. 0.15 for 15% discount

    private Boolean active = true;

    public Coupon() {
    }

    public Coupon(String code, Double discountPercent, Boolean active) {
        this.code = code;
        this.discountPercent = discountPercent;
        this.active = active;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }

    public Double getDiscountPercent() { return discountPercent; }
    public void setDiscountPercent(Double discountPercent) { this.discountPercent = discountPercent; }

    public Boolean getActive() { return active; }
    public void setActive(Boolean active) { this.active = active; }
}
