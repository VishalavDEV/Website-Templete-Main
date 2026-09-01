package com.aura.backend.controller;

import com.aura.backend.dto.AddressRequest;
import com.aura.backend.dto.MessageResponse;
import com.aura.backend.dto.ProfileUpdateRequest;
import com.aura.backend.dto.UserResponse;
import com.aura.backend.model.Address;
import com.aura.backend.model.User;
import com.aura.backend.repository.AddressRepository;
import com.aura.backend.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    private final UserRepository userRepository;
    private final AddressRepository addressRepository;
    private final PasswordEncoder passwordEncoder;

    public ProfileController(UserRepository userRepository, AddressRepository addressRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.addressRepository = addressRepository;
        this.passwordEncoder = passwordEncoder;
    }

    private User getAuthenticatedUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Authenticated user not found"));
    }

    @GetMapping
    public ResponseEntity<UserResponse> getProfile() {
        User user = getAuthenticatedUser();
        return ResponseEntity.ok(new UserResponse(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getRole(),
                user.getWishlist()
        ));
    }

    @PutMapping
    public ResponseEntity<?> updateProfile(@RequestBody ProfileUpdateRequest updateReq) {
        User user = getAuthenticatedUser();

        if (updateReq.getEmail() != null && !updateReq.getEmail().isEmpty()) {
            if (!updateReq.getEmail().equals(user.getEmail()) && userRepository.existsByEmail(updateReq.getEmail())) {
                return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
            }
            user.setEmail(updateReq.getEmail());
        }

        if (updateReq.getNewPassword() != null && !updateReq.getNewPassword().isEmpty()) {
            if (updateReq.getOldPassword() == null || updateReq.getOldPassword().isEmpty()) {
                return ResponseEntity.badRequest().body(new MessageResponse("Error: Old password required to change password"));
            }
            if (!passwordEncoder.matches(updateReq.getOldPassword(), user.getPassword())) {
                return ResponseEntity.badRequest().body(new MessageResponse("Error: Old password does not match"));
            }
            user.setPassword(passwordEncoder.encode(updateReq.getNewPassword()));
        }

        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("Profile updated successfully"));
    }

    @GetMapping("/addresses")
    public ResponseEntity<List<Address>> getAddresses() {
        User user = getAuthenticatedUser();
        return ResponseEntity.ok(addressRepository.findByUser(user));
    }

    @PostMapping("/addresses")
    public ResponseEntity<Address> addAddress(@RequestBody AddressRequest addrReq) {
        User user = getAuthenticatedUser();
        List<Address> existing = addressRepository.findByUser(user);

        boolean isDefault = addrReq.getIsDefault() || existing.isEmpty();

        if (isDefault) {
            // Unset previous defaults
            for (Address a : existing) {
                if (a.getIsDefault()) {
                    a.setIsDefault(false);
                    addressRepository.save(a);
                }
            }
        }

        Address address = new Address(
                user,
                addrReq.getFullName(),
                addrReq.getAddressLine(),
                addrReq.getCity(),
                addrReq.getZipCode(),
                addrReq.getPhone(),
                isDefault
        );

        addressRepository.save(address);
        return ResponseEntity.ok(address);
    }

    @DeleteMapping("/addresses/{id}")
    public ResponseEntity<?> deleteAddress(@PathVariable Long id) {
        User user = getAuthenticatedUser();
        Address address = addressRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Address not found"));

        if (!address.getUser().getId().equals(user.getId())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Unauthorized action"));
        }

        addressRepository.delete(address);
        return ResponseEntity.ok(new MessageResponse("Address deleted successfully"));
    }
}
