const User = require('../models/User');

module.exports.login = async (req, res) => {
  req.flash('success', 'Welcome back!');
  const redirectUrl = req.session.returnTo || '/playgrounds';
  delete req.session.returnTo;
  res.redirect(redirectUrl);

  // console.log(req.body);
  const user = await db.User.findOne({ email: req.body.email });
  if (!user) {
    res.json({ message: 'No User found.' });
    return;
  }
  console.log(user);
  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) {
    res.json({ message: 'Entered e-mail and password do not match!' });
    return;
  }
  const token = jwt.sign({ id: user.id }, process.env.APP_SECRET);
  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });
  res.json(user);
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

