const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding'),
  dotenv = require('dotenv'),
  Playground = require('../models/Playground');

dotenv.config();
const geocoder = mbxGeocoding({ accessToken: process.env.MAPBOX_TOKEN });

module.exports.getPlaygrounds = async (req, res, next) => {
  try {
    const playgrounds = await Playground.find({})
    res.status(200).json(playgrounds);
  } catch (err) {
    next(err);
  }
};

module.exports.getSinglePlayground = async (req, res, next) => {
  try {
    const playground = await Playground.findById(req.params.id)
    .populate({
      path: 'reviews',
      populate: {
        path: 'author',
        select: 'username',
      },
    })
    .populate({
      path: 'author',
      select: 'username',
    })

    if (!playground) {
      return res.status(404).json({ error: 'Playground not found' });
    }

    res.status(200).json(playground);
  } catch (err) {
    next(err);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    if (!req.body.location) {
      return res.status(400).json({ error: 'Location is required' });
    }
    const geoData = await geocoder.forwardGeocode({
      query: req.body.location,
      limit: 1,
    }).send();

    // validate geocoding results
    if (!geoData.body.features || geoData.body.features.length === 0) {
      return res.status(400).json({ error: 'Could not geocode the provided location' });
    }

    // process images
    let images = [];
    if (req.body.images) {
      if (Array.isArray(req.body.images)) {
        images = req.body.images;
      } else if (typeof req.body.images === 'string') {
        images = req.body.images.includes(',')
          ? req.body.images.split(',').map((imgSrc) => imgSrc.trim())
          : [req.body.images];
      }
    }

    // create
    const playground = new Playground({
      ...req.body,
      images,
      location: geoData.body.features[0].place_name,
      geometry: geoData.body.features[0].geometry,
      author: req.user?._id,
    });

    await playground.save();
    res.status(201).json(playground);
  } catch (err) {
    next(err);
  }
};

module.exports.edit = async (req, res, next) => {
  try {
    const { id } = req.params;

    // check if playground exists
    const existingPlayground = await Playground.findById(id);
    if (!existingPlayground) {
      return res.status(404).json({ error: 'Playground not found' });
    }

    // process images
    let images = existingPlayground.images;
    if (req.body.images !== undefined) {
      if (Array.isArray(req.body.images)) {
        images = req.body.images;
      } else if (typeof req.body.images === 'string') {
        images = req.body.images.includes(',')
          ? req.body.images.split(',').map((imgSrc) => imgSrc.trim())
          : [req.body.images];
      }
    }

    // edit
    const editedPlayground = await Playground.findByIdAndUpdate(
      id,
      {
        $set: {
          description: req.body.description,
          images,
          title: req.body.title,
        },
      },
      { new: true }
    );
    res.status(200).json({
      message: 'Successfully updated this playground!',
      playground: editedPlayground,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    // check if playground exists
    const existingPlayground = await Playground.findById(id);
    if (!existingPlayground) {
      return res.status(404).json({ error: 'Playground not found' });
    }

    await Playground.findByIdAndDelete(id);
    res.status(200).send('The playground has been removed.');
  } catch (err) {
    next(err);
  }
};
