package com.bluecore.showroom.model;

import java.util.List;
import java.util.Map;

public class Order {
    private String id;
    private String customerName;
    private String customerEmail;
    private String shippingAddress;
    private String paymentMethod;
    private Map<String, String> paymentDetails;
    private List<OrderItem> items;
    private double totalAmount;
    private String status; // "ORDER CONFIRMED", "PACKED", "SHIPPED", "OUT FOR DELIVERY", "DELIVERED"
    private String trackingNumber;
    private String createdAt;

    public Order() {}

    public Order(String id, String customerName, String customerEmail, String shippingAddress,
                 String paymentMethod, Map<String, String> paymentDetails, List<OrderItem> items,
                 double totalAmount, String status, String trackingNumber, String createdAt) {
        this.id = id;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.shippingAddress = shippingAddress;
        this.paymentMethod = paymentMethod;
        this.paymentDetails = paymentDetails;
        this.items = items;
        this.totalAmount = totalAmount;
        this.status = status;
        this.trackingNumber = trackingNumber;
        this.createdAt = createdAt;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getCustomerEmail() { return customerEmail; }
    public void setCustomerEmail(String customerEmail) { this.customerEmail = customerEmail; }

    public String getShippingAddress() { return shippingAddress; }
    public void setShippingAddress(String shippingAddress) { this.shippingAddress = shippingAddress; }

    public String getPaymentMethod() { return paymentMethod; }
    public void setPaymentMethod(String paymentMethod) { this.paymentMethod = paymentMethod; }

    public Map<String, String> getPaymentDetails() { return paymentDetails; }
    public void setPaymentDetails(Map<String, String> paymentDetails) { this.paymentDetails = paymentDetails; }

    public List<OrderItem> getItems() { return items; }
    public void setItems(List<OrderItem> items) { this.items = items; }

    public double getTotalAmount() { return totalAmount; }
    public void setTotalAmount(double totalAmount) { this.totalAmount = totalAmount; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getTrackingNumber() { return trackingNumber; }
    public void setTrackingNumber(String trackingNumber) { this.trackingNumber = trackingNumber; }

    public String getCreatedAt() { return createdAt; }
    public void setCreatedAt(String createdAt) { this.createdAt = createdAt; }

    public static class OrderItem {
        private String productId;
        private String name;
        private int quantity;
        private double price;
        private String image;

        public OrderItem() {}

        public OrderItem(String productId, String name, int quantity, double price, String image) {
            this.productId = productId;
            this.name = name;
            this.quantity = quantity;
            this.price = price;
            this.image = image;
        }

        public String getProductId() { return productId; }
        public void setProductId(String productId) { this.productId = productId; }

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public int getQuantity() { return quantity; }
        public void setQuantity(int quantity) { this.quantity = quantity; }

        public double getPrice() { return price; }
        public void setPrice(double price) { this.price = price; }

        public String getImage() { return image; }
        public void setImage(String image) { this.image = image; }
    }
}
