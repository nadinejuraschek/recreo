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

// ROUTES
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/create', async (req, res) => {
  const playground = new Playground({ title: 'My Backyard' });
  await playground.save();
  res.send(playground);
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening on PORT ${process.env.PORT}.`);
});