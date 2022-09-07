const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "temp");
const MAX_SIZE = 2048; //максимально допустимый размер файла в байтах

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: MAX_SIZE,
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
