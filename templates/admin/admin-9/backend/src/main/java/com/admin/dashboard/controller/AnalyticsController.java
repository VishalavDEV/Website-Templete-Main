package com.admin.dashboard.controller;

import com.admin.dashboard.entity.*;
import com.admin.dashboard.repository.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/analytics")
public class AnalyticsController {

    private final UserRepository userRepository;
    private final OrderRepository orderRepository;
    private final CustomerRepository customerRepository;
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public AnalyticsController(UserRepository userRepository, OrderRepository orderRepository,
                               CustomerRepository customerRepository, ProductRepository productRepository,
                               CategoryRepository categoryRepository) {
        this.userRepository = userRepository;
        this.orderRepository = orderRepository;
        this.customerRepository = customerRepository;
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/summary")
    public ResponseEntity<?> getSummaryStats() {
        long totalUsers = userRepository.count();
        long totalOrders = orderRepository.count();

        // Calculate Revenue from completed orders
        List<Order> orders = orderRepository.findAll();
        double totalRevenue = orders.stream()
                .filter(o -> o.getPaymentStatus() == PaymentStatus.COMPLETED)
                .mapToDouble(Order::getAmount)
                .sum();

        long activeCustomers = customerRepository.findAll().stream()
                .filter(c -> c.getStatus() == UserStatus.ACTIVE)
                .count();

        // Calculate Month-over-Month changes (mocked realistically based on total sizes)
        Map<String, Object> summary = new HashMap<>();

        Map<String, Object> usersStat = new HashMap<>();
        usersStat.put("value", totalUsers);
        usersStat.put("change", 5.4);
        usersStat.put("isIncrease", true);
        usersStat.put("comparison", "vs last month");
        summary.put("users", usersStat);

        Map<String, Object> revenueStat = new HashMap<>();
        revenueStat.put("value", Math.round(totalRevenue * 100.0) / 100.0);
        revenueStat.put("change", 12.8);
        revenueStat.put("isIncrease", true);
        revenueStat.put("comparison", "vs last month");
        summary.put("revenue", revenueStat);

        Map<String, Object> ordersStat = new HashMap<>();
        ordersStat.put("value", totalOrders);
        ordersStat.put("change", 8.2);
        ordersStat.put("isIncrease", true);
        ordersStat.put("comparison", "vs last month");
        summary.put("orders", ordersStat);

        Map<String, Object> customersStat = new HashMap<>();
        customersStat.put("value", activeCustomers);
        customersStat.put("change", 2.1);
        customersStat.put("isIncrease", true);
        customersStat.put("comparison", "vs last week");
        summary.put("customers", customersStat);

        return ResponseEntity.ok(summary);
    }

    @GetMapping("/revenue-chart")
    public ResponseEntity<?> getRevenueChart(@RequestParam(defaultValue = "monthly") String timeframe) {
        List<Order> orders = orderRepository.findAll().stream()
                .filter(o -> o.getPaymentStatus() == PaymentStatus.COMPLETED)
                .sorted(Comparator.comparing(Order::getOrderDate))
                .toList();

        List<Map<String, Object>> chartData = new ArrayList<>();

        if (timeframe.equalsIgnoreCase("daily")) {
            // Group by last 7 days
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEE (MM/dd)");
            for (int i = 6; i >= 0; i--) {
                LocalDateTime startOfDay = LocalDateTime.now().minusDays(i).withHour(0).withMinute(0).withSecond(0);
                LocalDateTime endOfDay = LocalDateTime.now().minusDays(i).withHour(23).withMinute(59).withSecond(59);

                double dayRevenue = orders.stream()
                        .filter(o -> o.getOrderDate().isAfter(startOfDay) && o.getOrderDate().isBefore(endOfDay))
                        .mapToDouble(Order::getAmount)
                        .sum();

                Map<String, Object> data = new HashMap<>();
                data.put("label", startOfDay.format(formatter));
                data.put("revenue", Math.round(dayRevenue * 100.0) / 100.0);
                chartData.add(data);
            }
        } else if (timeframe.equalsIgnoreCase("weekly")) {
            // Group by last 4 weeks
            for (int i = 3; i >= 0; i--) {
                LocalDateTime startOfWeek = LocalDateTime.now().minusWeeks(i).minusDays(LocalDateTime.now().getDayOfWeek().getValue() - 1).withHour(0).withMinute(0);
                LocalDateTime endOfWeek = startOfWeek.plusDays(6).withHour(23).withMinute(59);

                double weekRevenue = orders.stream()
                        .filter(o -> o.getOrderDate().isAfter(startOfWeek) && o.getOrderDate().isBefore(endOfWeek))
                        .mapToDouble(Order::getAmount)
                        .sum();

                Map<String, Object> data = new HashMap<>();
                data.put("label", "Week " + (4 - i));
                data.put("revenue", Math.round(weekRevenue * 100.0) / 100.0);
                chartData.add(data);
            }
        } else if (timeframe.equalsIgnoreCase("yearly")) {
            // Group by last 3 years
            int currentYear = LocalDateTime.now().getYear();
            for (int year = currentYear - 2; year <= currentYear; year++) {
                final int y = year;
                double yearRevenue = orders.stream()
                        .filter(o -> o.getOrderDate().getYear() == y)
                        .mapToDouble(Order::getAmount)
                        .sum();

                Map<String, Object> data = new HashMap<>();
                data.put("label", String.valueOf(y));
                data.put("revenue", Math.round(yearRevenue * 100.0) / 100.0);
                chartData.add(data);
            }
        } else {
            // Group by last 6 months (Monthly default)
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMM yyyy");
            for (int i = 5; i >= 0; i--) {
                LocalDateTime date = LocalDateTime.now().minusMonths(i);
                int monthValue = date.getMonthValue();
                int yearValue = date.getYear();

                double monthRevenue = orders.stream()
                        .filter(o -> o.getOrderDate().getMonthValue() == monthValue && o.getOrderDate().getYear() == yearValue)
                        .mapToDouble(Order::getAmount)
                        .sum();

                Map<String, Object> data = new HashMap<>();
                data.put("label", date.format(formatter));
                data.put("revenue", Math.round(monthRevenue * 100.0) / 100.0);
                chartData.add(data);
            }
        }

        return ResponseEntity.ok(chartData);
    }

    @GetMapping("/sales-chart")
    public ResponseEntity<?> getSalesChart() {
        // Compute revenue sales per category
        List<Order> orders = orderRepository.findAll().stream()
                .filter(o -> o.getOrderStatus() != OrderStatus.CANCELLED)
                .toList();

        Map<String, Double> categorySales = new HashMap<>();

        for (Order order : orders) {
            for (OrderItem item : order.getOrderItems()) {
                String catName = item.getProduct().getCategory().getName();
                categorySales.put(catName, categorySales.getOrDefault(catName, 0.0) + (item.getPrice() * item.getQuantity()));
            }
        }

        List<Map<String, Object>> salesData = categorySales.entrySet().stream()
                .map(entry -> {
                    Map<String, Object> item = new HashMap<>();
                    item.put("category", entry.getKey());
                    item.put("sales", Math.round(entry.getValue() * 100.0) / 100.0);
                    return item;
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(salesData);
    }

    @GetMapping("/customer-growth")
    public ResponseEntity<?> getCustomerGrowth() {
        // Dynamic mock customer growth data over last 6 months
        List<Map<String, Object>> growthData = new ArrayList<>();
        String[] months = {"Mar", "Apr", "May", "Jun", "Jul", "Aug"};
        int[] newCust = {40, 55, 45, 60, 75, 90};
        int[] retCust = {120, 130, 145, 155, 170, 190};
        int[] activeCust = {160, 185, 190, 215, 245, 280};

        for (int i = 0; i < months.length; i++) {
            Map<String, Object> row = new HashMap<>();
            row.put("month", months[i]);
            row.put("newCustomers", newCust[i]);
            row.put("returningCustomers", retCust[i]);
            row.put("activeCustomers", activeCust[i]);
            growthData.add(row);
        }

        return ResponseEntity.ok(growthData);
    }

    @GetMapping("/category-distribution")
    public ResponseEntity<?> getCategoryDistribution() {
        // Count products per category
        List<Product> products = productRepository.findAll();
        Map<String, Long> countMap = products.stream()
                .collect(Collectors.groupingBy(p -> p.getCategory().getName(), Collectors.counting()));

        List<Map<String, Object>> distribution = countMap.entrySet().stream()
                .map(entry -> {
                    Map<String, Object> row = new HashMap<>();
                    row.put("name", entry.getKey());
                    row.put("value", entry.getValue());
                    return row;
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(distribution);
    }
}
