package com.technosprint.marketplace.repository;

import com.technosprint.marketplace.entity.Category;
import com.technosprint.marketplace.entity.Template;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TemplateRepository extends JpaRepository<Template, Long>, JpaSpecificationExecutor<Template> {

    Optional<Template> findBySlug(String slug);

    List<Template> findByCategory(Category category);

    List<Template> findByCategorySlug(String categorySlug);

    List<Template> findByFeaturedTrue();

    List<Template> findByPopularTrue();

    @Query("SELECT t FROM Template t WHERE " +
           "(:category IS NULL OR :category = 'all' OR LOWER(t.category.slug) = LOWER(:category) OR LOWER(t.category.name) = LOWER(:category)) AND " +
           "(:type IS NULL OR :type = 'all' OR LOWER(t.templateType) = LOWER(:type)) AND " +
           "(:search IS NULL OR :search = '' OR LOWER(t.name) LIKE LOWER(CONCAT('%', :search, '%')) OR LOWER(t.description) LIKE LOWER(CONCAT('%', :search, '%')) OR LOWER(t.detailedDescription) LIKE LOWER(CONCAT('%', :search, '%')))")
    Page<Template> searchAndFilter(
        @Param("category") String category,
        @Param("type") String type,
        @Param("search") String search,
        Pageable pageable
    );

    @Query("SELECT t FROM Template t WHERE " +
           "LOWER(t.name) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(t.description) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(t.category.name) LIKE LOWER(CONCAT('%', :query, '%'))")
    List<Template> searchByQuery(@Param("query") String query);

    @Query("SELECT SUM(t.downloadsCount) FROM Template t")
    Long getTotalDownloadsCount();
}
