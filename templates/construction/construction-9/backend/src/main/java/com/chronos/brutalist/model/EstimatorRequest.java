package com.chronos.brutalist.model;

public class EstimatorRequest {
    private Double siteAreaSqm;
    private Integer buildingFloors;
    private String concreteGrade; // e.g. "C40/50", "C60/75 Ultra-High", "C80 Self-Compacting"
    private String structuralType; // "Board-Formed Monolith", "Cantilever Mega-Frame", "Precast Ribbed Shell"
    private Boolean seismicDamping;

    public EstimatorRequest() {}

    public EstimatorRequest(Double siteAreaSqm, Integer buildingFloors, String concreteGrade, String structuralType, Boolean seismicDamping) {
        this.siteAreaSqm = siteAreaSqm;
        this.buildingFloors = buildingFloors;
        this.concreteGrade = concreteGrade;
        this.structuralType = structuralType;
        this.seismicDamping = seismicDamping;
    }

    public Double getSiteAreaSqm() { return siteAreaSqm; }
    public void setSiteAreaSqm(Double siteAreaSqm) { this.siteAreaSqm = siteAreaSqm; }

    public Integer getBuildingFloors() { return buildingFloors; }
    public void setBuildingFloors(Integer buildingFloors) { this.buildingFloors = buildingFloors; }

    public String getConcreteGrade() { return concreteGrade; }
    public void setConcreteGrade(String concreteGrade) { this.concreteGrade = concreteGrade; }

    public String getStructuralType() { return structuralType; }
    public void setStructuralType(String structuralType) { this.structuralType = structuralType; }

    public Boolean getSeismicDamping() { return seismicDamping; }
    public void setSeismicDamping(Boolean seismicDamping) { this.seismicDamping = seismicDamping; }
}
