package com.moviemanager.api.repository;

import com.moviemanager.api.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
