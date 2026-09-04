package com.technosprint.marketplace.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "templates")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Template {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true, length = 191)
    private String slug;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "detailed_description", columnDefinition = "LONGTEXT")
    private String detailedDescription;

    @Column(name = "preview_image", nullable = false, length = 500)
    private String previewImage;

    @Column(name = "demo_url", nullable = false, length = 500)
    private String demoUrl;

    @Column(name = "download_file", nullable = false, length = 500)
    private String downloadFile;

    @Column(name = "github_url", length = 500)
    private String githubUrl;

    @Column(length = 150)
    @Builder.Default
    private String author = "TechnoSprint Studio";

    @Column(length = 50)
    @Builder.Default
    private String version = "1.0.0";

    @Column(name = "bootstrap_version", length = 50)
    @Builder.Default
    private String bootstrapVersion = "React / Vite / CSS";

    @Column(name = "template_type", length = 20)
    @Builder.Default
    private String templateType = "FREE";

    @Column(precision = 10, scale = 2)
    @Builder.Default
    private BigDecimal price = BigDecimal.ZERO;

    @Column(name = "pages_count")
    @Builder.Default
    private Integer pagesCount = 8;

    @Column(name = "downloads_count")
    @Builder.Default
    private Integer downloadsCount = 0;

    @Builder.Default
    private Integer views = 0;

    @Builder.Default
    private Double rating = 5.0;

    @Column(length = 50)
    @Builder.Default
    private String status = "PUBLISHED";

    @Builder.Default
    private Boolean responsive = true;

    @Builder.Default
    private Boolean animated = true;

    @Builder.Default
    private Boolean featured = false;

    @Builder.Default
    private Boolean popular = false;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "template_tags",
        joinColumns = @JoinColumn(name = "template_id"),
        inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    @Builder.Default
    private List<Tag> tags = new ArrayList<>();

    @OneToMany(mappedBy = "template", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @Builder.Default
    private List<Review> reviews = new ArrayList<>();

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
