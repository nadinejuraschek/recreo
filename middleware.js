module.exports.isLoggedIn = (req, res, next) => {
  console.log('REQ.USER: ', req.user);
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    req.flash('error', 'You must log in to use this feature.');
    return res.redirect('/login');
  };
  next();
};