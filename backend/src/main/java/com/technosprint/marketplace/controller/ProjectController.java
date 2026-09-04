package com.technosprint.marketplace.controller;

import com.technosprint.marketplace.dto.ApiResponse;
import com.technosprint.marketplace.dto.ProjectDto;
import com.technosprint.marketplace.entity.Project;
import com.technosprint.marketplace.entity.Template;
import com.technosprint.marketplace.entity.User;
import com.technosprint.marketplace.exception.ResourceNotFoundException;
import com.technosprint.marketplace.repository.ProjectRepository;
import com.technosprint.marketplace.repository.TemplateRepository;
import com.technosprint.marketplace.repository.UserRepository;
import com.technosprint.marketplace.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectRepository projectRepository;
    private final TemplateRepository templateRepository;
    private final UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<ProjectDto>> getMyProjects(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        if (userPrincipal == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        List<Project> projects = projectRepository.findByUserIdOrderByCreatedAtDesc(userPrincipal.getId());
        return ResponseEntity.ok(projects.stream().map(this::mapToDto).collect(Collectors.toList()));
    }

    @PostMapping
    public ResponseEntity<ProjectDto> saveProject(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @RequestBody Map<String, Object> body) {
        if (userPrincipal == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));

        String projectName = (String) body.getOrDefault("projectName", "New Project");
        Long templateId = body.get("templateId") != null ? Long.valueOf(body.get("templateId").toString()) : 1L;
        String projectData = body.get("projectData") != null ? body.get("projectData").toString() : "{}";

        Template template = templateRepository.findById(templateId)
                .orElseGet(() -> templateRepository.findAll().stream().findFirst().orElse(null));

        Project project = Project.builder()
                .user(user)
                .template(template)
                .name(projectName)
                .customSettings(projectData)
                .status("Draft")
                .build();

        Project saved = projectRepository.save(project);
        return ResponseEntity.status(HttpStatus.CREATED).body(mapToDto(saved));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProjectDto> updateProject(
            @PathVariable Long id,
            @RequestBody Map<String, Object> body) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project", "id", id));

        if (body.containsKey("projectName")) {
            project.setName((String) body.get("projectName"));
        }
        if (body.containsKey("projectData")) {
            project.setCustomSettings(body.get("projectData").toString());
        }
        if (body.containsKey("status")) {
            project.setStatus((String) body.get("status"));
        }

        Project saved = projectRepository.save(project);
        return ResponseEntity.ok(mapToDto(saved));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteProject(@PathVariable Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project", "id", id));
        projectRepository.delete(project);
        return ResponseEntity.ok(ApiResponse.builder().success(true).message("Project deleted successfully").build());
    }

    @PostMapping("/{id}/export")
    public ResponseEntity<byte[]> exportProject(@PathVariable Long id) {
        byte[] dummyZip = new byte[]{0x50, 0x4B, 0x05, 0x06, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header("Content-Disposition", "attachment; filename=\"project-" + id + ".zip\"")
                .body(dummyZip);
    }

    private ProjectDto mapToDto(Project project) {
        return ProjectDto.builder()
                .id(project.getId())
                .templateId(project.getTemplate() != null ? project.getTemplate().getId() : null)
                .templateName(project.getTemplate() != null ? project.getTemplate().getName() : "")
                .templateSlug(project.getTemplate() != null ? project.getTemplate().getSlug() : "")
                .previewImage(project.getTemplate() != null ? project.getTemplate().getPreviewImage() : "")
                .name(project.getName())
                .status(project.getStatus())
                .customSettings(project.getCustomSettings())
                .createdAt(project.getCreatedAt())
                .updatedAt(project.getUpdatedAt())
                .build();
    }
}
