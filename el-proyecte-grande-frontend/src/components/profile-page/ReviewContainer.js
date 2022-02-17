import React, {useState} from 'react'
import Review from './Review'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Rating from '@mui/material/Rating';

const ReviewContainer = ({reviews , addReview}) => {

    const [isAdding, setIsAdding] = useState(false)
    const [message, setMessage] = useState(null)
    const [rating, setRating] = useState(1);

    function toggleIsAdding(){
        setIsAdding(!isAdding);
    }

    function postReview(message, rating){
        addReview(message, rating)
    }

    return (
        <>
            <h1>Reviews</h1>
            <Button variant="outlined" onClick={() => toggleIsAdding()}>Add review</Button>
        
            {reviews ? reviews.map((review) => {
                return <Review key={review.id} review={review}/>
            }) : <h3>No reviews yet</h3>}
            
            {isAdding &&

                <div className="add-review-container">   
                    <textarea 
                        className="review-text-area" 
                        rows="3" 
                        cols="10" 
                        name="message"
                        required placeholder="Review message..."
                        onChange={(event) => setMessage(event.target.value)}
                        >
                    </textarea>
                    <div className="rating-button">
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                        }}/>
                        <button className="send-button" onClick={() => postReview(message, rating)}> Send</button>
                    </div>
                </div> }
                    

        </>
    )
}

export default ReviewContainer
