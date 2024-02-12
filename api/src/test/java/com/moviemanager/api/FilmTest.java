package com.moviemanager.api;

import com.moviemanager.api.model.Film;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class FilmTest {

    private Film film;

    @BeforeEach
    void setUp() {
        film = new Film();
        film.setId(1);
        film.setTitle("Inception");

        film.setHaveWatched(true);
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
    void getHaveWatched() {
        assertTrue(film.getHaveWatched());
    }

    @Test
    void setHaveWatched() {
        film.setHaveWatched(false);
        assertFalse(film.getHaveWatched());
    }

    @Test
    void testToString() {
        String expected = "Film{id=1, title='Inception', haveWatched=true}";
        assertEquals(expected, film.toString());
    }
}