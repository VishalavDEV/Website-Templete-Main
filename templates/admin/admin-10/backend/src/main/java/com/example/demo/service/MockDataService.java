package com.example.demo.service;

import com.example.demo.model.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.stream.Collectors;

@Service
public class MockDataService {

    private final List<User> users = new CopyOnWriteArrayList<>();
    private final List<Product> products = new CopyOnWriteArrayList<>();
    private final List<Order> orders = new CopyOnWriteArrayList<>();
    private final List<Notification> notifications = new CopyOnWriteArrayList<>();
    private final List<Message> messages = new CopyOnWriteArrayList<>();

    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
    private final DateTimeFormatter dateOnlyFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    public MockDataService() {
        seedData();
    }

    private void seedData() {
        // Seed Users
        users.add(new User("USR001", "Amelia Vance", "amelia@example.com", "Admin", "Active", "AV", "2025-01-10"));
        users.add(new User("USR002", "Devon Lane", "devon@example.com", "Editor", "Active", "DL", "2025-02-14"));
        users.add(new User("USR003", "Kathryn Murphy", "kathryn@example.com", "User", "Active", "KM", "2025-03-20"));
        users.add(new User("USR004", "Jane Cooper", "jane@example.com", "User", "Inactive", "JC", "2025-04-05"));
        users.add(new User("USR005", "Guy Hawkins", "guy@example.com", "Moderator", "Suspended", "GH", "2025-05-18"));
        users.add(new User("USR006", "Kristin Watson", "kristin@example.com", "User", "Active", "KW", "2025-06-22"));
        users.add(new User("USR007", "Dianne Russell", "dianne@example.com", "User", "Active", "DR", "2025-07-30"));
        users.add(new User("USR008", "Cody Fisher", "cody@example.com", "User", "Inactive", "CF", "2025-08-11"));

        // Seed Products
        products.add(new Product("PRD001", "Premium Silk Pillowcase", "Bedding", 49.99, 120, "In Stock", "bedding"));
        products.add(new Product("PRD002", "Ceramic Pour-Over Dripper", "Kitchen", 28.50, 8, "Low Stock", "kitchen"));
        products.add(new Product("PRD003", "Minimalist Leather Wallet", "Accessories", 65.00, 45, "In Stock", "accessories"));
        products.add(new Product("PRD004", "Smart Water Bottle (BPA Free)", "Fitness", 39.99, 0, "Out of Stock", "fitness"));
        products.add(new Product("PRD005", "Active Noise Cancelling Earbuds", "Electronics", 129.99, 60, "In Stock", "electronics"));
        products.add(new Product("PRD006", "Organic Cotton Hoodie", "Clothing", 75.00, 15, "In Stock", "clothing"));
        products.add(new Product("PRD007", "Scented Soy Candle Set", "Home", 34.00, 4, "Low Stock", "home"));

        // Seed Orders
        orders.add(new Order("ORD-9843", "Kathryn Murphy", "Active Noise Cancelling Earbuds", "2026-08-27", 129.99, "Completed", "Paid", "2026-08-27 10:15:00", "2026-08-27 11:30:00", "2026-08-27 14:00:00", "2026-08-28 09:45:00"));
        orders.add(new Order("ORD-9844", "Devon Lane", "Minimalist Leather Wallet", "2026-08-28", 65.00, "Processing", "Paid", "2026-08-28 08:30:00", "2026-08-28 10:00:00", null, null));
        orders.add(new Order("ORD-9845", "Dianne Russell", "Ceramic Pour-Over Dripper", "2026-08-28", 28.50, "Pending", "Pending", "2026-08-28 11:20:00", null, null, null));
        orders.add(new Order("ORD-9846", "Kristin Watson", "Premium Silk Pillowcase", "2026-08-26", 99.98, "Completed", "Paid", "2026-08-26 14:10:00", "2026-08-26 15:30:00", "2026-08-26 18:00:00", "2026-08-27 16:30:00"));
        orders.add(new Order("ORD-9847", "Cody Fisher", "Organic Cotton Hoodie", "2026-08-25", 75.00, "Cancelled", "Refunded", "2026-08-25 09:00:00", null, null, null));
        orders.add(new Order("ORD-9848", "Jane Cooper", "Scented Soy Candle Set", "2026-08-28", 34.00, "Processing", "Paid", "2026-08-28 12:05:00", "2026-08-28 12:45:00", null, null));

        // Seed Notifications
        notifications.add(new Notification("NTF001", "success", "New order ORD-9848 successfully placed by Jane Cooper.", "5 minutes ago", false));
        notifications.add(new Notification("NTF002", "info", "User Kathryn Murphy updated her shipping address.", "2 hours ago", false));
        notifications.add(new Notification("NTF003", "warning", "Stock level for Ceramic Pour-Over Dripper is critical (8 remaining).", "4 hours ago", false));
        notifications.add(new Notification("NTF004", "error", "Backup server sync failed: Host unreachable.", "1 day ago", true));

        // Seed Messages
        // Chat with John Smith (chat_john)
        messages.add(new Message("MSG001", "John Smith", "JS", "Hello Admin, I have a question regarding my recent order delivery status.", "10:30 AM", false, "chat_john", false));
        messages.add(new Message("MSG002", "Admin", "A", "Hi John! Let me check that for you. What is your order ID?", "10:32 AM", true, "chat_john", true));
        messages.add(new Message("MSG003", "John Smith", "JS", "It is ORD-9843. It says delivered but I haven't received it.", "10:35 AM", false, "chat_john", false));
        
        // Chat with Kathryn Murphy (chat_kathryn)
        messages.add(new Message("MSG004", "Kathryn Murphy", "KM", "Could you please help me change my account email address?", "Yesterday", false, "chat_kathryn", false));
        messages.add(new Message("MSG005", "Admin", "A", "Sure Kathryn, I can assist with that. Please verify your billing postcode first.", "Yesterday", true, "chat_kathryn", true));
        
        // Chat with Devon Lane (chat_devon)
        messages.add(new Message("MSG006", "Devon Lane", "DL", "The editor access is working perfectly now, thank you so much!", "2 days ago", true, "chat_devon", false));
    }

