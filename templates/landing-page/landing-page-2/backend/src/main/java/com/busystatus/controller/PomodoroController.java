package com.busystatus.controller;

import com.busystatus.model.PomodoroState;
import com.busystatus.service.PomodoroService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/pomodoro")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PomodoroController {

    private final PomodoroService pomodoroService;

    public PomodoroController(PomodoroService pomodoroService) {
        this.pomodoroService = pomodoroService;
    }

    @GetMapping
    public ResponseEntity<PomodoroState> getPomodoroState() {
        return ResponseEntity.ok(pomodoroService.getState());
    }

    @PostMapping("/action")
    public ResponseEntity<PomodoroState> handleAction(@RequestBody Map<String, Object> body) {
        String action = (String) body.getOrDefault("action", "START");
        Integer seconds = null;
        if (body.containsKey("seconds")) {
            seconds = ((Number) body.get("seconds")).intValue();
        }
        String mode = (String) body.get("mode");
        return ResponseEntity.ok(pomodoroService.handleAction(action, seconds, mode));
    }
}
