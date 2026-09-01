package com.agency.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "testimonials")
public class Testimonial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "client_name", nullable = false)
    private String clientName;

    @Column(name = "client_position", nullable = false)
    private String clientPosition;

    @Column(name = "client_company", nullable = false)
    private String clientCompany;

    @Column(name = "client_avatar_url", length = 1000)
    private String clientAvatarUrl;

    @Column(nullable = false)
    private Integer rating = 5;

    @Column(nullable = false, length = 1500)
    private String content;

    public Testimonial() {}

    public Testimonial(String clientName, String clientPosition, String clientCompany, String clientAvatarUrl, Integer rating, String content) {
        this.clientName = clientName;
        this.clientPosition = clientPosition;
        this.clientCompany = clientCompany;
        this.clientAvatarUrl = clientAvatarUrl;
        this.rating = rating;
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getClientPosition() {
        return clientPosition;
    }

    public void setClientPosition(String clientPosition) {
        this.clientPosition = clientPosition;
    }

    public String getClientCompany() {
        return clientCompany;
    }

    public void setClientCompany(String clientCompany) {
        this.clientCompany = clientCompany;
    }

    public String getClientAvatarUrl() {
        return clientAvatarUrl;
    }

    public void setClientAvatarUrl(String clientAvatarUrl) {
        this.clientAvatarUrl = clientAvatarUrl;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
