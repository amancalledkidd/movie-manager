import './TmbdFilmItem.scss'
import { FilmInfo } from '../../types/FilmApiResponse'

type TmdbFilmItemProps = {
    film: FilmInfo;
}

const TmdbFilmItem = ({ film }: TmdbFilmItemProps) => {
  return (
    <div className="film-item">
      <h2>{film.title}</h2>
      <p>{film.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}.jpg`} alt={film.title} />
    </div>
  );
}

export default TmdbFilmItem;
