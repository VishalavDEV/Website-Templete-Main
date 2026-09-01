package com.bluecore.showroom.model;

import java.util.Map;

public class Product {
    private String id;
    private String name;
    private String brand;
    private String category;
    private double price;
    private double oldPrice;
    private int discount;
    private double rating;
    private int reviews;
    private String image;
    private String description;
    private Map<String, String> specifications;
    private int stock;
    private boolean featured;
    private String badge;

    public Product() {}

    public Product(String id, String name, String brand, String category, double price, double oldPrice,
                   int discount, double rating, int reviews, String image, String description,
                   Map<String, String> specifications, int stock, boolean featured, String badge) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.category = category;
        this.price = price;
        this.oldPrice = oldPrice;
        this.discount = discount;
        this.rating = rating;
        this.reviews = reviews;
        this.image = image;
        this.description = description;
        this.specifications = specifications;
        this.stock = stock;
        this.featured = featured;
        this.badge = badge;
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

    public double getOldPrice() { return oldPrice; }
    public void setOldPrice(double oldPrice) { this.oldPrice = oldPrice; }

    public int getDiscount() { return discount; }
    public void setDiscount(int discount) { this.discount = discount; }

    public double getRating() { return rating; }
    public void setRating(double rating) { this.rating = rating; }

    public int getReviews() { return reviews; }
    public void setReviews(int reviews) { this.reviews = reviews; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Map<String, String> getSpecifications() { return specifications; }
    public void setSpecifications(Map<String, String> specifications) { this.specifications = specifications; }

    public int getStock() { return stock; }
    public void setStock(int stock) { this.stock = stock; }

    public boolean isFeatured() { return featured; }
    public void setFeatured(boolean featured) { this.featured = featured; }

    public String getBadge() { return badge; }
    public void setBadge(String badge) { this.badge = badge; }
}
