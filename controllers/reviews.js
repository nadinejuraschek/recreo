const Playground = require('../models/Playground'),
Review = require('../models/Review');

const getRating = (reviews) => {
  if (!reviews || reviews.length === 0) {
    return 0;
  }

  const ratings = reviews.map((review) => review.rating).filter((rating) => typeof rating === 'number' && !isNaN(rating));

  if (ratings.length === 0) {
    return 0;
  }

  const sum = ratings.reduce((acc, rating) => acc + rating, 0);
  return sum / ratings.length;
};

module.exports.create = async (req, res) => {
  try {
     // find playground (no need to populate yet)
    const playground = await Playground.findById(req.params.id);
    if (!playground) {
      return res.status(404).json({ error: 'Playground not found' });
    }

    // create new review
    const review = new Review({
      ...req.body,
      postedOn: new Date(),
      author: req.body.author,
    });
    await review.save();

    // add review id to playground
    playground.reviews.push(review._id);
    await playground.save();

    // populate all reviews and calculate rating
     const playgroundWithReviews = await Playground.findById(req.params.id)
      .populate({
        path: 'reviews',
        select: 'rating',
      });

    // calculate new rating from all populated reviews
    const newRating = getRating(playgroundWithReviews.reviews);

    // update playground with new rating
    playground.rating = newRating;
    await playground.save();

     res.status(201).json({
      message: 'Your review was created!',
      rating: newRating
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the review.' });
  }
};

module.exports.delete = async (req, res) => {
  try {
    const { id, reviewid } = req.params;

    // verify review exists
    const review = await Review.findById(reviewid);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    // remove review from playground and delete review
    await Playground.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
    await Review.findByIdAndDelete(reviewid);

    // recalculate rating from remaining reviews
    const playground = await Playground.findById(id).populate({
      path: 'reviews',
      select: 'rating',
    });
    const newRating = getRating(playground.reviews);

    // update playground with new rating
    await Playground.findByIdAndUpdate(id, { rating: newRating });

    res.status(200).json({
      message: 'Your review has been removed.',
      rating: newRating
    });

  } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the review.' });
  }
};