package com.chronos.brutalist.model;

public class EstimatorResult {
    private double totalGrossAreaSqm;
    private double concreteVolumeCubicMeters;
    private double structuralSteelMetricTons;
    private double compressiveStrengthMpa;
    private double carbonMineralizationOffsetTons;
    private int estimatedCureDays;
    private double estimatedStructuralBudgetUsd;

    public EstimatorResult() {}

    public EstimatorResult(double totalGrossAreaSqm, double concreteVolumeCubicMeters, 
                           double structuralSteelMetricTons, double compressiveStrengthMpa, 
                           double carbonMineralizationOffsetTons, int estimatedCureDays, 
                           double estimatedStructuralBudgetUsd) {
        this.totalGrossAreaSqm = totalGrossAreaSqm;
        this.concreteVolumeCubicMeters = concreteVolumeCubicMeters;
        this.structuralSteelMetricTons = structuralSteelMetricTons;
        this.compressiveStrengthMpa = compressiveStrengthMpa;
        this.carbonMineralizationOffsetTons = carbonMineralizationOffsetTons;
        this.estimatedCureDays = estimatedCureDays;
        this.estimatedStructuralBudgetUsd = estimatedStructuralBudgetUsd;
    }

    public double getTotalGrossAreaSqm() { return totalGrossAreaSqm; }
    public void setTotalGrossAreaSqm(double totalGrossAreaSqm) { this.totalGrossAreaSqm = totalGrossAreaSqm; }

    public double getConcreteVolumeCubicMeters() { return concreteVolumeCubicMeters; }
    public void setConcreteVolumeCubicMeters(double concreteVolumeCubicMeters) { this.concreteVolumeCubicMeters = concreteVolumeCubicMeters; }

    public double getStructuralSteelMetricTons() { return structuralSteelMetricTons; }
    public void setStructuralSteelMetricTons(double structuralSteelMetricTons) { this.structuralSteelMetricTons = structuralSteelMetricTons; }

    public double getCompressiveStrengthMpa() { return compressiveStrengthMpa; }
    public void setCompressiveStrengthMpa(double compressiveStrengthMpa) { this.compressiveStrengthMpa = compressiveStrengthMpa; }

    public double getCarbonMineralizationOffsetTons() { return carbonMineralizationOffsetTons; }
    public void setCarbonMineralizationOffsetTons(double carbonMineralizationOffsetTons) { this.carbonMineralizationOffsetTons = carbonMineralizationOffsetTons; }

    public int getEstimatedCureDays() { return estimatedCureDays; }
    public void setEstimatedCureDays(int estimatedCureDays) { this.estimatedCureDays = estimatedCureDays; }

    public double getEstimatedStructuralBudgetUsd() { return estimatedStructuralBudgetUsd; }
    public void setEstimatedStructuralBudgetUsd(double estimatedStructuralBudgetUsd) { this.estimatedStructuralBudgetUsd = estimatedStructuralBudgetUsd; }
}
