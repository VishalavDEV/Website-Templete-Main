package com.business.backend.model;

import java.util.List;
import java.util.Map;

public class TeamMember {
    private String id;
    private String name;
    private String role;
    private String image;
    private String bio;
    private String department;
    private List<String> specialties;
    private Map<String, String> socials;

    public TeamMember() {}

    public TeamMember(String id, String name, String role, String image, String bio,
                      String department, List<String> specialties, Map<String, String> socials) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.image = image;
        this.bio = bio;
        this.department = department;
        this.specialties = specialties;
        this.socials = socials;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public List<String> getSpecialties() {
        return specialties;
    }

    public void setSpecialties(List<String> specialties) {
        this.specialties = specialties;
    }

    public Map<String, String> getSocials() {
        return socials;
    }

    public void setSocials(Map<String, String> socials) {
        this.socials = socials;
    }
}
