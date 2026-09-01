package com.technosprint.templates.repository;

import com.technosprint.templates.entity.Download;
import com.technosprint.templates.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DownloadRepository extends JpaRepository<Download, Long> {
    List<Download> findByUserOrderByDownloadedAtDesc(User user);
}
