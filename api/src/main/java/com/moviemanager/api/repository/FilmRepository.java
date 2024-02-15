package com.moviemanager.api.repository;

import com.moviemanager.api.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FilmRepository extends JpaRepository<Film, Long> {
    Film findAllById(long id);

    Film getByApiId(long apiId);

    @Query("SELECT COUNT(*) > 0 FROM Film WHERE apiId = :apiId")
    boolean existsByApiId(@Param("apiId") long apiId);
}
