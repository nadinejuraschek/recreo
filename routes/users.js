const express = require('express'),
  passport = require('passport'),
  catchAsync = require('../utils/catchAsync'),
  userController = require('../controllers/users'),
  router = express.Router({ mergeParams: true });

// READ
// LOGIN
router.get('/login', (req, res) => {
  res.render('users/login');
});

// REGISTER
router.get('/register', (req, res) => {
  res.render('users/register');
});

// LOGOUT
router.get('/logout', userController.logout);

// CREATE
// LOGIN
router.post('/login', passport.authenticate('local', {
  failureFlash: true,
  failureRedirect: '/login',
}), catchAsync(userController.login));

// REGISTER
router.post('/register', catchAsync(userController.register));

module.exports = router;