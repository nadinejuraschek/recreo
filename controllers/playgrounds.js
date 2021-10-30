const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding'),
  dotenv = require('dotenv'),
  Playground = require('../models/Playground');

dotenv.config();

const geocoder = mbxGeocoding({ accessToken: process.env.MAPBOX_TOKEN });

module.exports.getPlaygrounds = async (req, res) => {
  await Playground.find({})
    .then(playgrounds => {
      res.status(200).json(playgrounds);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

module.exports.getSinglePlayground = async (req, res) => {
  await Playground.findById(req.params.id)
    .populate({
      path: 'reviews',
      populate: {
        path: 'author',
      },
    })
    .populate('author')
    .then(playground => {
      res.status(200).json(playground);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

module.exports.showEditForm = async (req, res) => {
  const playground = await Playground.findById(req.params.id);
  res.send('Should show edit form for playground.');
  // res.render('playgrounds/edit', { playground });
};

module.exports.create = async (req, res, next) => {
  const geoData = await geocoder.forwardGeocode({
    query: req.body.playground.location,
    limit: 1,
  }).send();
  const playground = new Playground(req.body.playground);
  playground.geometry = geoData.body.features[0].geometry;
  playground.author = req.user._id;
  await playground.save();
  res.send('success', 'Successfully added a new playground!');
  // req.flash('success', 'Successfully added a new playground!');
  // res.redirect(`/playgrounds/${playground._id}`);
};

module.exports.edit = async (req, res) => {
  const { id } = req.params;
  const editedPlayground = await Playground.findByIdAndUpdate(id, {
    ...req.body.playground,
  });
  res.send('success', 'Successfully updated this playground!');
  // req.flash('success', 'Successfully updated this playground!');
  // res.redirect(`/playgrounds/${id}`);
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  const deletedPlayground = await Playground.findByIdAndDelete(id);
  res.send('success', 'The playground has been removed.');
  // req.flash('success', 'The playground has been removed.');
  // res.redirect('/playgrounds');
};