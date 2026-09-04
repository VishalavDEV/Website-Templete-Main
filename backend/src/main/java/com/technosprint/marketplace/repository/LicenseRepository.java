package com.technosprint.marketplace.repository;

import com.technosprint.marketplace.entity.License;
import com.technosprint.marketplace.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LicenseRepository extends JpaRepository<License, Long> {
    List<License> findByUserOrderByCreatedAtDesc(User user);
    List<License> findByUserIdOrderByCreatedAtDesc(Long userId);
    Optional<License> findByLicenseKey(String licenseKey);
}
