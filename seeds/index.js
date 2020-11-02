const mongoose = require('mongoose'),
cities = require('./cities'),
Playground = require('../models/Playground');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/recreo', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('Database connected!');
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Playground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const playgrounds = new Playground({
      author: '5f9b17c121bdc058e1ea4895',
      geometry: {
        type: "Point",
        coordinates: [-70.8967155, 42.51954],
      },
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: 'https://images.pexels.com/photos/571249/pexels-photo-571249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'Helvetica poke tote bag etsy adaptogen authentic knausgaard. +1 meggings direct trade shabby chic aliqua freegan. Pickled knausgaard jianbing asymmetrical everyday carry single-origin coffee. Do tacos mlkshk quis 8-bit ullamco vice cloud bread organic minim hell of fingerstache heirloom tumblr.',
      price,
    });
    await playgrounds.save();
  };
};

seedDB();
