import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import reviews from "../../data/reviewsData.json";
import {
  setFirstReviewIndex,
  setLastReviewIndex,
  setReviews,
  setSinglePageReviews,
} from "../../store/reviews/reviews.action";

const Pagination = () => {
  const { reviewsData } = useSelector((state) => state);
  const reviews = reviewsData.reviews;

  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(10);
  const dispatch = useDispatch();

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  let totalPages = Math.ceil(reviews.length / reviewsPerPage);
  // if (reviews.length % reviewsPerPage !== 0) totalPages++;

  // Handle page changes
  const handlePageChange = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  // Update the global shared review state
  useEffect(() => {
    dispatch(setSinglePageReviews(currentReviews));
    dispatch(
      setFirstReviewIndex(indexOfFirstReview === 0 ? 1 : indexOfFirstReview)
    );
    dispatch(setLastReviewIndex(indexOfLastReview));
  }, [reviews, currentPage, totalPages, indexOfFirstReview, indexOfLastReview]);

  // Calculate the range of pages to display
  const pageRange = 7;
  const rangeStart = Math.max(1, currentPage - Math.floor(pageRange / 2));
  const rangeEnd = Math.min(totalPages, rangeStart + pageRange - 1);
  const pageNumbers = Array.from(
    { length: rangeEnd - rangeStart + 1 },
    (_, index) => rangeStart + index
  );

  return (
    <div className="mt-4">
      {/* Render the reviews */}
      {currentReviews.map((review) => (
        <div key={review.id}>{/* Render the review data */}</div>
      ))}

      {/* Render the pagination */}
      <div className="flex gap-3 items-center justify-center">
        {reviews.length > 10 && currentPage > 1 && (
          <button
            onClick={(e) => handlePageChange(e, currentPage - 1)}
            className="bg-gray-300 border-[1px] hover:bg-gray-100 border-gray-400 p-1 rounded w-12 h-7 min-w-10 min-h-7 flex items-center justify-center px-2"
          >
            Prev
          </button>
        )}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={(e) => handlePageChange(e, number)}
            className="bg-gray-300 border-[1px] hover:bg-gray-100 border-gray-400 p-1 rounded w-7 h-7 min-w-7 min-h-7 flex items-center justify-center"
          >
            {number}
          </button>
        ))}
        {reviews.length > 10 && currentPage < totalPages && (
          <button
            onClick={(e) => handlePageChange(e, currentPage + 1)}
            className="bg-gray-300 border-[1px] hover:bg-gray-100 border-gray-400 p-1 rounded w-12 h-7 min-w-10 min-h-7 flex items-center justify-center px-2"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
