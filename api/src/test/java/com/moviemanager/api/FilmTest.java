package com.moviemanager.api;

import com.moviemanager.api.model.Film;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class FilmTest {

    private Film film;

    @BeforeEach
    void setUp() {
        film = new Film(1,"Inception", "Christopher Nolan", 2010, "Science Fiction");
    }

    @Test
    void getTitle() {
        assertEquals("Inception", film.getTitle());
    }

    @Test
    void setTitle() {
        film.setTitle("Interstellar");
        assertEquals("Interstellar", film.getTitle());
    }

    @Test
    void getDirector() {
        assertEquals("Christopher Nolan", film.getDirector());
    }

    @Test
    void setDirector() {
        film.setDirector("Steven Spielberg");
        assertEquals("Steven Spielberg", film.getDirector());
    }

    @Test
    void getReleaseYear() {
        assertEquals(2010, film.getReleaseYear());
    }

    @Test
    void setReleaseYear() {
        film.setReleaseYear(2014);
        assertEquals(2014, film.getReleaseYear());
    }

    @Test
    void getGenre() {
        assertEquals("Science Fiction", film.getGenre());
    }

    @Test
    void setGenre() {
        film.setGenre("Action");
        assertEquals("Action", film.getGenre());
    }

    @Test
    void testToString() {
        String expected = "Film{id=1, title='Inception', director='Christopher Nolan', releaseYear=2010, genre='Science Fiction'}";
        assertEquals(expected, film.toString());
    }
}