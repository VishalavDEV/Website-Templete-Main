package com.magazine.backend.model;

public class Education {
    private String id;
    private String date;
    private String degree;
    private String school;
    private String description;

    public Education() {}

    public Education(String id, String date, String degree, String school, String description) {
        this.id = id;
        this.date = date;
        this.degree = degree;
        this.school = school;
        this.description = description;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getDegree() { return degree; }
    public void setDegree(String degree) { this.degree = degree; }

    public String getSchool() { return school; }
    public void setSchool(String school) { this.school = school; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
