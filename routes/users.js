const express = require('express'),
  catchAsync = require('../utils/catchAsync'),
  ExpressError = require('../utils/ExpressError'),
  User = require('../models/User'),
  Playground = require('../models/Playground'),
  Review = require('../models/Review'),
  router = express.Router({ mergeParams: true });

// VALIDATION
const { userSchema } = require('../schemas.js');

// ERROR HANDLING
const validateUser = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(item => item.message).join(',');
    throw new ExpressError(msg, 400);
  } else {
    next();
  };
};

// READ
// LOGIN

// REGISTER
router.get('/register', (req, res) => {
  res.render('users/register');
});

// CREATE
// LOGIN
router.post('/login', catchAsync(async (req, res) => {
  const user = new User();
  const newUser = await User.register(user, '');
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