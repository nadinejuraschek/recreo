const express = require('express'),
  mongoSanitize = require('express-mongo-sanitize'),
  mongoose = require('mongoose'),
  dotenv = require('dotenv'),
  methodOverride = require('method-override'),
  session = require('express-session'),
  helmet = require('helmet'),
  cookieParser = require('cookie-parser'),
  passport = require('passport'),
  path = require('path'),
  cors = require('cors'),
  userRoutes = require('./routes/users'),
  playgroundRoutes = require('./routes/playgrounds'),
  reviewRoutes = require('./routes/reviews');

dotenv.config();

// DATABASE ================================================================
mongoose.connect(process.env.MONGO_URI, {
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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: 'https://localhost:3000',
  credentials: true,
}));

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
};
app.use(session(sessionConfig));
app.use(cookieParser(process.env.SECRET));

// PASSPORT ==============================================================
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);

// ROUTES ================================================================
app.get('/', (req, res) => {
  res.send('Backend started.');
});

app.use('/api', userRoutes);
app.use('/api/playgrounds', playgroundRoutes);
app.use('/api/playgrounds/:id/review', reviewRoutes);

// DEPLOYMENT
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// If no API routes are hit, send the React app
app.use((req, res) =>
  res.sendFile(path.join(__dirname, './client/build/index.html'))
);

// SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on PORT ${process.env.PORT}.`);
});
