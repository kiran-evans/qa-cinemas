const { describe, it, beforeEach } = require('mocha');
const chai = require('chai');
const chaiHTTP = require('chai-http');

chai.use(chaiHTTP);
const { expect } = require('chai');
const { Discussions } = require('../model/discussionModel');

const server = require('../index');

describe('Discussions CRUD Testing', () => {

    let id;
    let displayName;
    let testPosts;

    beforeEach(async () => {
        await Discussions.deleteMany({});
        testPosts = await Discussions.insertMany([
            {
                movie: "Frogged",
                rating: 5,
                displayName: "IceMan200",
                header: "A Froggy Delight",
                text: "was great",
                dateAdded: "22-02-2022",
            },
            {
                movie: "Jordan League",
                rating: 4,
                displayName: "Maverick",
                header: "Just OK",
                text: "was good",
                dateAdded: "22-02-2022",
            }
        ]);

        testPosts = JSON.parse(JSON.stringify(testPosts));
        id = testPosts[0]._id;
    })
    
    it('should get all', (done) => {
        chai.request(server).get('/api/discussions/getAll').end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body.length).to.equal(2);
            expect(res.body[0]._id).to.not.be.null;
            expect(res.body[0]._id).to.equal(id);
            expect(res.body[0].movie).to.equal("Frogged");
            expect(res.body[1].displayName).to.equal("Maverick");
            expect(err).to.be.null;

            done();
        });
    });

    it('should get all related to movie', (done) => {
        chai.request(server).get('/api/discussions/getAllRelated/Jordan League').end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body.length).to.equal(1);
            expect(res.body[0]._id).to.not.be.null;
            expect(res.body[0].movie).to.equal("Jordan League");
            expect(err).to.be.null;

            done();

        });
    });

    it('should create new discussion', (done) => {
        newPost = {
            movie: "Zucc",
            rating: 3,
            displayName: "Goose",
            header: "Seen Better",
            text: "was ok",
            dateAdded: "22-02-2022",
        }
        
        chai.request(server).post('/api/discussions/postNewDiscussion').send(newPost).end((err, res) => {
            expect(res.status).to.equal(201);
            expect(res.body._id).to.not.be.null;
            expect(res.body.displayName).to.equal("Goose");
            expect(res.body.rating).to.equal(3);
            expect(err).to.be.null;

            done();
        });
    });

    it('should delete specific post', (done) => {
        chai.request(server).delete(`/api/discussions/deleteById/${id}`).end((err, res) => {
            expect(res.status).to.equal(204);
            expect(res.body).to.be.empty;
            expect(err).to.be.null;

            done();
        });
    });

    it('should delete all post related to a movie', (done) => {
        chai.request(server).delete('/api/discussions/deleteByMovie/Frogged').end((err, res) => {
            expect(res.status).to.equal(204);
            expect(res.body).to.be.empty;
            expect(err).to.be.null;

            done();
        })
    })

    it('should empty discussions collection', (done) => {
        chai.request(server).delete('/api/discussions/massDelete').end((err, res) => {
            expect(res.status).to.equal(204);
            expect(res.body).to.be.empty;
            expect(err).to.be.null;

            done();
        });
    });

    it ('should get an error', (done) => {
        emptyObject = {
        };
        chai.request(server).post('/api/discussions/postNewDiscussion').send(emptyObject).end((err, res) => {
            expect(res.status).to.equal(400);

            done();
        })
    });

});
