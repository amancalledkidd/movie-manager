import './FilmInfoPage.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FilmInfo } from '../../types/FilmApiResponse';
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { Film } from '../../types/Film';
import ReviewForm from '../ReviewForm/ReviewForm';
import { Review } from '../../types/Review';

const FilmInfoPage = () => {
    const [filmInfo, setFilmInfo] = useState<FilmInfo | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalMessage, setModalMessage] = useState<string>('');
    const [myFilm, setMyFilm] = useState<Film>();
    const [showAddReview, setShowAddReview] = useState<boolean>(false);

    const { id } = useParams();
    const navigate = useNavigate();

    const filmId = id?.split('-')[1];
    const apiId = id?.split('-')[0];

    useEffect(() => {
        fetchFilmInfo();
        if (filmId) {
            fetchMyFilmInfo();
        }
    }, []);

    const fetchMyFilmInfo = async () => {
        try {
            const response = await fetch(`http://localhost:8080/film/${filmId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            setMyFilm(json);
            console.log(json);
        

        } catch (err) {
            console.error('error:', err);
        }
    }

    const fetchFilmInfo = async () => {
        const apiKey = import.meta.env.VITE_TMDB_KEY;
        const url = `https://api.themoviedb.org/3/movie/${apiId}?&api_key=${apiKey}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
            },
        };
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                console.log(response);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            setFilmInfo(json);
            console.log(json);
        } catch (err) {
            console.error('error:', err);
        }
    };

    const handleRemoveClick = async () => {
        try {
            const response = await fetch(`http://localhost:8080/film/${filmId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log("Film deleted successfully");
            setModalMessage("Film deleted successfully")
            setShowModal(true);
        } catch (err) {
            console.error('error:', err);
        }
    };

    const handleWatchedClick = async () => {
        const updateFilm = {
            ...myFilm,
            haveWatched: !myFilm?.haveWatched
        }

        try {
            const response = await fetch(`http://localhost:8080/film/${filmId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateFilm),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log("Film watched successfully");
            setModalMessage("Film watched successfully")
            setShowModal(true);
        } catch (err) {
            console.error('error:', err);
        }
    }

    const handleAddReviewClick = () => {
        setShowAddReview(true);
    }

    const handleReviewSubmit = async (review: Review) => {
        try {
            const response = await fetch(`http://localhost:8080/film/review`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(review),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            setShowAddReview(false);
            setModalMessage("Review added successfully")
        } catch (err) {
            console.error('error:', err);
        }
    }

    const handleAddToListClick = async () => {
        try{
            const response = await fetch('http://localhost:8080/film', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(filmInfo)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setShowModal(true);
        setModalMessage("Film added to your list")
        } catch (err) {
            console.error('error:', err);
        }
    }

    const handleModalClose = () => {
        setShowModal(false);
    }

    return (
        <>
            <Navbar />
            <div className="film-info-page">
                {filmInfo && (
                    <div className="film-info">
                        <div className="film-info__backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${filmInfo.backdrop_path})` }}></div>
                        <div className="film-info__content">
                            <img className="film-info__poster" src={`https://image.tmdb.org/t/p/w300${filmInfo.poster_path}`} alt={filmInfo.title} />
                            <div className="film-info__details">
                                <h1 className="film-info__title">{filmInfo.title}</h1>
                                <p className="film-info__overview">{filmInfo.overview}</p>
                                <p className="film-info__release-date">Release date: {filmInfo.release_date}</p>
                                <p className="film-info__rating">Rating: {filmInfo.vote_average.toPrecision(2)}</p>
                                {filmId && (
                                    <div className='film-info__buttons'>
                                        <Button label='Remove from list' onClick={handleRemoveClick} />
                                        <Button label='Add Review' onClick={handleAddReviewClick}  />
                                        <Button label='Watched' onClick={handleWatchedClick}/>
                                    </div>
                                )}
                                {!filmId && (
                                    <div className='film-info__buttons'>
                                        <Button label='Add to list' onClick={handleAddToListClick}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                {showModal && (
                    <Modal
                        title={modalMessage}
                        buttons={[
                            <Button label="OK" onClick={handleModalClose} />
                        ]}
                    />
                )}
                {showAddReview && (
                    <ReviewForm  onSubmit={handleReviewSubmit} filmId={Number(filmId)} />
                )}
            </div>
        </>
    );
    
};

export default FilmInfoPage;
