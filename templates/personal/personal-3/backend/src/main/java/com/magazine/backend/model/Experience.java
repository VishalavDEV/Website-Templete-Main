package com.magazine.backend.model;

public class Experience {
    private String stage;
    private String date;
    private String title;
    private String description;
    private String visualElement; // type of abstract icon or shape to render

    public Experience() {}

    public Experience(String stage, String date, String title, String description, String visualElement) {
        this.stage = stage;
        this.date = date;
        this.title = title;
        this.description = description;
        this.visualElement = visualElement;
    }

    public String getStage() { return stage; }
    public void setStage(String stage) { this.stage = stage; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getVisualElement() { return visualElement; }
    public void setVisualElement(String visualElement) { this.visualElement = visualElement; }
}
