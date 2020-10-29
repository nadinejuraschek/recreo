const express = require('express'),
  catchAsync = require('../utils/catchAsync'),
  ExpressError = require('../utils/ExpressError'),
  Playground = require('../models/Playground'),
  Review = require('../models/Review'),
  router = express.Router({ mergeParams: true });

// VALIDATION
const { reviewSchema } = require('../schemas.js');

// ERROR HANDLING
const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(item => item.message).join(',');
    throw new ExpressError(msg, 400);
  } else {
    next();
  };
};

router.post('/', validateReview, catchAsync(async (req, res) => {
  const playground = await Playground.findById(req.params.id);
  const review = new Review(req.body.review);
  playground.reviews.push(review);
  await review.save();
  await playground.save();
  res.redirect(`/playgrounds/${playground._id}`);
}));

router.delete('/:reviewid', catchAsync(async (req, res) => {
  const { id, reviewid } = req.params;
  // find review connection in playground entry and remove association
  await Playground.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
  await Review.findByIdAndDelete(reviewid);
  res.redirect(`/playgrounds/${id}`);
}));

module.exports = router;