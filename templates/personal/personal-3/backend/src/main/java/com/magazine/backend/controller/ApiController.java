package com.magazine.backend.controller;

import com.magazine.backend.model.*;
import com.magazine.backend.service.DataService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ApiController {

    private final DataService dataService;

    @Autowired
    public ApiController(DataService dataService) {
        this.dataService = dataService;
    }

    @GetMapping("/profile")
    public ResponseEntity<Profile> getProfile() {
        return ResponseEntity.ok(dataService.getProfile());
    }

    @GetMapping("/projects")
    public ResponseEntity<List<Project>> getProjects() {
        return ResponseEntity.ok(dataService.getProjects());
    }

    @GetMapping("/projects/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable String id) {
        Project project = dataService.getProjectById(id);
        if (project == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(project);
    }

    @GetMapping("/skills")
    public ResponseEntity<List<Skill>> getSkills() {
        return ResponseEntity.ok(dataService.getSkills());
    }

    @GetMapping("/experience")
    public ResponseEntity<List<Experience>> getExperiences() {
        return ResponseEntity.ok(dataService.getExperiences());
    }

    @GetMapping("/education")
    public ResponseEntity<List<Education>> getEducation() {
        return ResponseEntity.ok(dataService.getEducation());
    }

    @GetMapping("/achievements")
    public ResponseEntity<List<Achievement>> getAchievements() {
        return ResponseEntity.ok(dataService.getAchievements());
    }

    @GetMapping("/certifications")
    public ResponseEntity<List<Certification>> getCertifications() {
        return ResponseEntity.ok(dataService.getCertifications());
    }

    @GetMapping("/playground")
    public ResponseEntity<List<PlaygroundItem>> getPlaygroundItems() {
        return ResponseEntity.ok(dataService.getPlaygroundItems());
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> submitContact(@Valid @RequestBody ContactMessage message) {
        dataService.addContactMessage(message);
        
        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "THANK YOU FOR REACHING OUT.");
        return ResponseEntity.ok(response);
    }
}
