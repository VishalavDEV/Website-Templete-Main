package com.example.demo.controller;

import com.example.demo.service.MockDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private MockDataService mockDataService;

    @GetMapping
    public Map<String, Object> getDashboardStats() {
        Map<String, Object> stats = new HashMap<>();

        // 1. Metric summaries
        stats.put("totalUsers", mockDataService.getAllUsers().size() * 3000 + 580); // e.g. 24,580
        stats.put("usersGrowth", 12.5);
        stats.put("totalProducts", mockDataService.getAllProducts().size()); // 7
        stats.put("productsGrowth", 4.3);
        stats.put("totalOrders", mockDataService.getAllOrders().size() * 180 + 35); // e.g. 1,115
        stats.put("ordersGrowth", 8.2);
        stats.put("totalRevenue", mockDataService.getAllOrders().stream()
                .filter(o -> "Completed".equalsIgnoreCase(o.getStatus()) || "Processing".equalsIgnoreCase(o.getStatus()))
                .mapToDouble(com.example.demo.model.Order::getAmount).sum() * 15.0 + 84300.0); // e.g. 92,345.50
        stats.put("revenueGrowth", 15.4);
        stats.put("activeUsers", 1240);
        stats.put("activeUsersGrowth", 5.2);
        stats.put("pendingOrders", mockDataService.getAllOrders().stream()
                .filter(o -> "Pending".equalsIgnoreCase(o.getStatus())).count());

        // 2. Mini Sparkline Data (7 points)
        stats.put("usersSparkline", Arrays.asList(30, 45, 35, 50, 40, 60, 75));
        stats.put("productsSparkline", Arrays.asList(10, 15, 12, 18, 14, 22, 25));
        stats.put("ordersSparkline", Arrays.asList(20, 35, 25, 45, 30, 55, 68));
        stats.put("revenueSparkline", Arrays.asList(400, 600, 500, 800, 700, 950, 1200));
        stats.put("activeUsersSparkline", Arrays.asList(50, 52, 49, 55, 58, 62, 65));

        // 3. Monthly Revenue Chart (January - August)
        List<Map<String, Object>> revenueChart = new ArrayList<>();
        String[] months = {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"};
        double[] revenueValues = {12000, 19000, 15000, 25000, 22000, 30000, 28000, 35000};
        double[] expensesValues = {8000, 11000, 9000, 14000, 13000, 18000, 16000, 20000};
        for (int i = 0; i < months.length; i++) {
            Map<String, Object> dataPoint = new HashMap<>();
            dataPoint.put("name", months[i]);
            dataPoint.put("revenue", revenueValues[i]);
            dataPoint.put("expenses", expensesValues[i]);
            revenueChart.add(dataPoint);
        }
        stats.put("revenueChart", revenueChart);

        // 4. Monthly User Growth Chart
        List<Map<String, Object>> userGrowthChart = new ArrayList<>();
        int[] userCounts = {15000, 16500, 18000, 19800, 21500, 23000, 24000, 24580};
        for (int i = 0; i < months.length; i++) {
            Map<String, Object> dataPoint = new HashMap<>();
            dataPoint.put("name", months[i]);
            dataPoint.put("users", userCounts[i]);
            userGrowthChart.add(dataPoint);
        }
        stats.put("userGrowthChart", userGrowthChart);

        // 5. Sales Distribution Donut Chart
        List<Map<String, Object>> salesDistribution = new ArrayList<>();
        String[] categories = {"Bedding", "Accessories", "Electronics", "Clothing", "Kitchen & Home"};
        int[] sharePercentages = {25, 20, 30, 15, 10};
        for (int i = 0; i < categories.length; i++) {
            Map<String, Object> dataPoint = new HashMap<>();
            dataPoint.put("name", categories[i]);
            dataPoint.put("value", sharePercentages[i]);
            salesDistribution.add(dataPoint);
        }
        stats.put("salesDistribution", salesDistribution);

        // 6. Platform Performance indicators
        Map<String, Integer> performance = new HashMap<>();
        performance.put("sales", 85);
        performance.put("customerSatisfaction", 96);
        performance.put("ordersCompleted", 92);
        performance.put("platformPerformance", 99);
        stats.put("performance", performance);

        return stats;
    }
}
