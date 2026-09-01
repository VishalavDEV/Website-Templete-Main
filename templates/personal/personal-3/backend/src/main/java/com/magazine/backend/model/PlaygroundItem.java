package com.magazine.backend.model;

public class PlaygroundItem {
    private String id;
    private String title;
    private String type;
    private String imageUrl;
    private String link;

    public PlaygroundItem() {}

    public PlaygroundItem(String id, String title, String type, String imageUrl, String link) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.imageUrl = imageUrl;
        this.link = link;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getLink() { return link; }
    public void setLink(String link) { this.link = link; }
}
