package com.moviemanager.api.controller;

import com.moviemanager.api.model.Film;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class FilmController {
//    @Autowired
//    FilmService filmsService;

    // CREATE

    @PostMapping("/film")
    public Film createGreeting(@RequestBody Film film){
        return film;
    }



    // READ


    @GetMapping("/film")
    public String testFilm() {
        return "Here is your film";
    }

//    @GetMapping("/films/directors")
//    public List<String> getFilmsByDirectors() {
//        return
//    }



//    @GetMapping("/greetings")
//    public List<Greeting> getGreetings(
//            @RequestParam(required = false) String countryName,
//            @RequestParam(required = false, defaultValue = "10") int limit
//    ) {
//        if(countryName != null) {
//            return greetingsService.getGreetingsWithLimit(limit, greetingsService.getGreetingsByCountryName(countryName));
//        }
//        return greetingsService.getGreetingsWithLimit(limit, greetingsService.getAllGreetings());
//    }
//
//    @GetMapping("/greeting/random")
//    public Greeting getRandomGreeting() {
//        return greetingsService.getRandomGreeting();
//    }
//
//    @GetMapping("/greeting/{id}")
//    public Greeting getGreetingById(@PathVariable long id) {
//        return greetingsService.getGreetingById(id);
//    }
//
//    // UPDATE
//
//    @PutMapping("/greeting/{id}")
//    public Greeting updateGreeting(@RequestBody Greeting newGreeting, @PathVariable long id){
//        newGreeting.setId(id);
//        greetingsService.updateGreeting(newGreeting, id);
//        return newGreeting;
//    }
//
//    // DELETE
//
//    @DeleteMapping("/greeting/{id}")
//    public String deleteGreetingById(@PathVariable long id) {
//        greetingsService.deleteGreetingById(id);
//        return "Deleted Greeting";
//    }
}
