package com.toyworld.model;

import java.util.List;

public class Product {
    private String id;
    private String name;
    private String brand;
    private String category;
    private double price;
    private double discount;
    private double rating;
    private String description;
    private String image;
    private String animationType;
    private int stock;
    private List<String> variants;
    private List<Review> reviews;

    public Product() {}

    public Product(String id, String name, String brand, String category, double price, double discount, 
                   double rating, String description, String image, String animationType, int stock, 
                   List<String> variants, List<Review> reviews) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.category = category;
        this.price = price;
        this.discount = discount;
        this.rating = rating;
        this.description = description;
        this.image = image;
        this.animationType = animationType;
        this.stock = stock;
        this.variants = variants;
        this.reviews = reviews;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public double getDiscount() { return discount; }
    public void setDiscount(double discount) { this.discount = discount; }

    public double getRating() { return rating; }
    public void setRating(double rating) { this.rating = rating; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public String getAnimationType() { return animationType; }
    public void setAnimationType(String animationType) { this.animationType = animationType; }

    public int getStock() { return stock; }
    public void setStock(int stock) { this.stock = stock; }

    public List<String> getVariants() { return variants; }
    public void setVariants(List<String> variants) { this.variants = variants; }

    public List<Review> getReviews() { return reviews; }
    public void setReviews(List<Review> reviews) { this.reviews = reviews; }
}
