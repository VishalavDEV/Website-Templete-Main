package com.busystatus.model;

import java.time.Instant;

public class BusyStatus {
    private String status; // "BUSY", "ACTIVE", "FOCUS", "IDLE", "MEETING"
    private String message;
    private String color; // Hex color code (e.g. #FF5A1F)
    private int brightness; // 0 - 100
    private boolean active;
    private int expiryMinutes;
    private String lastUpdated;

    public BusyStatus() {
        this.status = "BUSY";
        this.message = "Do Not Disturb - Deep Work in Progress";
        this.color = "#FF5A1F";
        this.brightness = 90;
        this.active = true;
        this.expiryMinutes = 25;
        this.lastUpdated = Instant.now().toString();
    }

    public BusyStatus(String status, String message, String color, int brightness, boolean active, int expiryMinutes) {
        this.status = status;
        this.message = message;
        this.color = color;
        this.brightness = brightness;
        this.active = active;
        this.expiryMinutes = expiryMinutes;
        this.lastUpdated = Instant.now().toString();
    }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }

    public int getBrightness() { return brightness; }
    public void setBrightness(int brightness) { this.brightness = brightness; }

    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }

    public int getExpiryMinutes() { return expiryMinutes; }
    public void setExpiryMinutes(int expiryMinutes) { this.expiryMinutes = expiryMinutes; }

    public String getLastUpdated() { return lastUpdated; }
    public void setLastUpdated(String lastUpdated) { this.lastUpdated = lastUpdated; }
}
