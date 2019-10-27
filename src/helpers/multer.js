const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: path.join('./public/logo/'),
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  }
});

const upload = multer({
  //multer settings
  storage: storage,
  fileFilter: function(req, file, cb) {
    const ext = path.extname(file.originalname);
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg' ||
      file.mimetype == 'image/gif'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Allowed only .png, .jpg, .jpeg and .gif'));
    }
  },
  limits: {
    fileSize: 1024 * 1024
  }
}).single('logo');

module.exports = upload;
