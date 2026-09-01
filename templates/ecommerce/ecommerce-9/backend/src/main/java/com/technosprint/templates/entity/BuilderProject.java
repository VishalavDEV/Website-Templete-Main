package com.technosprint.templates.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "builder_projects")
public class BuilderProject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "project_name", nullable = false)
    private String projectName;

    @ManyToOne
    @JoinColumn(name = "template_id")
    private Template template; // Base template used, if any

    @Column(name = "project_data", columnDefinition = "LONGTEXT", nullable = false)
    private String projectData; // JSON configuration of layout and sections

    @Column(nullable = false)
    private String status; // DRAFT, EXPORTED

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
        if (status == null) status = "DRAFT";
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    // Constructors
    public BuilderProject() {}

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public String getProjectName() { return projectName; }
    public void setProjectName(String projectName) { this.projectName = projectName; }

    public Template getTemplate() { return template; }
    public void setTemplate(Template template) { this.template = template; }

    public String getProjectData() { return projectData; }
    public void setProjectData(String projectData) { this.projectData = projectData; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
