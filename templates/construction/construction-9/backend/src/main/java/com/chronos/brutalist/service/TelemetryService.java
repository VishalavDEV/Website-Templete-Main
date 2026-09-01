package com.chronos.brutalist.service;

import com.chronos.brutalist.model.StructuralTelemetry;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class TelemetryService {

    private final Random random = new Random();

    public StructuralTelemetry getCurrentTelemetry() {
        Map<String, Double> sensorMap = new HashMap<>();
        // Strain gauges microstrain
        sensorMap.put("SG-NORTH-CORE", 142.4 + (random.nextDouble() * 4.0 - 2.0));
        sensorMap.put("SG-SOUTH-CANTILEVER", 218.7 + (random.nextDouble() * 6.0 - 3.0));
        sensorMap.put("SG-EAST-BUTTRESS", 98.1 + (random.nextDouble() * 3.0 - 1.5));
        sensorMap.put("SG-WEST-SHEARWALL", 164.8 + (random.nextDouble() * 5.0 - 2.5));

        return new StructuralTelemetry(
                "Apex Tower Core #14 · Baltic Coast Sector",
                98.7, // Concrete cure completion index
                184.2 + (random.nextDouble() * 2.0), // Microstrain
                1.42 + (random.nextDouble() * 0.05), // Natural resonance Hz
                17.8, // Ambient deg C
                64.2, // Humidity %
                "Zone 3 / UBC Seismic Damped",
                sensorMap,
                Arrays.asList("Potain MDT 389 #CRANE-01 (Active Slewing)", "Liebherr 280 EC-H #CRANE-02 (Standby)")
        );
    }
}
