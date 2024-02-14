import { useEffect, useState } from 'react';
import './Home.scss'
import { FilmInfo } from '../../types/FilmApiResponse';
import PopularFilmContainer from '../PopularFilmContainer/PopularFilmContainer';
import Navbar from '../Navbar/Navbar';

const Home = () => {

    const [popularMovies, setPopularMovies] = useState<FilmInfo[]>([]);

    useEffect(() => {
        fetchPopularMovies();
    }, []);


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
        <Navbar />
        <PopularFilmContainer heading="Trending Films" popularMovies={popularMovies} />
        </div>
    );
};

export default Home;