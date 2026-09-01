package com.aerovision.skyview.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HealthController {

    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> health() {
        Map<String, Object> resp = new HashMap<>();
        resp.put("status", "UP");
        resp.put("app", "Aerovision Kinetic Skyrise & Aerodynamic Architecture Platform");
        resp.put("timestamp", LocalDateTime.now().toString());
        resp.put("version", "1.0.0");
        resp.put("engine", "Java 21 / Spring Boot 3.3.2");
        return ResponseEntity.ok(resp);
    }
}
