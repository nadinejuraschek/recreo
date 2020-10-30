const express = require('express'),
  catchAsync = require('../utils/catchAsync'),
  Playground = require('../models/Playground'),
  Review = require('../models/Review'),
  router = express.Router({ mergeParams: true });

// MIDDLEWARE
const { validateReview, isAuthor } = require('../middleware');

router.post('/', validateReview, catchAsync(async (req, res) => {
  const playground = await Playground.findById(req.params.id);
  const review = new Review(req.body.review);
  playground.reviews.push(review);
  await review.save();
  await playground.save();
  req.flash('success', 'Your review was created!');
  res.redirect(`/playgrounds/${playground._id}`);
}));

router.delete('/:reviewid', catchAsync(async (req, res) => {
  const { id, reviewid } = req.params;
  // find review connection in playground entry and remove association
  await Playground.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
  await Review.findByIdAndDelete(reviewid);
  req.flash('success', 'Your review has been removed.');
  res.redirect(`/playgrounds/${id}`);
}));

module.exports = router;