package com.busystatus.controller;

import com.busystatus.model.BusyStatus;
import com.busystatus.service.StatusService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/status")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class StatusController {

    private final StatusService statusService;

    public StatusController(StatusService statusService) {
        this.statusService = statusService;
    }

    @GetMapping
    public ResponseEntity<BusyStatus> getStatus() {
        return ResponseEntity.ok(statusService.getStatus());
    }

    @PostMapping
    public ResponseEntity<BusyStatus> createOrUpdateStatus(@RequestBody BusyStatus status) {
        return ResponseEntity.ok(statusService.updateStatus(status));
    }

    @PutMapping
    public ResponseEntity<BusyStatus> updateStatus(@RequestBody BusyStatus status) {
        return ResponseEntity.ok(statusService.updateStatus(status));
    }

    @PostMapping("/toggle")
    public ResponseEntity<BusyStatus> toggleActive() {
        return ResponseEntity.ok(statusService.toggleActive());
    }

    @GetMapping("/presets")
    public ResponseEntity<?> getPresets() {
        return ResponseEntity.ok(Map.of(
                "presets", new Object[]{
                        Map.of("id", "busy", "label", "BUSY", "color", "#FF5A1F", "message", "Do Not Disturb"),
                        Map.of("id", "focus", "label", "FOCUS", "color", "#8B5CF6", "message", "Deep Work Zone"),
                        Map.of("id", "active", "label", "ACTIVE", "color", "#10B981", "message", "Available for Chat"),
                        Map.of("id", "meeting", "label", "MEETING", "color", "#F59E0B", "message", "In a Zoom Call"),
                        Map.of("id", "coffee", "label", "BREAK", "color", "#3B82F6", "message", "Coffee & recharge")
                }
        ));
    }
}
