import {useContext} from 'react'
import ReviewItem from './ReviewItem'
import {ReviewContext} from '../ReviewContext'


const ReviewList = () => {

    const {review} = useContext(ReviewContext)

    if (!review || review.length === 0) {
        return "Loading..."
    }

  return (
    <div className="card-container">
        {/* <ReviewItem /> */}
        
        {review.map(({title, id, body, userId}) => (
            <ReviewItem key={id} title={title} body={body} userId={userId} />
        ))}
    </div>
  );
}

export default ReviewList