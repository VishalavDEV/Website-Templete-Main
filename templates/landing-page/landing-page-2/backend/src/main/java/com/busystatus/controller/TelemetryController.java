package com.busystatus.controller;

import com.busystatus.model.DeviceTelemetry;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicReference;

@RestController
@RequestMapping("/api/telemetry")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TelemetryController {

    private final AtomicReference<DeviceTelemetry> telemetryRef = new AtomicReference<>(new DeviceTelemetry());

    @GetMapping
    public ResponseEntity<DeviceTelemetry> getTelemetry() {
        return ResponseEntity.ok(telemetryRef.get());
    }
}
