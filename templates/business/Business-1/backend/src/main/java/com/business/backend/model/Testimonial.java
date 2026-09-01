package com.business.backend.model;

public class Testimonial {
    private String id;
    private String name;
    private String company;
    private String role;
    private String content;
    private int rating;
    private String avatar;

    public Testimonial() {}

    public Testimonial(String id, String name, String company, String role, String content, int rating, String avatar) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.role = role;
        this.content = content;
        this.rating = rating;
        this.avatar = avatar;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
}
