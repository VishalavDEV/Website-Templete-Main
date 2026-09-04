package com.technosprint.marketplace.service;

import com.technosprint.marketplace.dto.CategoryNestedDto;
import com.technosprint.marketplace.dto.TemplateDto;
import com.technosprint.marketplace.dto.TemplatePageResponse;
import com.technosprint.marketplace.entity.Category;
import com.technosprint.marketplace.entity.DownloadRecord;
import com.technosprint.marketplace.entity.Template;
import com.technosprint.marketplace.entity.User;
import com.technosprint.marketplace.exception.BadRequestException;
import com.technosprint.marketplace.exception.ResourceNotFoundException;
import com.technosprint.marketplace.repository.CategoryRepository;
import com.technosprint.marketplace.repository.DownloadRecordRepository;
import com.technosprint.marketplace.repository.TemplateRepository;
import com.technosprint.marketplace.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TemplateService {

    private final TemplateRepository templateRepository;
    private final CategoryRepository categoryRepository;
    private final DownloadRecordRepository downloadRecordRepository;
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public List<TemplateDto> getAllTemplates(String category, String type, String search, String sort) {
        Sort sortOrder = getSortOrder(sort);
        Pageable pageable = PageRequest.of(0, 500, sortOrder);

        Page<Template> page = templateRepository.searchAndFilter(category, type, search, pageable);
        return page.getContent().stream().map(this::mapToDto).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public TemplatePageResponse getPagedTemplates(String category, String type, String search, String sort, int page, int size) {
        Sort sortOrder = getSortOrder(sort);
        Pageable pageable = PageRequest.of(page, size, sortOrder);

        Page<Template> templatePage = templateRepository.searchAndFilter(category, type, search, pageable);

        return TemplatePageResponse.builder()
                .content(templatePage.getContent().stream().map(this::mapToDto).collect(Collectors.toList()))
                .page(templatePage.getNumber())
                .size(templatePage.getSize())
                .totalElements(templatePage.getTotalElements())
                .totalPages(templatePage.getTotalPages())
                .last(templatePage.isLast())
                .build();
    }

    @Transactional(readOnly = true)
    public TemplateDto getTemplateById(Long id) {
        Template template = templateRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Template", "id", id));
        return mapToDto(template);
    }

    @Transactional(readOnly = true)
    public TemplateDto getTemplateBySlug(String slug) {
        Template template = templateRepository.findBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException("Template", "slug", slug));
        return mapToDto(template);
    }

    @Transactional(readOnly = true)
    public List<TemplateDto> getTemplatesByCategory(String categorySlug) {
        List<Template> templates = templateRepository.findByCategorySlug(categorySlug);
        return templates.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<TemplateDto> getFeaturedTemplates() {
        return templateRepository.findByFeaturedTrue().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<TemplateDto> getPopularTemplates() {
        return templateRepository.findByPopularTrue().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<TemplateDto> searchTemplates(String query) {
        if (query == null || query.trim().isEmpty()) {
            return getAllTemplates(null, null, null, null);
        }
        return templateRepository.searchByQuery(query.trim()).stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public TemplateDto recordDownload(Long templateId, Long userId, String ipAddress) {
        Template template = templateRepository.findById(templateId)
                .orElseThrow(() -> new ResourceNotFoundException("Template", "id", templateId));

        template.setDownloadsCount(template.getDownloadsCount() + 1);
        Template updated = templateRepository.save(template);

        User user = (userId != null) ? userRepository.findById(userId).orElse(null) : null;

        DownloadRecord record = DownloadRecord.builder()
                .template(template)
                .user(user)
                .ipAddress(ipAddress)
                .downloadToken(UUID.randomUUID().toString())
                .build();

        downloadRecordRepository.save(record);

        return mapToDto(updated);
    }

    @Transactional
    public TemplateDto createTemplate(TemplateDto dto) {
        if (templateRepository.findBySlug(dto.getSlug()).isPresent()) {
            throw new BadRequestException("Template slug already exists: " + dto.getSlug());
        }

        Category category = null;
        if (dto.getCategory() != null && dto.getCategory().getSlug() != null) {
            category = categoryRepository.findBySlug(dto.getCategory().getSlug())
                    .orElseGet(() -> categoryRepository.findAll().stream().findFirst().orElse(null));
        } else {
            category = categoryRepository.findAll().stream().findFirst()
                    .orElseThrow(() -> new BadRequestException("No categories exist to associate with template"));
        }

        Template template = Template.builder()
                .category(category)
                .name(dto.getName())
                .slug(dto.getSlug())
                .description(dto.getDescription())
                .detailedDescription(dto.getDetailedDescription())
                .previewImage(dto.getPreviewImage())
                .demoUrl(dto.getDemoUrl())
                .downloadFile(dto.getDownloadFile())
                .githubUrl(dto.getGithubUrl())
                .author(dto.getAuthor() != null ? dto.getAuthor() : "TechnoSprint Studio")
                .version(dto.getVersion() != null ? dto.getVersion() : "1.0.0")
                .bootstrapVersion(dto.getBootstrapVersion() != null ? dto.getBootstrapVersion() : "React / Vite / CSS")
                .templateType(dto.getTemplateType() != null ? dto.getTemplateType() : "FREE")
                .price(dto.getPrice())
                .pagesCount(dto.getPagesCount() != null ? dto.getPagesCount() : 8)
                .downloadsCount(0)
                .views(0)
                .rating(dto.getRating() != null ? dto.getRating() : 5.0)
                .status(dto.getStatus() != null ? dto.getStatus() : "PUBLISHED")
                .responsive(dto.getResponsive() != null ? dto.getResponsive() : true)
                .animated(dto.getAnimated() != null ? dto.getAnimated() : true)
                .featured(dto.getFeatured() != null ? dto.getFeatured() : false)
                .popular(dto.getPopular() != null ? dto.getPopular() : false)
                .build();

        Template saved = templateRepository.save(template);
        return mapToDto(saved);
    }

    @Transactional
    public TemplateDto updateTemplate(Long id, TemplateDto dto) {
        Template template = templateRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Template", "id", id));

        if (dto.getName() != null) template.setName(dto.getName());
        if (dto.getSlug() != null) template.setSlug(dto.getSlug());
        if (dto.getDescription() != null) template.setDescription(dto.getDescription());
        if (dto.getDetailedDescription() != null) template.setDetailedDescription(dto.getDetailedDescription());
        if (dto.getPreviewImage() != null) template.setPreviewImage(dto.getPreviewImage());
        if (dto.getDemoUrl() != null) template.setDemoUrl(dto.getDemoUrl());
        if (dto.getDownloadFile() != null) template.setDownloadFile(dto.getDownloadFile());
        if (dto.getGithubUrl() != null) template.setGithubUrl(dto.getGithubUrl());
        if (dto.getAuthor() != null) template.setAuthor(dto.getAuthor());
        if (dto.getVersion() != null) template.setVersion(dto.getVersion());
        if (dto.getBootstrapVersion() != null) template.setBootstrapVersion(dto.getBootstrapVersion());
        if (dto.getTemplateType() != null) template.setTemplateType(dto.getTemplateType());
        if (dto.getPrice() != null) template.setPrice(dto.getPrice());
        if (dto.getPagesCount() != null) template.setPagesCount(dto.getPagesCount());
        if (dto.getRating() != null) template.setRating(dto.getRating());
        if (dto.getStatus() != null) template.setStatus(dto.getStatus());
        if (dto.getResponsive() != null) template.setResponsive(dto.getResponsive());
        if (dto.getAnimated() != null) template.setAnimated(dto.getAnimated());
        if (dto.getFeatured() != null) template.setFeatured(dto.getFeatured());
        if (dto.getPopular() != null) template.setPopular(dto.getPopular());

        if (dto.getCategory() != null && dto.getCategory().getSlug() != null) {
            categoryRepository.findBySlug(dto.getCategory().getSlug())
                    .ifPresent(template::setCategory);
        }

        Template updated = templateRepository.save(template);
        return mapToDto(updated);
    }

    @Transactional
    public void deleteTemplate(Long id) {
        Template template = templateRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Template", "id", id));
        templateRepository.delete(template);
    }

    private Sort getSortOrder(String sort) {
        if (sort == null) return Sort.by(Sort.Direction.DESC, "id");
        return switch (sort.toLowerCase()) {
            case "popular", "downloads" -> Sort.by(Sort.Direction.DESC, "downloadsCount");
            case "rating" -> Sort.by(Sort.Direction.DESC, "rating");
            case "price_asc", "price-low" -> Sort.by(Sort.Direction.ASC, "price");
            case "price_desc", "price-high" -> Sort.by(Sort.Direction.DESC, "price");
            case "newest", "created_at" -> Sort.by(Sort.Direction.DESC, "createdAt");
            default -> Sort.by(Sort.Direction.DESC, "id");
        };
    }

    public TemplateDto mapToDto(Template t) {
        CategoryNestedDto categoryNested = null;
        if (t.getCategory() != null) {
            categoryNested = CategoryNestedDto.builder()
                    .id(t.getCategory().getId())
                    .name(t.getCategory().getName())
                    .slug(t.getCategory().getSlug())
                    .build();
        }

        List<String> tagList = null;
        if (t.getTags() != null && !t.getTags().isEmpty()) {
            tagList = t.getTags().stream().map(tag -> tag.getName()).collect(Collectors.toList());
        }

        return TemplateDto.builder()
                .id(t.getId())
                .name(t.getName())
                .slug(t.getSlug())
                .description(t.getDescription())
                .detailedDescription(t.getDetailedDescription())
                .category(categoryNested)
                .templateType(t.getTemplateType())
                .price(t.getPrice())
                .pagesCount(t.getPagesCount())
                .downloadsCount(t.getDownloadsCount())
                .bootstrapVersion(t.getBootstrapVersion())
                .version(t.getVersion())
                .status(t.getStatus())
                .rating(t.getRating())
                .responsive(t.getResponsive())
                .animated(t.getAnimated())
                .previewImage(t.getPreviewImage())
                .demoUrl(t.getDemoUrl())
                .downloadFile(t.getDownloadFile())
                .githubUrl(t.getGithubUrl())
                .author(t.getAuthor())
                .views(t.getViews())
                .featured(t.getFeatured())
                .popular(t.getPopular())
                .tags(tagList)
                .createdAt(t.getCreatedAt())
                .updatedAt(t.getUpdatedAt())
                .build();
    }
}
