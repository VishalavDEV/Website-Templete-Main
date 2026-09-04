package com.technosprint.marketplace.service;

import com.technosprint.marketplace.dto.NewsletterRequest;
import com.technosprint.marketplace.entity.NewsletterSubscriber;
import com.technosprint.marketplace.repository.NewsletterSubscriberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class NewsletterService {

    private final NewsletterSubscriberRepository newsletterSubscriberRepository;

    @Transactional
    public NewsletterSubscriber subscribe(NewsletterRequest request) {
        String email = request.getEmail().toLowerCase().trim();
        return newsletterSubscriberRepository.findByEmail(email)
                .orElseGet(() -> newsletterSubscriberRepository.save(
                        NewsletterSubscriber.builder()
                                .email(email)
                                .status("SUBSCRIBED")
                                .build()
                ));
    }
}
