const asyncHandler = require('express-async-handler'); //have functions in controller

const movieSchema = require('../model/movieSchema');

const getMovie = asyncHandler(async (req, res) => {
  const schema = await movieSchema.find();
  res.status(200).json(schema);
});

const setMovie = asyncHandler(async (req, res) => {
  const schema = await movieSchema.create({
    title: req.body.title,
    classification: req.body.classification,
    actors: req.body.actors,
    director: req.body.director,
    showtimes: req.body.showtimes,
    description: req.body.description,
    dateReleased: req.body.dateReleased,
    ratings: req.body.ratings,
    poster: req.body.poster,
  });
  res.status(200).json(schema);
});

const updateMovie = asyncHandler(async (req, res) => {
  const schema = await movieSchema.findById(req.params.id);

  if (!schema) {
    res.status(400).json({ message: `Movie not found` });
  }

  const updateSchema = await movieSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateSchema);
});

const deleteMovie = asyncHandler(async (req, res) => {
  const schema = await movieSchema.findById(req.params.id);
  if (!schema) {
    res.status(400).json({ message: `Movie not found` });
  }

  await schema.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getMovie,
  setMovie,
  updateMovie,
  deleteMovie,
};
