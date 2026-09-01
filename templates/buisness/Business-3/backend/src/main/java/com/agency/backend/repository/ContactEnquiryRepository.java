package com.agency.backend.repository;

import com.agency.backend.entity.ContactEnquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactEnquiryRepository extends JpaRepository<ContactEnquiry, Long> {
    List<ContactEnquiry> findAllByOrderBySubmittedAtDesc();
}
