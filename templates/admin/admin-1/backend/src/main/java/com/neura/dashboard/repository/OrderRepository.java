package com.neura.dashboard.repository;

import com.neura.dashboard.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, String> {
}
