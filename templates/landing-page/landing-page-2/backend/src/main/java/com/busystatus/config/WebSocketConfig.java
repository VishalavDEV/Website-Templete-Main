package com.busystatus.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    private final StatusWebSocketHandler statusWebSocketHandler;

    public WebSocketConfig(StatusWebSocketHandler statusWebSocketHandler) {
        this.statusWebSocketHandler = statusWebSocketHandler;
    }

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(statusWebSocketHandler, "/ws-busy")
                .setAllowedOrigins("*");
    }
}
