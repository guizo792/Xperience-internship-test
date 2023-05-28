import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstReviewIndex,
  setLastReviewIndex,
  setRatingFilter,
  setReviews,
  setSearchKeyword,
  setVersionFilter,
} from "../../store/reviews/reviews.action";

import data from "../../data/reviewsData.json";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const onChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length === 0) {
      // Set default values if we started typing
      // or got search and then deleted the search input
      setSearchQuery("");
      dispatch(setSearchKeyword(""));
      dispatch(setRatingFilter(null));
      dispatch(setVersionFilter(""));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Update the global reviews
      dispatch(setSearchKeyword(event.target.value));
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        value={searchQuery}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        type="search"
        id="default-search"
        className="bg-white font-medium p-[5px] pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
        placeholder="search ( ↲ )"
        required
      />
    </div>
  );
};

export default SearchInput;
