package com.chronos.brutalist.service;

import com.chronos.brutalist.model.EstimatorRequest;
import com.chronos.brutalist.model.EstimatorResult;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
public class EstimatorService {

    public EstimatorResult calculate(EstimatorRequest req) {
        double siteArea = req.getSiteAreaSqm() != null && req.getSiteAreaSqm() > 0 ? req.getSiteAreaSqm() : 2500.0;
        int floors = req.getBuildingFloors() != null && req.getBuildingFloors() > 0 ? req.getBuildingFloors() : 8;
        String grade = req.getConcreteGrade() != null ? req.getConcreteGrade() : "C60/75 Ultra-High";
        String type = req.getStructuralType() != null ? req.getStructuralType() : "Board-Formed Monolith";
        boolean seismic = req.getSeismicDamping() != null && req.getSeismicDamping();

        // Calculations
        double totalGrossArea = siteArea * floors * 0.78; // Floor plate efficiency
        double concreteRatio = switch (type) {
            case "Cantilever Mega-Frame" -> 0.42; // m3 concrete per m2 GFA
            case "Precast Ribbed Shell" -> 0.31;
            default -> 0.36; // Board-Formed Monolith
        };

        double concreteVolume = totalGrossArea * concreteRatio;
        
        double steelFactor = switch (type) {
            case "Cantilever Mega-Frame" -> 145.0; // kg steel / m3 concrete
            case "Precast Ribbed Shell" -> 110.0;
            default -> 125.0;
        };
        if (seismic) {
            steelFactor *= 1.18; // +18% steel rebar for seismic ductility
        }

        double structuralSteelTons = (concreteVolume * steelFactor) / 1000.0;

        double compressiveMpa = switch (grade) {
            case "C40/50" -> 50.0;
            case "C80 Self-Compacting" -> 95.0;
            default -> 75.0; // C60/75
        };

        // Carbon mineralization tech saves ~85kg CO2 / m3 concrete
        double carbonOffset = (concreteVolume * 85.0) / 1000.0;

        // Curing schedule days based on strength & grade
        int cureDays = switch (grade) {
            case "C80 Self-Compacting" -> 42;
            case "C40/50" -> 21;
            default -> 28;
        };

        // Structural Budget estimate ($/m2 GFA structural core)
        double baseCostPerSqm = switch (grade) {
            case "C80 Self-Compacting" -> 980.0;
            case "C40/50" -> 640.0;
            default -> 780.0;
        };
        if (seismic) {
            baseCostPerSqm += 120.0;
        }
        double estimatedBudget = totalGrossArea * baseCostPerSqm;

        return new EstimatorResult(
                round(totalGrossArea, 1),
                round(concreteVolume, 1),
                round(structuralSteelTons, 1),
                compressiveMpa,
                round(carbonOffset, 1),
                cureDays,
                round(estimatedBudget, 2)
        );
    }

    private double round(double value, int places) {
        BigDecimal bd = BigDecimal.valueOf(value);
        bd = bd.setScale(places, RoundingMode.HALF_UP);
        return bd.doubleValue();
    }
}
