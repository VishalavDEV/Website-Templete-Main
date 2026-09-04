package com.technosprint.marketplace.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "newsletter_subscribers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NewsletterSubscriber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 191)
    private String email;

    @Column(length = 50)
    @Builder.Default
    private String status = "SUBSCRIBED";

    @CreationTimestamp
    @Column(name = "subscribed_at", updatable = false)
    private LocalDateTime subscribedAt;
}
