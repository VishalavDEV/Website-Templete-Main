package com.technosprint.marketplace.repository;

import com.technosprint.marketplace.entity.Project;
import com.technosprint.marketplace.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByUserOrderByCreatedAtDesc(User user);
    List<Project> findByUserIdOrderByCreatedAtDesc(Long userId);
}
