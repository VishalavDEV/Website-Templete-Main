package com.business.backend.model;

import java.util.List;

public class ServiceItem {
    private String id;
    private String title;
    private String icon;
    private String shortDesc;
    private String longDesc;
    private List<String> benefits;
    private List<String> features;
    private List<String> processSteps;
    private List<String> technologies;
    private List<FaqItem> faqs;

    public ServiceItem() {}

    public ServiceItem(String id, String title, String icon, String shortDesc, String longDesc,
                       List<String> benefits, List<String> features, List<String> processSteps,
                       List<String> technologies, List<FaqItem> faqs) {
        this.id = id;
        this.title = title;
        this.icon = icon;
        this.shortDesc = shortDesc;
        this.longDesc = longDesc;
        this.benefits = benefits;
        this.features = features;
        this.processSteps = processSteps;
        this.technologies = technologies;
        this.faqs = faqs;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getShortDesc() {
        return shortDesc;
    }

    public void setShortDesc(String shortDesc) {
        this.shortDesc = shortDesc;
    }

    public String getLongDesc() {
        return longDesc;
    }

    public void setLongDesc(String longDesc) {
        this.longDesc = longDesc;
    }

    public List<String> getBenefits() {
        return benefits;
    }

    public void setBenefits(List<String> benefits) {
        this.benefits = benefits;
    }

    public List<String> getFeatures() {
        return features;
    }

    public void setFeatures(List<String> features) {
        this.features = features;
    }

    public List<String> getProcessSteps() {
        return processSteps;
    }

    public void setProcessSteps(List<String> processSteps) {
        this.processSteps = processSteps;
    }

    public List<String> getTechnologies() {
        return technologies;
    }

    public void setTechnologies(List<String> technologies) {
        this.technologies = technologies;
    }

    public List<FaqItem> getFaqs() {
        return faqs;
    }

    public void setFaqs(List<FaqItem> faqs) {
        this.faqs = faqs;
    }
}
