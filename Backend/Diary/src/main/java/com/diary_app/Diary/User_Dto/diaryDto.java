package com.diary_app.Diary.User_Dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class diaryDto {
    private String content;
    private String title;
    private Date date;
}
