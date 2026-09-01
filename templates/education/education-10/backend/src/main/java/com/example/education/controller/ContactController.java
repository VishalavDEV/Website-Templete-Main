package com.example.education.controller;

import com.example.education.model.ContactRequest;
import com.example.education.response.ApiResponse;
import com.example.education.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ContactController {

    @Autowired
    private ContactService contactService;

    /**
     * POST /api/contact
     * Accepts and validates a contact form submission.
     */
    @PostMapping("/contact")
    public ResponseEntity<ApiResponse> submitContact(@Valid @RequestBody ContactRequest request) {
        contactService.processContact(request);
        return ResponseEntity.ok(
            new ApiResponse(true, "Your message has been submitted successfully. We will get back to you soon!")
        );
    }

    /**
     * Health check endpoint
     */
    @GetMapping("/health")
    public ResponseEntity<ApiResponse> health() {
        return ResponseEntity.ok(new ApiResponse(true, "Education Platform API is running"));
    }

    /**
     * Global validation error handler
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}
