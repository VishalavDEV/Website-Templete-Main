package com.ecommerce.api.model;

import java.util.List;

public class Product {
    private String id;
    private String name;
    private String category;
    private String gender;
    private double price;
    private double discount;
    private double rating;
    private int reviews;
    private List<String> sizes;
    private List<String> colors;
    private String image;
    private String description;
    private String brand;
    private int stock;
    private boolean featured;
    private boolean newArrival;
    private boolean trending;

    public Product() {}

    public Product(String id, String name, String category, String gender, double price, double discount,
                   double rating, int reviews, List<String> sizes, List<String> colors, String image,
                   String description, String brand, int stock, boolean featured, boolean newArrival, boolean trending) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.gender = gender;
        this.price = price;
        this.discount = discount;
        this.rating = rating;
        this.reviews = reviews;
        this.sizes = sizes;
        this.colors = colors;
        this.image = image;
        this.description = description;
        this.brand = brand;
        this.stock = stock;
        this.featured = featured;
        this.newArrival = newArrival;
        this.trending = trending;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public double getDiscount() { return discount; }
    public void setDiscount(double discount) { this.discount = discount; }

    public double getRating() { return rating; }
    public void setRating(double rating) { this.rating = rating; }

    public int getReviews() { return reviews; }
    public void setReviews(int reviews) { this.reviews = reviews; }

    public List<String> getSizes() { return sizes; }
    public void setSizes(List<String> sizes) { this.sizes = sizes; }

    public List<String> getColors() { return colors; }
    public void setColors(List<String> colors) { this.colors = colors; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }

    public int getStock() { return stock; }
    public void setStock(int stock) { this.stock = stock; }

    public boolean isFeatured() { return featured; }
    public void setFeatured(boolean featured) { this.featured = featured; }

    public boolean isNewArrival() { return newArrival; }
    public void setNewArrival(boolean newArrival) { this.newArrival = newArrival; }

    public boolean isTrending() { return trending; }
    public void setTrending(boolean trending) { this.trending = trending; }
}
