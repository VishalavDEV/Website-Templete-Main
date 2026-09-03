package com.bencarson.portfolio.controller;

import com.bencarson.portfolio.dto.ApiResponseDto;
import com.bencarson.portfolio.dto.PortfolioItemDto;
import com.bencarson.portfolio.service.PortfolioDataService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {

    private final PortfolioDataService portfolioDataService;

    public PortfolioController(PortfolioDataService portfolioDataService) {
        this.portfolioDataService = portfolioDataService;
    }

    @GetMapping
    public ResponseEntity<ApiResponseDto<List<PortfolioItemDto>>> getPortfolio() {
        List<PortfolioItemDto> items = portfolioDataService.getAllPortfolioItems();
        return ResponseEntity.ok(ApiResponseDto.success("Portfolio items retrieved successfully", items));
    }
}
