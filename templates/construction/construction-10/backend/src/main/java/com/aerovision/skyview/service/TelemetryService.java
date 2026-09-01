package com.aerovision.skyview.service;

import com.aerovision.skyview.model.WindTunnelTelemetry;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class TelemetryService {

    private final Random random = new Random();

    public WindTunnelTelemetry getCurrentTelemetry() {
        Map<String, Double> sensorPressures = new HashMap<>();
        sensorPressures.put("PRESSURE_SENSOR_WINDWARD_TOP", round(420.5 + (random.nextDouble() * 25.0 - 12.5), 1));
        sensorPressures.put("PRESSURE_SENSOR_LEEWARD_VORTEX", round(-210.8 + (random.nextDouble() * 15.0 - 7.5), 1));
        sensorPressures.put("PRESSURE_SENSOR_MID_CANTILEVER", round(185.2 + (random.nextDouble() * 12.0 - 6.0), 1));
        sensorPressures.put("PRESSURE_SENSOR_BASE_APERTURE", round(94.6 + (random.nextDouble() * 8.0 - 4.0), 1));

        return new WindTunnelTelemetry(
                "Aero Helix Skyrise #01 · Wind Tunnel Boundary Layer Station 4",
                round(14.8 + (random.nextDouble() * 1.8 - 0.9), 1), // Wind speed m/s
                342.0, // Altitude meters
                round(0.278 + (random.nextDouble() * 0.008 - 0.004), 3), // Cd
                round(0.48 + (random.nextDouble() * 0.04 - 0.02), 2), // Vortex Shedding Hz
                round(12.4 + (random.nextDouble() * 1.2 - 0.6), 1), // TMD displacement mm
                round(99.4 + (random.nextDouble() * 0.5 - 0.25), 1), // Louver sync %
                round(840.0 + (random.nextDouble() * 40.0 - 20.0), 0), // W/m2
                round(142.8 + (random.nextDouble() * 8.0 - 4.0), 1), // kWh
                sensorPressures,
                Arrays.asList(
                        "SkyEye Drone Alpha (Orbiting Level 64 Cantilever)",
                        "Lidar Mesh Scanner Beta (Mapping Facade Boundary Layer)"
                )
        );
    }

    private double round(double val, int places) {
        BigDecimal bd = BigDecimal.valueOf(val);
        bd = bd.setScale(places, RoundingMode.HALF_UP);
        return bd.doubleValue();
    }
}
