package com.cognizant.jwt.controller;

import com.cognizant.jwt.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletRequest;

import java.util.Base64;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            return ResponseEntity.status(401).body("Missing or invalid Authorization header");
        }

        String base64Credentials = authHeader.substring("Basic ".length());
        String decoded = new String(Base64.getDecoder().decode(base64Credentials));
        String[] creds = decoded.split(":", 2);
        String username = creds[0];
        String password = creds[1];

        // Hardcoded check for now
        if (!username.equals("user") || !password.equals("pwd")) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }

        String token = jwtUtil.generateToken(username);
        return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
    }
}
