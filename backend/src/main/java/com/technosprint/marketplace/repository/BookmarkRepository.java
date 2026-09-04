package com.technosprint.marketplace.repository;

import com.technosprint.marketplace.entity.Bookmark;
import com.technosprint.marketplace.entity.Template;
import com.technosprint.marketplace.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    List<Bookmark> findByUserOrderByCreatedAtDesc(User user);
    List<Bookmark> findByUserIdOrderByCreatedAtDesc(Long userId);
    Optional<Bookmark> findByUserAndTemplate(User user, Template template);
    Optional<Bookmark> findByUserIdAndTemplateId(Long userId, Long templateId);
    Boolean existsByUserIdAndTemplateId(Long userId, Long templateId);
    void deleteByUserIdAndTemplateId(Long userId, Long templateId);
}
