import './FilmItem.scss';
import { Film } from '../../types/Film'
import { Link } from 'react-router-dom';

type FilmItemProps = {
    film: Film;
}

const FilmItem = ({ film }: FilmItemProps) => {
    const imageUrl = film.posterPath
        ? `https://image.tmdb.org/t/p/w500${film.posterPath}.jpg`
        : '/path-to-default-image.jpg';

    return (
        <div className="film-item-container">
            <Link to={`/film/${film.apiId}`}>
                <img src={imageUrl} alt={film.title} className="film-item-container__film-image" />
            </Link>
        </div>
      );
}

export default FilmItem;