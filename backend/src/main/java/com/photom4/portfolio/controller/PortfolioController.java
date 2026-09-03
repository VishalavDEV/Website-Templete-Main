package com.photom4.portfolio.controller;

import com.photom4.portfolio.model.PortfolioItem;
import com.photom4.portfolio.service.PortfolioService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PortfolioController {

    private final PortfolioService portfolioService;

    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping("/health")
    public Map<String, String> healthCheck() {
        Map<String, String> status = new HashMap<>();
        status.put("status", "UP");
        status.put("app", "PhotoM4 Portfolio API");
        status.put("version", "1.0.0");
        return status;
    }

    @GetMapping("/categories")
    public List<String> getCategories() {
        return portfolioService.getCategories();
    }

    @GetMapping("/portfolio-items")
    public List<PortfolioItem> getPortfolioItems(@RequestParam(required = false) String category) {
        return portfolioService.getItemsByCategory(category);
    }
}
