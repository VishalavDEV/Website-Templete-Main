package com.aerovision.skyview.model;

import java.time.LocalDateTime;

public class RfqRequest {
    private Long id;
    private String clientName;
    private String organization;
    private String email;
    private String typology; // e.g. "Supertall Aerodynamic Skyrise", "Kinetic Cultural Pavilion", "Diagrid Airport Terminal"
    private String siteLocation;
    private Double targetGfaSqm;
    private Double targetBudgetMln;
    private String flythroughRenderingPackage; // "Real-Time Unreal Engine 5 Orbit", "Photorealistic 8K Cinema", "Holo-BIM Simulation"
    private String projectBrief;
    private LocalDateTime submittedAt;
    private String status;

    public RfqRequest() {
        this.submittedAt = LocalDateTime.now();
        this.status = "RECEIVED_IN_ENGINEERING_REVIEW";
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getClientName() { return clientName; }
    public void setClientName(String clientName) { this.clientName = clientName; }

    public String getOrganization() { return organization; }
    public void setOrganization(String organization) { this.organization = organization; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getTypology() { return typology; }
    public void setTypology(String typology) { this.typology = typology; }

    public String getSiteLocation() { return siteLocation; }
    public void setSiteLocation(String siteLocation) { this.siteLocation = siteLocation; }

    public Double getTargetGfaSqm() { return targetGfaSqm; }
    public void setTargetGfaSqm(Double targetGfaSqm) { this.targetGfaSqm = targetGfaSqm; }

    public Double getTargetBudgetMln() { return targetBudgetMln; }
    public void setTargetBudgetMln(Double targetBudgetMln) { this.targetBudgetMln = targetBudgetMln; }

    public String getFlythroughRenderingPackage() { return flythroughRenderingPackage; }
    public void setFlythroughRenderingPackage(String flythroughRenderingPackage) { this.flythroughRenderingPackage = flythroughRenderingPackage; }

    public String getProjectBrief() { return projectBrief; }
    public void setProjectBrief(String projectBrief) { this.projectBrief = projectBrief; }

    public LocalDateTime getSubmittedAt() { return submittedAt; }
    public void setSubmittedAt(LocalDateTime submittedAt) { this.submittedAt = submittedAt; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
