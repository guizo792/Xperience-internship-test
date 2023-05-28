import { createContext, useState, useEffect } from "react";
import data from "../data/reviewsData.json";

export const ReviewsContext = createContext({
  reviews: [],
});

export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const reviewsList = await data;
      setReviews(reviewsList);
    };

    getReviews();
  }, []);

  const updateReviews = (newData) => {
    setReviews(newData);
  };

  const value = { reviews, updateReviews };
  return (
    <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>
  );
};
