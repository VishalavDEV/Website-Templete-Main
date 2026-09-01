package com.chronos.brutalist.model;

import java.util.List;

public class Project {
    private Long id;
    private String title;
    private String category;
    private String location;
    private String specs;
    private String concreteGrade;
    private String height;
    private String grossFloorArea;
    private String image;
    private String summary;
    private List<String> technicalHighlights;

    public Project() {}

    public Project(Long id, String title, String category, String location, String specs, 
                   String concreteGrade, String height, String grossFloorArea, String image, 
                   String summary, List<String> technicalHighlights) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.location = location;
        this.specs = specs;
        this.concreteGrade = concreteGrade;
        this.height = height;
        this.grossFloorArea = grossFloorArea;
        this.image = image;
        this.summary = summary;
        this.technicalHighlights = technicalHighlights;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getSpecs() { return specs; }
    public void setSpecs(String specs) { this.specs = specs; }

    public String getConcreteGrade() { return concreteGrade; }
    public void setConcreteGrade(String concreteGrade) { this.concreteGrade = concreteGrade; }

    public String getHeight() { return height; }
    public void setHeight(String height) { this.height = height; }

    public String getGrossFloorArea() { return grossFloorArea; }
    public void setGrossFloorArea(String grossFloorArea) { this.grossFloorArea = grossFloorArea; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }

    public List<String> getTechnicalHighlights() { return technicalHighlights; }
    public void setTechnicalHighlights(List<String> technicalHighlights) { this.technicalHighlights = technicalHighlights; }
}
