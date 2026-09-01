package com.exqudrive.model;

public class Vehicle {
    private String id;
    private String name;
    private String category;
    private String tagline;
    private int horsepower;
    private double acceleration; // 0-60 mph in seconds
    private int topSpeed; // mph
    private int dailyRate; // USD
    private String imageUrl;
    private String transmission;
    private int seats;
    private boolean featured;

    public Vehicle() {
    }

    public Vehicle(String id, String name, String category, String tagline, int horsepower,
                   double acceleration, int topSpeed, int dailyRate, String imageUrl,
                   String transmission, int seats, boolean featured) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.tagline = tagline;
        this.horsepower = horsepower;
        this.acceleration = acceleration;
        this.topSpeed = topSpeed;
        this.dailyRate = dailyRate;
        this.imageUrl = imageUrl;
        this.transmission = transmission;
        this.seats = seats;
        this.featured = featured;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getTagline() {
        return tagline;
    }

    public void setTagline(String tagline) {
        this.tagline = tagline;
    }

    public int getHorsepower() {
        return horsepower;
    }

    public void setHorsepower(int horsepower) {
        this.horsepower = horsepower;
    }

    public double getAcceleration() {
        return acceleration;
    }

    public void setAcceleration(double acceleration) {
        this.acceleration = acceleration;
    }

    public int getTopSpeed() {
        return topSpeed;
    }

    public void setTopSpeed(int topSpeed) {
        this.topSpeed = topSpeed;
    }

    public int getDailyRate() {
        return dailyRate;
    }

    public void setDailyRate(int dailyRate) {
        this.dailyRate = dailyRate;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public boolean isFeatured() {
        return featured;
    }

    public void setFeatured(boolean featured) {
        this.featured = featured;
    }
}
