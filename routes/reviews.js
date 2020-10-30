const express = require('express'),
  catchAsync = require('../utils/catchAsync'),
  reviewController = require('../controllers/reviews'),
  router = express.Router({ mergeParams: true });

// MIDDLEWARE
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');

router.post('/', isLoggedIn, validateReview, catchAsync(reviewController.create));

router.delete('/:reviewid', isLoggedIn, isReviewAuthor, catchAsync(reviewController.delete));

module.exports = router;