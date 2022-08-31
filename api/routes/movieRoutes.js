const express = require('express');
const router = express.Router();
const {
  getMovie,
  setMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/receiptController');

router.route('/').get(getMovie).post(setMovie);
router.route('/:id').delete(deleteMovie).put(updateMovie);

module.exports = router;
