package com.ecommerce.api.model;

import java.util.List;

public class Order {
    private String id;
    private List<CartItem> items;
    private String date;
    private double total;
    private String shippingAddress;
    private String paymentMethod;
    private String status;

    public Order() {}

    public Order(String id, List<CartItem> items, String date, double total, String shippingAddress, String paymentMethod, String status) {
        this.id = id;
        this.items = items;
        this.date = date;
        this.total = total;
        this.shippingAddress = shippingAddress;
        this.paymentMethod = paymentMethod;
        this.status = status;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public List<CartItem> getItems() { return items; }
    public void setItems(List<CartItem> items) { this.items = items; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public double getTotal() { return total; }
    public void setTotal(double total) { this.total = total; }

    public String getShippingAddress() { return shippingAddress; }
    public void setShippingAddress(String shippingAddress) { this.shippingAddress = shippingAddress; }

    public String getPaymentMethod() { return paymentMethod; }
    public void setPaymentMethod(String paymentMethod) { this.paymentMethod = paymentMethod; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
