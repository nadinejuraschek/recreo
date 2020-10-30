const express = require('express'),
  passport = require('passport'),
  catchAsync = require('../utils/catchAsync'),
  userController = require('../controllers/users'),
  router = express.Router({ mergeParams: true });

// LOGIN
router
  .route('/login')
  .get((req, res) => {
    res.render('users/login');
  })
  .post(
    passport.authenticate('local', {
      failureFlash: true,
      failureRedirect: '/login',
    }),
    catchAsync(userController.login)
  );

// REGISTER
router
  .route('/register')
  .get((req, res) => {
    res.render('users/register');
  })
  .post(catchAsync(userController.register));

// LOGOUT
router.get('/logout', userController.logout);

module.exports = router;
