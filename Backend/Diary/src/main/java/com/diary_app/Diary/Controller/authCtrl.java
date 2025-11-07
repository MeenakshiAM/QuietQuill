package com.diary_app.Diary.Controller;

import com.diary_app.Diary.Service.userService;
import com.diary_app.Diary.User_Dto.userDto;
import com.diary_app.Diary.model.user;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class authCtrl {

    @Autowired
    private userService userService;

    //  GET USER INFO BY EMAIL
    @GetMapping("/user")
    public ResponseEntity<List<userDto>> getInfo(@RequestParam @Valid String email) {
        List<userDto> info = userService.getInfo(email);
        return ResponseEntity.ok(info);
    }

    // OPTIONAL: Store user directly
    @PostMapping("/store")
    public ResponseEntity<?> storeInfo(@RequestBody @Valid user user) {
        userService.saveInfo(user);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Collections.singletonMap("message", "User stored successfully"));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody user user) {
        if (userService.existsByName(user.getName())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Collections.singletonMap("message", "Username already exists"));
        }

        userService.saveUser(user);
        return ResponseEntity.ok(Collections.singletonMap("message", "Signup successful"));
    }
}
