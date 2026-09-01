package com.admin.dashboard.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "messages")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "sender_id", nullable = false)
    private User sender;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "receiver_id") // Nullable if broadcast or system
    private User receiver;

    @Column(name = "message_text", nullable = false, columnDefinition = "TEXT")
    private String messageText;

    private LocalDateTime timestamp;

    @Column(name = "is_read")
    private Boolean isRead = false;

    @Column(name = "conversation_id", nullable = false)
    private String conversationId;

    @PrePersist
    protected void onCreate() {
        this.timestamp = LocalDateTime.now();
        if (this.isRead == null) {
            this.isRead = false;
        }
    }
}
