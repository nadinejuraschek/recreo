const Playground = require('../models/Playground'),
Review = require('../models/Review');

module.exports.create = async (req, res) => {
  const playground = await Playground.findById(req.params.id);
  const review = new Review(req.body);
  review.author = req.author;
  playground.reviews.push(review);
  await review.save();
  await playground.save();
  res.send('Your review was created!');
};

module.exports.delete = async (req, res) => {
  const { id, reviewid } = req.params;
  // find review connection in playground entry and remove association
  await Playground.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
  await Review.findByIdAndDelete(reviewid);
  res.send('Your review has been removed.');
};