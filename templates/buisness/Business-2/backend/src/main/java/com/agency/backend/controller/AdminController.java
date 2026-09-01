package com.agency.backend.controller;

import com.agency.backend.entity.ContactEnquiry;
import com.agency.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private ContactService contactService;

    @GetMapping("/enquiries")
    public ResponseEntity<List<ContactEnquiry>> getAllEnquiries() {
        return ResponseEntity.ok(contactService.getAllEnquiries());
    }

    @DeleteMapping("/enquiries/{id}")
    public ResponseEntity<Void> deleteEnquiry(@PathVariable Long id) {
        try {
            contactService.deleteEnquiry(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
