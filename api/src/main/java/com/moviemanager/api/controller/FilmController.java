package com.moviemanager.api.controller;

import com.moviemanager.api.exceptions.FilmAlreadyExists;
import com.moviemanager.api.exceptions.FilmNotFoundException;
import com.moviemanager.api.model.Film;
import com.moviemanager.api.model.FilmData;
import com.moviemanager.api.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173/", maxAge = 3600)
@RestController
public class FilmController {

    @Autowired
    FilmService filmsService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    @ExceptionHandler(FilmAlreadyExists.class)
    public ResponseEntity<String> handleFilmAlreadyExists(FilmAlreadyExists exception) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(exception.getMessage());
    }

    // CREATE
    @PostMapping("/film")
    public ResponseEntity<Film> createFilm(@RequestBody FilmData film){
        Film newFilm = filmsService.addFilm(film);
        return ResponseEntity.status(HttpStatus.CREATED).body(newFilm);
    }



    // READ


    @GetMapping("/film")
    public String testFilm() {
        return "Here is your film";
    }


    @GetMapping("/films")
    public List<Film> getFilms(
            @RequestParam(required = false, defaultValue = "10") int limit
    ) {
        return filmsService.getAllFilms(limit);
    }

    @GetMapping("/film/random")
    public Film getRandomFilm() {
        return filmsService.getRandomFilm();
    }

    @GetMapping("/film/{id}")
    public Film getFilmById(@PathVariable long id) {
        return filmsService.getFilmById(id);
    }

   // UPDATE

    @PutMapping("/film/{id}")
    public ResponseEntity<Film> updateFilm(@RequestBody Film newFilm, @PathVariable long id){
        Film updatedFilm = filmsService.updateFilm(newFilm, id);
        return ResponseEntity.status(HttpStatus.OK).body(updatedFilm);
    }

    // DELETE

    @DeleteMapping("/film/{id}")
    public String deleteFilmById(@PathVariable long id) {
        filmsService.deleteFilmById(id);
        return "Deleted Film";
    }
}
