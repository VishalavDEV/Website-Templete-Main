package com.business.backend.controllers;

import com.business.backend.models.TestimonialItem;
import com.business.backend.services.MockDataService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/testimonials")
public class TestimonialController {

    private final MockDataService mockDataService;

    public TestimonialController(MockDataService mockDataService) {
        this.mockDataService = mockDataService;
    }

    @GetMapping
    public List<TestimonialItem> getTestimonials() {
        return mockDataService.getAllTestimonials();
    }
}
