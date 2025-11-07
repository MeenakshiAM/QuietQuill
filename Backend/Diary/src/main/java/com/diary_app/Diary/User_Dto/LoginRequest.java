package com.diary_app.Diary.User_Dto;

import lombok.Getter;

@Getter
public class LoginRequest {
    private String email;
    private String password;

    public LoginRequest() {}

    public void setEmail(String email) {
        this.email= email;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}