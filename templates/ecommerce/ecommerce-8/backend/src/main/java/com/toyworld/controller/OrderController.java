package com.toyworld.controller;

import com.toyworld.model.Order;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@RestController
@RequestMapping("/api")
public class OrderController {

    private static final Map<String, Order> orderDb = new HashMap<>();
    private static final Map<String, Long> orderPlacementTimes = new HashMap<>();

    @PostMapping("/orders")
    public Order placeOrder(@RequestBody Order order) {
        // Generate Mock Order details
        String orderId = "TYW-" + (100000 + new Random().nextInt(900000));
        order.setOrderId(orderId);
        
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        order.setOrderDate(now.format(formatter));
        order.setDeliveryDate(now.plusDays(3).format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
        order.setStatus("PLACED");

        // Save order and record placement timestamp (in milliseconds)
        orderDb.put(orderId, order);
        orderPlacementTimes.put(orderId, System.currentTimeMillis());

        return order;
    }

    @GetMapping("/orders/{id}")
    public Order getOrder(@PathVariable String id) {
        Order order = orderDb.get(id);
        if (order == null) {
            return null;
        }

        // Dynamically progress status based on elapsed time since placement
        Long placementTime = orderPlacementTimes.get(id);
        if (placementTime != null) {
            long elapsedSeconds = (System.currentTimeMillis() - placementTime) / 1000;

            if (elapsedSeconds < 10) {
                order.setStatus("PLACED");
            } else if (elapsedSeconds < 25) {
                order.setStatus("PACKING");
            } else if (elapsedSeconds < 45) {
                order.setStatus("SHIPPED");
            } else if (elapsedSeconds < 70) {
                order.setStatus("IN_TRANSIT");
            } else if (elapsedSeconds < 95) {
                order.setStatus("OUT_FOR_DELIVERY");
            } else {
                order.setStatus("DELIVERED");
            }
        }

        return order;
    }
}
