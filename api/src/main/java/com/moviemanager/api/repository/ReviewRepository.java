package com.moviemanager.api.repository;

import com.moviemanager.api.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> getAllByFilmId(long filmId);
}
