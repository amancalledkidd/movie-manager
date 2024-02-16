package com.moviemanager.api.service;

import com.moviemanager.api.exceptions.FilmAlreadyExists;
import com.moviemanager.api.exceptions.FilmNotFoundException;
import com.moviemanager.api.exceptions.NotFoundException;
import com.moviemanager.api.mapper.FilmMapper;
import com.moviemanager.api.model.Film;
import com.moviemanager.api.model.FilmData;
import com.moviemanager.api.model.Review;
import com.moviemanager.api.repository.FilmRepository;
import com.moviemanager.api.repository.ReviewRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class FilmService {

    @Autowired
    FilmRepository filmRepository;
    @Autowired
    FilmMapper filmMapper;
    @Autowired
    ReviewRepository reviewRepository;

    @Transactional
    public Film addFilm(FilmData filmData) {
        Film film = filmMapper.filmDataToFilm(filmData);
        if(filmRepository.existsByApiId(film.getApiId())) {
            throw new FilmAlreadyExists(film.getTitle() + " is already saved");
        }
        return filmRepository.save(film);
    }

    public Review addReview(Review review) {
        return reviewRepository.save(review);
    }

    @Transactional
    public Film getFilmById(long id) {
        if (!filmRepository.existsById(id)) {
            throw new FilmNotFoundException();
        }

        return filmRepository.findAllById(id);
    }

    public Film getRandomFilm() {
        List<Film> greetings = filmRepository.findAll();
        Random rand = new Random();
        return greetings.get(rand.nextInt(greetings.size()));
    }


    public List<Film> getAllFilms(int limit, boolean watched) {
        return filmRepository.findAll().stream()
                .filter(film -> film.getHaveWatched() == watched)
                .limit(limit)
                .collect(Collectors.toList());
    }

    public List<Review> getReviewsByFilmId(long filmId) {
        return reviewRepository.getAllByFilmId(filmId);
    }

    // UPDATE
    @Modifying
    public Film updateFilm(Film newFilm, long id) {
        if (!filmRepository.existsById(id)) {
            throw new FilmNotFoundException();
        }
        newFilm.setId(id);
        return filmRepository.save(newFilm);
    }

    public Review updateReview(Review review, long id) {
        if (!reviewRepository.existsById(id)) {
            throw new NotFoundException("Review not found!");
        }
        review.setId(id);
        return reviewRepository.save(review);
    }

    // DELETE
    public void deleteFilmById(long id) {
        if (!filmRepository.existsById(id)) {
            throw new FilmNotFoundException();
        }

        filmRepository.deleteById(id);
    }

    public void deleteReviewById(long id) {
        if (!reviewRepository.existsById(id)) {
            throw new NotFoundException("Review not found!");
        }

        reviewRepository.deleteById(id);
    }


}
