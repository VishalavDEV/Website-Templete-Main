package com.technosprint.templates.repository;

import com.technosprint.templates.entity.License;
import com.technosprint.templates.entity.Template;
import com.technosprint.templates.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface LicenseRepository extends JpaRepository<License, Long> {
    Optional<License> findByLicenseKey(String licenseKey);
    List<License> findByUser(User user);
    List<License> findByUserAndTemplateAndStatus(User user, Template template, String status);
}
