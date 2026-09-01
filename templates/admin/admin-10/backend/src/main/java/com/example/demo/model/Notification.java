package com.example.demo.model;

public class Notification {
    private String id;
    private String type; // info, warning, success, error
    private String message;
    private String timestamp;
    private boolean read;

    public Notification() {}

    public Notification(String id, String type, String message, String timestamp, boolean read) {
        this.id = id;
        this.type = type;
        this.message = message;
        this.timestamp = timestamp;
        this.read = read;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public String getTimestamp() { return timestamp; }
    public void setTimestamp(String timestamp) { this.timestamp = timestamp; }

    public boolean isRead() { return read; }
    public void setRead(boolean read) { this.read = read; }
}
