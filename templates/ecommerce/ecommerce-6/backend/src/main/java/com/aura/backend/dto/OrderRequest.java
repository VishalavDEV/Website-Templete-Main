package com.aura.backend.dto;

import java.util.List;

public class OrderRequest {
    private String shippingAddress;
    private String couponCode;
    private List<OrderItemRequest> items;

    public OrderRequest() {}

    public OrderRequest(String shippingAddress, String couponCode, List<OrderItemRequest> items) {
        this.shippingAddress = shippingAddress;
        this.couponCode = couponCode;
        this.items = items;
    }

    public String getShippingAddress() { return shippingAddress; }
    public void setShippingAddress(String shippingAddress) { this.shippingAddress = shippingAddress; }

    public String getCouponCode() { return couponCode; }
    public void setCouponCode(String couponCode) { this.couponCode = couponCode; }

    public List<OrderItemRequest> getItems() { return items; }
    public void setItems(List<OrderItemRequest> items) { this.items = items; }
}
