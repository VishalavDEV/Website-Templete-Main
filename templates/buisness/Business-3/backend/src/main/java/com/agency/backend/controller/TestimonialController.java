package com.agency.backend.controller;

import com.agency.backend.entity.Testimonial;
import com.agency.backend.service.TestimonialService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/testimonials")
public class TestimonialController {

    @Autowired
    private TestimonialService testimonialService;

    @GetMapping
    public ResponseEntity<List<Testimonial>> getAllTestimonials() {
        return ResponseEntity.ok(testimonialService.getAllTestimonials());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Testimonial> getTestimonialById(@PathVariable Long id) {
        return testimonialService.getTestimonialById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Testimonial> createTestimonial(@Valid @RequestBody Testimonial testimonial) {
        Testimonial createdTestimonial = testimonialService.createTestimonial(testimonial);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTestimonial);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Testimonial> updateTestimonial(@PathVariable Long id, @Valid @RequestBody Testimonial testimonialDetails) {
        try {
            Testimonial updatedTestimonial = testimonialService.updateTestimonial(id, testimonialDetails);
            return ResponseEntity.ok(updatedTestimonial);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTestimonial(@PathVariable Long id) {
        try {
            testimonialService.deleteTestimonial(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
