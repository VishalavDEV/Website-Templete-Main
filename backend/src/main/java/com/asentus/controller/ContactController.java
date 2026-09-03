package com.asentus.controller;

import com.asentus.dto.ApiResponseDto;
import com.asentus.dto.ContactRequestDto;
import com.asentus.service.AsentusDataService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final AsentusDataService dataService;

    public ContactController(AsentusDataService dataService) {
        this.dataService = dataService;
    }

    @PostMapping
    public ResponseEntity<ApiResponseDto<Map<String, Object>>> submitContact(
            @Valid @RequestBody ContactRequestDto contactRequest
    ) {
        dataService.saveContactSubmission(contactRequest);

        Map<String, Object> result = new HashMap<>();
        result.put("name", contactRequest.name());
        result.put("email", contactRequest.email());
        result.put("received", true);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponseDto.success("Thank you! Your message has been received by the Asentus team.", result));
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

        String combinedMessage = errors.values().stream().collect(Collectors.joining(", "));

        return ResponseEntity.badRequest()
                .body(new ApiResponseDto<>(false, combinedMessage.isEmpty() ? "Validation failed" : combinedMessage, errors, java.time.LocalDateTime.now()));
    }
}