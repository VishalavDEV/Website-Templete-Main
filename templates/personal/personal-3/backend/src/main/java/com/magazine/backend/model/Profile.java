package com.magazine.backend.model;

public class Profile {
    private String name;
    private String role;
    private String edition;
    private String storyIntro;
    private String bio;
    private String portraitUrl;
    private String location;
    private String focus;
    private String currently;

    // Default constructor
    public Profile() {}

    // Parametric constructor
    public Profile(String name, String role, String edition, String storyIntro, String bio, String portraitUrl, String location, String focus, String currently) {
        this.name = name;
        this.role = role;
        this.edition = edition;
        this.storyIntro = storyIntro;
        this.bio = bio;
        this.portraitUrl = portraitUrl;
        this.location = location;
        this.focus = focus;
        this.currently = currently;
    }

    // Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getEdition() { return edition; }
    public void setEdition(String edition) { this.edition = edition; }

    public String getStoryIntro() { return storyIntro; }
    public void setStoryIntro(String storyIntro) { this.storyIntro = storyIntro; }

    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }

    public String getPortraitUrl() { return portraitUrl; }
    public void setPortraitUrl(String portraitUrl) { this.portraitUrl = portraitUrl; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getFocus() { return focus; }
    public void setFocus(String focus) { this.focus = focus; }

    public String getCurrently() { return currently; }
    public void setCurrently(String currently) { this.currently = currently; }
}
