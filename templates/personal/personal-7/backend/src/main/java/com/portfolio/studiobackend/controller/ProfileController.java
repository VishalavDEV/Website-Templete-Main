package com.portfolio.studiobackend.controller;

import com.portfolio.studiobackend.model.*;
import com.portfolio.studiobackend.service.StaticDataService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class ProfileController {

    private final StaticDataService dataService;

    public ProfileController(StaticDataService dataService) {
        this.dataService = dataService;
    }

    @GetMapping("/profile")
    public Profile getProfile() {
        return dataService.getProfile();
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return dataService.getProjects();
    }

    @GetMapping("/skills")
    public List<String> getSkills() {
        return dataService.getProfile().skills();
    }

    @GetMapping("/education")
    public List<Education> getEducation() {
        return dataService.getEducation();
    }

    @GetMapping("/experience")
    public List<Experience> getExperience() {
        return dataService.getExperience();
    }

    @GetMapping("/achievements")
    public List<Achievement> getAchievements() {
        return dataService.getAchievements();
    }

    @GetMapping("/certifications")
    public List<Achievement> getCertifications() {
        return dataService.getAchievements().stream()
                .filter(ach -> "Certificate".equalsIgnoreCase(ach.category()))
                .collect(Collectors.toList());
    }

    @GetMapping("/stats")
    public Stats getStats() {
        return dataService.getStats();
    }
}
