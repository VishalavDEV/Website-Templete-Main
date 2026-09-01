package com.business.backend.model;

import java.util.List;

public class ProjectItem {
    private String id;
    private String title;
    private String category;
    private String description;
    private String image;
    private List<String> technologies;
    private String clientChallenge;
    private String businessSolution;
    private String implementationProcess;
    private List<String> results;
    private String clientTestimonial;
    private String clientAuthor;
    private String clientRole;

    public ProjectItem() {}

    public ProjectItem(String id, String title, String category, String description, String image,
                       List<String> technologies, String clientChallenge, String businessSolution,
                       String implementationProcess, List<String> results, String clientTestimonial,
                       String clientAuthor, String clientRole) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.description = description;
        this.image = image;
        this.technologies = technologies;
        this.clientChallenge = clientChallenge;
        this.businessSolution = businessSolution;
        this.implementationProcess = implementationProcess;
        this.results = results;
        this.clientTestimonial = clientTestimonial;
        this.clientAuthor = clientAuthor;
        this.clientRole = clientRole;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<String> getTechnologies() {
        return technologies;
    }

    public void setTechnologies(List<String> technologies) {
        this.technologies = technologies;
    }

    public String getClientChallenge() {
        return clientChallenge;
    }

    public void setClientChallenge(String clientChallenge) {
        this.clientChallenge = clientChallenge;
    }

    public String getBusinessSolution() {
        return businessSolution;
    }

    public void setBusinessSolution(String businessSolution) {
        this.businessSolution = businessSolution;
    }

    public String getImplementationProcess() {
        return implementationProcess;
    }

    public void setImplementationProcess(String implementationProcess) {
        this.implementationProcess = implementationProcess;
    }

    public List<String> getResults() {
        return results;
    }

    public void setResults(List<String> results) {
        this.results = results;
    }

    public String getClientTestimonial() {
        return clientTestimonial;
    }

    public void setClientTestimonial(String clientTestimonial) {
        this.clientTestimonial = clientTestimonial;
    }

    public String getClientAuthor() {
        return clientAuthor;
    }

    public void setClientAuthor(String clientAuthor) {
        this.clientAuthor = clientAuthor;
    }

    public String getClientRole() {
        return clientRole;
    }

    public void setClientRole(String clientRole) {
        this.clientRole = clientRole;
    }
}
