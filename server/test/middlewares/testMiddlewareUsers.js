import chai from 'chai';

import chaiHttp from 'chai-http';

import middleware from '../../middleware/userMiddleware';

chai.use(chaiHttp);

const { expect } = chai;


describe('signup tests', () => {
  it('should return a function', () => {
    expect(middleware.signUp).to.be.a('function');
  });

  it('should accept three arguments', () => {
    expect(middleware.signUp.length).to.equal(3);
  });
});

describe('login tests', () => {
  it('should return a function', () => {
    expect(middleware.login).to.be.a('function');
  });

  it('should accept three arguments', () => {
    expect(middleware.login.length).to.equal(3);
  });
});
