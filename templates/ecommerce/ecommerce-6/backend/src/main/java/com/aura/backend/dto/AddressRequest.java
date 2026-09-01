package com.aura.backend.dto;

public class AddressRequest {
    private String fullName;
    private String addressLine;
    private String city;
    private String zipCode;
    private String phone;
    private Boolean isDefault;

    public AddressRequest() {}

    public AddressRequest(String fullName, String addressLine, String city, String zipCode, String phone, Boolean isDefault) {
        this.fullName = fullName;
        this.addressLine = addressLine;
        this.city = city;
        this.zipCode = zipCode;
        this.phone = phone;
        this.isDefault = isDefault;
    }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getAddressLine() { return addressLine; }
    public void setAddressLine(String addressLine) { this.addressLine = addressLine; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getZipCode() { return zipCode; }
    public void setZipCode(String zipCode) { this.zipCode = zipCode; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public Boolean getIsDefault() { return isDefault; }
    public void setIsDefault(Boolean isDefault) { this.isDefault = isDefault; }
}
