const asyncHandler = require('express-async-handler');

const bookingSchema = require('../model/bookingSchema');

const getBookings = asyncHandler(async (req, res) => {
  const schema = await bookingSchema.find();
  res.status(200).json(schema);
});

const getByMovieAndName = asyncHandler(async (req, res) => {
  const {movie, name} = req.params;
  
  const result = await bookingSchema.find({'title': movie, 'name': name});
  res.status(200).json(result);
});

const getBookingsByID = asyncHandler(async (req, res) => {
  const schema = await bookingSchema.findById(req.params.id);
  res.status(200).json(schema);
});

const setBooking = asyncHandler(async (req, res) => {
  const schema = await bookingSchema.create({
    title: req.body.title,
    date: req.body.date,
    time: req.body.time,
    seats: req.body.seats,
    name: req.body.name,
    paid: req.body.paid,
  });
  res.status(201).json(schema);
});

const updateBooking = asyncHandler(async (req, res) => {
  const schema = await bookingSchema.findById(req.params.id);

  if (!schema) {
    res.status(400).json({ message: `Movie not found` });
  }

  const updateSchema = await bookingSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateSchema);
});

const deleteBooking = asyncHandler(async (req, res) => {
  const schema = await bookingSchema.findById(req.params.id);
  if (!schema) {
    res.status(400).json({ message: `Movie not found` });
  }

  await schema.remove();

  res.status(204).json();
});

module.exports = {
  getBookings,
  getByMovieAndName,
  getBookingsByID,
  setBooking,
  updateBooking,
  deleteBooking,
};
