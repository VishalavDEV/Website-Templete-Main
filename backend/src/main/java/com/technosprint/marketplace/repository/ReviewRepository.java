package com.technosprint.marketplace.repository;

import com.technosprint.marketplace.entity.Review;
import com.technosprint.marketplace.entity.Template;
import com.technosprint.marketplace.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByTemplate(Template template);
    List<Review> findByTemplateIdOrderByCreatedAtDesc(Long templateId);
    List<Review> findByUser(User user);
}
