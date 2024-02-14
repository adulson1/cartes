package com.tirage.carte.controller;

import com.tirage.carte.model.LoginRequest;
import com.tirage.carte.model.UserEntity;
import com.tirage.carte.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

        import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<UserEntity> getAllUsers() {
        List<UserEntity> user = userRepository.findAll();
        System.out.println("User ====> " + user);
        return user;
    }

    @PostMapping
    public UserEntity createUser(@RequestBody UserEntity user) {
        return userRepository.save(user);
    }

    @GetMapping("/users/{id}")
    public UserEntity getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
    }

    @PostMapping("/users/login")
    public ResponseEntity<UserEntity> login(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();
        // Perform authentication logic
        UserEntity user = userRepository.findByUserNameAndPassWord(username,password);
        if (user != null && password.equals(user.getPassWord())) {
            // Authentication successful
            return ResponseEntity.ok(user);
        } else {
            // Authentication failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }
}
