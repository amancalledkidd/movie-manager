import './UserFilmPage.scss'
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import FilmItemContainer from '../FilmItemContainer/FilmItemContainer';


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
    return (
        <div>
        <Navbar />
        <h1>UserFilmPage</h1>
        <FilmItemContainer films={films} />
        </div>
    );
}

export default UserFilmPage;