package com.admin.dashboard.controller;

import com.admin.dashboard.entity.Message;
import com.admin.dashboard.entity.User;
import com.admin.dashboard.repository.MessageRepository;
import com.admin.dashboard.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.util.*;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    private final MessageRepository messageRepository;
    private final UserRepository userRepository;

    public MessageController(MessageRepository messageRepository, UserRepository userRepository) {
        this.messageRepository = messageRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/conversations")
    public ResponseEntity<?> getConversations(Principal principal) {
        String currentUsername = principal.getName();
        User currentUser = userRepository.findByUsername(currentUsername)
                .orElseThrow(() -> new EntityNotFoundException("Current user session not found"));

        List<String> convIds = messageRepository.findConversationIdsByUser(currentUser.getId());
        List<Map<String, Object>> summaries = new ArrayList<>();

        for (String cid : convIds) {
            Message lastMsg = messageRepository.findFirstByConversationIdOrderByTimestampDesc(cid);
            if (lastMsg == null) continue;

            User otherUser = lastMsg.getSender().getId().equals(currentUser.getId()) ? lastMsg.getReceiver() : lastMsg.getSender();
            if (otherUser == null) continue;

            Map<String, Object> summary = new HashMap<>();
            summary.put("conversationId", cid);
            summary.put("otherUser", Map.of(
                    "id", otherUser.getId(),
                    "username", otherUser.getUsername(),
                    "email", otherUser.getEmail(),
                    "role", otherUser.getRole().name(),
                    "profileImage", otherUser.getProfileImage() != null ? otherUser.getProfileImage() : ""
            ));
            summary.put("lastMessageText", lastMsg.getMessageText());
            summary.put("lastMessageTimestamp", lastMsg.getTimestamp());
            summary.put("unread", !lastMsg.getSender().getId().equals(currentUser.getId()) && !lastMsg.getIsRead());

            summaries.add(summary);
        }

        // Sort by last message timestamp descending
        summaries.sort((a, b) -> ((java.time.LocalDateTime) b.get("lastMessageTimestamp")).compareTo((java.time.LocalDateTime) a.get("lastMessageTimestamp")));

        return ResponseEntity.ok(summaries);
    }

    @GetMapping("/conversation/{conversationId}")
    public ResponseEntity<List<Message>> getConversationMessages(
            @PathVariable String conversationId,
            Principal principal) {

        String currentUsername = principal.getName();
        User currentUser = userRepository.findByUsername(currentUsername)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        List<Message> messages = messageRepository.findByConversationIdOrderByTimestampAsc(conversationId);

        // Mark incoming messages as read
        List<Message> toUpdate = new ArrayList<>();
        for (Message m : messages) {
            if (!m.getSender().getId().equals(currentUser.getId()) && !m.getIsRead()) {
                m.setIsRead(true);
                toUpdate.add(m);
            }
        }
        if (!toUpdate.isEmpty()) {
            messageRepository.saveAll(toUpdate);
        }

        return ResponseEntity.ok(messages);
    }

    @PostMapping
    public ResponseEntity<?> sendMessage(
            @RequestBody Map<String, String> body,
            Principal principal) {

        String currentUsername = principal.getName();
        User currentUser = userRepository.findByUsername(currentUsername)
                .orElseThrow(() -> new EntityNotFoundException("Sender user not found"));

        String receiverUsername = body.get("receiverUsername");
        String messageText = body.get("messageText");

        User receiverUser = userRepository.findByUsername(receiverUsername)
                .orElseThrow(() -> new EntityNotFoundException("Receiver user not found: " + receiverUsername));

        // Format conversation ID (smaller user ID first)
        String convId = currentUser.getId() < receiverUser.getId() ?
                currentUser.getId() + "_" + receiverUser.getId() :
                receiverUser.getId() + "_" + currentUser.getId();

        Message msg = Message.builder()
                .sender(currentUser)
                .receiver(receiverUser)
                .messageText(messageText)
                .conversationId(convId)
                .isRead(false)
                .build();

        return ResponseEntity.ok(messageRepository.save(msg));
    }
}
