package com.busystatus.model;

public class DeviceTelemetry {
    private String deviceId;
    private String firmwareVersion;
    private int batteryPercentage;
    private boolean isCharging;
    private String wifiSsid;
    private int wifiRssi;
    private double temperatureCelsius;
    private boolean bleConnected;

    public DeviceTelemetry() {
        this.deviceId = "BSB-MATRIX-9920";
        this.firmwareVersion = "v2.4.1-rc3";
        this.batteryPercentage = 88;
        this.isCharging = true;
        this.wifiSsid = "BusyMesh_5G";
        this.wifiRssi = -42;
        this.temperatureCelsius = 31.4;
        this.bleConnected = true;
    }

    public String getDeviceId() { return deviceId; }
    public void setDeviceId(String deviceId) { this.deviceId = deviceId; }

    public String getFirmwareVersion() { return firmwareVersion; }
    public void setFirmwareVersion(String firmwareVersion) { this.firmwareVersion = firmwareVersion; }

    public int getBatteryPercentage() { return batteryPercentage; }
    public void setBatteryPercentage(int batteryPercentage) { this.batteryPercentage = batteryPercentage; }

    public boolean isCharging() { return isCharging; }
    public void setCharging(boolean charging) { isCharging = charging; }

    public String getWifiSsid() { return wifiSsid; }
    public void setWifiSsid(String wifiSsid) { this.wifiSsid = wifiSsid; }

    public int getWifiRssi() { return wifiRssi; }
    public void setWifiRssi(int wifiRssi) { this.wifiRssi = wifiRssi; }

    public double getTemperatureCelsius() { return temperatureCelsius; }
    public void setTemperatureCelsius(double temperatureCelsius) { this.temperatureCelsius = temperatureCelsius; }

    public boolean isBleConnected() { return bleConnected; }
    public void setBleConnected(boolean bleConnected) { this.bleConnected = bleConnected; }
}
