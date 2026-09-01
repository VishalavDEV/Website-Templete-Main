package com.aerovision.skyview.model;

import java.util.List;

public class Project {
    private Long id;
    private String title;
    private String category;
    private String location;
    private String height;
    private String grossFloorArea;
    private String dragCoefficient;
    private String kineticLouverCount;
    private String energyHarvest;
    private String image;
    private String summary;
    private List<String> aerodynamicInnovations;
    private List<String> structuralSpecs;

    public Project() {}

    public Project(Long id, String title, String category, String location, String height,
                   String grossFloorArea, String dragCoefficient, String kineticLouverCount,
                   String energyHarvest, String image, String summary,
                   List<String> aerodynamicInnovations, List<String> structuralSpecs) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.location = location;
        this.height = height;
        this.grossFloorArea = grossFloorArea;
        this.dragCoefficient = dragCoefficient;
        this.kineticLouverCount = kineticLouverCount;
        this.energyHarvest = energyHarvest;
        this.image = image;
        this.summary = summary;
        this.aerodynamicInnovations = aerodynamicInnovations;
        this.structuralSpecs = structuralSpecs;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getHeight() { return height; }
    public void setHeight(String height) { this.height = height; }

    public String getGrossFloorArea() { return grossFloorArea; }
    public void setGrossFloorArea(String grossFloorArea) { this.grossFloorArea = grossFloorArea; }

    public String getDragCoefficient() { return dragCoefficient; }
    public void setDragCoefficient(String dragCoefficient) { this.dragCoefficient = dragCoefficient; }

    public String getKineticLouverCount() { return kineticLouverCount; }
    public void setKineticLouverCount(String kineticLouverCount) { this.kineticLouverCount = kineticLouverCount; }

    public String getEnergyHarvest() { return energyHarvest; }
    public void setEnergyHarvest(String energyHarvest) { this.energyHarvest = energyHarvest; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }

    public List<String> getAerodynamicInnovations() { return aerodynamicInnovations; }
    public void setAerodynamicInnovations(List<String> aerodynamicInnovations) { this.aerodynamicInnovations = aerodynamicInnovations; }

    public List<String> getStructuralSpecs() { return structuralSpecs; }
    public void setStructuralSpecs(List<String> structuralSpecs) { this.structuralSpecs = structuralSpecs; }
}
