package com.magazine.backend.model;

public class Achievement {
    private String id;
    private String number;
    private String title;
    private String category;
    private String date;
    private String description;

    public Achievement() {}

    public Achievement(String id, String number, String title, String category, String date, String description) {
        this.id = id;
        this.number = number;
        this.title = title;
        this.category = category;
        this.date = date;
        this.description = description;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getNumber() { return number; }
    public void setNumber(String number) { this.number = number; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
