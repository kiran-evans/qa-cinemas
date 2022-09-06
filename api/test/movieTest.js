// Dep
const { describe, it, beforeEach } = require('mocha');
const chai = require('chai');
const chaitHttp = require('chai-http');
chai.use(chaitHttp);
const { expect } = chai;
const Movie = require('../model/movieSchema');
const server = require('../index');

// Main

describe('CRUD Tests', () => {
    let testMovie;

    // Clear movies and create testMovie before each test
    beforeEach(async () => {
        try {
            await Movie.deleteMany({});
            testMovie = await Movie.create({
                title: 'Test Movie',
                classification: 'u',
                actors: 'Test Actors',
                director: 'Test Director',
                showtimes: ['14:00', '18:00'],
                description: 'Test description',
                dateReleased: '2022-03-01',
                ratings: 0,
            });
            testMovie = JSON.parse(JSON.stringify(testMovie)); // Stringify data from Mongo object then convert to JSON
        } catch (err) {
            console.log(err);
        }
    });

    // Create
    it('Should create movie', (done) => {
        const newMovie = {
            title: 'New Movie',
            classification: 'pg',
            actors: 'Test Actors',
            director: 'Test Director',
            showtimes: ['18:00', '21:00', '22:00'],
            description: 'Test description',
            dateReleased: '2022-03-01',
            ratings: 0,
        };

        chai.request(server).post('/api/movies').send(newMovie)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(201);
                expect(res.body).to.deep.include(newMovie);

                return done();
            });
    });

    // Read
    it('Should get all movies', (done) => {
        chai.request(server).get('/api/movies')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);

                return done();
            });
    });

    it('Should get movie', (done) => {
        chai.request(server).get(`/api/movies/${testMovie._id}`)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                expect(res.body).to.deep.include(testMovie);

                return done();
            });
    });

    // Update 
    it('Should update movie', (done) => {
        chai.request(server).put(`/api/movies/${testMovie._id}`).query({ name: 'Jim' })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                expect(res.body).to.deep.include(testMovie);

                return done();
            });
    });

    // Delete
    it('Should delete movie', (done) => {
        chai.request(server).delete(`/api/movies/${testMovie._id}`)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(204);
                
                return done();
            });
    });
});