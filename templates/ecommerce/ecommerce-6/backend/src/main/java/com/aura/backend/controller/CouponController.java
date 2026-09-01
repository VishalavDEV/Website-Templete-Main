package com.aura.backend.controller;

import com.aura.backend.dto.MessageResponse;
import com.aura.backend.model.Coupon;
import com.aura.backend.repository.CouponRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/coupons")
public class CouponController {

    private final CouponRepository couponRepository;

    public CouponController(CouponRepository couponRepository) {
        this.couponRepository = couponRepository;
    }

    @GetMapping("/validate")
    public ResponseEntity<?> validateCoupon(@RequestParam String code) {
        return couponRepository.findByCodeIgnoreCase(code)
                .map(coupon -> {
                    if (Boolean.TRUE.equals(coupon.getActive())) {
                        return ResponseEntity.ok(coupon);
                    }
                    return ResponseEntity.badRequest().body(new MessageResponse("Coupon is no longer active"));
                })
                .orElse(ResponseEntity.badRequest().body(new MessageResponse("Invalid coupon code")));
    }
}
