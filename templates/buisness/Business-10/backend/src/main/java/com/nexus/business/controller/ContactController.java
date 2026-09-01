package com.nexus.business.controller;

import com.nexus.business.model.ContactRequest;
import com.nexus.business.response.ApiResponse;
import com.nexus.business.service.ContactService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * REST controller for contact form submissions.
 * Endpoint: POST /api/contact
 */
@RestController
@RequestMapping("/api")
public class ContactController {

    private static final Logger logger = LoggerFactory.getLogger(ContactController.class);

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    /**
     * Handles contact form submissions.
     *
     * @param request validated contact form data
     * @return JSON ApiResponse with success/failure status
     */
    @PostMapping("/contact")
    public ResponseEntity<ApiResponse> submitContact(@Valid @RequestBody ContactRequest request) {
        logger.info("Received contact form submission from: {}", request.getEmail());

        boolean processed = contactService.processContactEnquiry(request);

        if (processed) {
            return ResponseEntity.ok(
                ApiResponse.ok("Your enquiry has been submitted successfully. We'll get back to you within 24 hours!")
            );
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ApiResponse.error("We couldn't process your request. Please try again later."));
        }
    }

    /**
     * Health check endpoint.
     */
    @GetMapping("/health")
    public ResponseEntity<ApiResponse> health() {
        return ResponseEntity.ok(ApiResponse.ok("NeXus Digital API is running"));
    }

    /**
     * Handles Bean Validation errors and returns clean field-level error messages.
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<Map<String, Object>> handleValidationErrors(MethodArgumentNotValidException ex) {
        Map<String, String> fieldErrors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            fieldErrors.put(fieldName, errorMessage);
        });

        Map<String, Object> response = new HashMap<>();
        response.put("success", false);
        response.put("message", "Validation failed. Please check the highlighted fields.");
        response.put("errors", fieldErrors);

        logger.warn("Validation failed for contact submission: {}", fieldErrors);
        return ResponseEntity.badRequest().body(response);
    }

    /**
     * Catch-all exception handler for unexpected server errors.
     */
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<ApiResponse> handleGenericError(Exception ex) {
        logger.error("Unexpected error in ContactController: {}", ex.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(ApiResponse.error("An unexpected error occurred. Please try again."));
    }
}
