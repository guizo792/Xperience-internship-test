const Review = require("../models/review");
const { Op } = require("sequelize");

// Fetching all reviews
exports.fetchAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();

    // Modify the fetched reviews data to match the required format
    const modifiedReviews = reviews.map((review) => {
      return {
        id: review.id,
        appID: review.appID,
        appStoreName: review.appStoreName,
        reviewDate: review.reviewDate.toISOString(),
        rating: review.rating,
        version: review.version,
        countryName: review.countryName,
        reviewHeading: review.reviewHeading,
        reviewText: review.reviewText,
        reviewUserName: review.reviewUserName,
      };
    });

    // Check if no reviews are found
    if (reviews.length === 0) {
      return res.status(404).json({ error: "No reviews found" });
    }

    res.status(200).json({
      reviews: modifiedReviews,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).send("Internal server error");
  }
};

// Filtering reviews based on a criteria
exports.filterReviews = async (req, res) => {
  try {
    // Extracting the filtering query parameters
    const { appID, appStoreName, rating, countryName } = req.query;

    // Build the filter criteria based on the provided query parameters
    const filterCriteria = {};
    if (appID) filterCriteria.appID = appID;
    if (appStoreName) filterCriteria.appStoreName = appStoreName;
    if (rating) filterCriteria.rating = rating;
    if (countryName) filterCriteria.countryName = countryName;

    // Fetch reviews based on the filter criteria
    const filteredReviews = await Review.findAll({ where: filterCriteria });

    // Check if no reviews are found
    if (filteredReviews.length === 0) {
      return res.status(404).json({ error: "No reviews found" });
    }

    // Modify the fetched reviews data to match the required format
    const modifiedReviews = filteredReviews.map((review) => {
      return {
        id: review.id,
        appID: review.appID,
        appStoreName: review.appStoreName,
        reviewDate: review.reviewDate.toISOString(),
        rating: review.rating,
        version: review.version,
        countryName: review.countryName,
        reviewHeading: review.reviewHeading,
        reviewText: review.reviewText,
        reviewUserName: review.reviewUserName,
      };
    });

    res.status(200).json({
      reviews: modifiedReviews,
    });
  } catch (error) {
    console.error("Error filtering reviews:", error);
    res.status(500).send("Internal server error");
  }
};

// Searching for reviews
exports.searchReviews = async (req, res) => {
  try {
    // Extracting the search query parameter
    const { query } = req.query;

    // Validate the query parameter
    if (!query || query.trim() === "") {
      return res.status(400).json({ error: "Invalid search query" });
    }

    // Fetch reviews that match the search query
    const searchedReviews = await Review.findAll({
      where: {
        [Op.or]: [
          { reviewHeading: { [Op.like]: `%${query}%` } },
          { reviewText: { [Op.like]: `%${query}%` } },
        ],
      },
    });

    // Check if no reviews are found
    if (searchedReviews.length === 0) {
      return res.status(404).json({ error: "No reviews found" });
    }

    // Modify the fetched reviews data to match the required format
    const modifiedReviews = searchedReviews.map((review) => {
      return {
        id: review.id,
        appID: review.appID,
        appStoreName: review.appStoreName,
        reviewDate: review.reviewDate.toISOString(),
        rating: review.rating,
        version: review.version,
        countryName: review.countryName,
        reviewHeading: review.reviewHeading,
        reviewText: review.reviewText,
        reviewUserName: review.reviewUserName,
      };
    });

    res.status(200).json({
      reviews: modifiedReviews,
    });
  } catch (error) {
    console.error("Error searching reviews:", error);
    res.status(500).send("Internal server error");
  }
};
