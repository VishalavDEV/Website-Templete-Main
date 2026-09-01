package com.ecommerce.api.controller;

import com.ecommerce.api.model.Product;
import com.ecommerce.api.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<List<Product>> getProducts(
            @RequestParam(required = false) Boolean featured,
            @RequestParam(required = false) Boolean newArrival,
            @RequestParam(required = false) Boolean trending,
            @RequestParam(required = false) Boolean sale) {
        
        if (featured != null && featured) {
            return ResponseEntity.ok(productService.getFeaturedProducts());
        }
        if (newArrival != null && newArrival) {
            return ResponseEntity.ok(productService.getNewArrivals());
        }
        if (trending != null && trending) {
            return ResponseEntity.ok(productService.getTrendingProducts());
        }
        if (sale != null && sale) {
            return ResponseEntity.ok(productService.getSaleProducts());
        }
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable String id) {
        Product product = productService.getProductById(id);
        if (product != null) {
            return ResponseEntity.ok(product);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable String category) {
        return ResponseEntity.ok(productService.getProductsByCategory(category));
    }

    @GetMapping("/gender/{gender}")
    public ResponseEntity<List<Product>> getProductsByGender(@PathVariable String gender) {
        return ResponseEntity.ok(productService.getProductsByGender(gender));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProducts(@RequestParam("q") String query) {
        return ResponseEntity.ok(productService.searchProducts(query));
    }

    @GetMapping("/trending")
    public ResponseEntity<List<Product>> getTrending() {
        return ResponseEntity.ok(productService.getTrendingProducts());
    }

    @GetMapping("/new-arrivals")
    public ResponseEntity<List<Product>> getNewArrivals() {
        return ResponseEntity.ok(productService.getNewArrivals());
    }

    @GetMapping("/sale")
    public ResponseEntity<List<Product>> getSale() {
        return ResponseEntity.ok(productService.getSaleProducts());
    }
}
