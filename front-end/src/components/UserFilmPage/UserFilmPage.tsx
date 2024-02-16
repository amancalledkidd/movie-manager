import './UserFilmPage.scss'
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import FilmItemContainer from '../FilmItemContainer/FilmItemContainer';
import { Film } from '../../types/Film';


const UserFilmPage = () => {
    const [unwatchedFilms, setUnwatchedFilms] = useState<Film[]>([]);
    const [watchedFilms, setWatchedFilms] = useState<Film[]>([]);

    useEffect(() => {
        getFilms(20, false);
        getFilms(20, true);
    }, []);

    const getFilms = async (limit: number, watched: boolean) => {
        const url = `http://localhost:8080/films?limit=${limit}&watched=${watched}`;
        const response = await fetch(url);
        const data = await response.json();
        if (watched == false) {
            setUnwatchedFilms(data);
        } else if (watched == true) {
            setWatchedFilms(data);
        }
    }


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