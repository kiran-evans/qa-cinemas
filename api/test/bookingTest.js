//dependencies
const chai = require('chai');
const chaiHTTP = require('chai-http');
const { describe, it, beforeEach } = require('mocha');
const server = require('..index');

chai.use(chaiHTTP);
const { expect } = require('chai');
const bookingModel = require('../model/bookingSchema');

//testing

describe('crud testing', () => {
    let testBooking;

    beforeEach(async () => {
        try {
            await bookingModel.deleteMany({});
            testBooking = await bookingModel.create({
                title: "test movie",
                date: "22/12/2022",
                time: "18:00",
                seats: ["A1", "A2", "A3"],
                name: "William B Wilde",
                paid: true,
            });
            testBooking = JSON.parse(JSON.stringify(testBooking));
        } catch (err) {
            console.log(err);
        }
    });

    //creation
    it('should create booking submission', (done) => {
        const newBooking = {
            title: "test movie 2 the testening",
            date: "23/12/2022",
            time: "19:00",
            seats: ["B1", "B2", "B3"],
            name: "John Movies",
            paid: true,
        };

        chai.request(server).post('/api/booking').send(newBooking)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(201);
                expect(res.body).to.deep.include(newBooking);

                return done();
            });
    });

    //read
    it('should read all bookings', (done) => {
        chai.request(server).get('/api/booking')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);

                return done();
            });
    });

    it('should get a specific booking', (done) => {
        chai.request(server).get(`/api/booking/${testBooking._id}`)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                expect(res.body).to.deep.include(testBooking);

                return done();
            });
    });

    //update
    it('should update a booking', (done) => {
        chai.request(server).put(`/api/booking/${testBooking._id}`).query({name: "Wallace Wallers"})
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                expect(res.body).to.deep.include(testBooking);

                return done();
            });
    });

    //deletion
    it('should delete a booking', (done) => {
        chai.request(server).delete(`/api/booking/${testBooking._id}`)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(204);

                return done();
            });
    });
});