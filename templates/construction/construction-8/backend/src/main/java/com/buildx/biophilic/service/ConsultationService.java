package com.buildx.biophilic.service;

import com.buildx.biophilic.model.ConsultationRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class ConsultationService {

    private final List<ConsultationRequest> requests = new ArrayList<>();
    private final AtomicLong idGenerator = new AtomicLong(100);

    public ConsultationRequest saveRequest(ConsultationRequest request) {
        request.setId(idGenerator.incrementAndGet());
        requests.add(request);
        return request;
    }

    public List<ConsultationRequest> getAllRequests() {
        return requests;
    }
}
