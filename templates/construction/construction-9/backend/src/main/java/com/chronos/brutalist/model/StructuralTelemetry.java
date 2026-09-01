package com.chronos.brutalist.model;

import java.util.List;
import java.util.Map;

public class StructuralTelemetry {
    private String activeSite;
    private double concreteCureIndex; // e.g. 98.4%
    private double structuralStrainMicrostrain;
    private double vibrationFrequencyHz;
    private double ambientTempC;
    private double humidityPercent;
    private String seismicRating;
    private Map<String, Double> sensorNodes;
    private List<String> activeCranes;

    public StructuralTelemetry() {}

    public StructuralTelemetry(String activeSite, double concreteCureIndex, double structuralStrainMicrostrain,
                               double vibrationFrequencyHz, double ambientTempC, double humidityPercent,
                               String seismicRating, Map<String, Double> sensorNodes, List<String> activeCranes) {
        this.activeSite = activeSite;
        this.concreteCureIndex = concreteCureIndex;
        this.structuralStrainMicrostrain = structuralStrainMicrostrain;
        this.vibrationFrequencyHz = vibrationFrequencyHz;
        this.ambientTempC = ambientTempC;
        this.humidityPercent = humidityPercent;
        this.seismicRating = seismicRating;
        this.sensorNodes = sensorNodes;
        this.activeCranes = activeCranes;
    }

    public String getActiveSite() { return activeSite; }
    public void setActiveSite(String activeSite) { this.activeSite = activeSite; }

    public double getConcreteCureIndex() { return concreteCureIndex; }
    public void setConcreteCureIndex(double concreteCureIndex) { this.concreteCureIndex = concreteCureIndex; }

    public double getStructuralStrainMicrostrain() { return structuralStrainMicrostrain; }
    public void setStructuralStrainMicrostrain(double structuralStrainMicrostrain) { this.structuralStrainMicrostrain = structuralStrainMicrostrain; }

    public double getVibrationFrequencyHz() { return vibrationFrequencyHz; }
    public void setVibrationFrequencyHz(double vibrationFrequencyHz) { this.vibrationFrequencyHz = vibrationFrequencyHz; }

    public double getAmbientTempC() { return ambientTempC; }
    public void setAmbientTempC(double ambientTempC) { this.ambientTempC = ambientTempC; }

    public double getHumidityPercent() { return humidityPercent; }
    public void setHumidityPercent(double humidityPercent) { this.humidityPercent = humidityPercent; }

    public String getSeismicRating() { return seismicRating; }
    public void setSeismicRating(String seismicRating) { this.seismicRating = seismicRating; }

    public Map<String, Double> getSensorNodes() { return sensorNodes; }
    public void setSensorNodes(Map<String, Double> sensorNodes) { this.sensorNodes = sensorNodes; }

    public List<String> getActiveCranes() { return activeCranes; }
    public void setActiveCranes(List<String> activeCranes) { this.activeCranes = activeCranes; }
}
