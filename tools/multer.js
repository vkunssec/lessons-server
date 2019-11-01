const multer = require('multer');
const fs = require('fs');
const dir = './uploads';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, dir);
        },
        filename: (req, file, cb) => {
            cb(null, Date.now().toString() + "." + file.originalname);
        }
    }),
}));
