package com.moviemanager.api.repository;

import com.moviemanager.api.model.Film;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class FilmRepository {
    private final List<Film> films = new ArrayList<>();


    public void addFilm(Film film) {
        films.add(film);
    }

    // READ

    public List<Film> getAllFilms(){
        return films;
    }


    public Film getFilmById(long id){
        for (Film film: films) {
            if(film.getId() == id){
                return film;
            }
        }
        return null;
    }

    public Film getRandomFilm(){
        Random rand = new Random();
        return films.get(rand.nextInt(films.size()));
    }

    // UPDATE



    // DELETE


}
