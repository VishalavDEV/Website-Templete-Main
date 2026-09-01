package com.technosprint.templates.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "templates")
public class Template {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String slug;

    @Column(columnDefinition = "TEXT")
    private String description;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(nullable = false)
    private Double price;

    @Column(name = "template_type", nullable = false)
    private String templateType; // FREE, PREMIUM

    @Column(name = "bootstrap_version")
    private String bootstrapVersion; // e.g., "Bootstrap 5"

    @Column(name = "demo_url")
    private String demoUrl;

    @Column(name = "download_file")
    private String downloadFile; // Zip filename

    @Column(name = "preview_image")
    private String previewImage; // Image path or URL

    private String version; // e.g. "1.0.0"

    @Column(nullable = false)
    private String status; // PUBLISHED, DRAFT

    @Column(name = "pages_count")
    private Integer pagesCount;

    @Column(name = "downloads_count")
    private Integer downloadsCount;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "template_tags", joinColumns = @JoinColumn(name = "template_id"))
    @Column(name = "tag")
    private List<String> tags = new ArrayList<>();

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
        if (status == null) status = "PUBLISHED";
        if (price == null) price = 0.0;
        if (templateType == null) templateType = "FREE";
        if (pagesCount == null) pagesCount = 1;
        if (downloadsCount == null) downloadsCount = 0;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    // Constructors
    public Template() {}

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Category getCategory() { return category; }
    public void setCategory(Category category) { this.category = category; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public String getTemplateType() { return templateType; }
    public void setTemplateType(String templateType) { this.templateType = templateType; }

    public String getBootstrapVersion() { return bootstrapVersion; }
    public void setBootstrapVersion(String bootstrapVersion) { this.bootstrapVersion = bootstrapVersion; }

    public String getDemoUrl() { return demoUrl; }
    public void setDemoUrl(String demoUrl) { this.demoUrl = demoUrl; }

    public String getDownloadFile() { return downloadFile; }
    public void setDownloadFile(String downloadFile) { this.downloadFile = downloadFile; }

    public String getPreviewImage() { return previewImage; }
    public void setPreviewImage(String previewImage) { this.previewImage = previewImage; }

    public String getVersion() { return version; }
    public void setVersion(String version) { this.version = version; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public Integer getPagesCount() { return pagesCount; }
    public void setPagesCount(Integer pagesCount) { this.pagesCount = pagesCount; }

    public Integer getDownloadsCount() { return downloadsCount; }
    public void setDownloadsCount(Integer downloadsCount) { this.downloadsCount = downloadsCount; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public List<String> getTags() { return tags; }
    public void setTags(List<String> tags) { this.tags = tags; }
}
