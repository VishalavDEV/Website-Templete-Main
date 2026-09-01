package com.magazine.backend.model;

import java.util.List;

public class Project {
    private String id;
    private String number;
    private String title;
    private String category;
    private String description;
    private List<String> technologies;
    private String idea;
    private String approach;
    private String result;
    private String imageUrl;
    private String liveUrl;

    public Project() {}

    public Project(String id, String number, String title, String category, String description, List<String> technologies, String idea, String approach, String result, String imageUrl, String liveUrl) {
        this.id = id;
        this.number = number;
        this.title = title;
        this.category = category;
        this.description = description;
        this.technologies = technologies;
        this.idea = idea;
        this.approach = approach;
        this.result = result;
        this.imageUrl = imageUrl;
        this.liveUrl = liveUrl;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getNumber() { return number; }
    public void setNumber(String number) { this.number = number; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public List<String> getTechnologies() { return technologies; }
    public void setTechnologies(List<String> technologies) { this.technologies = technologies; }

    public String getIdea() { return idea; }
    public void setIdea(String idea) { this.idea = idea; }

    public String getApproach() { return approach; }
    public void setApproach(String approach) { this.approach = approach; }

    public String getResult() { return result; }
    public void setResult(String result) { this.result = result; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getLiveUrl() { return liveUrl; }
    public void setLiveUrl(String liveUrl) { this.liveUrl = liveUrl; }
}
