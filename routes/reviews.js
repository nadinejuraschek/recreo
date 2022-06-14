const express = require('express'),
  reviewController = require('../controllers/reviews'),
  router = express.Router({ mergeParams: true });

// MIDDLEWARE
const { validateReview, isReviewAuthor } = require('../middleware');

router.post('/',
  // validateReview,
  reviewController.create
);

router.delete('/:reviewid',
  // isReviewAuthor,
  reviewController.delete
);

module.exports = router;