package com.example.education.service;

import com.example.education.model.ContactRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private static final Logger logger = LoggerFactory.getLogger(ContactService.class);

    /**
     * Processes the contact form submission.
     * Logs the contact information to the console.
     * No database persistence — by design.
     *
     * @param request the contact form data
     */
    public void processContact(ContactRequest request) {
        logger.info("=================================================");
        logger.info("         NEW CONTACT FORM SUBMISSION             ");
        logger.info("=================================================");
        logger.info("Name    : {}", request.getName());
        logger.info("Email   : {}", request.getEmail());
        logger.info("Phone   : {}", request.getPhone());
        logger.info("Subject : {}", request.getSubject());
        logger.info("Message : {}", request.getMessage());
        logger.info("=================================================");
    }
}
