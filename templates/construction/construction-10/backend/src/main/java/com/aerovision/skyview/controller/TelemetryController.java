package com.aerovision.skyview.controller;

import com.aerovision.skyview.model.WindTunnelTelemetry;
import com.aerovision.skyview.service.TelemetryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/telemetry")
public class TelemetryController {

    private final TelemetryService telemetryService;

    public TelemetryController(TelemetryService telemetryService) {
        this.telemetryService = telemetryService;
    }

    @GetMapping
    public ResponseEntity<WindTunnelTelemetry> getTelemetry() {
        return ResponseEntity.ok(telemetryService.getCurrentTelemetry());
    }
}
