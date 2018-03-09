import express from 'express';

import Users from '../controllers/users';

import Businesses from '../controllers/businesses';

const router = express.Router();


// homepage route
router.get('/api/v1', (req, res) => res.json({
  message: 'Welcome to WeConnect'
}));

// signup page route
router.post('/api/v1/auth/signup', Users.signUp);

// login route
router.post('/api/v1/auth/login', Users.login);

// register a business page route
router.post('/api/v1/businesses', Businesses.registerBusiness);

// update a business profile route
router.put('/api/v1/businesses/:businessid', Businesses.updateBusinessProfile);

// remove a business profile route
router.delete('/api/v1/businesses/:businessid', Businesses.removeBusiness);

// get business route
router.get('/api/v1/businesses/:businessid', Businesses.getBusiness);

// get all businesses route
router.get('/api/v1/businesses', Businesses.getAllBusiness);

// get add review route
router.post('/api/v1/businesses/:businessid/reviews', Businesses.addReview);


// get all route
router.get('*', (req, res) => res.status(404).json({
  message: 'Resource not found'
}));

export default router;

