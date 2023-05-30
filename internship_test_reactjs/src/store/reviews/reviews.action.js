export const setReviews = (data) => {
  return {
    type: "SET_REVIEWS",
    payload: data,
  };
};

export const setSearchKeyword = (data) => {
  return {
    type: "SET_SEARCH_KEYWORD",
    payload: data,
  };
};

export const setSorting = (data) => {
  return {
    type: "SET_SORTING",
    payload: data,
  };
};

export const setRatingFilter = (data) => {
  return {
    type: "SET_RATING_FILTER",
    payload: data,
  };
};

export const setVersionFilter = (data) => {
  return {
    type: "SET_VERSION_FILTER",
    payload: data,
  };
};

export const setCountryFilter = (data) => {
  return {
    type: "SET_COUNTRY_FILTER",
    payload: data,
  };
};

export const setSinglePageReviews = (data) => {
  return {
    type: "SET_SINGLE_PAGE_REVIEWS",
    payload: data,
  };
};

export const setFirstReviewIndex = (data) => {
  return {
    type: "SET_FIRST_REVIEW_INDEX",
    payload: data,
  };
};
export const setLastReviewIndex = (data) => {
  return {
    type: "SET_LAST_REVIEW_INDEX",
    payload: data,
  };
};

export const setAppFilter = (data) => {
  return {
    type: "SET_APP_FILTER",
    payload: data,
  };
};
