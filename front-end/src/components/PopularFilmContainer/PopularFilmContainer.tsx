import './PopularFilmContainer.scss';
import { FilmInfo } from '../../types/FilmApiResponse';
import TmdbFilmItem from '../TmdbFilmItem/TmdbFilmItem';

type PopularFilmContainerProps = {
    popularMovies: FilmInfo[];
};

const PopularFilmContainer = ({ popularMovies }: PopularFilmContainerProps) => {

    const addFilm = (film: FilmInfo) => {
        const response = fetch('http://localhost:8080/film', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(film)
        });
        console.log(`Adding ${film.title} to your list`);
        console.log(response);
    }

    return (
        <div className="popular-film-container">
            <h1 className="popular-film-container__title">Popular Films</h1>
            <div className="popular-film-container__scroll">
                {popularMovies.map(film => <TmdbFilmItem onAdd={addFilm} key={film.id} film={film} />)}
            </div>
        </div>
    );
};

export default PopularFilmContainer;