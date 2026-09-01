package com.buildx.biophilic.model;

public class TelemetryResult {
    private double wallArea;
    private double co2Captured;
    private int oxygenProduced;
    private double thermalReduction;
    private int noiseDamping;

    public TelemetryResult() {}

    public TelemetryResult(double wallArea, double co2Captured, int oxygenProduced, double thermalReduction, int noiseDamping) {
        this.wallArea = wallArea;
        this.co2Captured = co2Captured;
        this.oxygenProduced = oxygenProduced;
        this.thermalReduction = thermalReduction;
        this.noiseDamping = noiseDamping;
    }

    public double getWallArea() { return wallArea; }
    public void setWallArea(double wallArea) { this.wallArea = wallArea; }

    public double getCo2Captured() { return co2Captured; }
    public void setCo2Captured(double co2Captured) { this.co2Captured = co2Captured; }

    public int getOxygenProduced() { return oxygenProduced; }
    public void setOxygenProduced(int oxygenProduced) { this.oxygenProduced = oxygenProduced; }

    public double getThermalReduction() { return thermalReduction; }
    public void setThermalReduction(double thermalReduction) { this.thermalReduction = thermalReduction; }

    public int getNoiseDamping() { return noiseDamping; }
    public void setNoiseDamping(int noiseDamping) { this.noiseDamping = noiseDamping; }
}
