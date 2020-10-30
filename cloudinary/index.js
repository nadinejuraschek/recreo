const cloudinary = require('cloudinary'),
  { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'Recreo',
    allowedFormats: ['jpeg', 'jpg', 'png', 'webp'],
  },
});

module.exports = {
  cloudinary,
  storage
};