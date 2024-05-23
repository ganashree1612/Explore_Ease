import React, { useState, useEffect } from "react";
import axios from "axios";


const StarRating = ({ value, onChange }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div>
      {stars.map((star) => (
        <label key={star} className="cursor-pointer">
          <input
            type="radio"
            name="rating"
            value={star}
            checked={value === star}
            onChange={() => onChange(star)}
            className="hidden"
          />
          <span
            className={`text-2xl ${
              value >= star ? "text-yellow-500" : "text-gray-300"
            }`}
          >
            &#9733;
          </span>
        </label>
      ))}
    </div>
  );
};

const ReviewPage = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);
  const [image,setImage] = useState("");
  const placeName = placeId;
  console.log(placeName);
  const [userReview, setUserReview] = useState({
    rating: 0,
    description: "",
    image: null,
  });

  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/reviews/${placeName}`
      );
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [placeName]);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleImageChange = (event) => {
    console.log(event);
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);//base64 string
    };

    reader.onerror = err => {
      console.log(err);
    }
    const file = event.target.files[0];
    setUserReview((prevReview) => ({ ...prevReview, image: file }));
  };

  const handleRatingChange = (rating) => {
    setUserReview((prevReview) => ({ ...prevReview, rating }));
  };

  const handleSubmitReview = async (event) => {
    event.preventDefault();

    try {
  
      const rating=userReview.rating;
      const description=userReview.description;
      const   image= userReview.image;
      await axios.post('http://localhost:3001/review', { placeName,rating,description,image});
      fetchReviews();

     
      setUserReview({
        rating: 0,
        description: "",
        image: null,
      });
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Reviews for Place {placeId}</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Review</h2>
        <form onSubmit={handleSubmitReview} className="max-w-md">
          <label className="block mb-4">
            Rating:
            <StarRating
              value={userReview.rating}
              onChange={handleRatingChange}
            />
          </label>
          <label className="block mb-4">
            Description:
            <textarea
              name="description"
              value={userReview.description}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </label>
          
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Submit Review
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">All Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className="border p-4 mb-4">
            <p className="text-lg font-bold mb-2">
              Rating: <StarRating value={review.rating} onChange={() => {}} />
            </p>
            <p>{review.description}</p>
            {image===""||image==null?"":<img
              width={100}
            height={100}
              src={image}
              alt={`Review ${index + 1}`}
              className="mt-2"
            />}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
