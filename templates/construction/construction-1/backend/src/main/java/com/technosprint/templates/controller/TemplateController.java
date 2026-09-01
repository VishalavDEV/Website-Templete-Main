package com.technosprint.templates.controller;

import com.technosprint.templates.entity.Category;
import com.technosprint.templates.entity.Template;
import com.technosprint.templates.entity.User;
import com.technosprint.templates.repository.CategoryRepository;
import com.technosprint.templates.repository.TemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/templates")
public class TemplateController {

    @Autowired
    private TemplateRepository templateRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    private boolean isAdmin() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof User) {
            return "ROLE_ADMIN".equals(((User) principal).getRole());
        }
        return false;
    }

    public static class TemplateDto {
        public String name;
        public String slug;
        public String description;
        public Long categoryId;
        public Double price;
        public String templateType;
        public String bootstrapVersion;
        public String demoUrl;
        public String downloadFile;
        public String previewImage;
        public String version;
        public String status;
        public Integer pagesCount;
        public List<String> tags;
    }

    @GetMapping
    public List<Template> getTemplates(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String type) {
        
        List<Template> templates;
        
        if (search != null && !search.trim().isEmpty()) {
            templates = templateRepository.searchTemplates(search);
        } else if (category != null && !category.trim().isEmpty()) {
            String categorySlug = category.trim().toLowerCase();
            if (categorySlug.equals("coming-soon") || categorySlug.equals("coming_soon") || categorySlug.equals("comming_soon") || categorySlug.equals("comming-soon")) {
                categorySlug = "comming-soon";
            }
            templates = templateRepository.findByCategorySlugAndStatus(categorySlug, "PUBLISHED");
        } else {
            templates = templateRepository.findByStatus("PUBLISHED");
        }

        // If admin requests, they might want drafts as well, let's just return published templates for standard queries
        if (isAdmin() && category == null && (search == null || search.trim().isEmpty())) {
            templates = templateRepository.findAll();
        }

        if (type != null && !type.trim().isEmpty()) {
            templates = templates.stream()
                    .filter(t -> t.getTemplateType().equalsIgnoreCase(type))
                    .collect(Collectors.toList());
        }

        return templates;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTemplateById(@PathVariable Long id) {
        Template template = templateRepository.findById(id).orElse(null);
        if (template == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(template);
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<?> getTemplateBySlug(@PathVariable String slug) {
        Template template = templateRepository.findBySlug(slug).orElse(null);
        if (template == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(template);
    }

    @PostMapping
    public ResponseEntity<?> createTemplate(@RequestBody TemplateDto dto) {
        if (!isAdmin()) {
            return ResponseEntity.status(403).body(Map.of("message", "Access denied: Admins only!"));
        }

        Category category = categoryRepository.findById(dto.categoryId).orElse(null);
        if (category == null) {
            return ResponseEntity.badRequest().body(Map.of("message", "Invalid category ID!"));
        }

        Template template = new Template();
        copyDtoToEntity(dto, template, category);

        Template saved = templateRepository.save(template);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTemplate(@PathVariable Long id, @RequestBody TemplateDto dto) {
        if (!isAdmin()) {
            return ResponseEntity.status(403).body(Map.of("message", "Access denied: Admins only!"));
        }

        Template template = templateRepository.findById(id).orElse(null);
        if (template == null) {
            return ResponseEntity.notFound().build();
        }

        Category category = categoryRepository.findById(dto.categoryId).orElse(null);
        if (category == null) {
            return ResponseEntity.badRequest().body(Map.of("message", "Invalid category ID!"));
        }

        copyDtoToEntity(dto, template, category);
        Template updated = templateRepository.save(template);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTemplate(@PathVariable Long id) {
        if (!isAdmin()) {
            return ResponseEntity.status(403).body(Map.of("message", "Access denied: Admins only!"));
        }

        Template template = templateRepository.findById(id).orElse(null);
        if (template == null) {
            return ResponseEntity.notFound().build();
        }

        templateRepository.delete(template);
        return ResponseEntity.ok(Map.of("message", "Template deleted successfully!"));
    }

    private void copyDtoToEntity(TemplateDto dto, Template entity, Category category) {
        entity.setName(dto.name);
        entity.setSlug(dto.slug);
        entity.setDescription(dto.description);
        entity.setCategory(category);
        entity.setPrice(dto.price);
        entity.setTemplateType(dto.templateType);
        entity.setBootstrapVersion(dto.bootstrapVersion);
        entity.setDemoUrl(dto.demoUrl);
        entity.setDownloadFile(dto.downloadFile);
        entity.setPreviewImage(dto.previewImage);
        entity.setVersion(dto.version);
        entity.setStatus(dto.status);
        entity.setPagesCount(dto.pagesCount);
        if (dto.tags != null) {
            entity.setTags(dto.tags);
        }
    }
}
