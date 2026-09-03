package com.asentus.controller;

import com.asentus.dto.ApiResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class ApiController {

    @GetMapping(value = {"/", "/api"})
    public ResponseEntity<ApiResponseDto<Map<String, Object>>> getApiInfo() {
        Map<String, Object> info = Map.of(
            "name", "Asentus Hi-Tech Architecture Template API",
            "status", "ONLINE",
            "version", "1.0.0",
            "endpoints", Map.of(
                "slides", "/api/slides",
                "features", "/api/features",
                "products", "/api/products",
                "pricing", "/api/pricing",
                "faq", "/api/faq",
                "contact", "/api/contact [POST]"
            ),
            "frontendUrl", "http://localhost:5173"
        );
        return ResponseEntity.ok(ApiResponseDto.success("Asentus Backend API is running successfully", info));
    }
}
