package com.ecommerce.api.service;

import com.ecommerce.api.model.CartItem;
import com.ecommerce.api.model.Order;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class OrderService {
    private final List<Order> orders = new ArrayList<>();
    private final CartService cartService;

    public OrderService(CartService cartService) {
        this.cartService = cartService;
        initializeMockOrders();
    }

    private void initializeMockOrders() {
        // Add a completed mock order for testing the history
        List<CartItem> items = new ArrayList<>();
        // We will populate a mock order with items when a service is called, or add one programmatically.
    }

    public List<Order> getAllOrders() {
        // Dynamically update status based on order age for demo purposes
        updateOrderStatusBasedOnTime();
        return orders;
    }

    public Order getOrderById(String id) {
        updateOrderStatusBasedOnTime();
        return orders.stream()
                .filter(o -> o.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    public Order placeOrder(Order newOrder) {
        newOrder.setId("ORD-" + (100000 + new Random().nextInt(900000)));
        newOrder.setDate(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
        newOrder.setStatus("Placed");
        
        // Copy cart items into the order
        List<CartItem> orderItems = new ArrayList<>(cartService.getCart());
        newOrder.setItems(orderItems);
        
        // Calculate total
        double subtotal = orderItems.stream()
                .mapToDouble(item -> item.getProduct().getPrice() * (1 - item.getProduct().getDiscount() / 100.0) * item.getQuantity())
                .sum();
        // Add delivery charge: Free over ₹2000, else ₹99
        double delivery = subtotal > 2000.0 ? 0.0 : 99.0;
        double total = Math.round((subtotal + delivery) * 100.0) / 100.0;
        newOrder.setTotal(total);

        orders.add(newOrder);
        cartService.clearCart(); // Clean cart upon checkout
        return newOrder;
    }

    private void updateOrderStatusBasedOnTime() {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        for (Order order : orders) {
            try {
                Date orderDate = format.parse(order.getDate());
                long diffMs = new Date().getTime() - orderDate.getTime();
                long diffSecs = diffMs / 1000;

                if (diffSecs > 120) {
                    order.setStatus("Delivered");
                } else if (diffSecs > 90) {
                    order.setStatus("Shipped");
                } else if (diffSecs > 60) {
                    order.setStatus("Packed");
                } else if (diffSecs > 30) {
                    order.setStatus("Confirmed");
                } else {
                    order.setStatus("Placed");
                }
            } catch (Exception e) {
                // Keep current status
            }
        }
    }
}
