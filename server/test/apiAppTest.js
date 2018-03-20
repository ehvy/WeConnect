import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('apiApp testing', () => {
  // For Homepage route
  it('Should return an Ok status code of 200', (done) => {
    chai.request(app)
      .get('/api/v1')
      .end((err, res) => {
        expect(res.body).to.have.property('message');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });
  // For the default route
  it('Should return an Ok status code of 404', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.body).to.have.property('message');
        expect(res.status).to.equal(404);
        expect(res.body).to.be.a('object');
        done();
      });
  });
});
