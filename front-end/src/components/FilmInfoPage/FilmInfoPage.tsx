import './FilmInfoPage.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FilmInfo } from '../../types/FilmApiResponse';
import Navbar from '../Navbar/Navbar';

const FilmInfoPage = () => {
    const [filmInfo, setFilmInfo] = useState<FilmInfo | null>(null);
    const { id } = useParams();

    useEffect(() => {
        fetchFilmInfo();
    }, [id]);

    const fetchFilmInfo = async () => {
        const apiKey = import.meta.env.VITE_TMDB_KEY;
        const url = `https://api.themoviedb.org/3/movie/${id}?&api_key=${apiKey}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
            },
        };
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                console.log(response);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            setFilmInfo(json);
            console.log(json);
        } catch (err) {
            console.error('error:', err);
        }
    };

    return (
        <>
            <Navbar />
            <div className="film-info-page">
                {filmInfo && (
                    <div className="film-info">
                        <div className="film-info__backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${filmInfo.backdrop_path})` }}></div>
                        <div className="film-info__content">
                            <img className="film-info__poster" src={`https://image.tmdb.org/t/p/w300${filmInfo.poster_path}`} alt={filmInfo.title} />
                            <div className="film-info__details">
                                <h1 className="film-info__title">{filmInfo.title}</h1>
                                <p className="film-info__overview">{filmInfo.overview}</p>
                                <p className="film-info__release-date">Release date: {filmInfo.release_date}</p>
                                <p className="film-info__rating">Rating: {filmInfo.vote_average.toPrecision(2)}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default FilmInfoPage;
