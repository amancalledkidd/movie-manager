import { useEffect, useState } from 'react';
import './Home.scss'
import { FilmInfo } from '../../types/FilmApiResponse';
import PopularFilmContainer from '../PopularFilmContainer/PopularFilmContainer';
import Navbar from '../Navbar/Navbar';

const Home = () => {

    const [popularMovies, setPopularMovies] = useState<FilmInfo[]>([]);
    const [upcomingMovies, setUpcomingMovies] = useState<FilmInfo[]>([]);
    const [topRatedMovies, setTopRatedMovies] = useState<FilmInfo[]>([]);

    useEffect(() => {
        fetchMovies("popular");
        fetchMovies("upcoming");
        fetchMovies('top_rated');
    }, []);

    const fetchMovies = async (param: string) => {
        const apiKey = import.meta.env.VITE_TMDB_KEY;
        const url = `https://api.themoviedb.org/3/movie/${param}?language=en-US&page=1&api_key=${apiKey}`;
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
            if (param === "upcoming") {
                setUpcomingMovies(json.results);
            } else if (param === "popular") {
                setPopularMovies(json.results);
            } else if (param === "top_rated") {
                setTopRatedMovies(json.results);
            }
            console.log(json);
        } catch (err) {
            console.error('error:', err);
        }
    };

    return (
        <div>
            <Navbar />
            <section className="home">
                <div className="home__heading">
                    <h1 className="home__title">Movie Manager</h1>
                </div>
                <div className="home__containers">
                    <PopularFilmContainer heading="Top Rated" popularMovies={topRatedMovies} />
                    <PopularFilmContainer heading="Trending Films" popularMovies={popularMovies} />
                    <PopularFilmContainer heading="Upcoming Films" popularMovies={upcomingMovies} />
                </div>
            </section>
        </div>
    );
}

export default Home;