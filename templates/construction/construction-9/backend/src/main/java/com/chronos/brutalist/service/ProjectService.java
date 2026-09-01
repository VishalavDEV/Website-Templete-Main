package com.chronos.brutalist.service;

import com.chronos.brutalist.model.Project;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    private final List<Project> projects = new ArrayList<>();

    public ProjectService() {
        projects.add(new Project(
                1L,
                "The Apex Monolith & Brutalist Tower",
                "Mega-Structures",
                "Gothenburg Industrial Port, Sweden",
                "Board-Formed C80 Concrete · 142m Cantilever Spire",
                "C80/95 Self-Compacting High-Density",
                "142 meters (38 Storeys)",
                "64,000 m² GFA",
                "/assets/images/chronos-tower.jpg",
                "An uncompromising monolithic brutalist skyscraper engineering statement on the Baltic coastline, featuring deep shadow reveals, ribbed precast shear walls, and a 24-meter post-tensioned cantilever sky pavilion.",
                Arrays.asList(
                        "Post-tensioned 24m structural cantilever box girder",
                        "Board-formed textured volcanic basalt concrete finish",
                        "Deep aerodynamic wind baffles reducing vortex shedding by 34%",
                        "Integrated geothermal bedrock foundation piling to -58m"
                )
        ));

        projects.add(new Project(
                2L,
                "Obsidian Citadel & Research Monolith",
                "Monoliths",
                "Reykjavik Geothermal Highlands, Iceland",
                "Basalt Aggregate C70 Concrete · Sub-Zero Seismic Frame",
                "C70/85 Basaltic Aggregate",
                "48 meters (11 Storeys)",
                "32,500 m² GFA",
                "/assets/images/chronos-monolith.jpg",
                "A dark obsidian brutalist research fortress engineered to withstand tectonic seismic shear and arctic windstorms. The geometric angled facade channels natural light into subterranean laboratories.",
                Arrays.asList(
                        "Black iron-oxide pigmented monolithic concrete casing",
                        "Zone 4 Seismic isolation dampers at bedrock contact joints",
                        "Triple-glazed structural glass recessed within 800mm concrete embrasures",
                        "Zero thermal bridging envelope with aerogel matrix insulation"
                )
        ));

        projects.add(new Project(
                3L,
                "Chronos Forum & Civic Grand Pavilion",
                "Pavilions",
                "Basel Rhine Terraces, Switzerland",
                "Precast Ribbed Vaults · Brushed Stainless Steel Cladding",
                "C60/75 Low-Carbon Pozzolanic Concrete",
                "28 meters (4 Storeys + Great Hall)",
                "18,200 m² GFA",
                "/assets/images/chronos-pavilion.jpg",
                "A monumental public forum spanning across the river terraces. Hyperbolic paraboloid concrete shells interlock with industrial grade 316 brushed steel pill canopies to create majestic echoing civic spaces.",
                Arrays.asList(
                        "60-meter column-free brutalist concrete vaulted auditorium",
                        "Brushed 316L architectural stainless steel pivot portal doors",
                        "Acoustic micro-perforated concrete paneling for orchestral dampening",
                        "Hydro-electric intake integration supplying 100% building power"
                )
        ));

        projects.add(new Project(
                4L,
                "Titanium Ridge Industrial Headquarters",
                "Monoliths",
                "Rotterdam Maasvlakte Logistics Hub, Netherlands",
                "Exposed Aggregate C55 Concrete · Steel Space Frame",
                "C55/67 High-Durability Marine Concrete",
                "64 meters (16 Storeys)",
                "45,000 m² GFA",
                "/assets/images/chronos-hero.jpg",
                "A heavy civil brutalist monolith commanding the industrial harbor skyline. Raw timber-grained concrete pylons cradle suspended titanium-clad executive modules overlooking the automated container terminals.",
                Arrays.asList(
                        "Dual concrete core shafts acting as primary vertical spine",
                        "Marine-grade blast-resistant concrete mix resisting saline aerosol",
                        "Automated heavy-lift crane gantry incorporated into roof parapet",
                        "BREEAM Outstanding rating for industrial infrastructure"
                )
        ));

        projects.add(new Project(
                5L,
                "Vanguard Concrete Crest & Overlook",
                "Infrastructure",
                "Gotthard Massif High Pass, Switzerland",
                "Shotcrete & Rock-Bolted Monolith · High-Altitude Alpine",
                "C50/60 Frost-Resistant Micro-Silica Concrete",
                "36 meters (Cliff Cantilever)",
                "12,800 m² GFA",
                "/assets/images/chronos-crest.jpg",
                "A rugged alpine meteorological observation and infrastructure bunker perched precariously on sheer granite cliff faces. Cast-in-place massive buttresses emerge seamlessly from the raw mountain rock.",
                Arrays.asList(
                        "Hyper-density micro-silica concrete resistant to 200 frost-thaw cycles/yr",
                        "Cantilevered observation platform hanging 400m over valley floor",
                        "Integrated avalanche deflection baffles and snow-shed roof profile",
                        "Autonomous off-grid microgrid with vertical wind turbines"
                )
        ));

        projects.add(new Project(
                6L,
                "Kurogane Brutalist Research Atelier",
                "Pavilions",
                "Kyoto Industrial Perimeter, Japan",
                "Hammer-Dressed Bush-Hammered Concrete · Cast Iron Accents",
                "C65/80 Architectural Fair-Faced Concrete",
                "22 meters (5 Storeys)",
                "14,600 m² GFA",
                "/assets/images/chronos-hero-brutalist.jpg",
                "A fusion of Japanese minimalist brutalism and monolithic industrial weight. Hand-hammered concrete reveals aggregate texture accented by raw oiled iron framing and sunken contemplative courtyard basins.",
                Arrays.asList(
                        "Bespoke cedar board formwork with natural grain release oils",
                        "Post-tensioned floor slabs eliminating intermediate columns",
                        "Reflective water moat serving as passive thermal heat sink",
                        "Custom cast-iron structural hardware and oversized sliding portals"
                )
        ));
    }

    public List<Project> getAllProjects() {
        return projects;
    }

    public Optional<Project> getProjectById(Long id) {
        return projects.stream().filter(p -> p.getId().equals(id)).findFirst();
    }
}
