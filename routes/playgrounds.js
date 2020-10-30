const express = require('express'),
  multer = require('multer'),
  catchAsync = require('../utils/catchAsync'),
  playgroundController = require('../controllers/playgrounds'),
  { storage } = require('../cloudinary'),
  upload = multer({ storage }),
  router = express.Router();

// MIDDLEWARE
const { isLoggedIn, isAuthor, validatePlayground } = require('../middleware');

router
  .route('/')
  .get(catchAsync(playgroundController.getPlaygrounds))
  .post(
    isLoggedIn,
    upload.array('image'),
    validatePlayground,
    catchAsync(playgroundController.create)
  );

router.get('/new', isLoggedIn, (req, res) => {
  res.render('playgrounds/new');
});

router
  .route('/:id')
  .get(catchAsync(playgroundController.getSinglePlayground))
  .put(
    isLoggedIn,
    isAuthor,
    validatePlayground,
    catchAsync(playgroundController.edit)
  )
  .delete(isLoggedIn, isAuthor, catchAsync(playgroundController.delete));

router.get(
  '/:id/edit',
  isLoggedIn,
  isAuthor,
  catchAsync(playgroundController.showEditForm)
);

module.exports = router;
