import chai from 'chai';

import chaiHttp from 'chai-http';

import middleware from '../../middleware/businessMiddleware';

chai.use(chaiHttp);
const { expect } = chai;


describe('Test register business function', () => {
  it('should return a function', () => {
    expect(middleware.registerBusiness).to.be.a('function');
  });

  it('should accept three arguments', () => {
    expect(middleware.registerBusiness.length).to.equal(3);
  });
});

describe('Test add review function', () => {
  it('should return a function', () => {
    expect(middleware.addReview).to.be.a('function');
  });

  it('should accept three arguments', () => {
    expect(middleware.addReview.length).to.equal(3);
  });
});

describe('Test remove business function', () => {
  it('should return a function', () => {
    expect(middleware.removeBusiness).to.be.a('function');
  });

  it('should accept three arguments', () => {
    expect(middleware.removeBusiness.length).to.equal(3);
  });
});

describe('Test remove business function', () => {
  it('should return a function', () => {
    expect(middleware.queryBusinessByLocation).to.be.a('function');
  });

  it('should accept three arguments', () => {
    expect(middleware.queryBusinessByLocation.length).to.equal(3);
  });
});

describe('Test remove business function', () => {
  it('should return a function', () => {
    expect(middleware.queryBusinessByCategory).to.be.a('function');
  });

  it('should accept three arguments', () => {
    expect(middleware.queryBusinessByCategory.length).to.equal(3);
  });
});
