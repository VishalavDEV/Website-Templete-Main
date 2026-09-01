package com.buildx.biophilic.service;

import com.buildx.biophilic.model.TelemetryResult;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
public class TelemetryService {

    public TelemetryResult calculateTelemetry(double wallArea) {
        // Wall area in m2
        double co2 = round(wallArea * 0.024, 1); // Tons/year
        int oxygen = (int) Math.round(wallArea * 1.8); // kg/day
        double cooling = round(Math.min(7.5, 1.2 + (wallArea * 0.002)), 1); // °C
        int noise = (int) Math.min(28, Math.round(6 + (wallArea * 0.007))); // dB

        return new TelemetryResult(wallArea, co2, oxygen, cooling, noise);
    }

    private double round(double value, int places) {
        BigDecimal bd = BigDecimal.valueOf(value);
        bd = bd.setScale(places, RoundingMode.HALF_UP);
        return bd.doubleValue();
    }
}
