package com.agency.backend.service;

import com.agency.backend.entity.ContactEnquiry;
import com.agency.backend.repository.ContactEnquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    @Autowired
    private ContactEnquiryRepository enquiryRepository;

    public ContactEnquiry saveEnquiry(ContactEnquiry enquiry) {
        return enquiryRepository.save(enquiry);
    }

    public List<ContactEnquiry> getAllEnquiries() {
        return enquiryRepository.findAllByOrderBySubmittedAtDesc();
    }

    public void deleteEnquiry(Long id) {
        ContactEnquiry enquiry = enquiryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Enquiry not found with id: " + id));
        enquiryRepository.delete(enquiry);
    }
}
