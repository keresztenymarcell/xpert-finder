import React from 'react'

const Review = ({review}) => {
    return (
        <div className="review-container">
            <div className="picture">
                <img className="profile-picture" src="profile-picture.jpeg" alt="profile"></img>

            </div>
            <div className="review-message">
                <h2>{review.reviewer.username}</h2>
                <p>{review.message}</p>
            </div>
            <div className="review-timestamp">
                <h4 className="timestamp">{review.time}</h4>
            </div>
            
        </div>
    )
}

export default Review
