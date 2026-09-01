package com.chronos.brutalist.service;

import com.chronos.brutalist.model.RfqRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class RfqService {

    private final List<RfqRequest> rfqList = new ArrayList<>();
    private final AtomicLong idCounter = new AtomicLong(100);

    public RfqService() {
        // Pre-populate an example commission
        RfqRequest demo = new RfqRequest();
        demo.setId(idCounter.incrementAndGet());
        demo.setClientName("Nordic Infrastructure Authority");
        demo.setClientEmail("procurement@nordic-infra.se");
        demo.setOrganization("Swedish Maritime Transport");
        demo.setProjectType("Industrial Civic Terminal");
        demo.setLocation("Malmö Harbor Zone, Sweden");
        demo.setEstimatedBudgetMln(48.5);
        demo.setTimeline("Q3 2027 – Q4 2029");
        demo.setTechnicalNotes("Requirement for marine C80 fair-faced concrete with blast-resistant perimeter wall.");
        demo.setStatus("APPROVED_FEASIBILITY");
        rfqList.add(demo);
    }

    public RfqRequest submitRfq(RfqRequest request) {
        request.setId(idCounter.incrementAndGet());
        if (request.getStatus() == null || request.getStatus().isBlank()) {
            request.setStatus("RECEIVED_UNDER_REVIEW");
        }
        rfqList.add(0, request);
        return request;
    }

    public List<RfqRequest> getAllRfqs() {
        return rfqList;
    }
}
