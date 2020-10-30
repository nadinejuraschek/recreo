const User = require('../models/User');

module.exports.login = async (req, res) => {
  req.flash('success', 'Welcome back!');
  const redirectUrl = req.session.returnTo || '/playgrounds';
  delete req.session.returnTo;
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'See you again soon!');
  res.redirect('/');
};

module.exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, err => {
      if (err) return next(err);
      req.flash('success', "Welcome to Recreo!");
      res.redirect('/playgrounds');
    });
  } catch(err) {
    req.flash('error', err.message);
    res.redirect('/playgrounds');
  };
};

