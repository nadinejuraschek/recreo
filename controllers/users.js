const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../models/User');

module.exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) return res.status(400).send('User does not exist.');
    if (user) {
      req.logIn(user, err => {
        if (err) throw err;
        res.send(user);
      });
    }
  })(req, res, next);
}

module.exports.logout = (req, res) => {
  req.logout((error) => {
    if (error) throw error;
    res.send('Successfully logged out.');
  });
}

module.exports.register = async (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, async (err, doc) => {
    if (err) throw err;
    if (doc) return res.status(400).send('User already exists.');
    if (!doc) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send('User created.');
    }
  });
};

module.exports.getUser = (req, res) => {
  res.send(req.user);
};
