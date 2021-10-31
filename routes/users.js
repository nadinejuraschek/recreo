const express = require('express'),
  userController = require('../controllers/users'),
  router = express.Router({ mergeParams: true });

// LOGIN
router
  .route('/login')
  .post(userController.login);

// REGISTER
router
  .route('/register')
  .post(userController.register);

// LOGOUT
router.get('/logout', userController.logout);

// GET USER
router.get('/user', userController.getUser);

module.exports = router;
