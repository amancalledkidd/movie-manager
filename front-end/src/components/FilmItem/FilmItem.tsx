import './FilmItem.scss';
import { Film } from '../../types/Film'

type FilmItemProps = {
    film: Film;
}

const FilmItem = ({ film }: FilmItemProps) => {
  return (
    <div className="film-item">
      <h2>{film.title}</h2>
    </div>
  );
}

export default FilmItem;