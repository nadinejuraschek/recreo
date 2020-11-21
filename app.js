const express = require('express'),
  mongoSanitize = require('express-mongo-sanitize'),
  mongoose = require('mongoose'),
  dotenv = require('dotenv'),
  methodOverride = require('method-override'),
  ejsMate = require('ejs-mate'),
  session = require('express-session'),
  flash = require('connect-flash'),
  passport = require('passport'),
  LocalStrategy = require('passport-local'),
  path = require('path'),
  ExpressError = require('./utils/ExpressError'),
  User = require('./models/User'),
  userRoutes = require('./routes/users'),
  playgroundRoutes = require('./routes/playgrounds'),
  reviewRoutes = require('./routes/reviews');

dotenv.config();

// DATABASE
mongoose.connect('mongodb://localhost:27017/recreo', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database is connected.');
});

const app = express();

// EJS
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// MONGO SANITIZE
app.use(mongoSanitize());

// SESSION
const sessionConfig = {
  name: 'welcome',
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));

// FLASH
app.use(flash());

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  console.log(req.query);
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

// ROUTES
app.get('/', (req, res) => {
  res.render('home');
});

app.use('/', userRoutes);
app.use('/playgrounds', playgroundRoutes);
app.use('/playgrounds/:id/review', reviewRoutes);

app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found', 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Something went wrong!';
  res.status(statusCode).render('error', { err });
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening on PORT ${process.env.PORT}.`);
});
