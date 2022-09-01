const express = require('express');
const router = express.Router();
const {
  getMovie,
  setMovie,
  updateMovie,
  deleteMovie,
  searchMovies,
} = require('../controller/movieController');

router.route('/').get(getMovie).post(setMovie);
router.route('/:id').delete(deleteMovie).put(updateMovie);
router.route('/search').get(searchMovies);

module.exports = router;
