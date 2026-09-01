package com.aura.backend.repository;

import com.aura.backend.model.Address;
import com.aura.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AddressRepository extends JpaRepository<Address, Long> {
    List<Address> findByUser(User user);
}
