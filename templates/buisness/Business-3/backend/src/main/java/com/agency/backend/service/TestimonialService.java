package com.agency.backend.service;

import com.agency.backend.entity.Testimonial;
import com.agency.backend.repository.TestimonialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TestimonialService {

    @Autowired
    private TestimonialRepository testimonialRepository;

    public List<Testimonial> getAllTestimonials() {
        return testimonialRepository.findAll();
    }

    public Optional<Testimonial> getTestimonialById(Long id) {
        return testimonialRepository.findById(id);
    }

    public Testimonial createTestimonial(Testimonial testimonial) {
        return testimonialRepository.save(testimonial);
    }

    public Testimonial updateTestimonial(Long id, Testimonial testimonialDetails) {
        Testimonial testimonial = testimonialRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Testimonial not found with id: " + id));
        
        testimonial.setClientName(testimonialDetails.getClientName());
        testimonial.setClientPosition(testimonialDetails.getClientPosition());
        testimonial.setClientCompany(testimonialDetails.getClientCompany());
        testimonial.setClientAvatarUrl(testimonialDetails.getClientAvatarUrl());
        testimonial.setRating(testimonialDetails.getRating());
        testimonial.setContent(testimonialDetails.getContent());
        
        return testimonialRepository.save(testimonial);
    }

    public void deleteTestimonial(Long id) {
        Testimonial testimonial = testimonialRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Testimonial not found with id: " + id));
        testimonialRepository.delete(testimonial);
    }
}
