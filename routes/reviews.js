const express = require('express'),
  catchAsync = require('../utils/catchAsync'),
  Playground = require('../models/Playground'),
  Review = require('../models/Review'),
  router = express.Router({ mergeParams: true });

// MIDDLEWARE
const { validateReview, isLoggedIn, isAuthor } = require('../middleware');

router.post('/', isLoggedIn, validateReview, catchAsync(async (req, res) => {
  const playground = await Playground.findById(req.params.id);
  const review = new Review(req.body.review);
  review.author = req.user._id;
  playground.reviews.push(review);
  await review.save();
  await playground.save();
  req.flash('success', 'Your review was created!');
  res.redirect(`/playgrounds/${playground._id}`);
}));

router.delete('/:reviewid', isLoggedIn, catchAsync(async (req, res) => {
  const { id, reviewid } = req.params;
  // find review connection in playground entry and remove association
  await Playground.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
  await Review.findByIdAndDelete(reviewid);
  req.flash('success', 'Your review has been removed.');
  res.redirect(`/playgrounds/${id}`);
}));

module.exports = router;