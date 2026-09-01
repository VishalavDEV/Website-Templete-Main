package com.chronos.brutalist.model;

import java.time.LocalDateTime;

public class RfqRequest {
    private Long id;
    private String clientName;
    private String clientEmail;
    private String organization;
    private String projectType; // "Monolithic Commercial HQ", "Brutalist Museum Pavilion", "Industrial Civic Terminal", "Private Brutalist Estate"
    private String location;
    private Double estimatedBudgetMln;
    private String timeline;
    private String technicalNotes;
    private LocalDateTime timestamp;
    private String status;

    public RfqRequest() {
        this.timestamp = LocalDateTime.now();
        this.status = "RECEIVED_UNDER_REVIEW";
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getClientName() { return clientName; }
    public void setClientName(String clientName) { this.clientName = clientName; }

    public String getClientEmail() { return clientEmail; }
    public void setClientEmail(String clientEmail) { this.clientEmail = clientEmail; }

    public String getOrganization() { return organization; }
    public void setOrganization(String organization) { this.organization = organization; }

    public String getProjectType() { return projectType; }
    public void setProjectType(String projectType) { this.projectType = projectType; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public Double getEstimatedBudgetMln() { return estimatedBudgetMln; }
    public void setEstimatedBudgetMln(Double estimatedBudgetMln) { this.estimatedBudgetMln = estimatedBudgetMln; }

    public String getTimeline() { return timeline; }
    public void setTimeline(String timeline) { this.timeline = timeline; }

    public String getTechnicalNotes() { return technicalNotes; }
    public void setTechnicalNotes(String technicalNotes) { this.technicalNotes = technicalNotes; }

    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
