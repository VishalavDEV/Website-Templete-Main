package com.exqudrive.model;

public class StatsResponse {
    private int vehiclePremium;
    private String vehiclePremiumSuffix;
    private int happyClients;
    private String happyClientsSuffix;
    private int awardsWon;
    private String awardsWonSuffix;
    private int globalOffices;
    private String globalOfficesSuffix;

    public StatsResponse() {
    }

    public StatsResponse(int vehiclePremium, String vehiclePremiumSuffix,
                         int happyClients, String happyClientsSuffix,
                         int awardsWon, String awardsWonSuffix,
                         int globalOffices, String globalOfficesSuffix) {
        this.vehiclePremium = vehiclePremium;
        this.vehiclePremiumSuffix = vehiclePremiumSuffix;
        this.happyClients = happyClients;
        this.happyClientsSuffix = happyClientsSuffix;
        this.awardsWon = awardsWon;
        this.awardsWonSuffix = awardsWonSuffix;
        this.globalOffices = globalOffices;
        this.globalOfficesSuffix = globalOfficesSuffix;
    }

    public int getVehiclePremium() {
        return vehiclePremium;
    }

    public void setVehiclePremium(int vehiclePremium) {
        this.vehiclePremium = vehiclePremium;
    }

    public String getVehiclePremiumSuffix() {
        return vehiclePremiumSuffix;
    }

    public void setVehiclePremiumSuffix(String vehiclePremiumSuffix) {
        this.vehiclePremiumSuffix = vehiclePremiumSuffix;
    }

    public int getHappyClients() {
        return happyClients;
    }

    public void setHappyClients(int happyClients) {
        this.happyClients = happyClients;
    }

    public String getHappyClientsSuffix() {
        return happyClientsSuffix;
    }

    public void setHappyClientsSuffix(String happyClientsSuffix) {
        this.happyClientsSuffix = happyClientsSuffix;
    }

    public int getAwardsWon() {
        return awardsWon;
    }

    public void setAwardsWon(int awardsWon) {
        this.awardsWon = awardsWon;
    }

    public String getAwardsWonSuffix() {
        return awardsWonSuffix;
    }

    public void setAwardsWonSuffix(String awardsWonSuffix) {
        this.awardsWonSuffix = awardsWonSuffix;
    }

    public int getGlobalOffices() {
        return globalOffices;
    }

    public void setGlobalOffices(int globalOffices) {
        this.globalOffices = globalOffices;
    }

    public String getGlobalOfficesSuffix() {
        return globalOfficesSuffix;
    }

    public void setGlobalOfficesSuffix(String globalOfficesSuffix) {
        this.globalOfficesSuffix = globalOfficesSuffix;
    }
}
