package com.technosprint.templates.repository;

import com.technosprint.templates.entity.Template;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;
import java.util.Optional;

public interface TemplateRepository extends JpaRepository<Template, Long> {
    Optional<Template> findBySlug(String slug);
    List<Template> findByStatus(String status);
    List<Template> findByCategorySlugAndStatus(String categorySlug, String status);

    @Query("SELECT t FROM Template t WHERE t.status = 'PUBLISHED' AND " +
           "(LOWER(t.name) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(t.description) LIKE LOWER(CONCAT('%', :query, '%')))")
    List<Template> searchTemplates(@Param("query") String query);
}
