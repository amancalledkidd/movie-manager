package com.moviemanager.api.mapper;

import com.moviemanager.api.model.Film;
import com.moviemanager.api.model.FilmData;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface FilmMapper {

    @Mapping(source = "id", target = "apiId")
    @Mapping(source = "posterPath", target = "posterPath")
    Film filmDataToFilm(FilmData filmData);
}
