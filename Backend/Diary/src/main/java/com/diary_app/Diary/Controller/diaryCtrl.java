package com.diary_app.Diary.Controller;

import com.diary_app.Diary.Service.diaryService;
import com.diary_app.Diary.User_Dto.diaryDto;
import com.diary_app.Diary.model.diary;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/diary")
public class diaryCtrl {

    @Autowired
    private diaryService diaryService;

    @GetMapping("/title")
    public ResponseEntity<List<diaryDto>> getEntriesByTitle(@RequestParam @Valid String title) {
        List<diaryDto> entries = diaryService.getEntryByTitle(title);
        return ResponseEntity.ok(entries);
    }

    @GetMapping("/date")
    public ResponseEntity<List<diaryDto>> getEntriesByDate(
            @RequestParam @Valid @DateTimeFormat(pattern = "dd-MM-yyyy") Date date) {
        List<diaryDto> entries = diaryService.getEntryByDate(date);
        return ResponseEntity.ok(entries);
    }

    @GetMapping("/{id}")
    public ResponseEntity<diary> getDiaryById(@PathVariable Long id) {
        Optional<diary> diary = diaryService.getEntryById(id);
        return diary.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveDiaryEntry(@Valid @RequestBody diary entry) {
        diaryService.saveEntry(entry);
        return ResponseEntity.ok("Diary entry saved successfully.");
    }
}
