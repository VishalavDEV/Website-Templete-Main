package com.admin.dashboard.controller;

import com.admin.dashboard.entity.Customer;
import com.admin.dashboard.entity.Order;
import com.admin.dashboard.repository.CustomerRepository;
import com.admin.dashboard.repository.OrderRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    private final CustomerRepository customerRepository;
    private final OrderRepository orderRepository;

    public CustomerController(CustomerRepository customerRepository, OrderRepository orderRepository) {
        this.customerRepository = customerRepository;
        this.orderRepository = orderRepository;
    }

    @GetMapping
    public ResponseEntity<?> getAllCustomers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "name") String sortBy,
            @RequestParam(defaultValue = "asc") String direction) {

        Sort sort = direction.equalsIgnoreCase("desc") ? Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Customer> customerPage = customerRepository.findAll(pageable);
        return ResponseEntity.ok(customerPage);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with id: " + id));
        return ResponseEntity.ok(customer);
    }

    @GetMapping("/{id}/orders")
    public ResponseEntity<List<Order>> getCustomerOrders(@PathVariable Long id) {
        List<Order> orders = orderRepository.findByCustomerId(id);
        return ResponseEntity.ok(orders);
    }
}
