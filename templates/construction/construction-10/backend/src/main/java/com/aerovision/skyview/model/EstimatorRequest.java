package com.aerovision.skyview.model;

public class EstimatorRequest {
    private Double targetHeightMeters; // e.g. 280
    private Integer totalFloors; // e.g. 64
    private String aerodynamicProfile; // "Twisted Vortex Aerofoil", "Elliptical Double-Curvature", "Diagrid Kinetic Shell"
    private String facadeType; // "Dynamic Origami PV Louvers", "Triple-Glazed Aerogel Skin", "Biomorphic Living Breath Skin"
    private Double siteAreaSqm; // e.g. 4500
    private Boolean skyGardenAtriums; // true/false

    public EstimatorRequest() {}

    public EstimatorRequest(Double targetHeightMeters, Integer totalFloors, String aerodynamicProfile,
                            String facadeType, Double siteAreaSqm, Boolean skyGardenAtriums) {
        this.targetHeightMeters = targetHeightMeters;
        this.totalFloors = totalFloors;
        this.aerodynamicProfile = aerodynamicProfile;
        this.facadeType = facadeType;
        this.siteAreaSqm = siteAreaSqm;
        this.skyGardenAtriums = skyGardenAtriums;
    }

    public Double getTargetHeightMeters() { return targetHeightMeters; }
    public void setTargetHeightMeters(Double targetHeightMeters) { this.targetHeightMeters = targetHeightMeters; }

    public Integer getTotalFloors() { return totalFloors; }
    public void setTotalFloors(Integer totalFloors) { this.totalFloors = totalFloors; }

    public String getAerodynamicProfile() { return aerodynamicProfile; }
    public void setAerodynamicProfile(String aerodynamicProfile) { this.aerodynamicProfile = aerodynamicProfile; }

    public String getFacadeType() { return facadeType; }
    public void setFacadeType(String facadeType) { this.facadeType = facadeType; }

    public Double getSiteAreaSqm() { return siteAreaSqm; }
    public void setSiteAreaSqm(Double siteAreaSqm) { this.siteAreaSqm = siteAreaSqm; }

    public Boolean getSkyGardenAtriums() { return skyGardenAtriums; }
    public void setSkyGardenAtriums(Boolean skyGardenAtriums) { this.skyGardenAtriums = skyGardenAtriums; }
}
