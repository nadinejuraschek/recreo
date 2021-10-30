const express = require('express'),
  passport = require('passport'),
  catchAsync = require('../utils/catchAsync'),
  userController = require('../controllers/users'),
  router = express.Router({ mergeParams: true });

// LOGIN
router
  .route('/login')
  .post(
    // passport.authenticate('local', {
    //   failureFlash: true,
    //   failureRedirect: '/login',
    // }),
    passport.authenticate('local'),
    catchAsync(userController.login)
  );

// REGISTER
router
  .route('/register')
  .post(catchAsync(userController.register));

// LOGOUT
router.get('/logout', userController.logout);

module.exports = router;
