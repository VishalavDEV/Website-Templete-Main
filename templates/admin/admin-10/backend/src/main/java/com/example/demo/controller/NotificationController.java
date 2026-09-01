package com.example.demo.controller;

import com.example.demo.model.Notification;
import com.example.demo.service.MockDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
@CrossOrigin(origins = "http://localhost:5173")
public class NotificationController {

    @Autowired
    private MockDataService mockDataService;

    @GetMapping
    public List<Notification> getAllNotifications() {
        return mockDataService.getAllNotifications();
    }

    @PutMapping("/{id}/read")
    public ResponseEntity<Void> markAsRead(@PathVariable String id) {
        if (mockDataService.markNotificationAsRead(id)) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNotification(@PathVariable String id) {
        if (mockDataService.deleteNotification(id)) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/clear")
    public ResponseEntity<Void> clearAll() {
        mockDataService.clearAllNotifications();
        return ResponseEntity.ok().build();
    }
}
