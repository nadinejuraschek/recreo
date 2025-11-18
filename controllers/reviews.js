const Playground = require('../models/Playground'),
Review = require('../models/Review');

const getRating = (reviews) => {
  const ratings = reviews.map((review) => review.rating);
  let sum = 0;
  for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
  }
  return sum / ratings.length;
};

module.exports.create = async (req, res) => {
  const playground = await Playground.findById(req.params.id).populate({
    path: 'reviews',
  });
  const review = new Review({...req.body, postedOn: new Date()});

  review.author = req.body.author;
  playground.reviews.push(review);
  playground.rating = getRating(playground.reviews);

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