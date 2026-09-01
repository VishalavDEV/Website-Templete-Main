package com.aerovision.skyview.service;

import com.aerovision.skyview.model.Project;
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
                "Aero Helix Skyrise & Sky Garden Spire",
                "Supertall Aerodynamic Towers",
                "London Thames Riverside, UK",
                "342 meters (78 Storeys)",
                "128,000 m² GFA",
                "Cd = 0.28 (Super-Laminar)",
                "4,280 Responsive Origami Panels",
                "1,850 MWh / Year",
                "/assets/images/aerovision-hero.jpg",
                "A flagship aerodynamic double-curved supertall tower engineered with wind-bleed aerodynamic apertures, cascading cantilevered sky atriums, and a kinetic photovoltaic skin responsive to sun vectors.",
                Arrays.asList(
                        "Wind-bleed aerodynamic central void reducing base moment shear by 42%",
                        "Continuous multi-level cantilevered botanical sky gardens acting as vortex dampers",
                        "Dual fluid tuned mass damper (TMD) stabilizing pinnacle under gale-force gusts",
                        "Integrated pneumatic kinetic solar louvers that track sun azimuth and altitude"
                ),
                Arrays.asList(
                        "Structural System: Diagrid Steel Composite Mega-Frame with Outrigger Trusses",
                        "Glazing: Triple-pane Low-E Aerogel Vacuum Insulated Curtain Wall",
                        "Energy: 100% On-site Renewable Solar Facade + Geothermal Foundation Heat Pumping",
                        "Embodied Carbon: -38% vs. standard high-rise benchmark"
                )
        ));

        projects.add(new Project(
                2L,
                "Origami Kinetic Facade & Solar Pavilion",
                "Kinetic Responsive Envelopes",
                "Zurich Innovation District, Switzerland",
                "54 meters (12 Storeys)",
                "26,400 m² GFA",
                "Cd = 0.32",
                "2,160 Triangulated Kinetic Louvers",
                "620 MWh / Year",
                "/assets/images/aerovision-facade.jpg",
                "A state-of-the-art responsive research facility featuring carbon-fiber origami facade modules that articulate dynamically to eliminate glare, reduce HVAC loads by 58%, and generate clean solar electricity.",
                Arrays.asList(
                        "Micro-actuated carbon-fiber solar tracking triangular petals",
                        "Automated natural ventilation mode with pressure-driven airflow channels",
                        "Dynamic daylighting algorithm maintaining 500 lux across interior workplanes",
                        "Self-cleaning hydrophobic nanocoating on all kinetic assemblies"
                ),
                Arrays.asList(
                        "Actuation: Silent brushless servo motors with sub-millimeter encoder precision",
                        "Materials: Carbon-fiber reinforced polymer (CFRP) & Monocrystalline PV film",
                        "Certification: Swiss Minergie-P-ECO & LEED Platinum Target",
                        "Lifecycle: 40-year accelerated weathering certified"
                )
        ));

        projects.add(new Project(
                3L,
                "Parametric Diagrid Aerodynamic Sky Canopy",
                "Cultural & Civic Pavilions",
                "Marina Bay Civic Waterfront, Singapore",
                "28 meters (Free-form span 95m)",
                "14,800 m² Enclosed Canopy",
                "Cd = 0.22 (Ultra-Streamlined)",
                "1,420 Smart Electrochromic Frits",
                "340 MWh / Year",
                "/assets/images/aerovision-pavilion.jpg",
                "A hyperbolic paraboloid free-span glass and timber diagrid canopy creating a sheltered civic waterfront forum with passive microclimate cooling and rain-harvesting parabolic geometry.",
                Arrays.asList(
                        "Free-form hyperbolic paraboloid shell with zero internal columns over 95m span",
                        "Integrated passive evaporative cooling via subterranean tidal heat exchange pool",
                        "Rainwater collection parabolic siphon channeling 100% monsoon runoff into bioswales",
                        "Adaptive acoustic geometry engineered for orchestral and civic assemblies"
                ),
                Arrays.asList(
                        "Structure: Glulam Nordic Spruce and Recycled Structural Stainless Steel 316L",
                        "Envelope: Quadruple-curved laminated smart glass with variable solar tinting",
                        "Thermal Comfort: 6.2°C ambient reduction without active air conditioning",
                        "Award: World Architecture Festival Civic Project of the Year Nominee"
                )
        ));

        projects.add(new Project(
                4L,
                "Aero-Breathe Biophilic Habitat & Penthouse Skybridge",
                "Sky-Habitats & Penthouses",
                "Tokyo Bay Financial Axis, Japan",
                "210 meters (52 Storeys)",
                "89,000 m² GFA",
                "Cd = 0.26",
                "3,600 Biomorphic Air Purifying Louvers",
                "1,120 MWh / Year",
                "/assets/images/aerovision-interior.jpg",
                "A visionary biophilic sky residence with aerodynamic timber vaulting, continuous multi-level botanical lungs, and 360-degree metropolitan observation cantilevers.",
                Arrays.asList(
                        "Internal biophilic air-filtration vertical forest scrubbing PM2.5 particles",
                        "Aerodynamic cross-ventilation shafts engineered for seismic base-isolation",
                        "Curved mass-timber ceiling acoustic baffle geometry optimized for biophilic wellness",
                        "Direct high-speed sky-elevator access with aerodynamic regenerative descent"
                ),
                Arrays.asList(
                        "Timber: Cross-Laminated Japanese Hinoki and Engineered Glulam Arches",
                        "Seismic: Base-isolated sliding friction pendulum with viscous dampers",
                        "WELL Building Standard: WELL v2 Platinum Certified",
                        "Smart Living: Neural ambient lighting syncing with circadian rhythm"
                )
        ));

        projects.add(new Project(
                5L,
                "Biophilic Living Mass-Timber Ecosystem",
                "Sustainable Living Towers",
                "Vancouver Coastal Forest Eco-Corridor, Canada",
                "165 meters (44 Storeys)",
                "58,000 m² GFA",
                "Cd = 0.30",
                "2,800 Living Moss & Hydroponic Facade Trays",
                "890 MWh / Year",
                "/assets/images/biophilic-building.png",
                "An ecological landmark uniting hyper-sustainable mass timber engineering, cascading cantilevered terrace forests, and interactive living wall telemetry.",
                Arrays.asList(
                        "Vertical living wall sequestering 48 tons of CO2 annually",
                        "Cantilevered timber terraces engineered for deep snow loads and wind deflection",
                        "Integrated greywater recycling system feeding automated micro-drip irrigation",
                        "100% sustainably sourced FSC-certified mass-timber superstructure"
                ),
                Arrays.asList(
                        "Superstructure: DLT (Dowel-Laminated Timber) and Glulam Columns",
                        "Embodied Carbon: Net-negative structural frame sequestering 12,400 tons CO2",
                        "LEED: Zero Carbon Building Standard Certified",
                        "Thermal Performance: Passive House (Passivhaus) certified envelope"
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
