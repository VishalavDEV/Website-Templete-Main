package com.technosprint.templates.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "licenses")
public class License {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "template_id", nullable = false)
    private Template template;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order; // Nullable if the template was free

    @Column(name = "license_type", nullable = false)
    private String licenseType; // SINGLE_USE, MULTI_USE

    @Column(name = "license_key", unique = true, nullable = false)
    private String licenseKey;

    @Column(name = "expiry_date")
    private LocalDateTime expiryDate; // Nullable for lifetime

    @Column(nullable = false)
    private String status; // ACTIVE, EXPIRED, CANCELLED

    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        if (status == null) status = "ACTIVE";
        if (licenseType == null) licenseType = "SINGLE_USE";
    }

    // Constructors
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public Template getTemplate() { return template; }
    public void setTemplate(Template template) { this.template = template; }

    public Order getOrder() { return order; }
    public void setOrder(Order order) { this.order = order; }

    public String getLicenseType() { return licenseType; }
    public void setLicenseType(String licenseType) { this.licenseType = licenseType; }

    public String getLicenseKey() { return licenseKey; }
    public void setLicenseKey(String licenseKey) { this.licenseKey = licenseKey; }

    public LocalDateTime getExpiryDate() { return expiryDate; }
    public void setExpiryDate(LocalDateTime expiryDate) { this.expiryDate = expiryDate; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
}
