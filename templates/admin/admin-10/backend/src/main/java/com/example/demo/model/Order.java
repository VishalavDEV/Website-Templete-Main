package com.example.demo.model;

public class Order {
    private String id;
    private String customerName;
    private String productName;
    private String date;
    private double amount;
    private String status; // Completed, Processing, Pending, Cancelled
    private String paymentStatus; // Paid, Pending, Refunded
    
    // Timeline timestamps
    private String placedAt;
    private String processedAt;
    private String shippedAt;
    private String deliveredAt;

    public Order() {}

    public Order(String id, String customerName, String productName, String date, double amount, String status, String paymentStatus, String placedAt, String processedAt, String shippedAt, String deliveredAt) {
        this.id = id;
        this.customerName = customerName;
        this.productName = productName;
        this.date = date;
        this.amount = amount;
        this.status = status;
        this.paymentStatus = paymentStatus;
        this.placedAt = placedAt;
        this.processedAt = processedAt;
        this.shippedAt = shippedAt;
        this.deliveredAt = deliveredAt;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public double getAmount() { return amount; }
    public void setAmount(double amount) { this.amount = amount; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getPaymentStatus() { return paymentStatus; }
    public void setPaymentStatus(String paymentStatus) { this.paymentStatus = paymentStatus; }

    public String getPlacedAt() { return placedAt; }
    public void setPlacedAt(String placedAt) { this.placedAt = placedAt; }

    public String getProcessedAt() { return processedAt; }
    public void setProcessedAt(String processedAt) { this.processedAt = processedAt; }

    public String getShippedAt() { return shippedAt; }
    public void setShippedAt(String shippedAt) { this.shippedAt = shippedAt; }

    public String getDeliveredAt() { return deliveredAt; }
    public void setDeliveredAt(String deliveredAt) { this.deliveredAt = deliveredAt; }
}
