package com.nexus.business.service;

import com.nexus.business.model.ContactRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * Service layer for contact enquiry processing.
 * Validates business logic, logs enquiry, and returns result.
 * No database interaction — purely in-memory processing.
 */
@Service
public class ContactService {

    private static final Logger logger = LoggerFactory.getLogger(ContactService.class);

    /**
     * Processes the contact form submission.
     * Logs the enquiry to the console for server-side visibility.
     *
     * @param request the validated contact form data
     * @return true if processed successfully
     */
    public boolean processContactEnquiry(ContactRequest request) {
        try {
            // Log the enquiry to server console
            logger.info("=== NEW CONTACT ENQUIRY ===");
            logger.info("Name    : {}", request.getName());
            logger.info("Email   : {}", request.getEmail());
            logger.info("Phone   : {}", request.getPhone() != null ? request.getPhone() : "N/A");
            logger.info("Company : {}", request.getCompany() != null ? request.getCompany() : "N/A");
            logger.info("Subject : {}", request.getSubject());
            logger.info("Message : {}", request.getMessage());
            logger.info("===========================");

            // Simulate brief processing (real-world: this would send an email)
            return true;

        } catch (Exception ex) {
            logger.error("Error processing contact enquiry from {}: {}", request.getEmail(), ex.getMessage());
            return false;
        }
    }
}
