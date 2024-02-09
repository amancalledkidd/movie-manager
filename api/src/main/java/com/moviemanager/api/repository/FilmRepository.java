package com.moviemanager.api.repository;

import com.moviemanager.api.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmRepository extends JpaRepository<Film, Long> {
    Film findAllById(long id);

}
