const express = require('express'),
  mongoose = require('mongoose'),
  dotenv = require('dotenv'),
  methodOverride = require('method-override'),
  ejsMate = require('ejs-mate'),
  path = require('path'),
  ExpressError = require('./utils/ExpressError'),
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

// ROUTES
app.get('/', (req, res) => {
  res.render('home');
});

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
