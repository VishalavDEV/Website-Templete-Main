package com.lumora.backend.service;

import com.lumora.backend.dto.ContactRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private static final Logger logger = LoggerFactory.getLogger(ContactService.class);

    private final JavaMailSender mailSender;

    public ContactService(@Autowired(required = false) JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void processContactSubmission(ContactRequest request) {
        logger.info("==========================================");
        logger.info("RECEIVED CONTACT FORM SUBMISSION:");
        logger.info("Name   : {}", request.getName());
        logger.info("Email  : {}", request.getEmail());
        logger.info("Message: {}", request.getMessage());
        logger.info("==========================================");

        if (mailSender != null) {
            try {
                SimpleMailMessage message = new SimpleMailMessage();
                // Send the message to the default Lumora Labs address
                message.setTo("build@lumora.labs");
                message.setSubject("Lumora Labs - Contact Request from " + request.getName());
                message.setText(String.format(
                    "New contact submission received:\n\nName: %s\nEmail: %s\nMessage:\n%s\n",
                    request.getName(), request.getEmail(), request.getMessage()
                ));
                // Note: spring mail sender requires a valid "from" address
                message.setFrom("no-reply@lumora.labs");
                message.setReplyTo(request.getEmail());
                
                mailSender.send(message);
                logger.info("Email notification successfully sent.");
            } catch (Exception e) {
                logger.error("Failed to send email (SMTP host might be unconfigured/offline). Fallback: message logged to console. Error: {}", e.getMessage());
            }
        } else {
            logger.info("SMTP MailSender is not configured. Submission is saved to server log.");
        }
    }
}
