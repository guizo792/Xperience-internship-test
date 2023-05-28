import { AiFillStar } from "react-icons/ai";
import { RxCaretDown } from "react-icons/rx";

import formatDate from "../../utils/formatDate";
import {
  getCountryCodeFromName,
  getCountryNameFromCode,
} from "../../utils/countryUtils";

import "./review-card.styles.css";
import { useDispatch, useSelector } from "react-redux";
import CountryFlag from "../country-flag/country-flag.component";
import { useEffect } from "react";
import {
  setFirstReviewIndex,
  setLastReviewIndex,
  setReviews,
  setSinglePageReviews,
} from "../../store/reviews/reviews.action";

import data from "../../data/reviewsData.json";

const ReviewsCards = () => {
  const dispatch = useDispatch();
  const { reviewsData } = useSelector((state) => state);
  const {
    reviews,
    singlePageReviews,
    searchKeyword,
    sorting,
    indexOfFirstReview,
    indexOfLastReview,
    ratingFilter,
    versionFilter,
  } = reviewsData;

  console.log("🟥", ratingFilter, versionFilter);

  useEffect(() => {
    // Handle searching and filtering
    if (searchKeyword) {
      const filteredBySearch = data.filter((review) =>
        review.reviewText.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      // If there's a result pdate the global reviews
      // dispatch(setReviews(filteredBySearch));
      // Handle sorting
      handleSortChange(filteredBySearch);
    } else if (searchKeyword.length === 0) {
      // dispatch(setReviews(data));
      // Handle sorting
      handleSortChange(data);
    }

    // Rating Filter
    // console.log(reviews);
    if (reviews && ratingFilter) {
      handleRatingFilterChange(reviews);
    }
    if (reviews && versionFilter) {
      handleVersionFilterChange(reviews);
    }
  }, [
    ratingFilter,
    versionFilter,
    searchKeyword,
    sorting,
    indexOfFirstReview,
    indexOfLastReview,
  ]);

  // Sort change handler
  const handleSortChange = (data) => {
    let sortedData = [...data];

    if (sorting === "Newest first") {
      sortedData.sort(
        (a, b) => new Date(b.reviewDate) - new Date(a.reviewDate)
      );
    } else if (sorting === "Oldest first") {
      sortedData.sort(
        (a, b) => new Date(a.reviewDate) - new Date(b.reviewDate)
      );
    }

    dispatch(setReviews(sortedData));
  };

  // Filter by rating handler
  const handleRatingFilterChange = (data) => {
    if (!ratingFilter || data.length === 0) return;
    let filteredData;
    console.log(data);
    filteredData = data.filter(
      (review) => parseInt(review.rating) === ratingFilter
    );

    if (filteredData.length !== 0) dispatch(setReviews(filteredData));
  };

  // Filter by version handler
  const handleVersionFilterChange = (data) => {
    if (!versionFilter || data.length === 0) return;
    let filteredData;
    console.log(data);
    filteredData = data.filter((review) => review.version === versionFilter);

    if (filteredData.length !== 0) dispatch(setReviews(filteredData));
  };

  return (
    <div className="no-scrollbar-container overflow-y-scroll h-[69vh] mt-4 flex flex-col gap-2 p-2">
      {singlePageReviews?.map((review, i) => {
        // Representing gold stars as 1's and silver as 0's
        const goldStars = Array(5).fill(0);
        goldStars.fill(1, 0, review?.rating);
        let countryCode = review.countryName,
          countryName = review.countryName;
        if (review.countryName.length > 2) {
          countryCode = getCountryCodeFromName(review.countryName);
        } else if (
          review.countryName.length === 2 &&
          review.countryName !== "UK"
        ) {
          countryName = getCountryNameFromCode(review.countryName);
        }

        // Exceptional case that doesn't work for the previous methods
        if (review.countryName === "UK") {
          countryCode = "GB";
          countryName = "United Kingdom";
        }

        const country = [
          <>
            <div className="flex gap-2 items-center">
              <img
                // src={`https://cdn.countryflags.com/thumbs/${getCountrySlug(
                src={`https://flagsapi.com/${countryCode}/flat/24.png}=/flag-400.png`}
                alt={` ${countryCode} Flag`}
              />
              <div className="font-bold text-sm">{countryName}</div>
            </div>
          </>,
        ];

        return (
          <div
            className="flex flex-col gap-8 p-4 border-gray-300 rounded-md shadow-md"
            key={i}
          >
            <div className="card-header flex gap-4 items-center">
              <span className="bg-fuchsia-500 !min-w-[28px] !min-h-[28px] !max-w-[28px] !max-h-[28px] rounded-lg"></span>
              <span className="text-sm font-bold bg-gray-200 rounded px-2 py-1 text-xs">
                {review.appStoreName}
              </span>
              <span className="text-md font-bold">{review.reviewHeading}</span>
              <div className="flex gap-4 items-center">
                <div className="stars flex">
                  {goldStars.map((item, i) => {
                    if (item === 1)
                      return (
                        <AiFillStar color={"#FF8C00"} size={"20px"} key={i} />
                      );
                    return (
                      <AiFillStar color={"#cbd5e1"} size={"20px"} key={i} />
                    );
                  })}
                </div>
              </div>
              <span className="ml-auto uppercase font-extrabold text-xs border border-gray-500 px-2 py-[0.6px] rounded">
                Translated
              </span>
            </div>
            <div className="card-text text-md">{review.reviewText}</div>
            <div className="card-footer flex gap-4">
              <span className="font-bold text-xs">{review.reviewUserName}</span>
              <span className="font-bold text-xs">
                {formatDate(review.reviewDate)}
              </span>
              <span className="font-bold text-xs">
                {review.version.toLowerCase()}
              </span>
              <div className="flex gap-2 items-center">
                <CountryFlag countryCode={countryCode.toLowerCase()} />
                <div className="font-bold text-sm">{countryName}</div>
              </div>
              <div className="ml-auto flex gap-4">
                <button className="text-xs font-bold">reply</button>
                <button className="text-xs font-bold flex  items-center justify-around">
                  <span>share</span>
                  <RxCaretDown size={"20px"} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsCards;
