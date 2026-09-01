package com.business.backend.controllers;

import com.business.backend.models.TeamMember;
import com.business.backend.services.MockDataService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/team")
public class TeamController {

    private final MockDataService mockDataService;

    public TeamController(MockDataService mockDataService) {
        this.mockDataService = mockDataService;
    }

    @GetMapping
    public List<TeamMember> getTeam() {
        return mockDataService.getAllTeamMembers();
    }
}
