import data from "./reviewsData.json";

let reviews = [];
const filteredReviews = JSON.parse(data[0]).then((res) => {
  res
    .filter((review) => review.rating === 5)
    .then((res) => {
      reviews = res;
    });
});

const reviewsCount = reviews.length;
// console.log(reviewsCount);

// export default reviewsCount;
