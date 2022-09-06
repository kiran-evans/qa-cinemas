const express = require('express');
const router = express.Router();
const {
  getBookings,
  getByMovieAndName,
  getBookingsByID,
  setBooking,
  updateBooking,
  deleteBooking,
} = require('../controller/MovieBookingController');

router.route('/').get(getBookings).post(setBooking);
router
  .route('/:id')
  .delete(deleteBooking)
  .put(updateBooking)
  .get(getBookingsByID);
router.route('/:movie/:name').get(getByMovieAndName);

module.exports = router;
