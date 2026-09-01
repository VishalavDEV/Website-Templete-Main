package com.bluecore.showroom.service;

import com.bluecore.showroom.model.Product;
import com.bluecore.showroom.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.getAllProducts();
    }

    public Optional<Product> getProductById(String id) {
        return productRepository.getProductById(id);
    }

    public List<Product> getProductsByCategory(String category) {
        return productRepository.getProductsByCategory(category);
    }

    public List<Product> getFeaturedProducts() {
        return productRepository.getFeaturedProducts();
    }

    public List<Product> getOffers() {
        return productRepository.getOffers();
    }

    public List<Product> searchProducts(String query) {
        return productRepository.searchProducts(query);
    }
}
