import './TmbdFilmItem.scss';
import { FilmInfo } from '../../types/FilmApiResponse';

type TmdbFilmItemProps = {
    film: FilmInfo;
    onAdd?: () => void; // Optional click handler for the add icon
}

const TmdbFilmItem = ({ film, onAdd }: TmdbFilmItemProps) => {
  const imageUrl = film.poster_path
    ? `https://image.tmdb.org/t/p/w500${film.poster_path}.jpg`
    : '/path-to-default-image.jpg'; // Replace with your default image path

  return (
    <div className="film-item-container">
      <img src={imageUrl} alt={film.title} className="film-item-container__film-image" />
      <button className="film-item-container__add-icon" onClick={onAdd} aria-label={`Add ${film.title} to your list`}>
        +
      </button>
    </div>
  );
}

export default TmdbFilmItem;
