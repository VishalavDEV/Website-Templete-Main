package com.aerovision.skyview.controller;

import com.aerovision.skyview.model.RfqRequest;
import com.aerovision.skyview.service.RfqService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rfq")
public class RfqController {

    private final RfqService rfqService;

    public RfqController(RfqService rfqService) {
        this.rfqService = rfqService;
    }

    @PostMapping
    public ResponseEntity<RfqRequest> submitRfq(@RequestBody RfqRequest request) {
        RfqRequest saved = rfqService.submitRfq(request);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public ResponseEntity<List<RfqRequest>> getAllRfqs() {
        return ResponseEntity.ok(rfqService.getAllRfqs());
    }
}
