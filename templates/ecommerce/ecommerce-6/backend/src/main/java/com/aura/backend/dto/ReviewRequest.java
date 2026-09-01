package com.aura.backend.dto;

public class ReviewRequest {
    private Integer rating;
    private String comment;
    private String imageUrl;

    public ReviewRequest() {}

    public ReviewRequest(Integer rating, String comment, String imageUrl) {
        this.rating = rating;
        this.comment = comment;
        this.imageUrl = imageUrl;
    }

    public Integer getRating() { return rating; }
    public void setRating(Integer rating) { this.rating = rating; }

    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
