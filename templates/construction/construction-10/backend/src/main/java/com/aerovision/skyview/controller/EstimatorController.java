package com.aerovision.skyview.controller;

import com.aerovision.skyview.model.EstimatorRequest;
import com.aerovision.skyview.model.EstimatorResult;
import com.aerovision.skyview.service.EstimatorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/estimator")
public class EstimatorController {

    private final EstimatorService estimatorService;

    public EstimatorController(EstimatorService estimatorService) {
        this.estimatorService = estimatorService;
    }

    @PostMapping("/calculate")
    public ResponseEntity<EstimatorResult> calculate(@RequestBody EstimatorRequest request) {
        EstimatorResult result = estimatorService.calculate(request);
        return ResponseEntity.ok(result);
    }
}
