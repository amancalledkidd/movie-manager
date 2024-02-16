import './ReviewItem.scss'
import { Review } from '../../types/Review'
import Delete from '../../assets/icons/delete.svg'

type ReviewItemProps = {
    review: Review
    onclick: (id: number) => void;
}

const ReviewItem = ({review, onclick}: ReviewItemProps) => {
    return (
        <div className='review review--background'>
            <h3 className='review__reviewer'>{review.reviewerName}</h3>
            <p className='review__text'>{review.reviewText}</p>
            <p className='review__rating'>{review.rating}</p>
            <img src={Delete} alt='delete' className='review__delete' onClick={() => onclick(Number(review.id))}/>
        </div>
    );
};

export default ReviewItem;