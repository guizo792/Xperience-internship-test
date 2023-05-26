const express = require("express");

const reviewController = require("../controllers/reviewController");

const router = express.Router({ mergeParams: true });

// Getting all reviews
router.get("/", reviewController.fetchAllReviews);

// Getting reviews based on a filtering criteria
router.get("/filter", reviewController.filterReviews);

// Getting reviews based on a provided search query
router.get("/search", reviewController.searchReviews);

module.exports = router;
