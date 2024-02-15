import './ReviewContainer.scss'
import { Review } from '../../types/Review'
import ReviewItem from '../ReviewItem/ReviewItem';
import { useState } from 'react';

type ReviewContainerProps = {
    reviews: Review[]
}

const ReviewContainer = ({reviews}: ReviewContainerProps) => {
    const [showAll, setShowAll] = useState(false);
    const reviewsToShow = showAll ? reviews : reviews.slice(0, 3);

    return (
        <div className='review-container'>
            <h2 className='review-container__title'>Reviews</h2>
            <div className='review-container__items'>
                {reviewsToShow.map(review => <ReviewItem review={review} key={review.id} />)}
            </div>
            {reviews.length > 3 && <button onClick={() => setShowAll(!showAll)} className='review-container__show-all'>{showAll ? 'Show Less' : 'Show All'}</button>}
        </div>
    );
};


export default ReviewContainer;