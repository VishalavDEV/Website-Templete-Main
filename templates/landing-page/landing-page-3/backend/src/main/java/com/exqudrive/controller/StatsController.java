package com.exqudrive.controller;

import com.exqudrive.model.StatsResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class StatsController {

    @GetMapping("/stats")
    public StatsResponse getStats() {
        return new StatsResponse(
                200, "+",
                4000, "+",
                87, "",
                30, "+"
        );
    }
}
