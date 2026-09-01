package com.toyworld.model;

import java.util.List;

public class Order {
    private String orderId;
    private List<CartItem> items;
    private Address shippingAddress;
    private String deliveryMethod;
    private String paymentMethod;
    private double totalAmount;
    private String orderDate;
    private String deliveryDate;
    private String status;

    public Order() {}

    public Order(String orderId, List<CartItem> items, Address shippingAddress, String deliveryMethod, 
                 String paymentMethod, double totalAmount, String orderDate, String deliveryDate, String status) {
        this.orderId = orderId;
        this.items = items;
        this.shippingAddress = shippingAddress;
        this.deliveryMethod = deliveryMethod;
        this.paymentMethod = paymentMethod;
        this.totalAmount = totalAmount;
        this.orderDate = orderDate;
        this.deliveryDate = deliveryDate;
        this.status = status;
    }

    // Getters and Setters
    public String getOrderId() { return orderId; }
    public void setOrderId(String orderId) { this.orderId = orderId; }

    public List<CartItem> getItems() { return items; }
    public void setItems(List<CartItem> items) { this.items = items; }

    public Address getShippingAddress() { return shippingAddress; }
    public void setShippingAddress(Address shippingAddress) { this.shippingAddress = shippingAddress; }

    public String getDeliveryMethod() { return deliveryMethod; }
    public void setDeliveryMethod(String deliveryMethod) { this.deliveryMethod = deliveryMethod; }

    public String getPaymentMethod() { return paymentMethod; }
    public void setPaymentMethod(String paymentMethod) { this.paymentMethod = paymentMethod; }

    public double getTotalAmount() { return totalAmount; }
    public void setTotalAmount(double totalAmount) { this.totalAmount = totalAmount; }

    public String getOrderDate() { return orderDate; }
    public void setOrderDate(String orderDate) { this.orderDate = orderDate; }

    public String getDeliveryDate() { return deliveryDate; }
    public void setDeliveryDate(String deliveryDate) { this.deliveryDate = deliveryDate; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
