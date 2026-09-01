package com.aerovision.skyview.model;

public class EstimatorResult {
    private double grossFloorAreaSqm;
    private double aerodynamicDragReductionPercent;
    private double windVibrationMitigationPercent;
    private double solarEnergyGeneratedMwhYear;
    private int kineticLouverModules;
    private double embodiedCarbonOffsetTons;
    private double estimatedStructuralBudgetMln;
    private int estimatedConstructionMonths;
    private String leedCertificationLevel;

    public EstimatorResult() {}

    public EstimatorResult(double grossFloorAreaSqm, double aerodynamicDragReductionPercent,
                           double windVibrationMitigationPercent, double solarEnergyGeneratedMwhYear,
                           int kineticLouverModules, double embodiedCarbonOffsetTons,
                           double estimatedStructuralBudgetMln, int estimatedConstructionMonths,
                           String leedCertificationLevel) {
        this.grossFloorAreaSqm = grossFloorAreaSqm;
        this.aerodynamicDragReductionPercent = aerodynamicDragReductionPercent;
        this.windVibrationMitigationPercent = windVibrationMitigationPercent;
        this.solarEnergyGeneratedMwhYear = solarEnergyGeneratedMwhYear;
        this.kineticLouverModules = kineticLouverModules;
        this.embodiedCarbonOffsetTons = embodiedCarbonOffsetTons;
        this.estimatedStructuralBudgetMln = estimatedStructuralBudgetMln;
        this.estimatedConstructionMonths = estimatedConstructionMonths;
        this.leedCertificationLevel = leedCertificationLevel;
    }

    public double getGrossFloorAreaSqm() { return grossFloorAreaSqm; }
    public void setGrossFloorAreaSqm(double grossFloorAreaSqm) { this.grossFloorAreaSqm = grossFloorAreaSqm; }

    public double getAerodynamicDragReductionPercent() { return aerodynamicDragReductionPercent; }
    public void setAerodynamicDragReductionPercent(double aerodynamicDragReductionPercent) { this.aerodynamicDragReductionPercent = aerodynamicDragReductionPercent; }

    public double getWindVibrationMitigationPercent() { return windVibrationMitigationPercent; }
    public void setWindVibrationMitigationPercent(double windVibrationMitigationPercent) { this.windVibrationMitigationPercent = windVibrationMitigationPercent; }

    public double getSolarEnergyGeneratedMwhYear() { return solarEnergyGeneratedMwhYear; }
    public void setSolarEnergyGeneratedMwhYear(double solarEnergyGeneratedMwhYear) { this.solarEnergyGeneratedMwhYear = solarEnergyGeneratedMwhYear; }

    public int getKineticLouverModules() { return kineticLouverModules; }
    public void setKineticLouverModules(int kineticLouverModules) { this.kineticLouverModules = kineticLouverModules; }

    public double getEmbodiedCarbonOffsetTons() { return embodiedCarbonOffsetTons; }
    public void setEmbodiedCarbonOffsetTons(double embodiedCarbonOffsetTons) { this.embodiedCarbonOffsetTons = embodiedCarbonOffsetTons; }

    public double getEstimatedStructuralBudgetMln() { return estimatedStructuralBudgetMln; }
    public void setEstimatedStructuralBudgetMln(double estimatedStructuralBudgetMln) { this.estimatedStructuralBudgetMln = estimatedStructuralBudgetMln; }

    public int getEstimatedConstructionMonths() { return estimatedConstructionMonths; }
    public void setEstimatedConstructionMonths(int estimatedConstructionMonths) { this.estimatedConstructionMonths = estimatedConstructionMonths; }

    public String getLeedCertificationLevel() { return leedCertificationLevel; }
    public void setLeedCertificationLevel(String leedCertificationLevel) { this.leedCertificationLevel = leedCertificationLevel; }
}
