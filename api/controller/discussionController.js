const router = require('express').Router();

const { Discussions } = require('../model/discussionModel');

router.get('/getAllRelated/:movie', (req, res, next) => {
    const { movie } =req.params;
    
    Discussions.find({"movie": movie})
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.post('/postNewDiscussion', (req, res, next) => {
    if (!req.body || Object.keys(req.body).length < 5) return next({ status: 400, msg: 'Incomplete/No Body Provided' });

    Discussions.create(req.body)
        .then((result) => res.status(201).json(result))
        .catch((err) => next(err));
});

router.delete('/deleteByMovie/:movie', (req, res, next) => {
    const {movie} = req.params;

    Discussions.deleteMany({"movie": movie})
        .then((result) => res.status(204).json(result))
        .catch((err) => next(err))
});

router.delete('/deleteById/:id', (req, res, next) => {
    const { id } = req.params;

    Discussions.findByIdAndDelete(id)
        .then((result) => res.status(204).json(result))
        .catch((err) => next(err))
});

router.delete('/massDelete', (req, res, next) => {
    Discussions.deleteMany({})
        .then((result) => res.status(204).json(result))
        .catch((err) => next(err))
});

module.exports = router;