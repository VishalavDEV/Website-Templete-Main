package com.admin.dashboard.controller;

import com.admin.dashboard.entity.*;
import com.admin.dashboard.repository.*;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final CustomerRepository customerRepository;

    public ReportController(OrderRepository orderRepository, ProductRepository productRepository,
                            CustomerRepository customerRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.customerRepository = customerRepository;
    }

    @GetMapping("/generate")
    public ResponseEntity<?> generateReport(
            @RequestParam String type,
            @RequestParam String startDate,
            @RequestParam String endDate) {

        DateTimeFormatter parser = DateTimeFormatter.ISO_DATE_TIME;
        LocalDateTime start = LocalDateTime.parse(startDate, parser);
        LocalDateTime end = LocalDateTime.parse(endDate, parser);

        Map<String, Object> report = new HashMap<>();
        report.put("type", type);
        report.put("startDate", startDate);
        report.put("endDate", endDate);

        if (type.equalsIgnoreCase("sales") || type.equalsIgnoreCase("revenue")) {
            List<Order> orders = orderRepository.findByOrderDateBetween(start, end).stream()
                    .filter(o -> o.getPaymentStatus() == PaymentStatus.COMPLETED)
                    .toList();

            double totalSales = orders.stream().mapToDouble(Order::getAmount).sum();
            long totalCount = orders.size();
            double avgOrderVal = totalCount > 0 ? totalSales / totalCount : 0.0;

            report.put("totalRevenue", Math.round(totalSales * 100.0) / 100.0);
            report.put("totalOrders", totalCount);
            report.put("averageOrderValue", Math.round(avgOrderVal * 100.0) / 100.0);

        } else if (type.equalsIgnoreCase("inventory") || type.equalsIgnoreCase("products")) {
            List<Product> products = productRepository.findAll();
            long inStock = products.stream().filter(p -> p.getStock() > 0).count();
            long outOfStock = products.stream().filter(p -> p.getStock() == 0).count();
            long totalStockVal = products.stream().mapToLong(Product::getStock).sum();

            report.put("totalProducts", products.size());
            report.put("inStockCount", inStock);
            report.put("outOfStockCount", outOfStock);
            report.put("totalStockUnits", totalStockVal);

        } else { // customers
            List<Customer> customers = customerRepository.findAll();
            long active = customers.stream().filter(c -> c.getStatus() == UserStatus.ACTIVE).count();
            double totalSpent = customers.stream().mapToDouble(Customer::getTotalSpending).sum();

            report.put("totalCustomers", customers.size());
            report.put("activeCustomers", active);
            report.put("totalSpendingAccumulated", Math.round(totalSpent * 100.0) / 100.0);
        }

        return ResponseEntity.ok(report);
    }

    @GetMapping("/export/{format}")
    public ResponseEntity<byte[]> exportReport(
            @PathVariable String format,
            @RequestParam String type) {

        StringBuilder csvContent = new StringBuilder();

        if (type.equalsIgnoreCase("sales")) {
            List<Order> orders = orderRepository.findAll();
            csvContent.append("Order ID,Customer,Date,Amount,Payment Status,Order Status,Payment Method\n");
            for (Order o : orders) {
                csvContent.append(String.format("%d,%s,%s,%.2f,%s,%s,%s\n",
                        o.getId(),
                        o.getCustomer().getName(),
                        o.getOrderDate().toString(),
                        o.getAmount(),
                        o.getPaymentStatus().name(),
                        o.getOrderStatus().name(),
                        o.getPaymentMethod()
                ));
            }
        } else if (type.equalsIgnoreCase("inventory")) {
            List<Product> products = productRepository.findAll();
            csvContent.append("Product ID,Product Name,Category,Price,Discount,Stock,Status\n");
            for (Product p : products) {
                csvContent.append(String.format("%d,%s,%s,%.2f,%.1f,%d,%s\n",
                        p.getId(),
                        p.getName(),
                        p.getCategory().getName(),
                        p.getPrice(),
                        p.getDiscount(),
                        p.getStock(),
                        p.getStatus().name()
                ));
            }
        } else { // default customers
            List<Customer> customers = customerRepository.findAll();
            csvContent.append("Customer ID,Name,Email,Phone,Status,Total Orders,Total Spent\n");
            for (Customer c : customers) {
                csvContent.append(String.format("%d,%s,%s,%s,%s,%d,%.2f\n",
                        c.getId(),
                        c.getName(),
                        c.getEmail(),
                        c.getPhone() != null ? c.getPhone() : "N/A",
                        c.getStatus().name(),
                        c.getTotalOrders(),
                        c.getTotalSpending()
                ));
            }
        }

        byte[] data = csvContent.toString().getBytes();
        String filename = type + "_report." + (format.equalsIgnoreCase("csv") ? "csv" : "txt");

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + filename)
                .contentType(MediaType.parseMediaType("text/csv"))
                .body(data);
    }
}
