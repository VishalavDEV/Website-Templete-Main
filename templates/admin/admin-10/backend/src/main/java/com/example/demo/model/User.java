package com.example.demo.model;

public class User {
    private String id;
    private String name;
    private String email;
    private String role;
    private String status; // Active, Suspended, Inactive
    private String avatar; // Image/Initial
    private String joinedDate;

    public User() {}

    public User(String id, String name, String email, String role, String status, String avatar, String joinedDate) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.status = status;
        this.avatar = avatar;
        this.joinedDate = joinedDate;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getAvatar() { return avatar; }
    public void setAvatar(String avatar) { this.avatar = avatar; }

    public String getJoinedDate() { return joinedDate; }
    public void setJoinedDate(String joinedDate) { this.joinedDate = joinedDate; }
}
