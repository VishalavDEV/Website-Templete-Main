package com.neura.dashboard.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {

    @GetMapping("/summary")
    public ResponseEntity<Map<String, Object>> getSummary() {
        Map<String, Object> summary = new HashMap<>();
        summary.put("totalRevenue", 84254);
        summary.put("revenueChange", 12.5);
        summary.put("totalOrders", 2145);
        summary.put("ordersChange", 8.2);
        summary.put("activeUsers", 12426);
        summary.put("usersChange", 14.8);
        summary.put("systemHealth", 99.99);
        summary.put("healthChange", 0.4);
        return ResponseEntity.ok(summary);
    }

    @GetMapping("/revenue")
    public ResponseEntity<List<Map<String, Object>>> getRevenue(@RequestParam(defaultValue = "monthly") String range) {
        List<Map<String, Object>> data = new ArrayList<>();
        if ("weekly".equalsIgnoreCase(range)) {
            data.add(Map.of("month", "Mon", "revenue", 11200, "sales", 285, "avgOrder", 39.29));
            data.add(Map.of("month", "Tue", "revenue", 12400, "sales", 310, "avgOrder", 40.00));
            data.add(Map.of("month", "Wed", "revenue", 13800, "sales", 350, "avgOrder", 39.42));
            data.add(Map.of("month", "Thu", "revenue", 11900, "sales", 300, "avgOrder", 39.66));
            data.add(Map.of("month", "Fri", "revenue", 14500, "sales", 370, "avgOrder", 39.18));
            data.add(Map.of("month", "Sat", "revenue", 10200, "sales", 260, "avgOrder", 39.23));
            data.add(Map.of("month", "Sun", "revenue", 10254, "sales", 270, "avgOrder", 37.97));
        } else {
            String[] months = {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"};
            int[] revenues = {42000, 48000, 55000, 51000, 64000, 69000, 73000, 78000, 81000, 82500, 83800, 84254};
            int[] sales = {1100, 1250, 1400, 1320, 1650, 1780, 1890, 1980, 2050, 2100, 2130, 2145};
            for (int i = 0; i < months.length; i++) {
                data.add(Map.of("month", months[i], "revenue", revenues[i], "sales", sales[i], "avgOrder", 39.28));
            }
        }
        return ResponseEntity.ok(data);
    }

    @GetMapping("/sales")
    public ResponseEntity<List<Map<String, Object>>> getSalesBreakdown() {
        List<Map<String, Object>> sales = List.of(
            Map.of("name", "Electronics", "value", 4820, "color", "#00f0ff"),
            Map.of("name", "Software", "value", 3460, "color", "#7000ff"),
            Map.of("name", "Services", "value", 2150, "color", "#10b981"),
            Map.of("name", "Licenses", "value", 1996, "color", "#f59e0b")
        );
        return ResponseEntity.ok(sales);
    }

    @GetMapping("/ai-metrics")
    public ResponseEntity<Map<String, Object>> getAiMetrics() {
        Map<String, Object> metrics = new HashMap<>();
        metrics.put("gpuUsage", 78);
        metrics.put("cpuUsage", 42);
        metrics.put("memoryUsage", 64);
        metrics.put("modelRequests", "18.4K");
        metrics.put("inferenceLatencyMs", 82);
        metrics.put("apiHealth", 99.98);
        return ResponseEntity.ok(metrics);
    }

    @GetMapping("/traffic")
    public ResponseEntity<List<Map<String, Object>>> getTraffic() {
        List<Map<String, Object>> traffic = List.of(
            Map.of("name", "Direct", "percentage", 45, "color", "#00f0ff"),
            Map.of("name", "Organic Search", "percentage", 28, "color", "#7000ff"),
            Map.of("name", "Social Media", "percentage", 17, "color", "#10b981"),
            Map.of("name", "Referral", "percentage", 10, "color", "#f59e0b")
        );
        return ResponseEntity.ok(traffic);
    }
}
