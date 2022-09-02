const express = require('express');
const router = express.Router();
const {
  getMovie,
  getMovieByID,
  setMovie,
  updateMovie,
  deleteMovie,
} = require('../controller/movieController');

router.route('/').get(getMovie).post(setMovie);
router.route('/:id').delete(deleteMovie).put(updateMovie).get(getMovieByID);

module.exports = router;
