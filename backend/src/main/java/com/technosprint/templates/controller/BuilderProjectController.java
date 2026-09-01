package com.technosprint.templates.controller;

import com.technosprint.templates.entity.*;
import com.technosprint.templates.repository.BuilderProjectRepository;
import com.technosprint.templates.repository.TemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.io.ByteArrayOutputStream;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@RestController
@RequestMapping("/api/projects")
public class BuilderProjectController {

    @Autowired
    private BuilderProjectRepository builderProjectRepository;

    @Autowired
    private TemplateRepository templateRepository;

    private User getCurrentUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof User) {
            return (User) principal;
        }
        return null;
    }

    public static class ProjectRequest {
        public String projectName;
        public Long templateId;
        public String projectData; // JSON layout
    }

    @GetMapping
    public ResponseEntity<?> getMyProjects() {
        User user = getCurrentUser();
        if (user == null) {
            return ResponseEntity.status(401).body(Map.of("message", "User must be logged in!"));
        }
        List<BuilderProject> projects = builderProjectRepository.findByUserOrderByUpdatedAtDesc(user);
        return ResponseEntity.ok(projects);
    }

    @PostMapping
    public ResponseEntity<?> createProject(@RequestBody ProjectRequest request) {
        User user = getCurrentUser();
        if (user == null) {
            return ResponseEntity.status(401).body(Map.of("message", "User must be logged in!"));
        }

        Template template = null;
        if (request.templateId != null) {
            template = templateRepository.findById(request.templateId).orElse(null);
        }

        BuilderProject project = new BuilderProject();
        project.setUser(user);
        project.setProjectName(request.projectName);
        project.setTemplate(template);
        project.setProjectData(request.projectData);
        project.setStatus("DRAFT");

        BuilderProject saved = builderProjectRepository.save(project);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateProject(@PathVariable Long id, @RequestBody ProjectRequest request) {
        User user = getCurrentUser();
        if (user == null) {
            return ResponseEntity.status(401).body(Map.of("message", "User must be logged in!"));
        }

        BuilderProject project = builderProjectRepository.findById(id).orElse(null);
        if (project == null) {
            return ResponseEntity.notFound().build();
        }

        if (!project.getUser().getId().equals(user.getId())) {
            return ResponseEntity.status(403).body(Map.of("message", "Access denied: Project does not belong to you!"));
        }

        project.setProjectName(request.projectName);
        project.setProjectData(request.projectData);
        project.setStatus("DRAFT");
        
        BuilderProject updated = builderProjectRepository.save(project);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable Long id) {
        User user = getCurrentUser();
        if (user == null) {
            return ResponseEntity.status(401).body(Map.of("message", "User must be logged in!"));
        }

        BuilderProject project = builderProjectRepository.findById(id).orElse(null);
        if (project == null) {
            return ResponseEntity.notFound().build();
        }

        if (!project.getUser().getId().equals(user.getId())) {
            return ResponseEntity.status(403).body(Map.of("message", "Access denied: Project does not belong to you!"));
        }

        builderProjectRepository.delete(project);
        return ResponseEntity.ok(Map.of("message", "Project deleted successfully!"));
    }

    @PostMapping("/{id}/export")
    public ResponseEntity<?> exportProject(@PathVariable Long id) {
        User user = getCurrentUser();
        if (user == null) {
            return ResponseEntity.status(401).body(Map.of("message", "User must be logged in!"));
        }

        BuilderProject project = builderProjectRepository.findById(id).orElse(null);
        if (project == null) {
            return ResponseEntity.notFound().build();
        }

        if (!project.getUser().getId().equals(user.getId())) {
            return ResponseEntity.status(403).body(Map.of("message", "Access denied: Project does not belong to you!"));
        }

        // Simulating the compilation of code from layout data
        try {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ZipOutputStream zos = new ZipOutputStream(baos);

            // Add index.html based on configuration
            ZipEntry indexEntry = new ZipEntry("index.html");
            zos.putNextEntry(indexEntry);
            
            // Extract some basic variables from projectData JSON (mock compiling)
            String projectName = project.getProjectName();
            String htmlContent = "<!DOCTYPE html>\n" +
                    "<html lang=\"en\">\n" +
                    "<head>\n" +
                    "    <meta charset=\"UTF-8\">\n" +
                    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                    "    <title>" + projectName + " | Customized Template</title>\n" +
                    "    <link rel=\"stylesheet\" href=\"style.css\">\n" +
                    "    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n" +
                    "        <div class=\"container\">\n" +
                    "            <a class=\"navbar-brand\" href=\"#\">" + projectName + "</a>\n" +
                    "        </div>\n" +
                    "    </nav>\n" +
                    "    <header class=\"bg-primary text-white text-center py-5\">\n" +
                    "        <div class=\"container\">\n" +
                    "            <h1 class=\"display-4\">Welcome to " + projectName + "</h1>\n" +
                    "            <p class=\"lead\">Customized website built online via TechnoSprint Templates.</p>\n" +
                    "        </div>\n" +
                    "    </header>\n" +
                    "    <main class=\"container my-5\">\n" +
                    "        <div class=\"row\">\n" +
                    "            <div class=\"col-md-8 mx-auto\">\n" +
                    "                <h2>Get in Touch</h2>\n" +
                    "                <p>Use the PHP form below to contact us. This form connects to contact.php for processing.</p>\n" +
                    "                <form action=\"contact.php\" method=\"POST\" class=\"card p-4 shadow-sm\">\n" +
                    "                    <div class=\"mb-3\">\n" +
                    "                        <label class=\"form-label\">Name</label>\n" +
                    "                        <input type=\"text\" name=\"name\" class=\"form-control\" required>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"mb-3\">\n" +
                    "                        <label class=\"form-label\">Email address</label>\n" +
                    "                        <input type=\"email\" name=\"email\" class=\"form-control\" required>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"mb-3\">\n" +
                    "                        <label class=\"form-label\">Message</label>\n" +
                    "                        <textarea name=\"message\" class=\"form-control\" rows=\"4\" required></textarea>\n" +
                    "                    </div>\n" +
                    "                    <button type=\"submit\" class=\"btn btn-primary w-100\">Send Message</button>\n" +
                    "                </form>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </main>\n" +
                    "    <footer class=\"bg-dark text-white text-center py-3\">\n" +
                    "        <p>&copy; " + LocalDateTime.now().getYear() + " " + projectName + ". All Rights Reserved.</p>\n" +
                    "    </footer>\n" +
                    "</body>\n" +
                    "</html>";
            
            zos.write(htmlContent.getBytes());
            zos.closeEntry();

            // Add style.css
            ZipEntry cssEntry = new ZipEntry("style.css");
            zos.putNextEntry(cssEntry);
            String cssContent = "body { font-family: 'Inter', sans-serif; background-color: #f8f9fa; color: #212529; }\n" +
                    ".navbar-brand { font-weight: 700; letter-spacing: -0.5px; }\n" +
                    "header { background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%); }\n" +
                    "footer { font-size: 0.9rem; }";
            zos.write(cssContent.getBytes());
            zos.closeEntry();

            // Add contact.php (PHP specific form processing script!)
            ZipEntry phpEntry = new ZipEntry("contact.php");
            zos.putNextEntry(phpEntry);
            String phpContent = "<?php\n" +
                    "if ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n" +
                    "    $name = strip_tags(trim($_POST[\"name\"]));\n" +
                    "    $email = filter_var(trim($_POST[\"email\"]), FILTER_SANITIZE_EMAIL);\n" +
                    "    $message = trim($_POST[\"message\"]);\n" +
                    "\n" +
                    "    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {\n" +
                    "        http_response_code(400);\n" +
                    "        echo \"Please complete the form and try again.\";\n" +
                    "        exit;\n" +
                    "    }\n" +
                    "\n" +
                    "    // Set recipient, subject and headers\n" +
                    "    $recipient = \"admin@example.com\";\n" +
                    "    $subject = \"New contact message from $name\";\n" +
                    "    $email_content = \"Name: $name\\n\";\n" +
                    "    $email_content .= \"Email: $email\\n\\n\";\n" +
                    "    $email_content .= \"Message:\\n$message\\n\";\n" +
                    "    $email_headers = \"From: $name <$email>\";\n" +
                    "\n" +
                    "    // Simulated sending\n" +
                    "    http_response_code(200);\n" +
                    "    echo \"Thank you! Your message has been sent successfully.\";\n" +
                    "} else {\n" +
                    "    http_response_code(403);\n" +
                    "    echo \"There was a problem with your submission, please try again.\";\n" +
                    "}\n" +
                    "?>";
            zos.write(phpContent.getBytes());
            zos.closeEntry();

            zos.close();

            byte[] zipBytes = baos.toByteArray();

            // Mark project as EXPORTED
            project.setStatus("EXPORTED");
            builderProjectRepository.save(project);

            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType("application/zip"))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + project.getProjectName().replaceAll("\\s+", "_") + "_customized.zip\"")
                    .body(zipBytes);

        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("message", "Error exporting project: " + e.getMessage()));
        }
    }
}
