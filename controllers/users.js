const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../models/User');

module.exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).send('Invalid username or password.');

    req.logIn(user, err => {
      if (err) return next(err);
      res.send({
        id: user.id,
        username: user.username,
      });
    });
  })(req, res, next);
}

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.send('Successfully logged out.');
  });
}

module.exports.register = async (req, res, next) => {
  try {
  const { username, password } = req.body;

  // validate input
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

  // check if user already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  // create and save user
      const newUser = new User({
        username,
        password: hashedPassword,
      });
      await newUser.save();

   // suto-login after registration
    req.logIn({ id: newUser._id, username: newUser.username }, (err) => {
      if (err) return next(err);
      res.status(201).json({
        id: newUser.id,
        username: newUser.username,
      });
    });
} catch (err) {
  next(err);
}
};

module.exports.getUser = (req, res) => {
  if (!req.user) return res.status(401).send('Unauthorized');
  res.send({ id: req.user.id, username: req.user.username });
};
