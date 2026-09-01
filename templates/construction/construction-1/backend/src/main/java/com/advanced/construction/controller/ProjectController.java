package com.advanced.construction.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:5173")
public class ProjectController {

    @GetMapping
    public List<Map<String, Object>> getProjects() {
        List<Map<String, Object>> projects = new ArrayList<>();

        projects.add(Map.of(
            "id", 1,
            "category", "cranes",
            "title", "Apex Tower 1,200T Tandem Lift",
            "location", "Metropolis Downtown, NY",
            "stat", "1,200 Tonnes Lifted",
            "image", "/assets/images/crane-sunset-hero.jpg",
            "tags", List.of("Lattice Boom", "Dual Crane Tandem", "Structural Steel")
        ));

        projects.add(Map.of(
            "id", 2,
            "category", "civil",
            "title", "Pacific Suspension Bridge Piling",
            "location", "Harbor Gateway, CA",
            "stat", "85m Subterranean Depth",
            "image", "/assets/images/service-masonry.jpg",
            "tags", List.of("Deep Caissons", "Secant Wall", "High-Early Concrete")
        ));

        projects.add(Map.of(
            "id", 3,
            "category", "structural",
            "title", "Horizon Center Skyscraper Framing",
            "location", "Financial District, TX",
            "stat", "64 Stories / 280m",
            "image", "/assets/images/service-planning.jpg",
            "tags", List.of("Skyscraper", "Curtain Wall", "BIM Clash Free")
        ));

        projects.add(Map.of(
            "id", 4,
            "category", "energy",
            "title", "Coastal Offshore Wind Turbine Rigging",
            "location", "Atlantic Energy Zone",
            "stat", "14MW Turbines",
            "image", "/assets/images/service-craft.jpg",
            "tags", List.of("Offshore Rigging", "Heavy Barges", "Clean Power")
        ));

        return projects;
    }
}
