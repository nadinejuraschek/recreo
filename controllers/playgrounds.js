const Playground = require('../models/Playground');

module.exports.getPlaygrounds = async (req, res) => {
  const playgrounds = await Playground.find({});
  res.render('playgrounds/index', { playgrounds });
};

module.exports.getSinglePlayground = async (req, res) => {
  const playground = await Playground.findById(req.params.id)
    .populate({
      path: 'reviews',
      populate: {
        path: 'author',
      },
    })
    .populate('author');
  if (!playground) {
    req.flash('error', 'This playground cannot be found.');
    return res.redirect('/playgrounds');
  }
  res.render('playgrounds/show', { playground });
};

module.exports.showEditForm = async (req, res) => {
  const playground = await Playground.findById(req.params.id);
  res.render('playgrounds/edit', { playground });
};

module.exports.create = async (req, res, next) => {
  const playground = new Playground(req.body.playground);
  playground.author = req.user._id;
  playground.images = req.files.map(file => ({ url: file.path, filename: file.filename }));
  await playground.save();
  console.log(playground);
  req.flash('success', 'Successfully added a new playground!');
  res.redirect(`/playgrounds/${playground._id}`);
};

module.exports.edit = async (req, res) => {
  const { id } = req.params;
  const editedPlayground = await Playground.findByIdAndUpdate(id, {
    ...req.body.playground,
  });
  req.flash('success', 'Successfully updated this playground!');
  res.redirect(`/playgrounds/${id}`);
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  const deletedPlayground = await Playground.findByIdAndDelete(id);
  req.flash('success', 'The playground has been removed.');
  res.redirect('/playgrounds');
};