package com.admin.dashboard.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "settings")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdminSetting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "website_name", nullable = false)
    private String websiteName;

    @Column(name = "website_logo")
    private String websiteLogo;

    @Column(name = "contact_email")
    private String contactEmail;

    @Column(name = "contact_phone")
    private String contactPhone;

    private String address;
}
