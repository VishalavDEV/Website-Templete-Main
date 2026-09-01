package com.aerovision.skyview.service;

import com.aerovision.skyview.model.EstimatorRequest;
import com.aerovision.skyview.model.EstimatorResult;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
public class EstimatorService {

    public EstimatorResult calculate(EstimatorRequest req) {
        double height = req.getTargetHeightMeters() != null && req.getTargetHeightMeters() > 0 ? req.getTargetHeightMeters() : 240.0;
        int floors = req.getTotalFloors() != null && req.getTotalFloors() > 0 ? req.getTotalFloors() : (int) Math.round(height / 3.8);
        double siteArea = req.getSiteAreaSqm() != null && req.getSiteAreaSqm() > 0 ? req.getSiteAreaSqm() : 3500.0;
        String profile = req.getAerodynamicProfile() != null ? req.getAerodynamicProfile() : "Twisted Vortex Aerofoil";
        String facade = req.getFacadeType() != null ? req.getFacadeType() : "Dynamic Origami PV Louvers";
        boolean atriums = req.getSkyGardenAtriums() != null && req.getSkyGardenAtriums();

        // GFA calculation
        double avgFloorPlate = siteArea * 0.65;
        double totalGfa = round(avgFloorPlate * floors, 0);

        // Aerodynamic Drag Reduction % based on profile
        double dragReduction = switch (profile) {
            case "Twisted Vortex Aerofoil" -> 44.5;
            case "Elliptical Double-Curvature" -> 38.2;
            case "Diagrid Kinetic Shell" -> 32.8;
            default -> 28.0;
        };
        if (atriums) {
            dragReduction += 5.5; // Void apertures further reduce vortex shedding
        }

        // Wind vibration mitigation
        double vibrationMitigation = round(dragReduction * 1.15, 1);

        // Kinetic louvers count (perimeter of building approx)
        double perimeter = Math.sqrt(avgFloorPlate) * 4.0;
        int louverModules = (int) Math.round((perimeter / 1.5) * (floors * 0.7));

        // Solar Energy MWh / Year
        double solarFactor = switch (facade) {
            case "Dynamic Origami PV Louvers" -> 0.42; // MWh per module/yr
            case "Biomorphic Living Breath Skin" -> 0.28;
            default -> 0.18; // Triple-Glazed
        };
        double solarEnergy = round(louverModules * solarFactor, 1);

        // Carbon offset
        double carbonOffset = round((totalGfa * 0.082) + (solarEnergy * 0.75), 1);

        // Budget in USD Millions
        double baseCostPerSqm = 3200.0;
        if (profile.contains("Twisted") || profile.contains("Curvature")) baseCostPerSqm += 650.0;
        if (facade.contains("Origami") || facade.contains("Kinetic")) baseCostPerSqm += 480.0;
        if (atriums) baseCostPerSqm += 250.0;

        double totalBudgetMln = round((totalGfa * baseCostPerSqm) / 1_000_000.0, 1);

        // Timeline in months
        int months = (int) Math.round(28 + (floors * 0.35));

        // Certification
        String cert = totalBudgetMln > 150 ? "LEED Zero Carbon & WELL Platinum Certified" : "LEED Platinum & Net-Zero Ready";

        return new EstimatorResult(
                totalGfa,
                round(dragReduction, 1),
                round(vibrationMitigation, 1),
                solarEnergy,
                louverModules,
                carbonOffset,
                totalBudgetMln,
                months,
                cert
        );
    }

    private double round(double val, int places) {
        BigDecimal bd = BigDecimal.valueOf(val);
        bd = bd.setScale(places, RoundingMode.HALF_UP);
        return bd.doubleValue();
    }
}
