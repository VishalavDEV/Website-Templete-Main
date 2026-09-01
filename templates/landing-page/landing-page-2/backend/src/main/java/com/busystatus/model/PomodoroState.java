package com.busystatus.model;

public class PomodoroState {
    private boolean running;
    private int remainingSeconds;
    private int totalSeconds;
    private String mode; // "FOCUS", "SHORT_BREAK", "LONG_BREAK"
    private int cyclesCompleted;
    private String statusText;

    public PomodoroState() {
        this.running = false;
        this.remainingSeconds = 1500; // 25 minutes
        this.totalSeconds = 1500;
        this.mode = "FOCUS";
        this.cyclesCompleted = 3;
        this.statusText = "READY";
    }

    public boolean isRunning() { return running; }
    public void setRunning(boolean running) { this.running = running; }

    public int getRemainingSeconds() { return remainingSeconds; }
    public void setRemainingSeconds(int remainingSeconds) { this.remainingSeconds = remainingSeconds; }

    public int getTotalSeconds() { return totalSeconds; }
    public void setTotalSeconds(int totalSeconds) { this.totalSeconds = totalSeconds; }

    public String getMode() { return mode; }
    public void setMode(String mode) { this.mode = mode; }

    public int getCyclesCompleted() { return cyclesCompleted; }
    public void setCyclesCompleted(int cyclesCompleted) { this.cyclesCompleted = cyclesCompleted; }

    public String getStatusText() { return statusText; }
    public void setStatusText(String statusText) { this.statusText = statusText; }
}
