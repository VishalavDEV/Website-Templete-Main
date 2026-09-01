package com.technosprint.templates.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "order_items")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    @JsonIgnore
    private Order order;

    @ManyToOne
    @JoinColumn(name = "template_id", nullable = false)
    private Template template;

    @Column(nullable = false)
    private Double price;

    // Constructors
    public OrderItem() {}

    public OrderItem(Order order, Template template, Double price) {
        this.order = order;
        this.template = template;
        this.price = price;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Order getOrder() { return order; }
    public void setOrder(Order order) { this.order = order; }

    public Template getTemplate() { return template; }
    public void setTemplate(Template template) { this.template = template; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
}
