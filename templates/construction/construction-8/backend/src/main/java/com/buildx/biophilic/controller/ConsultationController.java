package com.buildx.biophilic.controller;

import com.buildx.biophilic.model.ConsultationRequest;
import com.buildx.biophilic.service.ConsultationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/consultations")
public class ConsultationController {

    private final ConsultationService consultationService;

    public ConsultationController(ConsultationService consultationService) {
        this.consultationService = consultationService;
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> submitConsultation(@RequestBody ConsultationRequest request) {
        ConsultationRequest saved = consultationService.saveRequest(request);

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Biophilic design consultation scheduled! Our mass-timber architectural engineers will contact you within 24 hours.");
        response.put("dossierId", "BUILDX-BIO-" + saved.getId());
        response.put("data", saved);

        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<ConsultationRequest>> getConsultations() {
        return ResponseEntity.ok(consultationService.getAllRequests());
    }
}
