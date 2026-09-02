package com.example.demo.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:5173")
public class ReportController {

    @GetMapping
    public Map<String, Object> getReportsOverview() {
        Map<String, Object> reports = new HashMap<>();

        // Sales Report overview
        Map<String, Object> salesReport = new HashMap<>();
        salesReport.put("title", "Sales Performance Report");
        salesReport.put("generatedAt", "Just now");
        salesReport.put("totalTransactions", 1115);
        salesReport.put("averageOrderValue", 82.80);
        salesReport.put("totalRevenue", 92345.50);
        reports.put("sales", salesReport);

        // User Growth report overview
        Map<String, Object> userReport = new HashMap<>();
        userReport.put("title", "User Acquisition & Retention");
        userReport.put("generatedAt", "1 hour ago");
        userReport.put("newSignups", 580);
        userReport.put("activeRatePercentage", 88.5);
        reports.put("users", userReport);

        // Order report overview
        Map<String, Object> orderReport = new HashMap<>();
        orderReport.put("title", "Fulfillment Performance");
        orderReport.put("generatedAt", "3 hours ago");
        orderReport.put("completedOrders", 1025);
        orderReport.put("processingOrders", 45);
        orderReport.put("cancelledOrders", 15);
        reports.put("orders", orderReport);

        // Revenue report overview
        Map<String, Object> revenueReport = new HashMap<>();
        revenueReport.put("title", "Gross vs Net Revenue");
        revenueReport.put("generatedAt", "2 hours ago");
        revenueReport.put("grossProfit", 125600.00);
        revenueReport.put("operationalCost", 33254.50);
        revenueReport.put("netProfit", 92345.50);
        reports.put("revenue", revenueReport);

        // Performance metrics
        List<Map<String, Object>> performanceMetrics = new ArrayList<>();
        String[] criteria = {"API Response Time", "Page Loading Speed", "UI Transition smoothness", "Server CPU Load"};
        String[] scores = {"94ms", "1.2s", "60fps", "14%"};
        for (int i = 0; i < criteria.length; i++) {
            Map<String, Object> metric = new HashMap<>();
            metric.put("metric", criteria[i]);
            metric.put("value", scores[i]);
            performanceMetrics.add(metric);
        }
        reports.put("performance", performanceMetrics);

        return reports;
    }

    @GetMapping("/download")
    public ResponseEntity<byte[]> downloadReport(@RequestParam(defaultValue = "sales") String type) {
        StringBuilder csv = new StringBuilder();
        String filename = "report_" + type + ".csv";

        if ("sales".equalsIgnoreCase(type)) {
            csv.append("Date,Order ID,Customer,Product,Amount,Status\n");
            csv.append("2026-08-28,ORD-9848,Jane Cooper,Scented Soy Candle Set,34.00,Processing\n");
            csv.append("2026-08-28,ORD-9845,Dianne Russell,Ceramic Pour-Over Dripper,28.50,Pending\n");
            csv.append("2026-08-28,ORD-9844,Devon Lane,Minimalist Leather Wallet,65.00,Processing\n");
            csv.append("2026-08-27,ORD-9843,Kathryn Murphy,Active Noise Cancelling Earbuds,129.99,Completed\n");
            csv.append("2026-08-26,ORD-9846,Kristin Watson,Premium Silk Pillowcase,99.98,Completed\n");
        } else if ("users".equalsIgnoreCase(type)) {
            csv.append("User ID,Name,Email,Role,Status,Joined Date\n");
            csv.append("USR001,Amelia Vance,amelia@example.com,Admin,Active,2025-01-10\n");
            csv.append("USR002,Devon Lane,devon@example.com,Editor,Active,2025-02-14\n");
            csv.append("USR003,Kathryn Murphy,kathryn@example.com,User,Active,2025-03-20\n");
            csv.append("USR004,Jane Cooper,jane@example.com,User,Inactive,2025-04-05\n");
            csv.append("USR005,Guy Hawkins,guy@example.com,Moderator,Suspended,2025-05-18\n");
        } else {
            csv.append("Metric,Value,Threshold,Status\n");
            csv.append("API Response Time,94ms,200ms,Excellent\n");
            csv.append("Page Load Speed,1.2s,2.5s,Excellent\n");
            csv.append("Server CPU Load,14%,80%,Safe\n");
            csv.append("Memory Usage,42%,85%,Safe\n");
        }

        byte[] outputBytes = csv.toString().getBytes();

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + filename)
                .contentType(MediaType.parseMediaType("text/csv"))
                .body(outputBytes);
    }
}
