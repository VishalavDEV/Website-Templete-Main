package com.exqudrive.controller;

import com.exqudrive.model.Vehicle;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {

    private final List<Vehicle> fleet = new ArrayList<>();

    public VehicleController() {
        // Initial Luxury Fleet
        fleet.add(new Vehicle(
                "bmw-m2-cs",
                "BMW M2 CS Shadowline",
                "Track Coupe",
                "Pure mechanical dominance & laser-sharp agility.",
                453,
                3.9,
                177,
                480,
                "/images/hero_car.png",
                "8-Speed M Steptronic",
                4,
                true
        ));

        fleet.add(new Vehicle(
                "porsche-911-gt3rs",
                "Porsche 911 GT3 RS",
                "Supercar",
                "Atmospheric motorsport adrenaline engineered for the open road.",
                518,
                3.0,
                184,
                850,
                "/images/fleet_porsche.jpg",
                "7-Speed Porsche Doppelkupplung (PDK)",
                2,
                true
        ));

        fleet.add(new Vehicle(
                "rolls-royce-ghost",
                "Rolls-Royce Ghost Black Badge",
                "Ultra Luxury",
                "Unrivaled sanctuary, whispering twin-turbo V12 grandeur.",
                591,
                4.2,
                155,
                1450,
                "/images/fleet_rolls_royce.jpg",
                "8-Speed Satellite-Aided Auto",
                5,
                true
        ));

        fleet.add(new Vehicle(
                "range-rover-sv",
                "Range Rover SV Autobiography",
                "Prestige SUV",
                "Sublime grand touring capability across any terrain in peak comfort.",
                606,
                4.3,
                162,
                650,
                "/images/pinnacle_mountain.jpg",
                "8-Speed Automatic AWD",
                5,
                false
        ));
    }

    @GetMapping
    public List<Vehicle> getAllVehicles(@RequestParam(required = false) String category) {
        if (category != null && !category.equalsIgnoreCase("all")) {
            return fleet.stream()
                    .filter(v -> v.getCategory().equalsIgnoreCase(category))
                    .toList();
        }
        return fleet;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable String id) {
        Optional<Vehicle> vehicle = fleet.stream()
                .filter(v -> v.getId().equalsIgnoreCase(id))
                .findFirst();
        return vehicle.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
