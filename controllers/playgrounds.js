const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding'),
  dotenv = require('dotenv'),
  Playground = require('../models/Playground');

dotenv.config();

const geocoder = mbxGeocoding({ accessToken: process.env.MAPBOX_TOKEN });

module.exports.getPlaygrounds = async (req, res) => {
  const page = req.query.page || 0;
  const resultsPerPage = 12;

  await Playground
    .find({})
    .sort({ title: 1 })
    .skip(page * resultsPerPage)
    .limit(resultsPerPage)
    .then(playgrounds => {
      res.status(200).json(playgrounds);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

module.exports.getSinglePlayground = async (req, res) => {
  const page = req.query.page || 0;
  const reviewsPerPage = 6;

  await Playground.findById(req.params.id)
    .populate({
      path: 'reviews',
      populate: {
        path: 'author',
        select: 'username',
      },
      options: {
        skip: page * reviewsPerPage,
        limit : reviewsPerPage,
      },
    })
    .populate({
      path: 'author',
      select: 'username',
    })
    .then(playground => {
      res.status(200).json(playground);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

module.exports.create = async (req, res, next) => {
  const geoData = await geocoder.forwardGeocode({
    query: req.body.location,
    limit: 1,
  }).send();

  const playground = new Playground(req.body);
  playground.location = geoData.body.features[0].place_name;
  playground.geometry = geoData.body.features[0].geometry;

  await playground.save();
  res.json(playground);

};

module.exports.edit = async (req, res) => {
  const { id } = req.params;
  const editedPlayground = await Playground.findByIdAndUpdate(id, {
    ...req.body.playground,
  });
  res.send('success', 'Successfully updated this playground!');
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  const deletedPlayground = await Playground.findByIdAndDelete(id);
  res.send('success', 'The playground has been removed.');
};
