package com.business.backend.controllers;

import com.business.backend.models.FaqItem;
import com.business.backend.services.MockDataService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/faq")
public class FaqController {

    private final MockDataService mockDataService;

    public FaqController(MockDataService mockDataService) {
        this.mockDataService = mockDataService;
    }

    @GetMapping
    public List<FaqItem> getFaqs() {
        return mockDataService.getAllFaqs();
    }
}
