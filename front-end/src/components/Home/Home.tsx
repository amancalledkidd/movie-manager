import { useEffect, useState } from 'react';
import FilmItemContainer from '../FilmItemContainer/FilmItemContainer';
import { Film } from '../../types/Film';
import './Home.scss'

const Home = () => {

    const [films, setFilms] = useState<Film[]>([]);

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
        <h1>Home</h1>
        <FilmItemContainer films={films} />
        </div>
    );
};

export default Home;