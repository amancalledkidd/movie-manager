import './UserFilmPage.scss'
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import FilmItemContainer from '../FilmItemContainer/FilmItemContainer';
import { Film } from '../../types/Film';


const UserFilmPage = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        getFilms();
    }, []);

    const getFilms = async () => {
        const response = await fetch('http://localhost:8080/films');
        const data = await response.json();
        console.log(data);
        setFilms(data);
    }

    const watchedFilms = films.filter((film: Film ) => film.haveWatched === true);
    const unwatchedFilms = films.filter((film: Film) => film.haveWatched === false);

    return (
        <div className='user-film-page'>
        <Navbar />
        <div className="user-film-page__containers">
            <FilmItemContainer title="Film list" films={unwatchedFilms} />
            <FilmItemContainer title="Watched Films" films={watchedFilms} />
        </div>
        </div>
    );
}

export default UserFilmPage;