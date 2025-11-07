package com.diary_app.Diary.Service;

import com.diary_app.Diary.Repository.userRepo;
import com.diary_app.Diary.User_Dto.userDto;
import com.diary_app.Diary.model.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class userService {

    @Autowired
    private userRepo userRepo;

    public List<userDto> getInfo(String email) {
        return userRepo.findByEmail(email)
                .map(u -> List.of(new userDto(u.getName(), u.getEmail())))
                .orElse(List.of());
    }

    public void saveInfo(user user) {
        userRepo.save(user);
    }

    public boolean existsByName(String name) {
        return userRepo.existsByName(name);
    }

    public void saveUser(user user) {
        userRepo.save(user);
    }

    public boolean isValidUser(String name, String password) {
        return userRepo.findByNameAndPassword(name, password).isPresent();
    }

    public Optional<user> getUser(String name, String password) {
        return userRepo.findByNameAndPassword(name, password);
    }
}
