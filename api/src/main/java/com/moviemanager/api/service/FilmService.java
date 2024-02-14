package com.moviemanager.api.service;

import com.moviemanager.api.exceptions.FilmAlreadyExists;
import com.moviemanager.api.exceptions.FilmNotFoundException;
import com.moviemanager.api.mapper.FilmMapper;
import com.moviemanager.api.model.Film;
import com.moviemanager.api.model.FilmData;
import com.moviemanager.api.repository.FilmRepository;
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

    @Transactional
    public Film addFilm(FilmData filmData) {
        Film film = filmMapper.filmDataToFilm(filmData);
        if(filmRepository.existsById(film.getApiId())) {
            throw new FilmAlreadyExists(film.getTitle() + " is already saved");
        }
        return filmRepository.save(film);
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


    public List<Film> getAllFilms(int limit) {
        return filmRepository.findAll().stream().limit(limit)
                .collect(Collectors.toList());
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

    // DELETE
    public void deleteFilmById(long id) {
        if (!filmRepository.existsById(id)) {
            throw new FilmNotFoundException();
        }

        filmRepository.deleteById(id);
    }

}
