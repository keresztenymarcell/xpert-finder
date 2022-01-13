import React from 'react'
import Review from './Review'

const ReviewContainer = ({reviews}) => {
    return (
        <>
            <h1>Reviews</h1>
            {reviews ? reviews.map((review) => {
                return <Review key={review.id} review={review}/>
            }) : <h3>No reviews yet</h3>}
            

        </>
    )
}

export default ReviewContainer
