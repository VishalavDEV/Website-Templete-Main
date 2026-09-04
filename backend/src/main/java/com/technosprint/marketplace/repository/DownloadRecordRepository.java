package com.technosprint.marketplace.repository;

import com.technosprint.marketplace.entity.DownloadRecord;
import com.technosprint.marketplace.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DownloadRecordRepository extends JpaRepository<DownloadRecord, Long> {
    List<DownloadRecord> findByUserOrderByDownloadedAtDesc(User user);
    List<DownloadRecord> findByUserIdOrderByDownloadedAtDesc(Long userId);
    long countByTemplateId(Long templateId);
}
