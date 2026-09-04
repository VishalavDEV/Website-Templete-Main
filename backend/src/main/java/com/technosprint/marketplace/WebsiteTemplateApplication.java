package com.technosprint.marketplace;

import com.technosprint.marketplace.entity.User;
import com.technosprint.marketplace.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class WebsiteTemplateApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebsiteTemplateApplication.class, args);
    }

    @Bean
    public CommandLineRunner initDefaultUsers(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            // Admin user 1
            userRepository.findByEmail("admin@technosprint.com").ifPresentOrElse(admin -> {
                admin.setPassword(passwordEncoder.encode("adminpassword"));
                admin.setRole("ROLE_ADMIN");
                userRepository.save(admin);
            }, () -> {
                User admin = User.builder()
                        .name("Admin User")
                        .email("admin@technosprint.com")
                        .password(passwordEncoder.encode("adminpassword"))
                        .role("ROLE_ADMIN")
                        .avatarUrl("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80")
                        .build();
                userRepository.save(admin);
            });

            // Admin user 2
            userRepository.findByEmail("admin@admin.com").ifPresentOrElse(admin -> {
                admin.setPassword(passwordEncoder.encode("adminpassword"));
                admin.setRole("ROLE_ADMIN");
                userRepository.save(admin);
            }, () -> {
                User admin = User.builder()
                        .name("Master Admin")
                        .email("admin@admin.com")
                        .password(passwordEncoder.encode("adminpassword"))
                        .role("ROLE_ADMIN")
                        .avatarUrl("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80")
                        .build();
                userRepository.save(admin);
            });

            // Demo regular user
            userRepository.findByEmail("user@technosprint.com").ifPresentOrElse(user -> {
                user.setPassword(passwordEncoder.encode("userpassword"));
                user.setRole("ROLE_USER");
                userRepository.save(user);
            }, () -> {
                User user = User.builder()
                        .name("Demo User")
                        .email("user@technosprint.com")
                        .password(passwordEncoder.encode("userpassword"))
                        .role("ROLE_USER")
                        .avatarUrl("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80")
                        .build();
                userRepository.save(user);
            });
        };
    }
}
