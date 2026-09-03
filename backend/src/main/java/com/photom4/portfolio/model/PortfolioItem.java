package com.photom4.portfolio.model;

import java.util.List;

public class PortfolioItem {
    private String id;
    private String title;
    private String category;
    private String categoryLabel;
    private String imageUrl;
    private String description;
    private String date;
    private List<String> tags;

    public PortfolioItem() {}

    public PortfolioItem(String id, String title, String category, String categoryLabel, String imageUrl, String description, String date, List<String> tags) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.categoryLabel = categoryLabel;
        this.imageUrl = imageUrl;
        this.description = description;
        this.date = date;
        this.tags = tags;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getCategoryLabel() { return categoryLabel; }
    public void setCategoryLabel(String categoryLabel) { this.categoryLabel = categoryLabel; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public List<String> getTags() { return tags; }
    public void setTags(List<String> tags) { this.tags = tags; }
}
