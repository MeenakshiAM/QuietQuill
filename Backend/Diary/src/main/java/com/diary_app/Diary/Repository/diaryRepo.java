package com.diary_app.Diary.Repository;

import com.diary_app.Diary.User_Dto.diaryDto;
import com.diary_app.Diary.model.diary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;


@Repository
public interface diaryRepo  extends JpaRepository<diary,Long> {
    List<diary> findByDate(Date date);
    List<diary> findByTitle(String title);
}
