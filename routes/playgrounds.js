const express = require('express'),
  playgroundController = require('../controllers/playgrounds'),
  router = express.Router();

// MIDDLEWARE
const { isAuthor, validatePlayground } = require('../middleware');

router
  .route('/')
  .get(playgroundController.getPlaygrounds)
  .post(
    validatePlayground,
    playgroundController.create
  );

router.get('/new', (req, res) => {
  res.send('User is Logged In');
});

router
  .route('/:id')
  .get(playgroundController.getSinglePlayground)
  .put(
    isAuthor,
    validatePlayground,
    playgroundController.edit
  )
  .delete(isAuthor, playgroundController.delete);

router.get(
  '/:id/edit',
  isAuthor,
  playgroundController.showEditForm
);

module.exports = router;
