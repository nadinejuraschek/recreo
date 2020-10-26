const express = require('express'),
mongoose = require('mongoose'),
dotenv = require('dotenv'),
path = require('path'),
Playground = require('./models/Playground');

dotenv.config();

// DATABASE
mongoose.connect('mongodb://localhost:27017/recreo', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database is connected.');
});

const app = express();

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));


// ROUTES
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/playgrounds', async (req, res) => {
  const playgrounds = await Playground.find({});
  res.render('playgrounds/index', { playgrounds });
});

app.get('/playgrounds/new', (req, res) => {
  res.render('playgrounds/new');
});

app.get('/playgrounds/:id', async (req, res) => {
  const playground = await Playground.findById(req.params.id);
  res.render('playgrounds/show', { playground });
});

app.post('/playgrounds', async (req, res) => {
  const playground = new Playground(req.body.playground);
  await playground.save();
  res.redirect(`/playgrounds/${playground._id}`);
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening on PORT ${process.env.PORT}.`);
});