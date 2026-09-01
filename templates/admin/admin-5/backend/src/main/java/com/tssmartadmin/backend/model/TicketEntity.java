package com.tssmartadmin.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tickets")
public class TicketEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String ticketNumber;
    private String subject;
    private String customerName;
    private String priority; // High, Medium, Low
    private String status;   // Open, In Progress, Resolved, Closed
    private String category;
    private String createdAt;

    public TicketEntity() {}

    public TicketEntity(String ticketNumber, String subject, String customerName, String priority, String status, String category, String createdAt) {
        this.ticketNumber = ticketNumber;
        this.subject = subject;
        this.customerName = customerName;
        this.priority = priority;
        this.status = status;
        this.category = category;
        this.createdAt = createdAt;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTicketNumber() { return ticketNumber; }
    public void setTicketNumber(String ticketNumber) { this.ticketNumber = ticketNumber; }

    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getPriority() { return priority; }
    public void setPriority(String priority) { this.priority = priority; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getCreatedAt() { return createdAt; }
    public void setCreatedAt(String createdAt) { this.createdAt = createdAt; }
}
