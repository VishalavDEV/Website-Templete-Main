package com.bluecore.showroom.service;

import com.bluecore.showroom.model.ContactMessage;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class ContactService {
    private final List<ContactMessage> messages = new ArrayList<>();

    public ContactMessage saveMessage(ContactMessage message) {
        message.setCreatedAt(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
        messages.add(message);
        return message;
    }

    public List<ContactMessage> getAllMessages() {
        return messages;
    }
}
