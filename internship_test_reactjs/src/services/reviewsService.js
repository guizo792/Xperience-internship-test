import reviews from "../data/reviewsData.json";

export function getPageReview(page, size) {
  let index = page * size;
  let totalPages = ~~(reviews.length / size);
  if (reviews.length % size !== 0) {
    totalPages++;
  }
  let pageReviews = reviews.slice(index, index + size);
  return {
    page: page,
    size: size,
    totalPages: totalPages,
    reviews: pageReviews,
  };
}

export function searchReviews(keyword, page, size) {
  let results = reviews.filter((p) => p.name.includes(keyword));
  let index = page * size;
  let totalPages = Math.trunc(results.length / size);
  if (reviews.length % size !== 0) {
    totalPages++;
  }
  let pageReviews = results.slice(index, index + size);
  return {
    page: page,
    size: size,
    totalPages: totalPages,
    products: pageReviews,
  };
}