    // --- Users API Operations ---
    public List<User> getAllUsers() {
        return new ArrayList<>(users);
    }

    public Optional<User> getUserById(String id) {
        return users.stream().filter(u -> u.getId().equals(id)).findFirst();
    }

    public User addUser(User user) {
        String newId = "USR" + String.format("%03d", users.size() + 1);
        user.setId(newId);
        if (user.getJoinedDate() == null || user.getJoinedDate().isEmpty()) {
            user.setJoinedDate(LocalDateTime.now().format(dateOnlyFormatter));
        }
        if (user.getAvatar() == null || user.getAvatar().isEmpty()) {
            user.setAvatar(user.getName().substring(0, Math.min(2, user.getName().length())).toUpperCase());
        }
        users.add(user);
        
        // Log notification
        addNotification("info", "New user registered: " + user.getName());
        return user;
    }

    public Optional<User> updateUser(String id, User updatedUser) {
        return getUserById(id).map(existingUser -> {
            existingUser.setName(updatedUser.getName());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setRole(updatedUser.getRole());
            existingUser.setStatus(updatedUser.getStatus());
            if (updatedUser.getAvatar() != null && !updatedUser.getAvatar().isEmpty()) {
                existingUser.setAvatar(updatedUser.getAvatar());
            }
            return existingUser;
        });
    }

    public boolean deleteUser(String id) {
        return users.removeIf(u -> u.getId().equals(id));
    }

    // --- Products API Operations ---
    public List<Product> getAllProducts() {
        return new ArrayList<>(products);
    }

    public Optional<Product> getProductById(String id) {
        return products.stream().filter(p -> p.getId().equals(id)).findFirst();
    }

    public Product addProduct(Product product) {
        String newId = "PRD" + String.format("%03d", products.size() + 1);
        product.setId(newId);
        products.add(product);
        addNotification("success", "Product added to catalog: " + product.getName());
        return product;
    }

    public Optional<Product> updateProduct(String id, Product updatedProduct) {
        return getProductById(id).map(existing -> {
            existing.setName(updatedProduct.getName());
            existing.setCategory(updatedProduct.getCategory());
            existing.setPrice(updatedProduct.getPrice());
            existing.setStock(updatedProduct.getStock());
            existing.setStatus(updatedProduct.getStatus());
            existing.setImage(updatedProduct.getImage());
            return existing;
        });
    }

    public boolean deleteProduct(String id) {
        return products.removeIf(p -> p.getId().equals(id));
    }

    // --- Orders API Operations ---
    public List<Order> getAllOrders() {
        return new ArrayList<>(orders);
    }

    public Optional<Order> getOrderById(String id) {
        return orders.stream().filter(o -> o.getId().equals(id)).findFirst();
    }

    public Optional<Order> updateOrderStatus(String id, String status) {
        return getOrderById(id).map(existing -> {
            existing.setStatus(status);
            String now = LocalDateTime.now().format(formatter);
            if ("Processing".equalsIgnoreCase(status) && existing.getProcessedAt() == null) {
                existing.setProcessedAt(now);
            } else if ("Shipped".equalsIgnoreCase(status)) {
                if (existing.getProcessedAt() == null) existing.setProcessedAt(now);
                existing.setShippedAt(now);
            } else if ("Completed".equalsIgnoreCase(status)) {
                if (existing.getProcessedAt() == null) existing.setProcessedAt(now);
                if (existing.getShippedAt() == null) existing.setShippedAt(now);
                existing.setDeliveredAt(now);
                existing.setPaymentStatus("Paid");
            }
            addNotification("info", "Order " + id + " status updated to " + status);
            return existing;
        });
    }

    // --- Notifications API Operations ---
    public List<Notification> getAllNotifications() {
        return new ArrayList<>(notifications);
    }

    public void addNotification(String type, String message) {
        String id = "NTF" + String.format("%03d", notifications.size() + 1);
        notifications.add(0, new Notification(id, type, message, "Just now", false));
    }

    public boolean markNotificationAsRead(String id) {
        for (Notification n : notifications) {
            if (n.getId().equals(id)) {
                n.setRead(true);
                return true;
            }
        }
        return false;
    }

    public boolean deleteNotification(String id) {
        return notifications.removeIf(n -> n.getId().equals(id));
    }

    public void clearAllNotifications() {
        notifications.clear();
    }

    // --- Messages API Operations ---
    public List<Message> getAllMessages() {
        return new ArrayList<>(messages);
    }

    public List<Message> getMessagesByChatId(String chatId) {
        return messages.stream()
                .filter(m -> m.getChatId().equals(chatId))
                .sorted(Comparator.comparing(Message::getTimestamp)) // sorting by time logic (in custom mocks)
                .collect(Collectors.toList());
    }

    public Message addMessage(Message message) {
        String newId = "MSG" + String.format("%03d", messages.size() + 1);
        message.setId(newId);
        if (message.getTimestamp() == null || message.getTimestamp().isEmpty()) {
            message.setTimestamp(LocalDateTime.now().format(DateTimeFormatter.ofPattern("hh:mm a")));
        }
        messages.add(message);
        
        if (!message.getIsAdmin()) {
            addNotification("info", "New chat message from " + message.getSenderName());
        }
        return message;
    }
}
