package com.buildx.biophilic.model;

public class Project {
    private Long id;
    private String title;
    private String location;
    private String specs;
    private String img;
    private String desc;

    public Project() {}

    public Project(Long id, String title, String location, String specs, String img, String desc) {
        this.id = id;
        this.title = title;
        this.location = location;
        this.specs = specs;
        this.img = img;
        this.desc = desc;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getSpecs() { return specs; }
    public void setSpecs(String specs) { this.specs = specs; }

    public String getImg() { return img; }
    public void setImg(String img) { this.img = img; }

    public String getDesc() { return desc; }
    public void setDesc(String desc) { this.desc = desc; }
}
