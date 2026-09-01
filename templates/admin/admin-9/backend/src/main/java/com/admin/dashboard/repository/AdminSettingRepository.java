package com.admin.dashboard.repository;

import com.admin.dashboard.entity.AdminSetting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminSettingRepository extends JpaRepository<AdminSetting, Long> {
}
