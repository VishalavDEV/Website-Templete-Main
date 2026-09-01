package com.example.demo.controller;

import com.example.demo.model.Message;
import com.example.demo.service.MockDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "http://localhost:5173")
public class MessageController {

    @Autowired
    private MockDataService mockDataService;

    // Retrieve all messages
    @GetMapping
    public List<Message> getAllMessages() {
        return mockDataService.getAllMessages();
    }

    // Retrieve specific conversation's thread
    @GetMapping("/chat/{chatId}")
    public List<Message> getThread(@PathVariable String chatId) {
        return mockDataService.getMessagesByChatId(chatId);
    }

    // Get active conversation summaries (last message, sender, avatar, unread info)
    @GetMapping("/conversations")
    public List<Map<String, Object>> getConversations() {
        List<Message> allMessages = mockDataService.getAllMessages();
        Map<String, List<Message>> groupedByChat = allMessages.stream()
                .collect(Collectors.groupingBy(Message::getChatId));

        List<Map<String, Object>> conversations = new ArrayList<>();

        for (Map.Entry<String, List<Message>> entry : groupedByChat.entrySet()) {
            String chatId = entry.getKey();
            List<Message> chatMessages = entry.getValue();

            // Sort chatMessages by timestamp/ID to find the last message.
            // In our seeded data, higher index is later, but let's sort to be safe
            chatMessages.sort(Comparator.comparing(Message::getId));
            Message lastMsg = chatMessages.get(chatMessages.size() - 1);

            // Calculate unread count (messages sent by customer that are not read)
            long unreadCount = chatMessages.stream()
                    .filter(m -> !m.getIsAdmin() && !m.isRead())
                    .count();

            // Find the customer's name and avatar (which is not Admin)
            String senderName = "User";
            String avatar = "U";
            for (Message m : chatMessages) {
                if (!m.getIsAdmin()) {
                    senderName = m.getSenderName();
                    avatar = m.getAvatar();
                    break;
                }
            }

            Map<String, Object> conv = new HashMap<>();
            conv.put("chatId", chatId);
            conv.put("senderName", senderName);
            conv.put("avatar", avatar);
            conv.put("lastMessage", lastMsg.getContent());
            conv.put("timestamp", lastMsg.getTimestamp());
            conv.put("unreadCount", unreadCount);
            conversations.add(conv);
        }

        // Sort conversations so that the ones with newer messages (or ID) appear first
        conversations.sort((a, b) -> ((String) b.get("chatId")).compareTo((String) a.get("chatId")));

        return conversations;
    }

    // Post a message
    @PostMapping
    public Message sendMessage(@RequestBody Message message) {
        return mockDataService.addMessage(message);
    }

    // Mark messages in a chat thread as read
    @PutMapping("/chat/{chatId}/read")
    public ResponseEntity<Void> markChatAsRead(@PathVariable String chatId) {
        List<Message> thread = mockDataService.getMessagesByChatId(chatId);
        for (Message m : thread) {
            if (!m.getIsAdmin()) {
                m.setRead(true);
            }
        }
        return ResponseEntity.ok().build();
    }
}
