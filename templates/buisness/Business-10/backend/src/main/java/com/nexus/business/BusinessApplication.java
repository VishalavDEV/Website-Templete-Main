package com.nexus.business;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BusinessApplication {

    public static void main(String[] args) {
        SpringApplication.run(BusinessApplication.class, args);
        System.out.println("\n🚀 NeXus Digital Backend is running at http://localhost:8080\n");
    }
}
