const express = require('express'),
  catchAsync = require('../utils/catchAsync'),
  ExpressError = require('../utils/ExpressError'),
  Playground = require('../models/Playground'),
  router = express.Router();

// VALIDATION
const { playgroundSchema } = require('../schemas.js');

// AUTHORIZATION
const { isLoggedIn } = require('../middleware');

// ERROR HANDLING
const validatePlayground = (req, res, next) => {
  const { error } = playgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(item => item.message).join(',');
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

// READ
router.get(
  '/',
  catchAsync(async (req, res) => {
    const playgrounds = await Playground.find({});
    res.render('playgrounds/index', { playgrounds });
  })
);

router.get('/new', isLoggedIn, (req, res) => {
  res.render('playgrounds/new');
});

router.get(
  '/:id',
  catchAsync(async (req, res) => {
    const playground = await Playground.findById(req.params.id)
      .populate('reviews')
      .populate('author');
    if (!playground) {
      req.flash('error', 'This playground cannot be found.');
      return res.redirect('/playgrounds');
    }
    res.render('playgrounds/show', { playground });
  })
);

router.get(
  '/:id/edit',
  isLoggedIn,
  catchAsync(async (req, res) => {
    const playground = await Playground.findById(req.params.id);
    res.render('playgrounds/edit', { playground });
  })
);

// CREATE
router.post(
  '/',
  isLoggedIn,
  validatePlayground,
  catchAsync(async (req, res, next) => {
    const playground = new Playground(req.body.playground);
    playground.author = req.user._id;
    await playground.save();
    req.flash('success', 'Successfully added a new playground!');
    res.redirect(`/playgrounds/${playground._id}`);
  })
);

// UPDATE
router.put(
  '/:id',
  isLoggedIn,
  validatePlayground,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Playground.findByIdAndUpdate(id, { ...req.body.playground });
    req.flash('success', 'Successfully updated this playground!');
    res.redirect(`/playgrounds/${id}`);
  })
);

// DELETE
router.delete(
  '/:id',
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Playground.findByIdAndDelete(id);
    req.flash('success', 'The playground has been removed.');
    res.redirect('/playgrounds');
  })
);

module.exports = router;
