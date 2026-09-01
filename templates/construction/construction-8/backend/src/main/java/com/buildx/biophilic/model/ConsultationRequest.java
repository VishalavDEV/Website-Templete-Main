package com.buildx.biophilic.model;

import java.time.LocalDateTime;

public class ConsultationRequest {
    private Long id;
    private String name;
    private String email;
    private String projectType;
    private Double targetSquareMeters;
    private String notes;
    private LocalDateTime submittedAt;
    private String status;

    public ConsultationRequest() {
        this.submittedAt = LocalDateTime.now();
        this.status = "RECEIVED";
    }

    public ConsultationRequest(String name, String email, String projectType, Double targetSquareMeters, String notes) {
        this();
        this.name = name;
        this.email = email;
        this.projectType = projectType;
        this.targetSquareMeters = targetSquareMeters;
        this.notes = notes;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getProjectType() { return projectType; }
    public void setProjectType(String projectType) { this.projectType = projectType; }

    public Double getTargetSquareMeters() { return targetSquareMeters; }
    public void setTargetSquareMeters(Double targetSquareMeters) { this.targetSquareMeters = targetSquareMeters; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }

    public LocalDateTime getSubmittedAt() { return submittedAt; }
    public void setSubmittedAt(LocalDateTime submittedAt) { this.submittedAt = submittedAt; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
