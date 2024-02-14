package com.moviemanager.api.exceptions;

public class FilmAlreadyExists extends RuntimeException {
    public FilmAlreadyExists(String message){
        super(message);
    }
}
