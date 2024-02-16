package com.moviemanager.api.controller;

import com.moviemanager.api.exceptions.FilmAlreadyExists;
import com.moviemanager.api.exceptions.FilmNotFoundException;
import com.moviemanager.api.model.Film;
import com.moviemanager.api.model.FilmData;
import com.moviemanager.api.model.Review;
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

    @PostMapping("/film/review")
    public ResponseEntity<Review> createReview(@RequestBody Review review) {
        Review newReview = filmsService.addReview(review);
        return ResponseEntity.status(HttpStatus.CREATED).body(newReview);
    }



    // READ


    @GetMapping("/film")
    public String testFilm() {
        return "Here is your film";
    }


    @GetMapping("/films")
    public List<Film> getFilms(
            @RequestParam(required = false, defaultValue = "20") int limit,
            @RequestParam(required = false, defaultValue = "false") boolean watched
    ) {
        return filmsService.getAllFilms(limit, watched);
    }


    @GetMapping("/film/random")
    public Film getRandomFilm() {
        return filmsService.getRandomFilm();
    }

    @GetMapping("/film/{id}")
    public Film getFilmById(@PathVariable long id) {
        return filmsService.getFilmById(id);
    }

    @GetMapping("/film/{film_id}/reviews")
    public ResponseEntity<List<Review>> getReviewsByFilmId(@PathVariable long film_id) {
        return ResponseEntity.status(HttpStatus.OK).body(filmsService.getReviewsByFilmId(film_id));
    }

   // UPDATE

    @PutMapping("/film/{id}")
    public ResponseEntity<Film> updateFilm(@RequestBody Film newFilm, @PathVariable long id){
        Film updatedFilm = filmsService.updateFilm(newFilm, id);
        return ResponseEntity.status(HttpStatus.OK).body(updatedFilm);
    }

    @PutMapping("/film/review/{id}")
    public ResponseEntity<Review> updateReviewById(@RequestBody Review review, @PathVariable long id) {
        Review updatedReview = filmsService.updateReview(review, id);
        return ResponseEntity.status(HttpStatus.OK).body(updatedReview);
    }

    // DELETE

    @DeleteMapping("/film/{id}")
    public ResponseEntity<Void> deleteFilmById(@PathVariable long id) {
        filmsService.deleteFilmById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @DeleteMapping("/film/review/{id}")
    public ResponseEntity<Void> deleteReviewById(@PathVariable long id){
        filmsService.deleteReviewById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
