import { createContext, useState, useEffect } from 'react';

export const ReviewContext = createContext();

const url = 'https://jsonplaceholder.typicode.com/posts';

const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState([]);

  //fetching data
  const fetchReview = async () => {
    const response = await fetch(url);
    const review = await response.json();
    setReview(review);
    // console.log(review);
    // console.log(data)
  };

  //calling our fetch function
  useEffect(() => {
    fetchReview();
  }, []);

  //adding new review
  const addReview = async(newReview) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(newReview)
    })
    const data = await response.json()
    setReview([data, ...review])

  }

  //delete review
  const deleteReview = async (id) => {
    // if(window.confirm("Are you sure you want to delete?")){
    //   await fetch(`url/${id}`,{
    //     method: 'DELETE',
    //   })
    //   setReview(review.filter((item)=> item.id !== id))
    // }
 

  }

  //applying our provider
  return <ReviewContext.Provider value={{review, addReview, deleteReview}}>
    {children}
    </ReviewContext.Provider>;
};

export default ReviewProvider;
