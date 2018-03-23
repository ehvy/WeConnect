import express from 'express';

import Users from '../controllers/users';
import Businesses from '../controllers/businesses';
import Reviews from '../controllers/reviews';
import validateUser from '../middleware/userMiddleware';
import validateBusiness from '../middleware/businessMiddleware';
import validateRoute from '../middleware/secureRoute';

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
router.post('/api/v1/businesses', validateBusiness.registerBusiness, validateRoute.secureBusinessRoute, Businesses.registerBusiness);

// update business profile route
router.put('/api/v1/businesses/:businessId', validateBusiness.registerBusiness, validateRoute.secureBusinessRoute, Businesses.updateBusinessProfile);

// remove a business profile route
router.delete('/api/v1/businesses/:businessId', validateBusiness.secureRoute, validateRoute.secureBusinessRoute, Businesses.removeBusiness);

// get business route
router.get('/api/v1/businesses/:businessId', Businesses.getBusiness);

// get all businesses route
router.get('/api/v1/businesses', validateBusiness.getBusinessByLocationOrCategory, Businesses.getAllBusiness);

// add review route
router.post('/api/v1/businesses/:businessId/reviews', validateRoute.secureBusinessRoute, Reviews.addReview);

// get all business review route
router.get('/api/v1/businesses/:businessId/reviews', Reviews.getAllReviews);

// get all route
router.all('*', (req, res) => res.status(404).json({
  message: 'Resource not found'
}));

export default router;
