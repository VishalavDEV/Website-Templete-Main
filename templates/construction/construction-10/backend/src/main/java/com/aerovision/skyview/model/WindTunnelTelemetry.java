package com.aerovision.skyview.model;

import java.util.List;
import java.util.Map;

public class WindTunnelTelemetry {
    private String activeBuildingSite;
    private double ambientWindSpeedMps;
    private double altitudeMeters;
    private double calculatedDragCoefficient;
    private double vortexSheddingFrequencyHz;
    private double tunedMassDamperDisplacementMm;
    private double kineticFacadeSyncRatePercent;
    private double currentSolarIrradianceWsqm;
    private double realtimeEnergyGenerationKwh;
    private Map<String, Double> facadeWindPressuresPascals;
    private List<String> activeFlythroughDrones;

    public WindTunnelTelemetry() {}

    public WindTunnelTelemetry(String activeBuildingSite, double ambientWindSpeedMps, double altitudeMeters,
                               double calculatedDragCoefficient, double vortexSheddingFrequencyHz,
                               double tunedMassDamperDisplacementMm, double kineticFacadeSyncRatePercent,
                               double currentSolarIrradianceWsqm, double realtimeEnergyGenerationKwh,
                               Map<String, Double> facadeWindPressuresPascals, List<String> activeFlythroughDrones) {
        this.activeBuildingSite = activeBuildingSite;
        this.ambientWindSpeedMps = ambientWindSpeedMps;
        this.altitudeMeters = altitudeMeters;
        this.calculatedDragCoefficient = calculatedDragCoefficient;
        this.vortexSheddingFrequencyHz = vortexSheddingFrequencyHz;
        this.tunedMassDamperDisplacementMm = tunedMassDamperDisplacementMm;
        this.kineticFacadeSyncRatePercent = kineticFacadeSyncRatePercent;
        this.currentSolarIrradianceWsqm = currentSolarIrradianceWsqm;
        this.realtimeEnergyGenerationKwh = realtimeEnergyGenerationKwh;
        this.facadeWindPressuresPascals = facadeWindPressuresPascals;
        this.activeFlythroughDrones = activeFlythroughDrones;
    }

    public String getActiveBuildingSite() { return activeBuildingSite; }
    public void setActiveBuildingSite(String activeBuildingSite) { this.activeBuildingSite = activeBuildingSite; }

    public double getAmbientWindSpeedMps() { return ambientWindSpeedMps; }
    public void setAmbientWindSpeedMps(double ambientWindSpeedMps) { this.ambientWindSpeedMps = ambientWindSpeedMps; }

    public double getAltitudeMeters() { return altitudeMeters; }
    public void setAltitudeMeters(double altitudeMeters) { this.altitudeMeters = altitudeMeters; }

    public double getCalculatedDragCoefficient() { return calculatedDragCoefficient; }
    public void setCalculatedDragCoefficient(double calculatedDragCoefficient) { this.calculatedDragCoefficient = calculatedDragCoefficient; }

    public double getVortexSheddingFrequencyHz() { return vortexSheddingFrequencyHz; }
    public void setVortexSheddingFrequencyHz(double vortexSheddingFrequencyHz) { this.vortexSheddingFrequencyHz = vortexSheddingFrequencyHz; }

    public double getTunedMassDamperDisplacementMm() { return tunedMassDamperDisplacementMm; }
    public void setTunedMassDamperDisplacementMm(double tunedMassDamperDisplacementMm) { this.tunedMassDamperDisplacementMm = tunedMassDamperDisplacementMm; }

    public double getKineticFacadeSyncRatePercent() { return kineticFacadeSyncRatePercent; }
    public void setKineticFacadeSyncRatePercent(double kineticFacadeSyncRatePercent) { this.kineticFacadeSyncRatePercent = kineticFacadeSyncRatePercent; }

    public double getCurrentSolarIrradianceWsqm() { return currentSolarIrradianceWsqm; }
    public void setCurrentSolarIrradianceWsqm(double currentSolarIrradianceWsqm) { this.currentSolarIrradianceWsqm = currentSolarIrradianceWsqm; }

    public double getRealtimeEnergyGenerationKwh() { return realtimeEnergyGenerationKwh; }
    public void setRealtimeEnergyGenerationKwh(double realtimeEnergyGenerationKwh) { this.realtimeEnergyGenerationKwh = realtimeEnergyGenerationKwh; }

    public Map<String, Double> getFacadeWindPressuresPascals() { return facadeWindPressuresPascals; }
    public void setFacadeWindPressuresPascals(Map<String, Double> facadeWindPressuresPascals) { this.facadeWindPressuresPascals = facadeWindPressuresPascals; }

    public List<String> getActiveFlythroughDrones() { return activeFlythroughDrones; }
    public void setActiveFlythroughDrones(List<String> activeFlythroughDrones) { this.activeFlythroughDrones = activeFlythroughDrones; }
}
