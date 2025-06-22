package com.diary_app.Diary.Service;

import com.diary_app.Diary.Repository.diaryRepo;
import com.diary_app.Diary.User_Dto.diaryDto;
import com.diary_app.Diary.model.diary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class diaryService {

    @Autowired
    private diaryRepo repo;

    // ✅ Get entries by date
    public List<diaryDto> getEntryByDate(Date date) {
        List<diary> dateEntries = repo.findByDate(date); // ← FIXED return type

        return dateEntries.stream()
                .map(d -> new diaryDto(d.getContent(), d.getTitle(), d.getDate()))
                .collect(Collectors.toList());
    }

    // ✅ Get entries by title
    public List<diaryDto> getEntryByTitle(String title) {
        List<diary> titleEntries = repo.findByTitle(title); // ← FIXED return type

        return titleEntries.stream()
                .map(t -> new diaryDto(t.getContent(), t.getTitle(), t.getDate()))
                .collect(Collectors.toList());
    }

    // ✅ Save a new diary entry
    public void saveEntry(diary entry) {
        repo.save(entry);
    }

    // ✅ Get entry by ID
    public Optional<diary> getEntryById(Long id) {
        return repo.findById(id);
    }
}
