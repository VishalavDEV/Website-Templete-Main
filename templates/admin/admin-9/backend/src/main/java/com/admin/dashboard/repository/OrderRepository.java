package com.admin.dashboard.repository;

import com.admin.dashboard.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByCustomerId(Long customerId);
    List<Order> findByOrderDateBetween(LocalDateTime start, LocalDateTime end);
    Page<Order> findByCustomerNameContainingIgnoreCaseOrTrackingNumberContainingIgnoreCase(String customerName, String trackingNumber, Pageable pageable);
}
