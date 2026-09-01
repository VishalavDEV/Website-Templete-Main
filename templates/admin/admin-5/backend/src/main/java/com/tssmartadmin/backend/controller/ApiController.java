package com.tssmartadmin.backend.controller;

import com.tssmartadmin.backend.model.TaskEntity;
import com.tssmartadmin.backend.model.TicketEntity;
import com.tssmartadmin.backend.model.UserEntity;
import com.tssmartadmin.backend.repository.TaskRepository;
import com.tssmartadmin.backend.repository.TicketRepository;
import com.tssmartadmin.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ApiController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private TicketRepository ticketRepository;

    // --- DASHBOARD OVERVIEW & STATS ---
    @GetMapping("/dashboard/overview")
    public ResponseEntity<Map<String, Object>> getOverviewStats() {
        Map<String, Object> response = new HashMap<>();
        response.put("totalRevenue", "₹128,450.00");
        response.put("revenueGrowth", "+14.2%");
        response.put("activeUsers", 14820);
        response.put("userGrowth", "+8.5%");
        response.put("totalOrders", 3420);
        response.put("orderGrowth", "+12.1%");
        response.put("conversionRate", "3.85%");
        response.put("openTickets", ticketRepository.count());
        response.put("pendingTasks", taskRepository.count());
        return ResponseEntity.ok(response);
    }

    // --- USERS ENDPOINTS ---
    @GetMapping("/users")
    public List<UserEntity> getAllUsers() {
        List<UserEntity> users = userRepository.findAll();
        if (users.isEmpty()) {
            // Seed initial sample users if database is empty
            userRepository.save(new UserEntity("Alex Morgan", "alex.morgan@tssmartadmin.io", "Administrator", "Active", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150", "Executive"));
            userRepository.save(new UserEntity("Marcus Chen", "marcus.chen@tssmartadmin.io", "Senior Engineer", "Active", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150", "Engineering"));
            userRepository.save(new UserEntity("Sarah Jenkins", "sarah.j@tssmartadmin.io", "Product Designer", "Active", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150", "Design"));
            userRepository.save(new UserEntity("David Kim", "david.k@tssmartadmin.io", "Finance Lead", "Pending", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150", "Finance"));
            userRepository.save(new UserEntity("Elena Rostova", "elena.r@tssmartadmin.io", "Marketing Lead", "Active", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150", "Marketing"));
            users = userRepository.findAll();
        }
        return users;
    }

    @PostMapping("/users")
    public UserEntity createUser(@RequestBody UserEntity user) {
        if (user.getAvatar() == null || user.getAvatar().isEmpty()) {
            user.setAvatar("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150");
        }
        return userRepository.save(user);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String, String>> deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
        Map<String, String> res = new HashMap<>();
        res.put("status", "success");
        res.put("message", "User deleted successfully");
        return ResponseEntity.ok(res);
    }

    // --- TASKS / KANBAN ENDPOINTS ---
    @GetMapping("/tasks")
    public List<TaskEntity> getAllTasks() {
        List<TaskEntity> tasks = taskRepository.findAll();
        if (tasks.isEmpty()) {
            taskRepository.save(new TaskEntity("Design Spring Boot API Schema", "Create REST endpoints for dashboard analytics and authentication.", "Backend", "High", "in_progress", "2026-08-25", "Marcus Chen"));
            taskRepository.save(new TaskEntity("Deploy v2.4 hotfix to production", "Apply security patches and optimize DB queries.", "DevOps", "Urgent", "todo", "2026-08-22", "Alex Morgan"));
            taskRepository.save(new TaskEntity("Implement Dark/Light Theme Switching", "Use CSS custom variables for instant smooth switching.", "Frontend", "Medium", "completed", "2026-08-18", "Sarah Jenkins"));
            taskRepository.save(new TaskEntity("UX Audit for CRM Dashboard", "Review layout hierarchy and accessibility parameters.", "Design", "Low", "review", "2026-08-28", "Elena Rostova"));
            tasks = taskRepository.findAll();
        }
        return tasks;
    }

    @PostMapping("/tasks")
    public TaskEntity createTask(@RequestBody TaskEntity task) {
        return taskRepository.save(task);
    }

    @PutMapping("/tasks/{id}")
    public TaskEntity updateTask(@PathVariable Long id, @RequestBody TaskEntity taskDetails) {
        TaskEntity task = taskRepository.findById(id).orElseThrow();
        if (taskDetails.getStatus() != null) task.setStatus(taskDetails.getStatus());
        if (taskDetails.getTitle() != null) task.setTitle(taskDetails.getTitle());
        if (taskDetails.getPriority() != null) task.setPriority(taskDetails.getPriority());
        return taskRepository.save(task);
    }

    // --- SUPPORT TICKETS ENDPOINTS ---
    @GetMapping("/tickets")
    public List<TicketEntity> getAllTickets() {
        List<TicketEntity> tickets = ticketRepository.findAll();
        if (tickets.isEmpty()) {
            ticketRepository.save(new TicketEntity("#TCK-9482", "Cannot reset password via email link", "Robert Vance", "High", "Open", "Auth Security", "10 mins ago"));
            ticketRepository.save(new TicketEntity("#TCK-9481", "Billing invoice PDF download error", "TechCorp Inc.", "Medium", "In Progress", "Billing", "1 hour ago"));
            ticketRepository.save(new TicketEntity("#TCK-9479", "API rate limit reached for webhooks", "Starlight Media", "Urgent", "Open", "Developer API", "3 hours ago"));
            ticketRepository.save(new TicketEntity("#TCK-9475", "Request for custom permission roles", "Acme Logistics", "Low", "Resolved", "User Roles", "Yesterday"));
            tickets = ticketRepository.findAll();
        }
        return tickets;
    }

    @PostMapping("/tickets")
    public TicketEntity createTicket(@RequestBody TicketEntity ticket) {
        if (ticket.getTicketNumber() == null) {
            ticket.setTicketNumber("#TCK-" + (1000 + new Random().nextInt(9000)));
        }
        if (ticket.getCreatedAt() == null) {
            ticket.setCreatedAt("Just now");
        }
        return ticketRepository.save(ticket);
    }

    // --- AUTHENTICATION API ---
    @PostMapping("/auth/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> credentials) {
        Map<String, Object> response = new HashMap<>();
        response.put("token", "jwt-mock-token-ts-smart-admin-2026");
        response.put("user", Map.of(
            "name", "Alex Morgan",
            "email", credentials.getOrDefault("email", "admin@tssmartadmin.io"),
            "role", "Administrator",
            "avatar", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
        ));
        return ResponseEntity.ok(response);
    }
}
