package com.toyworld.model;

public class Category {
    private String id;
    private String name;
    private String slug;
    private String description;
    private String animationType;

    public Category() {}

    public Category(String id, String name, String slug, String description, String animationType) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.description = description;
        this.animationType = animationType;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getAnimationType() { return animationType; }
    public void setAnimationType(String animationType) { this.animationType = animationType; }
}
