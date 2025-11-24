const bcrypt = require('bcryptjs');
const User = require('./models/User');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username }, (err, user) => {
        if (err) return done(err);

        // null is err, false is user => done with no error and no user
        if (!user) return done(null, false);

        bcrypt.compare(password, user.password, (err, result) => {
          if (err) return done(err);
          if (result) {
            const newUser = {
              id: user._id,
              username: user.username,
            };
            return done(null, newUser);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      if (err) return cb(err);

      if (!user) return cb(null, false);

      const userInfo = {
        id: user._id,
        username: user.username,
      };
      cb(null, userInfo);
    });
  });
};
