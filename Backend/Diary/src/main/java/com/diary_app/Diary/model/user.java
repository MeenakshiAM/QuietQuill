package com.diary_app.Diary.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users") // Avoid conflict with reserved "user" keyword in some DBs
public class user {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @NotBlank(message = "Please fill in a name")
    @Size(min = 3, max = 30)
    private String name;

    @NonNull
    @NotBlank(message = "Password is required")
    @Size(min = 8, max = 12, message = "Password must be between 8 and 12 characters")
    private String password;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<diary> diaries = new ArrayList<>();
}
