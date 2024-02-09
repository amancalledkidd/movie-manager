import './FilmItemContainer.scss'
import FilmItem from '../FilmItem/FilmItem';
import { Film } from '../../types/Film'

type FilmItemContainerProps = {
    films: Film[];
}

const FilmItemContainer = ({films}: FilmItemContainerProps) => {
    return (
        <div>
        <h1>FilmItemContainer</h1>
        <div>
            {films.map(film => <FilmItem film={film} key={film.id} />)}
        </div>
        </div>
    );
};

export default FilmItemContainer;