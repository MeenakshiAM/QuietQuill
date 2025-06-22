package com.diary_app.Diary.Repository;

import com.diary_app.Diary.model.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface userRepo extends JpaRepository<user,Long> {
    List<user> findByEmail(String email);

    Optional<user> findByNameAndPassword(String name, String password);

    boolean existsByName(String name);

    Optional<user> findByName(String name);
}
