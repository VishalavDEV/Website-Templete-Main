package com.asentus.controller;

import com.asentus.dto.*;
import com.asentus.service.AsentusDataService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ContentController {

    private final AsentusDataService dataService;

    public ContentController(AsentusDataService dataService) {
        this.dataService = dataService;
    }

    @GetMapping("/slides")
    public ResponseEntity<ApiResponseDto<List<HeroSlideDto>>> getSlides() {
        return ResponseEntity.ok(ApiResponseDto.success(dataService.getSlides()));
    }

    @GetMapping("/features")
    public ResponseEntity<ApiResponseDto<List<FeatureDto>>> getFeatures() {
        return ResponseEntity.ok(ApiResponseDto.success(dataService.getFeatures()));
    }

    @GetMapping("/products")
    public ResponseEntity<ApiResponseDto<List<ProductDto>>> getProducts() {
        return ResponseEntity.ok(ApiResponseDto.success(dataService.getProducts()));
    }

    @GetMapping("/pricing")
    public ResponseEntity<ApiResponseDto<List<PricingDto>>> getPricing() {
        return ResponseEntity.ok(ApiResponseDto.success(dataService.getPricingPlans()));
    }

    @GetMapping("/faq")
    public ResponseEntity<ApiResponseDto<List<FaqDto>>> getFaq() {
        return ResponseEntity.ok(ApiResponseDto.success(dataService.getFaqs()));
    }
}
