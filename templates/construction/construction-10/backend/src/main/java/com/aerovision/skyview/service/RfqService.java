package com.aerovision.skyview.service;

import com.aerovision.skyview.model.RfqRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class RfqService {

    private final List<RfqRequest> rfqList = new ArrayList<>();
    private final AtomicLong idCounter = new AtomicLong(500);

    public RfqService() {
        RfqRequest demo = new RfqRequest();
        demo.setId(idCounter.incrementAndGet());
        demo.setClientName("Marina Bay Waterfront Development Group");
        demo.setOrganization("Singapore Urban Redevelopment Authority");
        demo.setEmail("procurement@marinabay-ura.gov.sg");
        demo.setTypology("Supertall Aerodynamic Skyrise");
        demo.setSiteLocation("Marina Bay Sector 4, Singapore");
        demo.setTargetGfaSqm(145000.0);
        demo.setTargetBudgetMln(420.0);
        demo.setFlythroughRenderingPackage("Real-Time Unreal Engine 5 Orbit");
        demo.setProjectBrief("Design requirement for iconic aerodynamic twin towers with kinetic facade louvers, central vortex bleed aperture, and continuous sky-bridge observatory.");
        demo.setStatus("APPROVED_CONCEPT_FEASIBILITY");
        rfqList.add(demo);
    }

    public RfqRequest submitRfq(RfqRequest request) {
        request.setId(idCounter.incrementAndGet());
        if (request.getStatus() == null || request.getStatus().isBlank()) {
            request.setStatus("RECEIVED_IN_ENGINEERING_REVIEW");
        }
        rfqList.add(0, request);
        return request;
    }

    public List<RfqRequest> getAllRfqs() {
        return rfqList;
    }
}
