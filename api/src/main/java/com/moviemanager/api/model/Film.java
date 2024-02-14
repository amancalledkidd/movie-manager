package com.moviemanager.api.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "films")
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;

    @Column(name = "api_id", unique = true)
    private long apiId;

    @Column(name = "have_watched")
    private Boolean haveWatched = false;


    @Column(name = "poster_path")
    private String posterPath;

    public Film() {}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public long getApiId() {
        return apiId;
    }

    public void setApiId(int apiId) {
        this.apiId = apiId;
    }

    public Boolean getHaveWatched() {
        return haveWatched;
    }

    public void setHaveWatched(Boolean haveWatched) {
        this.haveWatched = haveWatched;
    }


    public String getPosterPath() {
        return posterPath;
    }

    public void setPosterPath(String posterPath) {
        this.posterPath = posterPath;
    }

    @Override
    public String toString() {
        return "Film{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", apiId=" + apiId +
                ", haveWatched=" + haveWatched +
                '}';
    }
}