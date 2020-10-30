const express = require('express'),
  catchAsync = require('../utils/catchAsync'),
  Playground = require('../models/Playground'),
  router = express.Router();

// MIDDLEWARE
const { isLoggedIn, isAuthor, validatePlayground } = require('../middleware');

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
  isAuthor,
  catchAsync(async (req, res) => {
    const editedPlayground = await Playground.findById(req.params.id);
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
  isAuthor,
  validatePlayground,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const editedPlayground = await Playground.findByIdAndUpdate(id, {
      ...req.body.playground,
    });
    req.flash('success', 'Successfully updated this playground!');
    res.redirect(`/playgrounds/${id}`);
  })
);

// DELETE
router.delete(
  '/:id',
  isLoggedIn,
  isAuthor,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const deletedPlayground = await Playground.findByIdAndDelete(id);
    req.flash('success', 'The playground has been removed.');
    res.redirect('/playgrounds');
  })
);

module.exports = router;
