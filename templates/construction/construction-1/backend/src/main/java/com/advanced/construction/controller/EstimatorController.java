package com.advanced.construction.controller;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/estimator")
@CrossOrigin(origins = "http://localhost:5173")
public class EstimatorController {

    public static class EstimateRequest {
        private String projectType;
        private double sqft;
        private int cranes;
        private String timeline;

        public String getProjectType() { return projectType; }
        public void setProjectType(String projectType) { this.projectType = projectType; }
        public double getSqft() { return sqft; }
        public void setSqft(double sqft) { this.sqft = sqft; }
        public int getCranes() { return cranes; }
        public void setCranes(int cranes) { this.cranes = cranes; }
        public String getTimeline() { return timeline; }
        public void setTimeline(String timeline) { this.timeline = timeline; }
    }

    @PostMapping("/calculate")
    public Map<String, Object> calculateEstimate(@RequestBody EstimateRequest req) {
        double baseRate = switch (req.getProjectType() != null ? req.getProjectType() : "skyscraper") {
            case "civil" -> 145.0;
            case "industrial" -> 160.0;
            case "foundation" -> 130.0;
            default -> 185.0; // skyscraper
        };

        double multiplier = switch (req.getTimeline() != null ? req.getTimeline() : "accelerated") {
            case "standard" -> 1.0;
            case "critical" -> 1.5;
            default -> 1.25; // accelerated
        };

        double baseCost = req.getSqft() * baseRate;
        double craneCost = req.getCranes() * 185000.0;
        double subtotal = (baseCost + craneCost) * multiplier;

        double engineeringFee = subtotal * 0.08;
        double contingencyBuffer = subtotal * 0.05;
        double totalEstimate = subtotal + engineeringFee + contingencyBuffer;

        Map<String, Object> result = new HashMap<>();
        result.put("baseCost", baseCost);
        result.put("craneCost", craneCost);
        result.put("engineeringFee", engineeringFee);
        result.put("contingencyBuffer", contingencyBuffer);
        result.put("totalEstimate", totalEstimate);

        return result;
    }
}
