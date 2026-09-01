package com.toyworld.model;

public class CartItem {
    private String productId;
    private String productName;
    private double price;
    private int quantity;
    private String animationType;

    public CartItem() {}

    public CartItem(String productId, String productName, double price, int quantity, String animationType) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        this.animationType = animationType;
    }

    // Getters and Setters
    public String getProductId() { return productId; }
    public void setProductId(String productId) { this.productId = productId; }

    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    public String getAnimationType() { return animationType; }
    public void setAnimationType(String animationType) { this.animationType = animationType; }
}
