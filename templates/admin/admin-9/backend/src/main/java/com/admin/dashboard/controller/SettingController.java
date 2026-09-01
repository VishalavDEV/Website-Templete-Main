package com.admin.dashboard.controller;

import com.admin.dashboard.entity.AdminSetting;
import com.admin.dashboard.repository.AdminSettingRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/settings")
public class SettingController {

    private final AdminSettingRepository adminSettingRepository;

    public SettingController(AdminSettingRepository adminSettingRepository) {
        this.adminSettingRepository = adminSettingRepository;
    }

    @GetMapping
    public ResponseEntity<AdminSetting> getSettings() {
        List<AdminSetting> list = adminSettingRepository.findAll();
        if (list.isEmpty()) {
            // Default initialization
            AdminSetting defaultSettings = AdminSetting.builder()
                    .websiteName("ApexAdmin Dashboard")
                    .websiteLogo("https://img.logoipsum.com/296.svg")
                    .contactEmail("admin@apex.com")
                    .contactPhone("+1 (555) 000-1111")
                    .address("123 Business Rd, suite 100, Innovation City")
                    .build();
            return ResponseEntity.ok(adminSettingRepository.save(defaultSettings));
        }
        return ResponseEntity.ok(list.get(0));
    }

    @PutMapping
    @PreAuthorize("hasRole('ROLE_SUPER_ADMIN') or hasRole('ROLE_ADMIN')")
    public ResponseEntity<AdminSetting> updateSettings(@RequestBody AdminSetting settings) {
        List<AdminSetting> list = adminSettingRepository.findAll();
        AdminSetting existing;

        if (list.isEmpty()) {
            existing = new AdminSetting();
        } else {
            existing = list.get(0);
        }

        existing.setWebsiteName(settings.getWebsiteName());
        existing.setWebsiteLogo(settings.getWebsiteLogo());
        existing.setContactEmail(settings.getContactEmail());
        existing.setContactPhone(settings.getContactPhone());
        existing.setAddress(settings.getAddress());

        return ResponseEntity.ok(adminSettingRepository.save(existing));
    }
}
