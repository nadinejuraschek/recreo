const express = require('express'),
  mongoSanitize = require('express-mongo-sanitize'),
  mongoose = require('mongoose'),
  dotenv = require('dotenv'),
  methodOverride = require('method-override'),
  session = require('express-session'),
  helmet = require('helmet'),
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

// DATABASE ================================================================
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

// MIDDLEWARE ==============================================================
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// SECURITY ================================================================
app.use(mongoSanitize());
app.use(helmet());

const scriptSrcUrls = [
  "https://stackpath.bootstrapcdn.com/",
  "https://api.tiles.mapbox.com/",
  "https://api.mapbox.com/",
  "https://kit.fontawesome.com/",
  "https://cdnjs.cloudflare.com/",
  "https://cdn.jsdelivr.net",
];
const styleSrcUrls = [
  "https://kit-free.fontawesome.com/",
  "https://stackpath.bootstrapcdn.com/",
  "https://api.mapbox.com/",
  "https://api.tiles.mapbox.com/",
  "https://fonts.googleapis.com/",
  "https://use.fontawesome.com/",
];
const connectSrcUrls = [
  "https://api.mapbox.com/",
  "https://a.tiles.mapbox.com/",
  "https://b.tiles.mapbox.com/",
  "https://events.mapbox.com/",
];
const fontSrcUrls = [
  "https://fonts.gstatic.com/",
  "https://fonts.googleapis.com/",
];

app.use(
  helmet.contentSecurityPolicy({
      directives: {
          defaultSrc: [],
          connectSrc: ["'self'", ...connectSrcUrls],
          scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
          styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
          workerSrc: ["'self'", "blob:"],
          objectSrc: [],
          imgSrc: [
              "'self'",
              "blob:",
              "data:",
              "https://res.cloudinary.com/nadinejwebdev/",
              "https://images.unsplash.com/",
              "https://images.pexels.com/",
          ],
          fontSrc: ["'self'", ...fontSrcUrls],
      },
  })
);

// SESSION ===============================================================
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

// FLASH =================================================================
app.use(flash());

// PASSPORT ==============================================================
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

// ROUTES ================================================================
app.get('/', (req, res) => {
  res.send('Backend started.');
});

app.use('/api', userRoutes);
app.use('/api/playgrounds', playgroundRoutes);
app.use('/api/playgrounds/:id/review', reviewRoutes);

app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found', 404));
});

// DEPLOYMENT
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// If no API routes are hit, send the React app
app.use((req, res) =>
  res.sendFile(path.join(__dirname, './client/build/index.html'))
);

// ERROR
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Something went wrong!';
  res.status(statusCode).render('error', { err });
});

// SERVER
app.listen(process.env.PORT, () => {
  console.log(`App is listening on PORT ${process.env.PORT}.`);
});
