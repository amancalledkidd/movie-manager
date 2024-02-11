import './PopularFilmContainer.scss'
import { FilmInfo } from '../../types/FilmApiResponse'
import TmdbFilmItem from '../TmdbFilmItem/TmdbFilmItem'

type PopularFilmContainerProps = {
    popularMovies: FilmInfo[]
}

const PopularFilmContainer = ({popularMovies}: PopularFilmContainerProps) => {
    return (
        <div>
        <h1>PopularFilmContainer</h1>
        <div>
            {popularMovies.map(film => <TmdbFilmItem film={film} key={film.id} />)}
        </div>
        </div>
    );
};

export default PopularFilmContainer;