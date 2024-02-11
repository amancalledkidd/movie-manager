import './PopularFilmContainer.scss';
import { FilmInfo } from '../../types/FilmApiResponse';
import TmdbFilmItem from '../TmdbFilmItem/TmdbFilmItem';

type PopularFilmContainerProps = {
    popularMovies: FilmInfo[];
};

const PopularFilmContainer = ({ popularMovies }: PopularFilmContainerProps) => {
    return (
        <div className="popular-film-container">
            <h1 className="popular-film-container__title">Popular Films</h1>
            <div className="popular-film-container__scroll">
                {popularMovies.map(film => <TmdbFilmItem key={film.id} film={film} />)}
            </div>
        </div>
    );
};

export default PopularFilmContainer;