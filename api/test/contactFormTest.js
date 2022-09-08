// Dep
const { describe, it, beforeEach } = require('mocha');
const chai = require('chai');
const chaitHttp = require('chai-http');
chai.use(chaitHttp);
const { expect } = chai;
const contactForm = require('../model/formModel');
const server = require('../index');

// Main

describe('CRUD Tests', () => {
  let testForm;

  // Clear movies and create testMovie before each test
  beforeEach(async () => {
    try {
      await contactForm.deleteMany({});
      testForm = await contactForm.create({
        header: 'test issue',
        userEmail: 'test123@gmail.com',
        body: 'stuff has happened',
      });
      testForm = JSON.parse(JSON.stringify(testForm)); // Stringify data from Mongo object then convert to JSON
    } catch (err) {
      console.log(err);
    }
  });

  // Create
  it('Should create form submission', (done) => {
    const newContactForm = {
      header: 'form header test',
      userEmail: 'testForm@gmail.com',
      body: 'stuff has happened and it is critical',
    };

    chai
      .request(server)
      .post('/api/contact')
      .send(newContactForm)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.include(newContactForm);

        return done();
      });
  });

  // Read
  it('Should get all contact forms', (done) => {
    chai
      .request(server)
      .get('/api/contact')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);

        return done();
      });
  });

  it('Should get contact form by ID', (done) => {
    chai
      .request(server)
      .get(`/api/contact/${testForm._id}`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.include(testForm);

        return done();
      });
  });

  // Delete
  it('Should delete contact form when resolved', (done) => {
    chai
      .request(server)
      .delete(`/api/contact/${testForm._id}`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);

        return done();
      });
  });
});
