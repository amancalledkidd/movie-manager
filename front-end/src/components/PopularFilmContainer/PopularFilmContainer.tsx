import './PopularFilmContainer.scss';
import { FilmInfo } from '../../types/FilmApiResponse';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import Button from '../Button/Button';
import TmdbFilmItem from '../TmdbFilmItem/TmdbFilmItem';

type PopularFilmContainerProps = {
    popularMovies: FilmInfo[];
    heading: string;
};

const PopularFilmContainer = ({ popularMovies, heading }: PopularFilmContainerProps) => {
    const [showModal, setShowModal] = useState(false);

    const addFilm = async (film: FilmInfo) => {
        try{
            const response = await fetch('http://localhost:8080/film', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(film)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setShowModal(true);
        } catch (err) {
            console.error('error:', err);
        }
        
    }

    return (
        <div className="popular-film-container">
            <h1 className="popular-film-container__title">{heading}</h1>
            <div className="popular-film-container__scroll">
                {popularMovies.map(film => <TmdbFilmItem onAdd={addFilm} key={film.id} film={film} />)}
            </div>
            {showModal && (
                    <Modal
                        title={`Film added to your list`}
                        buttons={[
                            <Button label="OK" onClick={() => setShowModal(false)} />
                        ]}
                    />
                )}
        </div>
    );
};

export default PopularFilmContainer;