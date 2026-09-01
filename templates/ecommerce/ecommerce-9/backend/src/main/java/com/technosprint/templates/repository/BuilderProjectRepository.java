package com.technosprint.templates.repository;

import com.technosprint.templates.entity.BuilderProject;
import com.technosprint.templates.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BuilderProjectRepository extends JpaRepository<BuilderProject, Long> {
    List<BuilderProject> findByUserOrderByUpdatedAtDesc(User user);
}
