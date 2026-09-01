package com.busystatus.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class StatusWebSocketHandler extends TextWebSocketHandler {

    private final Set<WebSocketSession> sessions = ConcurrentHashMap.newKeySet();
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        sessions.add(session);
        try {
            if (session.isOpen()) {
                session.sendMessage(new TextMessage("{\"type\":\"CONNECTED\",\"message\":\"Busy Status Bar WebSocket Stream Live\"}"));
            }
        } catch (Exception e) {
            sessions.remove(session);
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        sessions.remove(session);
    }

    public void broadcast(String type, Object payload) {
        if (sessions.isEmpty()) {
            return;
        }
        try {
            String jsonMessage = objectMapper.writeValueAsString(new WebSocketEvent(type, payload));
            TextMessage textMessage = new TextMessage(jsonMessage);
            for (WebSocketSession session : sessions) {
                if (session.isOpen()) {
                    try {
                        session.sendMessage(textMessage);
                    } catch (IOException e) {
                        // ignore dropped connection
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static class WebSocketEvent {
        private String type;
        private Object data;

        public WebSocketEvent(String type, Object data) {
            this.type = type;
            this.data = data;
        }

        public String getType() { return type; }
        public Object getData() { return data; }
    }
}
