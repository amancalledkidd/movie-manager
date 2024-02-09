package com.moviemanager.api.exceptions;

public class FilmNotFoundException extends RuntimeException {
    public FilmNotFoundException() {
        super("Film has not been found");
    }
}
