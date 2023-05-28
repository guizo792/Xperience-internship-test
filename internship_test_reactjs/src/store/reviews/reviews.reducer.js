const INITIAL_STATE = {
  reviews: [],
  singlePageReviews: [],
  indexOfFirstReview: 1,
  indexOfLastReview: 10,
  searchKeyword: "",
  sorting: "Newest first",
  ratingFilter: null,
  versionFilter: "",
  countryFilter: "",
};

export const reviewsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_REVIEWS":
      return {
        ...state,
        reviews: action.payload,
      };
    case "SET_FIRST_REVIEW_INDEX":
      return {
        ...state,
        indexOfFirstReview: action.payload,
      };
    case "SET_LAST_REVIEW_INDEX":
      return {
        ...state,
        indexOfLastReview: action.payload,
      };
    case "SET_SINGLE_PAGE_REVIEWS":
      return {
        ...state,
        singlePageReviews: action.payload,
      };
    case "SET_SEARCH_KEYWORD":
      return {
        ...state,
        searchKeyword: action.payload,
      };
    case "SET_SORTING":
      return {
        ...state,
        sorting: action.payload,
      };
    case "SET_RATING_FILTER":
      return {
        ...state,
        ratingFilter: action.payload,
      };
    case "SET_VERSION_FILTER":
      return {
        ...state,
        versionFilter: action.payload,
      };
    case "SET_COUNTRY_FILTER":
      return {
        ...state,
        countryFilter: action.payload,
      };
    default:
      return state;
  }
};
