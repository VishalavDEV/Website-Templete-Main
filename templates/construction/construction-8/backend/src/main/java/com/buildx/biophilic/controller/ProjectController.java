package com.buildx.biophilic.controller;

import com.buildx.biophilic.model.Project;
import com.buildx.biophilic.service.ProjectService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> getHealth() {
        Map<String, Object> status = new HashMap<>();
        status.put("status", "UP");
        status.put("service", "BuildX Sustainable Biophilic Architecture Backend");
        status.put("timestamp", System.currentTimeMillis());
        return ResponseEntity.ok(status);
    }

    @GetMapping("/projects")
    public ResponseEntity<List<Project>> getProjects() {
        return ResponseEntity.ok(projectService.getAllProjects());
    }
}
