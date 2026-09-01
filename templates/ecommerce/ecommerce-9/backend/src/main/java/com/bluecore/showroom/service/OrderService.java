package com.bluecore.showroom.service;

import com.bluecore.showroom.model.Order;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OrderService {
    private final Map<String, Order> orders = new ConcurrentHashMap<>();
    private final Map<String, Long> orderCreationTimes = new ConcurrentHashMap<>();

    public Order createOrder(Order orderRequest) {
        String orderId = "BC-" + (100000 + new Random().nextInt(900000));
        String trackingNo = "TRK" + (10000000 + new Random().nextInt(90000000));
        
        orderRequest.setId(orderId);
        orderRequest.setTrackingNumber(trackingNo);
        orderRequest.setStatus("ORDER CONFIRMED");
        orderRequest.setCreatedAt(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
        
        orders.put(orderId, orderRequest);
        orderCreationTimes.put(orderId, System.currentTimeMillis());
        
        return orderRequest;
    }

    public Optional<Order> getOrderById(String id) {
        Order order = orders.get(id);
        if (order != null) {
            updateOrderStatus(order);
        }
        return Optional.ofNullable(order);
    }

    public Optional<Order> getOrderByTrackingNumber(String trackingNo) {
        return orders.values().stream()
                .filter(o -> o.getTrackingNumber().equalsIgnoreCase(trackingNo))
                .findFirst()
                .map(order -> {
                    updateOrderStatus(order);
                    return order;
                });
    }

    private void updateOrderStatus(Order order) {
        Long creationTime = orderCreationTimes.get(order.getId());
        if (creationTime == null) return;

        long elapsedSeconds = (System.currentTimeMillis() - creationTime) / 1000;

        if (elapsedSeconds >= 90) {
            order.setStatus("DELIVERED");
        } else if (elapsedSeconds >= 60) {
            order.setStatus("OUT FOR DELIVERY");
        } else if (elapsedSeconds >= 35) {
            order.setStatus("SHIPPED");
        } else if (elapsedSeconds >= 15) {
            order.setStatus("PACKED");
        } else {
            order.setStatus("ORDER CONFIRMED");
        }
    }
}
