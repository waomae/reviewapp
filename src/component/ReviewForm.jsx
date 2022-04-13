import React, {useState, useContext} from 'react'
import ReviewItem from './ReviewItem'
import { ReviewContext } from '../ReviewContext'

const ReviewForm = () => {
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    // const [message, setMessage] = useState("");

    const {addReview} = useContext(ReviewContext)

    const handleSubmit = (e) => {

      
        e.preventDefault();
        const newReview = {
          title, 
          userId,
          body,
        };

        addReview(newReview)
        // setMessage(body, userId, title) 
        // setBody("")  
        // setTitle("")
        // setUserId("")
    }
  
  return (
    <div>
      <h2>Review Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter UserId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter UserId"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button>Submit review</button>
      </form>
{/* 
      {message ? <ReviewItem item={message} /> : 'No review yet'} */}
    </div>
  );
}

export default ReviewForm