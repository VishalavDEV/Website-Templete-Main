package com.busystatus.service;

import com.busystatus.config.StatusWebSocketHandler;
import com.busystatus.model.BusyStatus;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class StatusService {

    private final AtomicReference<BusyStatus> currentStatus = new AtomicReference<>(new BusyStatus());
    private final StatusWebSocketHandler webSocketHandler;

    public StatusService(StatusWebSocketHandler webSocketHandler) {
        this.webSocketHandler = webSocketHandler;
    }

    public BusyStatus getStatus() {
        return currentStatus.get();
    }

    public BusyStatus updateStatus(BusyStatus newStatus) {
        if (newStatus.getStatus() == null || newStatus.getStatus().trim().isEmpty()) {
            newStatus.setStatus("BUSY");
        }
        if (newStatus.getColor() == null || newStatus.getColor().trim().isEmpty()) {
            newStatus.setColor("#FF5A1F");
        }
        newStatus.setLastUpdated(Instant.now().toString());
        currentStatus.set(newStatus);
        
        // Broadcast over WebSocket
        webSocketHandler.broadcast("STATUS_UPDATE", newStatus);
        return newStatus;
    }

    public BusyStatus toggleActive() {
        BusyStatus status = currentStatus.get();
        status.setActive(!status.isActive());
        status.setLastUpdated(Instant.now().toString());
        webSocketHandler.broadcast("STATUS_UPDATE", status);
        return status;
    }
}
