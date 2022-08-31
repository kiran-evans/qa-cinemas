const express = require('express');
const router = express.Router();
const {
  getMovie,
  setMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/movieController');

router.route('/').get(getMovie).post(setMovie);
router.route('/:id').delete(deleteMovie).put(updateMovie);

module.exports = router;
