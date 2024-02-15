package com.tirage.carte.model.request;

import lombok.Data;

@Data
public class LoginRequest {
    private String username;
    private String password;

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
    // getters and setters
}

