import './ReviewContainer.scss'
import { Review } from '../../types/Review'
import ReviewItem from '../ReviewItem/ReviewItem';
import { useEffect, useState } from 'react';

type ReviewContainerProps = {
    filmId: number;
}

const ReviewContainer = ({filmId}: ReviewContainerProps) => {
    const [showAll, setShowAll] = useState(false);
    const [reviews, setReviews] = useState<Review[]>([]);
    const reviewsToShow = showAll ? reviews : reviews.slice(0, 3);

    useEffect(() => {
        fetchReviews(filmId);
    }, [filmId]);

    const handleDeleteClick = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8080/film/review/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            fetchReviews(filmId);
        }
        catch (err) {
            console.error('error:', err);
        }
    }



    const fetchReviews = async (filmId: number) => {
        try {
            const response = await fetch(`http://localhost:8080/film/${filmId}/reviews`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            setReviews(json);
        } catch (err) {
            console.error('error:', err);
        }
    }


    return (

        <div className='review-container'>
            {reviews.length > 0 &&
            <>
                <h2 className='review-container__title'>Reviews</h2>
                <div className='review-container__items'>
                    {reviewsToShow.map(review => <ReviewItem review={review} key={review.id} onclick={handleDeleteClick} />)}
                </div>
                {reviews.length > 3 && <button onClick={() => setShowAll(!showAll)} className='review-container__show-all'>{showAll ? 'Show Less' : 'Show All'}</button>}
            </>
            }
        </div>
    );
};


export default ReviewContainer;