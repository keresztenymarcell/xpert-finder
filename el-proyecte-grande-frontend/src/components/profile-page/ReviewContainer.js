import React, {useState} from 'react'
import Review from './Review'
import TextField from '@mui/material/TextField';
const ReviewContainer = ({reviews , addReview}) => {

    const [isAdding, setIsAdding] = useState(false)
    const [message, setMessage] = useState(null)

    function toggleIsAdding(){
        console.log(isAdding);
        setIsAdding(!isAdding);
    }

    function postReview(message){
        console.log(message);
        // toggleIsAdding();
    }

    return (
        <>
            <h1>Reviews</h1>
            <button onClick={() => toggleIsAdding()}>Add review</button>
            {reviews ? reviews.map((review) => {
                return <Review key={review.id} review={review}/>
            }) : <h3>No reviews yet</h3>}
            
            {isAdding &&
                <div className="review-container">    
                     <textarea 
                     className="review-text-area" 
                     rows="3" 
                     cols="10" 
                     name="message"
                     required placeholder="Review message..."
                     onChange={(event) => setMessage(event.target.value)}
                     >
                </textarea>
                    
                    <button className="review-button" onClick={postReview(message)} >Post</button>
                </div> }
                    

        </>
    )
}

export default ReviewContainer
