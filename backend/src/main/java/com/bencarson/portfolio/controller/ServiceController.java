package com.bencarson.portfolio.controller;

import com.bencarson.portfolio.dto.ApiResponseDto;
import com.bencarson.portfolio.dto.ServiceItemDto;
import com.bencarson.portfolio.service.PortfolioDataService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/services")
public class ServiceController {

    private final PortfolioDataService portfolioDataService;

    public ServiceController(PortfolioDataService portfolioDataService) {
        this.portfolioDataService = portfolioDataService;
    }

    @GetMapping
    public ResponseEntity<ApiResponseDto<List<ServiceItemDto>>> getServices() {
        List<ServiceItemDto> services = portfolioDataService.getAllServices();
        return ResponseEntity.ok(ApiResponseDto.success("Services retrieved successfully", services));
    }
}
