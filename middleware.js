// VALIDATION
const ExpressError = require('./utils/ExpressError'),
  Playground = require('./models/Playground'),
  Review = require('./models/Review');
const { playgroundSchema, reviewSchema } = require('./schemas.js');

// ERROR HANDLING
module.exports.validatePlayground = (req, res, next) => {
  const { error } = playgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(item => item.message).join(',');
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(item => item.message).join(',');
    throw new ExpressError(msg, 400);
  } else {
    next();
  };
};

// CHECK IF CURRENT USER IS AUTHOR
module.exports.isAuthor = async (req, res, next) => {
  const { id } = req.params;
  const playground = await Playground.findById(id);
  if (!playground) {
    return res.send('error', 'Sorry, this playground could not be found.');
    // req.flash('error', 'Sorry, this playground could not be found.');
    // return res.redirect('/playgrounds');
  }
  if (!playground.author.equals(req.user._id)) {
    return res.send('error', 'You do not have permission to edit this playground.');
    // req.flash('error', 'You do not have permission to edit this playground.');
    // return res.redirect(`/playgrounds/${id}`);
  }
  next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
  const { id, reviewid } = req.params;
  const review = await Review.findById(reviewid);
  if (!review.author.equals(req.user._id)) {
    return res.send('error', 'You do not have permission to edit this review.');
    // req.flash('error', 'You do not have permission to edit this review.');
    // return res.redirect(`/playgrounds/${id}`);
  }
  next();
};