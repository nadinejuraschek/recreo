const Playground = require('../models/Playground'),
Review = require('../models/Review');

module.exports.create = async (req, res) => {
  const playground = await Playground.findById(req.params.id);
  const review = new Review(req.body.review);
  review.author = req.user._id;
  playground.reviews.push(review);
  await review.save();
  await playground.save();
  req.flash('success', 'Your review was created!');
  res.redirect(`/playgrounds/${playground._id}`);
};

module.exports.delete = async (req, res) => {
  const { id, reviewid } = req.params;
  // find review connection in playground entry and remove association
  await Playground.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
  await Review.findByIdAndDelete(reviewid);
  res.send('success', 'Your review has been removed.');
  // req.flash('success', 'Your review has been removed.');
  // res.redirect(`/playgrounds/${id}`);
};