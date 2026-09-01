package com.business.backend.controllers;

import com.business.backend.models.ProjectItem;
import com.business.backend.services.MockDataService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final MockDataService mockDataService;

    public ProjectController(MockDataService mockDataService) {
        this.mockDataService = mockDataService;
    }

    @GetMapping
    public List<ProjectItem> getProjects() {
        return mockDataService.getAllProjects();
    }
}
