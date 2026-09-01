package com.buildx.biophilic.controller;

import com.buildx.biophilic.model.TelemetryResult;
import com.buildx.biophilic.service.TelemetryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/telemetry")
public class TelemetryController {

    private final TelemetryService telemetryService;

    public TelemetryController(TelemetryService telemetryService) {
        this.telemetryService = telemetryService;
    }

    @GetMapping
    public ResponseEntity<TelemetryResult> getTelemetry(@RequestParam(defaultValue = "1200") double wallArea) {
        return ResponseEntity.ok(telemetryService.calculateTelemetry(wallArea));
    }

    @PostMapping("/calculate")
    public ResponseEntity<TelemetryResult> calculateTelemetry(@RequestBody Map<String, Double> payload) {
        double wallArea = payload.getOrDefault("wallArea", 1200.0);
        return ResponseEntity.ok(telemetryService.calculateTelemetry(wallArea));
    }
}
