package com.bencarson.portfolio.controller;

import com.bencarson.portfolio.dto.ApiResponseDto;
import com.bencarson.portfolio.dto.ContactRequestDto;
import com.bencarson.portfolio.service.PortfolioDataService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final PortfolioDataService portfolioDataService;

    public ContactController(PortfolioDataService portfolioDataService) {
        this.portfolioDataService = portfolioDataService;
    }

    @PostMapping
    public ResponseEntity<ApiResponseDto<Map<String, Object>>> submitContact(
            @Valid @RequestBody ContactRequestDto contactRequest
    ) {
        portfolioDataService.saveContactSubmission(contactRequest);
        Map<String, Object> result = new HashMap<>();
        result.put("name", contactRequest.name());
        result.put("email", contactRequest.email());
        result.put("received", true);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponseDto.success("Thank you! Your message has been received.", result));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponseDto<Map<String, String>>> handleValidationExceptions(
            MethodArgumentNotValidException ex
    ) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return ResponseEntity.badRequest()
                .body(new ApiResponseDto<>(false, "Validation failed", errors, java.time.LocalDateTime.now()));
    }
}
