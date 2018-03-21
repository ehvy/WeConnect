import express from 'express';

import Users from '../controllers/users';
import Businesses from '../controllers/businesses';
import validateUser from '../middleware/userMiddleware';
import validateBusiness from '../middleware/businessMiddleware';

const router = express.Router();

// homepage route
router.get('/api/v1', (req, res) => res.status(200).json({
  message: 'Welcome to WeConnect'
}));

// signup page route
router.post('/api/v1/auth/signup', validateUser.signUp, Users.signup);

// login route
router.post('/api/v1/auth/login', validateUser.login, Users.login);

// register a business page route
router.post('/api/v1/businesses', validateBusiness.registerBusiness, validateBusiness.secureRoute, Businesses.registerBusiness);

// update business profile route
router.put('/api/v1/businesses/:businessId', validateBusiness.registerBusiness, validateBusiness.secureRoute, Businesses.updateBusinessProfile);

// remove a business profile route
router.delete('/api/v1/businesses/:businessId', validateBusiness.secureRoute, Businesses.removeBusiness);

// get business route
router.get('/api/v1/businesses/:businessId', Businesses.getBusiness);

// get all businesses route
router.get('/api/v1/businesses', Businesses.getAllBusiness);

// // add review route
// router.post('/api/v1/businesses/:businessId/reviews', validateBusiness.addReview, Businesses.addReview);

// // get all business review route
// router.get('/api/v1/businesses/:businessId/reviews', Businesses.getAllReviews);

// get all route
router.all('*', (req, res) => res.status(404).json({
  message: 'Resource not found'
}));

export default router;
