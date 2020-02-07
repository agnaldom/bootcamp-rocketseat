import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'upload'),
    filename: (req, file, ch) => {
      if (err) return cb(err);

      return cb(null, res.toString('hex') + extname(file.originalname));
    },
  }),
};
