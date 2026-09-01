package com.example.demo.model;

public class Message {
    private String id;
    private String senderName;
    private String avatar;
    private String content;
    private String timestamp;
    private boolean read;
    private String chatId;
    private boolean isAdmin;

    public Message() {}

    public Message(String id, String senderName, String avatar, String content, String timestamp, boolean read, String chatId, boolean isAdmin) {
        this.id = id;
        this.senderName = senderName;
        this.avatar = avatar;
        this.content = content;
        this.timestamp = timestamp;
        this.read = read;
        this.chatId = chatId;
        this.isAdmin = isAdmin;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getSenderName() { return senderName; }
    public void setSenderName(String senderName) { this.senderName = senderName; }

    public String getAvatar() { return avatar; }
    public void setAvatar(String avatar) { this.avatar = avatar; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getTimestamp() { return timestamp; }
    public void setTimestamp(String timestamp) { this.timestamp = timestamp; }

    public boolean isRead() { return read; }
    public void setRead(boolean read) { this.read = read; }

    public String getChatId() { return chatId; }
    public void setChatId(String chatId) { this.chatId = chatId; }

    public boolean getIsAdmin() { return isAdmin; }
    public void setIsAdmin(boolean isAdmin) { this.isAdmin = isAdmin; }
}
