package com.aura.backend.config;

import com.aura.backend.model.Product;
import com.aura.backend.model.User;
import com.aura.backend.model.Coupon;
import com.aura.backend.model.Review;
import com.aura.backend.repository.ProductRepository;
import com.aura.backend.repository.UserRepository;
import com.aura.backend.repository.CouponRepository;
import com.aura.backend.repository.ReviewRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final CouponRepository couponRepository;
    private final ReviewRepository reviewRepository;
    private final PasswordEncoder passwordEncoder;

    public DataSeeder(ProductRepository productRepository, UserRepository userRepository, 
                      CouponRepository couponRepository, ReviewRepository reviewRepository,
                      PasswordEncoder passwordEncoder) {
        this.productRepository = productRepository;
        this.userRepository = userRepository;
        this.couponRepository = couponRepository;
        this.reviewRepository = reviewRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        // Seed default user if not exists
        User defaultUser = null;
        if (!userRepository.existsByUsername("user")) {
            defaultUser = new User(
                    "user",
                    passwordEncoder.encode("password123"),
                    "user@aura.design",
                    "ROLE_USER"
            );
            userRepository.save(defaultUser);
            System.out.println("Default user 'user' created with password 'password123'");
        } else {
            defaultUser = userRepository.findByUsername("user").orElse(null);
        }

        // Seed additional reviewers
        User reviewer1 = null;
        User reviewer2 = null;
        if (!userRepository.existsByUsername("sarah")) {
            reviewer1 = new User("sarah", passwordEncoder.encode("password123"), "sarah@aura.design", "ROLE_USER");
            userRepository.save(reviewer1);
        } else {
            reviewer1 = userRepository.findByUsername("sarah").orElse(null);
        }
        if (!userRepository.existsByUsername("james")) {
            reviewer2 = new User("james", passwordEncoder.encode("password123"), "james@aura.design", "ROLE_USER");
            userRepository.save(reviewer2);
        } else {
            reviewer2 = userRepository.findByUsername("james").orElse(null);
        }

        // Seed default products if empty
        List<Product> products = productRepository.findAll();
        if (products.isEmpty()) {
            Product p1 = new Product(
                    "Aura One Headphones",
                    "Matte black aluminum frame, active hybrid noise-cancelling, and memory foam lambskin leather ear cups. High-fidelity audio with customizable acoustic profiles.",
                    29999.00,
                    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop",
                    "Acoustics",
                    15,
                    4.8,
                    true
            );

            Product p2 = new Product(
                    "Linear Chronograph",
                    "Sandblasted grade-5 titanium case, scratch-resistant sapphire crystal glass, Swiss quartz chronograph movement, and full-grain Italian leather strap.",
                    64999.00,
                    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=600&auto=format&fit=crop",
                    "Timepieces",
                    8,
                    4.9,
                    true
            );

            Product p3 = new Product(
                    "Silt Bouclé Blazer",
                    "Structured double-breasted unisex blazer. Crafted in northern Italy from premium virgin bouclé wool with detailed satin lining and custom horn buttons.",
                    24999.00,
                    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop",
                    "Apparel",
                    12,
                    4.5,
                    true
            );

            Product p4 = new Product(
                    "Holo Ambient Lamp",
                    "A sculptural light source featuring a hand-finished dichroic glass prism that refracts light into beautiful spectrums. Controls ambient room lighting dynamics.",
                    14999.00,
                    "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=600&auto=format&fit=crop",
                    "Living",
                    20,
                    4.7,
                    false
            );

            Product p5 = new Product(
                    "Acoustic Sphere",
                    "Monolithic concrete casing speaker featuring custom high-fidelity 360-degree omnidirectional audio drivers. Fits seamlessly as an art piece or speaker.",
                    45999.00,
                    "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=600&auto=format&fit=crop",
                    "Acoustics",
                    6,
                    4.9,
                    true
            );

            Product p6 = new Product(
                    "Ascent Leather Backpack",
                    "Minimalist, water-resistant full-grain calfskin backpack. Designed with clean geometric lines, a padded laptop compartment, and concealed magnetic locks.",
                    18999.00,
                    "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=600&auto=format&fit=crop",
                    "Apparel",
                    18,
                    4.6,
                    false
            );

            Product p7 = new Product(
                    "Monolith Desk Organiser",
                    "Precision-milled from a single piece of dark Italian Nero Marquina marble. Features recessed channels for pens, phone, and card storage with brushed brass accents.",
                    9999.00,
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
                    "Living",
                    25,
                    4.4,
                    false
            );

            Product p8 = new Product(
                    "Eclipse Pocket Watch",
                    "A modern reimagining of the classic pocket watch. Matte black casing with digital-analogue interface overlays and woven steel lanyard.",
                    19999.00,
                    "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=600&auto=format&fit=crop",
                    "Timepieces",
                    10,
                    4.3,
                    false
            );

            products = Arrays.asList(p1, p2, p3, p4, p5, p6, p7, p8);
            productRepository.saveAll(products);
            System.out.println("Default luxury products seeded successfully.");
        }

        // Seed coupons
        if (couponRepository.count() == 0) {
            couponRepository.save(new Coupon("WELCOME10", 0.10, true));
            couponRepository.save(new Coupon("AURA20", 0.20, true));
            couponRepository.save(new Coupon("FLASH50", 0.50, true));
            System.out.println("Promo coupons WELCOME10, AURA20, and FLASH50 seeded.");
        }

        // Seed mock reviews
        if (reviewRepository.count() == 0 && !products.isEmpty()) {
            Product headPhones = products.get(0); // Aura One Headphones
            Product watch = products.get(1); // Linear Chronograph

            if (reviewer1 != null && defaultUser != null && reviewer2 != null) {
                reviewRepository.save(new Review(reviewer1, headPhones, 5, "Remarkable build quality. The lambskin leather feels premium, and active noise canceling is incredibly clean.", null));
                reviewRepository.save(new Review(reviewer2, headPhones, 4, "Acoustics are deep and detailed. Fits slightly tight on the ears initially, but loosens up after a week.", null));
                reviewRepository.save(new Review(defaultUser, headPhones, 5, "Absolutely beautiful matte black design. It sounds as premium as it looks.", null));

                reviewRepository.save(new Review(reviewer1, watch, 5, "Sandblasted titanium is extremely light. Extremely clean design face and smooth movement.", null));
                reviewRepository.save(new Review(reviewer2, watch, 5, "Matches editorial designs perfectly. Absolute work of art for minimalist watch enthusiasts.", null));
                System.out.println("Mock product reviews seeded successfully.");
            }
        }
    }
}
