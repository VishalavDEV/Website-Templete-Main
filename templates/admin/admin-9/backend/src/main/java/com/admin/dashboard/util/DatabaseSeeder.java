package com.admin.dashboard.util;

import com.admin.dashboard.entity.*;
import com.admin.dashboard.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final CustomerRepository customerRepository;
    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;
    private final PaymentRepository paymentRepository;
    private final NotificationRepository notificationRepository;
    private final MessageRepository messageRepository;
    private final AdminSettingRepository adminSettingRepository;
    private final PasswordEncoder passwordEncoder;

    public DatabaseSeeder(UserRepository userRepository, CustomerRepository customerRepository,
                          CategoryRepository categoryRepository, ProductRepository productRepository,
                          OrderRepository orderRepository, PaymentRepository paymentRepository,
                          NotificationRepository notificationRepository, MessageRepository messageRepository,
                          AdminSettingRepository adminSettingRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.customerRepository = customerRepository;
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
        this.paymentRepository = paymentRepository;
        this.notificationRepository = notificationRepository;
        this.messageRepository = messageRepository;
        this.adminSettingRepository = adminSettingRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() > 0) {
            System.out.println("Database is already seeded.");
            return;
        }

        System.out.println("Starting Database Seeding...");

        // 1. Seed Users (Dashboard Admins/Staff)
        User superAdmin = User.builder()
                .username("admin")
                .password(passwordEncoder.encode("admin"))
                .email("admin@dashboard.com")
                .phone("+1 (555) 019-2834")
                .role(UserRole.SUPER_ADMIN)
                .status(UserStatus.ACTIVE)
                .profileImage("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150")
                .registrationDate(LocalDateTime.now().minusDays(180))
                .build();

        User manager = User.builder()
                .username("manager")
                .password(passwordEncoder.encode("manager"))
                .email("manager@dashboard.com")
                .phone("+1 (555) 014-9988")
                .role(UserRole.MANAGER)
                .status(UserStatus.ACTIVE)
                .profileImage("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150")
                .registrationDate(LocalDateTime.now().minusDays(90))
                .build();

        User staff = User.builder()
                .username("staff")
                .password(passwordEncoder.encode("staff"))
                .email("staff@dashboard.com")
                .phone("+1 (555) 012-3456")
                .role(UserRole.STAFF)
                .status(UserStatus.ACTIVE)
                .profileImage("https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150")
                .registrationDate(LocalDateTime.now().minusDays(45))
                .build();

        userRepository.saveAll(Arrays.asList(superAdmin, manager, staff));

        // 2. Seed Settings
        AdminSetting settings = AdminSetting.builder()
                .websiteName("ApexAdmin SaaS")
                .websiteLogo("https://img.logoipsum.com/296.svg")
                .contactEmail("support@apexadmin.com")
                .contactPhone("+1 (800) 555-APEX")
                .address("100 Innovation Way, Suite 400, San Francisco, CA")
                .build();
        adminSettingRepository.save(settings);

        // 3. Seed Categories
        Category electronics = Category.builder().name("Electronics").description("Gadgets, devices, and accessories").build();
        Category fashion = Category.builder().name("Fashion").description("Clothing, footwear, and designer apparel").build();
        Category home = Category.builder().name("Home & Living").description("Furniture, lighting, and home decor").build();
        Category beauty = Category.builder().name("Beauty & Health").description("Cosmetics, skincare, and health wellness").build();
        Category sports = Category.builder().name("Sports & Outdoors").description("Fitness equipment, gear, and activewear").build();

        categoryRepository.saveAll(Arrays.asList(electronics, fashion, home, beauty, sports));

        // 4. Seed Products
        List<Product> products = Arrays.asList(
                // Electronics
                Product.builder().name("Wireless Noise-Canceling Headphones").description("Premium over-ear headphones with active noise cancellation").price(299.99).discount(10.0).stock(45).status(ProductStatus.ACTIVE).imageUrl("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400").category(electronics).build(),
                Product.builder().name("Smart Watch Series X").description("Advanced fitness tracker, blood oxygen sensor, GPS enabled").price(199.99).discount(0.0).stock(12).status(ProductStatus.ACTIVE).imageUrl("https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400").category(electronics).build(),
                Product.builder().name("Ultra-Thin 4K Monitor 27\"").description("Stunning bezel-less computer monitor for professional work").price(349.99).discount(15.0).stock(8).status(ProductStatus.ACTIVE).imageUrl("https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400").category(electronics).build(),
                // Fashion
                Product.builder().name("Classic Leather Jacket").description("Genuine leather slim fit bomber jacket for men").price(189.50).discount(5.0).stock(22).status(ProductStatus.ACTIVE).imageUrl("https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400").category(fashion).build(),
                Product.builder().name("Minimalist Canvas Sneakers").description("Breathable, comfortable casual sneakers for daily wear").price(59.99).discount(0.0).stock(110).status(ProductStatus.ACTIVE).imageUrl("https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400").category(fashion).build(),
                // Home
                Product.builder().name("Ergonomic Mesh Office Chair").description("Fully adjustable seat, armrests, and headrest with lumbar support").price(249.00).discount(20.0).stock(15).status(ProductStatus.ACTIVE).imageUrl("https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=400").category(home).build(),
                Product.builder().name("Aromatic Soy Wax Candle Set").description("Three-pack of calming lavender, vanilla, and eucalyptus candles").price(24.99).discount(0.0).stock(200).status(ProductStatus.ACTIVE).imageUrl("https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400").category(home).build(),
                // Beauty
                Product.builder().name("Hydrating Facial Serum").description("Pure hyaluronic acid serum for intense skin moisture and glow").price(39.00).discount(0.0).stock(85).status(ProductStatus.ACTIVE).imageUrl("https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400").category(beauty).build(),
                Product.builder().name("Matte Lip Gloss Kit").description("Long-lasting velvet lipstick bundle in 6 popular shades").price(45.00).discount(12.0).stock(0).status(ProductStatus.OUT_OF_STOCK).imageUrl("https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400").category(beauty).build(),
                // Sports
                Product.builder().name("Premium Yoga Mat").description("Non-slip, eco-friendly 6mm high-density exercise mat").price(35.00).discount(0.0).stock(140).status(ProductStatus.ACTIVE).imageUrl("https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=400").category(sports).build(),
                Product.builder().name("Adjustable Dumbbell Set").description("Compact dial-a-weight dumbbells from 5 to 50 lbs").price(299.00).discount(8.0).stock(3).status(ProductStatus.ACTIVE).imageUrl("https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=400").category(sports).build(),
                Product.builder().name("Trail Blazer Running Backpack").description("Waterproof lightweight hydration pack for marathon runners").price(75.00).discount(0.0).stock(0).status(ProductStatus.DRAFT).imageUrl("https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400").category(sports).build()
        );
        productRepository.saveAll(products);

        // 5. Seed Customers
        List<Customer> customers = Arrays.asList(
                Customer.builder().name("Sarah Connor").email("sarah.connor@sky.net").phone("+1 (555) 901-2019").status(UserStatus.ACTIVE).profileImage("https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150").build(),
                Customer.builder().name("John Doe").email("john.doe@gmail.com").phone("+1 (555) 732-1928").status(UserStatus.ACTIVE).profileImage("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150").build(),
                Customer.builder().name("Jane Smith").email("jane.smith@hotmail.com").phone("+1 (555) 891-3011").status(UserStatus.ACTIVE).profileImage("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150").build(),
                Customer.builder().name("Tony Stark").email("tony@starkindustries.com").phone("+1 (555) 300-3000").status(UserStatus.ACTIVE).profileImage("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150").build(),
                Customer.builder().name("Bruce Wayne").email("bruce@waynecorp.com").phone("+1 (555) 911-0000").status(UserStatus.ACTIVE).profileImage("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150").build(),
                Customer.builder().name("Peter Parker").email("peter.parker@dailybugle.com").phone("+1 (555) 438-9012").status(UserStatus.ACTIVE).profileImage("https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150").build(),
                Customer.builder().name("Clark Kent").email("clark.kent@dailyplanet.com").phone("+1 (555) 234-5678").status(UserStatus.INACTIVE).profileImage("https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150").build(),
                Customer.builder().name("Diana Prince").email("diana@themyscira.gov").phone("+1 (555) 987-6543").status(UserStatus.ACTIVE).profileImage("https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150").build()
        );
        customerRepository.saveAll(customers);

        // 6. Seed Orders & Payments (spanning last 12 months)
        Random random = new Random();
        List<Order> seededOrders = new ArrayList<>();
        List<Payment> seededPayments = new ArrayList<>();

        List<Product> activeProducts = productRepository.findAll().stream().filter(p -> p.getStatus() != ProductStatus.DRAFT).toList();

        // Create 60 orders over the past 360 days
        for (int i = 60; i >= 1; i--) {
            Customer customer = customers.get(random.nextInt(customers.size()));
            LocalDateTime orderDate = LocalDateTime.now().minusDays(i * 6).minusHours(random.nextInt(24));

            // Select 1 to 3 random products
            int itemCount = random.nextInt(3) + 1;
            List<OrderItem> items = new ArrayList<>();
            double totalAmount = 0.0;

            Order order = Order.builder()
                    .customer(customer)
                    .orderDate(orderDate)
                    .shippingAddress(random.nextInt(2) == 0 ? "123 Main St, New York, NY" : "456 Oak Ave, Los Angeles, CA")
                    .paymentMethod(random.nextInt(3) == 0 ? "PayPal" : (random.nextInt(2) == 0 ? "Bank Transfer" : "Credit Card"))
                    .trackingNumber("TRK" + (100000 + random.nextInt(900000)))
                    .build();

            for (int k = 0; k < itemCount; k++) {
                Product product = activeProducts.get(random.nextInt(activeProducts.size()));
                int quantity = random.nextInt(2) + 1;
                double unitPrice = product.getPrice() * (1 - product.getDiscount() / 100);

                OrderItem item = OrderItem.builder()
                        .order(order)
                        .product(product)
                        .quantity(quantity)
                        .price(unitPrice)
                        .build();

                items.add(item);
                totalAmount += unitPrice * quantity;
            }

            order.setOrderItems(items);
            order.setAmount(totalAmount);

            // Determine status
            OrderStatus orderStatus;
            PaymentStatus paymentStatus;

            if (i <= 2) {
                // very recent orders
                orderStatus = random.nextInt(3) == 0 ? OrderStatus.PENDING : (random.nextInt(2) == 0 ? OrderStatus.PROCESSING : OrderStatus.CONFIRMED);
                paymentStatus = random.nextInt(4) == 0 ? PaymentStatus.PENDING : (random.nextInt(3) == 0 ? PaymentStatus.FAILED : PaymentStatus.COMPLETED);
            } else if (i == 4) {
                orderStatus = OrderStatus.CANCELLED;
                paymentStatus = PaymentStatus.FAILED;
            } else {
                // older orders
                orderStatus = OrderStatus.DELIVERED;
                paymentStatus = PaymentStatus.COMPLETED;
            }

            order.setOrderStatus(orderStatus);
            order.setPaymentStatus(paymentStatus);
            seededOrders.add(order);

            // Update customer values
            if (paymentStatus == PaymentStatus.COMPLETED) {
                customer.setTotalOrders(customer.getTotalOrders() + 1);
                customer.setTotalSpending(customer.getTotalSpending() + totalAmount);
                if (customer.getLastOrderDate() == null || orderDate.isAfter(customer.getLastOrderDate())) {
                    customer.setLastOrderDate(orderDate);
                }
            }
        }

        orderRepository.saveAll(seededOrders);
        customerRepository.saveAll(customers);

        // Generate payments for completed orders
        for (Order ord : seededOrders) {
            Payment payment = Payment.builder()
                    .order(ord)
                    .paymentDate(ord.getOrderDate().plusMinutes(random.nextInt(30) + 2))
                    .amount(ord.getAmount())
                    .paymentMethod(ord.getPaymentMethod())
                    .status(ord.getPaymentStatus())
                    .transactionId("TXN" + (10000000 + random.nextInt(90000000)))
                    .build();
            seededPayments.add(payment);
        }
        paymentRepository.saveAll(seededPayments);

        // 7. Seed Notifications
        List<Notification> notifications = Arrays.asList(
                Notification.builder().message("New order received from Tony Stark ($2,699.90)").type(NotificationType.ORDER).isRead(false).build(),
                Notification.builder().message("Database CPU usage peaked at 89%").type(NotificationType.SYSTEM).isRead(false).build(),
                Notification.builder().message("New user profile registered: staff").type(NotificationType.USER).isRead(true).build(),
                Notification.builder().message("Payment succeeded for order TRK491823 ($189.50)").type(NotificationType.PAYMENT).isRead(true).build(),
                Notification.builder().message("Failed login attempt from IP 192.168.1.10").type(NotificationType.SECURITY).isRead(false).build()
        );
        notificationRepository.saveAll(notifications);

        // 8. Seed Messages
        String convAdminManager = superAdmin.getId() + "_" + manager.getId();
        String convAdminStaff = superAdmin.getId() + "_" + staff.getId();

        List<Message> messages = Arrays.asList(
                // Admin <-> Manager
                Message.builder().sender(manager).receiver(superAdmin).messageText("Hi Admin, I have uploaded the sales reports for Q2. Can you review them?").conversationId(convAdminManager).timestamp(LocalDateTime.now().minusHours(4)).build(),
                Message.builder().sender(superAdmin).receiver(manager).messageText("Great job Sarah! I will check them out shortly. Are the inventory projections included?").conversationId(convAdminManager).timestamp(LocalDateTime.now().minusHours(3)).build(),
                Message.builder().sender(manager).receiver(superAdmin).messageText("Yes, under Section 4. We see an expected stock shortage on Electronics.").conversationId(convAdminManager).timestamp(LocalDateTime.now().minusHours(2)).isRead(true).build(),
                Message.builder().sender(manager).receiver(superAdmin).messageText("Let me know if we need to contact our vendor early.").conversationId(convAdminManager).timestamp(LocalDateTime.now().minusMinutes(45)).isRead(false).build(),

                // Admin <-> Staff
                Message.builder().sender(staff).receiver(superAdmin).messageText("Hello! The order TRK839182 needs manual approval because the shipping address is flagged.").conversationId(convAdminStaff).timestamp(LocalDateTime.now().minusHours(6)).build(),
                Message.builder().sender(superAdmin).receiver(staff).messageText("Hi Alex, let me search the records. Have you tried emailing the customer directly?").conversationId(convAdminStaff).timestamp(LocalDateTime.now().minusHours(5)).build(),
                Message.builder().sender(staff).receiver(superAdmin).messageText("Yes, pending their reply. I'll hold the order until tomorrow.").conversationId(convAdminStaff).timestamp(LocalDateTime.now().minusHours(4)).isRead(true).build()
        );
        messageRepository.saveAll(messages);

        System.out.println("Database Seeding Completed Successfully.");
    }
}
