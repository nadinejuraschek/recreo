const express = require('express'),
  catchAsync = require('../utils/catchAsync'),
  playgroundController = require('../controllers/playgrounds'),
  router = express.Router();

// MIDDLEWARE
const { isLoggedIn, isAuthor, validatePlayground } = require('../middleware');

// READ
router.get(
  '/',
  catchAsync(playgroundController.getPlaygrounds)
);

router.get('/new', isLoggedIn, (req, res) => {
  res.render('playgrounds/new');
});

router.get(
  '/:id',
  catchAsync(playgroundController.getSinglePlayground)
);

router.get(
  '/:id/edit',
  isLoggedIn,
  isAuthor,
  catchAsync(playgroundController.showEditForm)
);

// CREATE
router.post(
  '/',
  isLoggedIn,
  validatePlayground,
  catchAsync(playgroundController.create)
);

// UPDATE
router.put(
  '/:id',
  isLoggedIn,
  isAuthor,
  validatePlayground,
  catchAsync(playgroundController.edit)
);

// DELETE
router.delete(
  '/:id',
  isLoggedIn,
  isAuthor,
  catchAsync(playgroundController.delete)
);

module.exports = router;
