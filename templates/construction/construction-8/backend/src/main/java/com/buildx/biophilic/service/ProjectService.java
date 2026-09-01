package com.buildx.biophilic.service;

import com.buildx.biophilic.model.Project;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProjectService {

    private final List<Project> projects = new ArrayList<>();

    public ProjectService() {
        projects.add(new Project(
                1L,
                "Elysian Sky Atrium & Living Tower",
                "Marina Bay Eco-District, Singapore",
                "12,500 m² · 18-Storey Mass Timber CLT",
                "/assets/images/buildx-atrium.jpg",
                "A flagship carbon-negative commercial pavilion featuring a 45m interior biophilic waterfall, 3,200m² vertical living bio-walls, and radiant timber acoustic ceilings."
        ));
        projects.add(new Project(
                2L,
                "Verdant Horizon Biophilic Complex",
                "Limmatquai Waterfront, Zurich",
                "8,400 m² · Alpine Glulam Timber & Low-E Glazing",
                "/assets/images/buildx-hero.jpg",
                "Multi-tiered living facade residential community with integrated rainwater recapture misting, endemic alpine botany, and automated circadian skylights."
        ));
    }

    public List<Project> getAllProjects() {
        return projects;
    }
}
