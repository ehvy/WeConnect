import express from 'express';

import Users from '../controllers/users';

const router = express.Router();


// homepage route
router.get('/api/v1', (req, res) => res.json({
  message: 'Welcome to WeConnect'
}));

// signup page route
router.post('/api/v1/auth/signup', Users.signUp);

// login route
router.post('/api/v1/auth/login', Users.login);

// get all route
router.get('*', (req, res) => res.status(404).json({
  message: 'Resource not found'
}));

export default router;

