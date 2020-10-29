const express = require('express'),
  passport = require('passport'),
  catchAsync = require('../utils/catchAsync'),
  // ExpressError = require('../utils/ExpressError'),
  User = require('../models/User'),
  router = express.Router({ mergeParams: true });

// VALIDATION
// const { userSchema } = require('../schemas.js');

// ERROR HANDLING
// const validateUser = (req, res, next) => {
//   const { error } = reviewSchema.validate(req.body);
//   if (error) {
//     const msg = error.details.map(item => item.message).join(',');
//     throw new ExpressError(msg, 400);
//   } else {
//     next();
//   };
// };

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
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'See you again soon!');
  res.redirect('/');
});

// CREATE
// LOGIN
router.post('/login', passport.authenticate('local', {
  failureFlash: true,
  failureRedirect: '/login',
}), catchAsync(async (req, res) => {
  req.flash('success', 'Welcome back!');
  res.redirect('/playgrounds');
}));

// REGISTER
router.post('/register', catchAsync(async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.flash('success', "Welcome to Recreo!");
    res.redirect('/playgrounds');
  } catch(err) {
    req.flash('error', err.message);
    res.redirect('/playgrounds');
  };
}));

// UPDATE

// DELETE


module.exports = router;