import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('All signUp Post request', () => {
  // To signUp new user
  it('Should signup new user successfully', (done) => {
    const userInfo = {
      username: 'tony',
      email: 'tony@gmail.com',
      password: 'asdfghj',
      password2: 'asdfghj'
    };
    chai.request(app)
      .post('/api/v1/auth/signUp')
      .send(userInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Signup Successful');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  // Fail to signUp new user
  it('Should fail to sign new user', (done) => {
    const userInfo = {
      username: 'tony',
      password: 'asdfghj',
      password2: 'asdfghj'
    };
    chai.request(app)
      .post('/api/v1/auth/signUp')
      .send(userInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Email is required');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should fail to sign new user', (done) => {
    const userInfo = {
      username: 'tony',
      email: 'tonygmail.com',
      password: 'asdfghj',
      password2: 'asdfghj'
    };
    chai.request(app)
      .post('/api/v1/auth/signUp')
      .send(userInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Email is not valid');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should fail to sign new user', (done) => {
    const userInfo = {
      username: 'tony',
      email: 'tony@gmail.com',
      password: 'asdfgrj',
      password2: 'asdfghj'
    };
    chai.request(app)
      .post('/api/v1/auth/signUp')
      .send(userInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Password do not match');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
});

describe('All login Post request', () => {
  // To login user
  it('Should login user successfully', (done) => {
    const userInfo = {
      username: 'jd',
      password: 'qwertyz'
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(userInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Login Successful');
        expect(res.status).to.equal(202);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should not login user', (done) => {
    const userInfo = {
      username: 'jd',
      password: 'qwertz'
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(userInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Minimum password length is 7 characters');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should not login user', (done) => {
    const userInfo = {
      username: 'jo',
      password: 'qwertyz'
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(userInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Login Unsuccessful');
        expect(res.status).to.equal(401);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should not login user', (done) => {
    const userInfo = {
      username: 'jd'
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(userInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Password is required');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should not login user', (done) => {
    const userInfo = {
      password: 'qwertyz'
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(userInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Username is required');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
});
