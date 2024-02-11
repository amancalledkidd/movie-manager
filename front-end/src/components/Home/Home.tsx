import { useEffect, useState } from 'react';
import FilmItemContainer from '../FilmItemContainer/FilmItemContainer';
import { Film } from '../../types/Film';
import './Home.scss'
import { FilmDatabaseApiResponse, FilmInfo } from '../../types/FilmApiResponse';

const Home = () => {

    const [films, setFilms] = useState<Film[]>([]);
    const [popularMovies, setPopularMovies] = useState<FilmInfo[]>([]);

    useEffect(() => {
        fetchPopularMovies();
        getFilms();
    }, []);

    const getFilms = async () => {
        const response = await fetch('http://localhost:8080/films');
        const data = await response.json();
        console.log(data);
        setFilms(data);
    }

    

    const fetchPopularMovies = async () => {
        const apiKey = import.meta.env.VITE_TMDB_KEY;
        const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            setPopularMovies(json.results);
            console.log(json);
        } catch (err) {
            console.error('error:', err);
        }
    };

    return (
        <div>
        <h1>Home</h1>
        <FilmItemContainer films={films} />
        <FilmItemContainer films={films} />
        </div>
    );
};

export default Home;