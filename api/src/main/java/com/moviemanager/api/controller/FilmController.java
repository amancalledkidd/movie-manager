package com.moviemanager.api.controller;

import com.moviemanager.api.exceptions.FilmNotFoundException;
import com.moviemanager.api.model.Film;
import com.moviemanager.api.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FilmController {

    @Autowired
    FilmService filmsService;

    @ExceptionHandler
    public String handleExceptions(FilmNotFoundException exception) {
        return exception.getMessage();
    }


    // CREATE

    @PostMapping("/film")
    public Film createGreeting(@RequestBody Film film){
        filmsService.addFilm(film);
        return film;
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
    public Film updateGreeting(@RequestBody Film newFilm, @PathVariable long id){
        newFilm.setId(id);
        filmsService.updateFilm(newFilm, id);
        return newFilm;
    }

    // DELETE

    @DeleteMapping("/film/{id}")
    public String deleteFilmById(@PathVariable long id) {
        filmsService.deleteFilmById(id);
        return "Deleted Film";
    }
}
