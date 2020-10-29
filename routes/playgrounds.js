const express = require('express'),
  catchAsync = require('../utils/catchAsync'),
  ExpressError = require('../utils/ExpressError'),
  Playground = require('../models/Playground'),
  router = express.Router();

// VALIDATION
const { playgroundSchema } = require('../schemas.js');

// ERROR HANDLING
const validatePlayground = (req, res, next) => {
  const { error } = playgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(item => item.message).join(',');
    throw new ExpressError(msg, 400);
  } else {
    next();
  };
};

router.get(
  '/',
  catchAsync(async (req, res) => {
    const playgrounds = await Playground.find({});
    res.render('playgrounds/index', { playgrounds });
  })
);

router.get('/new', (req, res) => {
  res.render('playgrounds/new');
});

router.get(
  '/:id',
  catchAsync(async (req, res) => {
    const playground = await Playground.findById(req.params.id).populate(
      'reviews'
    );
    res.render('playgrounds/show', { playground });
  })
);

router.get(
  '/:id/edit',
  catchAsync(async (req, res) => {
    const playground = await Playground.findById(req.params.id);
    res.render('playgrounds/edit', { playground });
  })
);

router.post(
  '/',
  validatePlayground,
  catchAsync(async (req, res, next) => {
    const playground = new Playground(req.body.playground);
    await playground.save();
    res.redirect(`/playgrounds/${playground._id}`);
  })
);

router.put(
  '/:id',
  validatePlayground,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Playground.findByIdAndUpdate(id, { ...req.body.playground });
    res.redirect(`/playgrounds/${id}`);
  })
);

router.delete(
  '/:id',
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Playground.findByIdAndDelete(id);
    res.redirect('/playgrounds');
  })
);

module.exports = router;
