import React from 'react'
import Rating from '@mui/material/Rating';

const Review = ({review}) => {
    return (
        <div className="review-container">
            <div className="picture">
                <img className="profile-picture" src="profile-picture.jpeg" alt="profile-picture"></img>
            </div>
            <div className="review-message">
                <h2>{review.reviewer.username}</h2>
                <p>{review.message}</p>
            </div>

            <div className="review-timestamp">
                <Rating name="read-only" className={"rating-stars"} value={review.rating} readOnly />
                <h4 className="timestamp">{review.time}</h4>
            </div>
        </div>
    )
}

export default Review
