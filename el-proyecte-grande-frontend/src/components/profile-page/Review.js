import React from 'react'

const Review = () => {
    return (
        <div className="review-container">
            <div className="picture">
                <img className="profile-picture" src="profile-picture.jpeg" alt="profile-picture"></img>

            </div>
            <div className="review-message">
                <h2>John Doe</h2>
                <p>He is a very good professional asdasdasdasdasdasdads</p>
            </div>
            <div className="review-timestamp">
                <h4 className="timestamp">2021.04.22</h4>
            </div>
            
        </div>
    )
}

export default Review
