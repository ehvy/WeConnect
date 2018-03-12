import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../../../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('All Post for businesses request', () => {
  // To register a new business
  it('Should register new business successfully', (done) => {
    const businessInfo = {
      business_name: 'barca fc',
      category: 'sports',
      phone_number: '0703473799',
      email: 'barcafc@gmail.com',
      address: '123 cook street',
      city: 'asaba',
      state: 'delta',
      description: 'a football club'
    };
    chai.request(app)
      .post('/api/v1/businesses')
      .send(businessInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Registration Successful');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should not register new business', (done) => {
    const businessInfo = {
      business_name: 'barca fc',
      category: 'sports',
      phone_number: '0703473799',
      email: 'barcafc@gmail.com',
      city: 'asaba',
      state: 'delta',
      description: 'a football club'
    };
    chai.request(app)
      .post('/api/v1/businesses')
      .send(businessInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Address is required');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should successfully add review', (done) => {
    const reviewInfo = {
      name: 'mark',
      review: 'need to improve',
    };
    chai.request(app)
      .post('/api/v1/businesses/1/reviews')
      .send(reviewInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Add review successful');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should not add review', (done) => {
    const reviewInfo = {
      review: 'need to improve'
    };
    chai.request(app)
      .post('/api/v1/businesses/1/reviews')
      .send(reviewInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Name is required');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should successfully add review', (done) => {
    const reviewInfo = {
      name: 'mark'
    };
    chai.request(app)
      .post('/api/v1/businesses/1/reviews')
      .send(reviewInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Review is required');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
});

describe('Put requests for businesses', () => {
  // To update an existing business
  it('Should update existing business', (done) => {
    const businessInfo = {
      business_name: 'geteatel',
      category: 'hospitality',
      phone_number: '07034521998',
      email: 'gateatel@mail.com',
      address: '123 jade street',
      city: 'ikeja',
      state: 'abuja',
      description: 'a hotel and suite facility'
    };
    chai.request(app)
      .put('/api/v1/businesses/1')
      .send(businessInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Update Successful');
        expect(res.status).to.equal(202);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should not update existing business', (done) => {
    const businessInfo = {
      business_name: 'geteatel',
      category: 'hospitality',
      phone_number: '07034521998',
      email: 'gateatel@mail.com',
      address: '123 jade street',
      city: 'ikeja',
      description: 'a hotel and suite facility'
    };
    chai.request(app)
      .put('/api/v1/businesses/1')
      .send(businessInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('State is required');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should not update existing business', (done) => {
    const businessInfo = {
      business_name: 'geteatel',
      category: 'hospitality',
      email: 'gateatel@mail.com',
      address: '123 jade street',
      city: 'ikeja',
      state: 'abuja',
      description: 'a hotel and suite facility'
    };
    chai.request(app)
      .put('/api/v1/businesses/1')
      .send(businessInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Phone number is required');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should not update existing business', (done) => {
    const businessInfo = {
      business_name: 'geteatel',
      category: 'hospitality',
      phone_number: '07034521998',
      address: '123 jade street',
      city: 'ikeja',
      state: 'abuja',
      description: 'a hotel and suite facility'
    };
    chai.request(app)
      .put('/api/v1/businesses/1')
      .send(businessInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Email is required');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should not update existing business', (done) => {
    const businessInfo = {
      business_name: 'geteatel',
      category: 'hospitality',
      phone_number: '07034521998',
      email: 'gateatelmail.com',
      address: '123 jade street',
      city: 'ikeja',
      state: 'abuja',
      description: 'a hotel and suite facility'
    };
    chai.request(app)
      .put('/api/v1/businesses/1')
      .send(businessInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Email is not valid');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should not update existing business', (done) => {
    const businessInfo = {
      business_name: 'geteatel',
      phone_number: '07034521998',
      email: 'gateatel@mail.com',
      address: '123 jade street',
      city: 'ikeja',
      state: 'abuja',
      description: 'a hotel and suite facility'
    };
    chai.request(app)
      .put('/api/v1/businesses/1')
      .send(businessInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Category is required');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should not update existing business', (done) => {
    const businessInfo = {
      category: 'hospitality',
      phone_number: '07034521998',
      email: 'gateatel@mail.com',
      address: '123 jade street',
      city: 'ikeja',
      state: 'abuja',
      description: 'a hotel and suite facility'
    };
    chai.request(app)
      .put('/api/v1/businesses/1')
      .send(businessInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Business name is required');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should not update existing business', (done) => {
    const businessInfo = {
      business_name: 'geteatel',
      category: 'hospitality',
      phone_number: '07034521998',
      email: 'gateatel@mail.com',
      address: '123 jade street',
      state: 'abuja',
      description: 'a hotel and suite facility'
    };
    chai.request(app)
      .put('/api/v1/businesses/1')
      .send(businessInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('City is required');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should not update existing business', (done) => {
    const businessInfo = {
      business_name: 'geteatel',
      category: 'hospitality',
      phone_number: '07034521998',
      email: 'gateatel@mail.com',
      address: '123 jade street',
      city: 'ikeja',
      state: 'abuja'
    };
    chai.request(app)
      .put('/api/v1/businesses/1')
      .send(businessInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Description is required');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
});

describe('All delete request for businesses', () => {
  // To delete business
  it('Should delete business successfully', (done) => {
    const businessInfo = {
      business_name: 'chiefs fc',
      email: 'chiefsfc@gmail.com',
    };
    chai.request(app)
      .delete('/api/v1/businesses/2')
      .send(businessInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Delete Successful');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should not delete', (done) => {
    const businessInfo = {
      email: 'chiefsfc@gmail.com'
    };
    chai.request(app)
      .delete('/api/v1/businesses/2')
      .send(businessInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Business Name is required');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should delete business successfully', (done) => {
    const businessInfo = {
      business_name: 'chiefs fc'
    };
    chai.request(app)
      .delete('/api/v1/businesses/2')
      .send(businessInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Email is required');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('Should delete business successfully', (done) => {
    const businessInfo = {
      business_name: 'chiefs fc',
      email: 'chiefsfcgmail.com',
    };
    chai.request(app)
      .delete('/api/v1/businesses/2')
      .send(businessInfo)
      .end((err, res) => {
        expect(res.body).to.have.property('message').equal('Email is not valid');
        expect(res.status).to.equal(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
});

describe('All get requests for businesses', () => {
  // To get all business
  it('Should get all business', (done) => {
    chai.request(app)
      .get('/api/v1/businesses')
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('Should get a business', (done) => {
    chai.request(app)
      .get('/api/v1/businesses/1')
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('Should not get a business', (done) => {
    chai.request(app)
      .get('/api/v1/businesses/4')
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('error');
        expect(res.status).to.equal(404);
        done();
      });
  });
  it('Should get a business by location', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?location=imo')
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        done();
      });
  });
  it('Should fail to get business by location', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?location=io')
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.status).to.equal(404);
        done();
      });
  });
  it('Should get a business by category', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?category=fashion')
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        done();
      });
  });
  it('Should fail to get business by category', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?category=marketing')
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.status).to.equal(404);
        done();
      });
  });
});
