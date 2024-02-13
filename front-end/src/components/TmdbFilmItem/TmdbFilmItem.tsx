import './TmbdFilmItem.scss';
import { FilmInfo } from '../../types/FilmApiResponse';
import { Link } from 'react-router-dom';

type TmdbFilmItemProps = {
    film: FilmInfo;
    onAdd?: (film: FilmInfo) => void; // Optional click handler for the add icon
}

const TmdbFilmItem = ({ film, onAdd }: TmdbFilmItemProps) => {
  const imageUrl = film.poster_path
    ? `https://image.tmdb.org/t/p/w500${film.poster_path}.jpg`
    : '/path-to-default-image.jpg';

    const handleAddClick = () => {
        if (onAdd) {
            onAdd(film);
        }
    }

  return (
    <div className="film-item-container">
        <Link to={`/film/${film.id}`}>
            <img src={imageUrl} alt={film.title} className="film-item-container__film-image" />
        </Link>
        <button className="film-item-container__add-icon" onClick={handleAddClick} aria-label={`Add ${film.title} to your list`}>
            +
        </button>
    </div>
  );
}

export default TmdbFilmItem;
