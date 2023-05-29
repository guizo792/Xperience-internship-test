import { AiOutlineCaretDown, AiFillStar } from "react-icons/ai";
// import data from "../../data/reviewsData.json";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setRatingFilter,
  setVersionFilter,
} from "../../store/reviews/reviews.action";
import data from "../../data/reviewsData.json";

const FilterByRating = () => {
  const { reviews } = useSelector((state) => state.reviewsData);
  const [open, setOpen] = useState(false);
  const [currentReviews, setCurrentReviews] = useState([]);
  const dispatch = useDispatch();
  const { ratingFilter } = useSelector((state) => state.reviewsData);

  useEffect(() => {
    dispatch(setRatingFilter(null));
    setCurrentReviews(data);
  }, []);

  const ratings = [5, 4, 3, 2, 1];
  // const currentReviews = reviews;
  const totalReviewsCount = currentReviews.length;

  useEffect(() => {
    console.log(ratingFilter, reviews);
    setCurrentReviews(reviews);
  }, [reviews]);

  return (
    <div className="flex flex-col gap-2 mb-[3px]">
      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
          className={`transition-transform	 ${open ? "" : "rotate-[-90deg] "}`}
        >
          <AiOutlineCaretDown />
        </button>
        <span className="font-bold text-sm">Filter By Rating</span>
      </div>
      {open && (
        <div className="flex flex-col gap-2">
          {ratings.map((rating, index) => {
            // Getting the number of reviews based on this rating
            const reviews = currentReviews.filter((review) => {
              return parseInt(review.rating) === rating;
            });

            const reviewsCount = reviews.length;
            const percentageWidth = (reviewsCount / totalReviewsCount) * 4.4;

            // Representing gold stars as 1's and silver as 0's
            const goldStars = Array(5).fill(0);
            goldStars.fill(1, 0, rating);
            return (
              <div
                className="flex gap-4 items-center cursor-pointer"
                key={rating}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(setRatingFilter(rating));
                  // dispatch(setVersionFilter(""));
                  // setRatingFilterValue(rating);
                }}
              >
                <div className="stars flex">
                  {goldStars.map((item) => {
                    if (item === 1)
                      return <AiFillStar color={"#FF8C00"} size={"20px"} />;
                    return <AiFillStar color={"#cbd5e1"} size={"20px"} />;
                  })}
                </div>
                <div className="percentage w-[4.4rem] h-4">
                  <div
                    className={` bg-gray-300 h-4 rounded-[3px]`}
                    style={{ width: percentageWidth + `rem` }}
                  ></div>
                </div>
                <div className="rating-count text-gray-500">{reviewsCount}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterByRating;
