package com.toyworld.model;

public class Review {
    private String reviewerName;
    private double rating;
    private String comment;
    private String date;

    public Review() {}

    public Review(String reviewerName, double rating, String comment, String date) {
        this.reviewerName = reviewerName;
        this.rating = rating;
        this.comment = comment;
        this.date = date;
    }

    // Getters and Setters
    public String getReviewerName() { return reviewerName; }
    public void setReviewerName(String reviewerName) { this.reviewerName = reviewerName; }

    public double getRating() { return rating; }
    public void setRating(double rating) { this.rating = rating; }

    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }
}
