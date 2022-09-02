const express = require('express');
const router = express.Router();
const {
  getBookings,
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

module.exports = router;
