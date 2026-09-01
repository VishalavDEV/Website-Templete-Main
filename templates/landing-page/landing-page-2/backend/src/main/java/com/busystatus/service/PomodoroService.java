package com.busystatus.service;

import com.busystatus.config.StatusWebSocketHandler;
import com.busystatus.model.PomodoroState;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.stereotype.Service;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class PomodoroService {

    private final AtomicReference<PomodoroState> stateRef = new AtomicReference<>(new PomodoroState());
    private final StatusWebSocketHandler webSocketHandler;
    private ScheduledExecutorService scheduler;

    public PomodoroService(StatusWebSocketHandler webSocketHandler) {
        this.webSocketHandler = webSocketHandler;
    }

    @PostConstruct
    public void init() {
        scheduler = Executors.newSingleThreadScheduledExecutor();
        scheduler.scheduleAtFixedRate(this::tick, 1, 1, TimeUnit.SECONDS);
    }

    @PreDestroy
    public void cleanup() {
        if (scheduler != null && !scheduler.isShutdown()) {
            scheduler.shutdown();
        }
    }

    private void tick() {
        PomodoroState state = stateRef.get();
        if (state.isRunning()) {
            int remaining = state.getRemainingSeconds() - 1;
            if (remaining <= 0) {
                state.setRunning(false);
                state.setRemainingSeconds(0);
                state.setStatusText("COMPLETED");
                state.setCyclesCompleted(state.getCyclesCompleted() + 1);
            } else {
                state.setRemainingSeconds(remaining);
                state.setStatusText(state.getMode().equals("FOCUS") ? "ACTIVE" : "BREAK");
            }
            webSocketHandler.broadcast("POMODORO_TICK", state);
        }
    }

    public PomodoroState getState() {
        return stateRef.get();
    }

    public PomodoroState handleAction(String action, Integer customSeconds, String mode) {
        PomodoroState state = stateRef.get();
        if ("START".equalsIgnoreCase(action)) {
            state.setRunning(true);
            state.setStatusText(state.getMode().equals("FOCUS") ? "ACTIVE" : "BREAK");
        } else if ("PAUSE".equalsIgnoreCase(action)) {
            state.setRunning(false);
            state.setStatusText("PAUSED");
        } else if ("RESET".equalsIgnoreCase(action)) {
            state.setRunning(false);
            int total = (customSeconds != null && customSeconds > 0) ? customSeconds : 1500;
            state.setTotalSeconds(total);
            state.setRemainingSeconds(total);
            state.setStatusText("READY");
        } else if ("SET_MODE".equalsIgnoreCase(action)) {
            if (mode != null) {
                state.setMode(mode.toUpperCase());
                int total = "SHORT_BREAK".equalsIgnoreCase(mode) ? 300 : ("LONG_BREAK".equalsIgnoreCase(mode) ? 900 : 1500);
                state.setTotalSeconds(total);
                state.setRemainingSeconds(total);
                state.setRunning(false);
                state.setStatusText("READY");
            }
        }
        webSocketHandler.broadcast("POMODORO_UPDATE", state);
        return state;
    }
}
