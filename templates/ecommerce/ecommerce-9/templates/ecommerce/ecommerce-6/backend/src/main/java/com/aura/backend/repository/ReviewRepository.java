package com.aura.backend.repository;

import com.aura.backend.model.Product;
import com.aura.backend.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByProductOrderByCreatedAtDesc(Product product);
}
