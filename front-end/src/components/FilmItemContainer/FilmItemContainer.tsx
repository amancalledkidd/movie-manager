import './FilmItemContainer.scss'
import FilmItem from '../FilmItem/FilmItem';
import { Film } from '../../types/Film'

type FilmItemContainerProps = {
    films: Film[]
    title: string
}

const FilmItemContainer = ({films, title}: FilmItemContainerProps) => {
    return (
        <div className='film-container'>
            <h1 className='film-container__title'>{title}</h1>
            <div className='film-container__items'>
                {films.map(film => <FilmItem film={film} key={film.id} />)}
            </div>
        </div>
    );
};

export default FilmItemContainer;