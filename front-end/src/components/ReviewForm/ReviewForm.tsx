import { FormEvent, useState } from 'react';
import { Review } from '../../types/Review';
import './ReviewForm.scss';

type ReviewFormProps = {
    filmId: number;
    onSubmit: (review: Review) => void;
};

const ReviewForm = ({ filmId, onSubmit }: ReviewFormProps) => {
    const [reviewerName, setReviewerName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState<number>(5);

    const resetForm = () => {
        setReviewerName('');
        setReviewText('');
        setRating(0);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newReview: Review = {
            id: null,
            reviewerName,
            reviewText,
            rating,
            filmId,
            dateCreated: null
        };
        onSubmit(newReview);
        resetForm();
    };

    return (
        <div className="review-form-overlay">
        <form onSubmit={handleSubmit} className="review-form">
            <div className="review-form__field">
                <label htmlFor="reviewerName" className="review-form__label">Reviewer Name:</label>
                <input
                    id="reviewerName"
                    type="text"
                    className="review-form__input"
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    aria-label="Reviewer Name"
                    required
                />
            </div>
            <div className="review-form__field">
                <label htmlFor="reviewText" className="review-form__label">Review:</label>
                <textarea
                    id="reviewText"
                    className="review-form__textarea"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    aria-label="Review Text"
                    required
                />
            </div>
            <div className="review-form__field">
                <label htmlFor="rating" className="review-form__label">Rating:</label>
                <input
                    id="rating"
                    type="number"
                    className="review-form__input review-form__input--rating"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    min="1"
                    max="10"
                    aria-label="Rating"
                    required
                />
            </div>
            <button type="submit" className="review-form__submit-btn" aria-label="Submit Review">Submit Review</button>
        </form>
        </div>
    );
};

export default ReviewForm;
