import './ReviewItem.scss'
import { Review } from '../../types/Review'

type ReviewItemProps = {
    review: Review
}

const ReviewItem = ({review}: ReviewItemProps) => {
    return (
        <div className='review'>
            <h3 className='review__reviewer'>{review.reviewerName}</h3>
            <p className='review__text'>{review.reviewText}</p>
            <p className='review__rating'>{review.rating}</p>
        </div>
    );
};

export default ReviewItem;