package com.business.backend.controllers;

import com.business.backend.models.ServiceItem;
import com.business.backend.services.MockDataService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/services")
public class ServiceController {

    private final MockDataService mockDataService;

    public ServiceController(MockDataService mockDataService) {
        this.mockDataService = mockDataService;
    }

    @GetMapping
    public List<ServiceItem> getServices() {
        return mockDataService.getAllServices();
    }
}
