const express = require('express');
const router = express.Router();
const {
  getMovie,
  getMovieByID,
  createMovie,
  updateMovie,
  deleteMovie,
} = require('../controller/movieController');

router.route('/').get(getMovie).post(createMovie);
router.route('/:id').delete(deleteMovie).put(updateMovie).get(getMovieByID);

module.exports = router;
