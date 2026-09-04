package com.technosprint.marketplace.service;

import com.technosprint.marketplace.dto.ContactRequest;
import com.technosprint.marketplace.entity.ContactMessage;
import com.technosprint.marketplace.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactMessageRepository contactMessageRepository;

    @Transactional
    public ContactMessage submitContactMessage(ContactRequest request) {
        ContactMessage msg = ContactMessage.builder()
                .name(request.getName())
                .email(request.getEmail().toLowerCase().trim())
                .subject(request.getSubject())
                .message(request.getMessage())
                .status("UNREAD")
                .build();

        return contactMessageRepository.save(msg);
    }

    @Transactional(readOnly = true)
    public List<ContactMessage> getAllMessages() {
        return contactMessageRepository.findByOrderByCreatedAtDesc();
    }
}
