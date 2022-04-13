import {useContext} from 'react'
import {ReviewContext} from '../ReviewContext';

const ReviewItem = ({title, body, userId, id}) => {

  const {deleteReview} = useContext(ReviewContext)

  return (
    <div className="card">
     <h6>{title}</h6>
     <p>{body}</p>
     <h6>{userId}</h6>
     <button onClick={deleteReview(id)}>
       DELETE
     </button>
    </div>
  );
}

export default ReviewItem