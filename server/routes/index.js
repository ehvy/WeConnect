import express from 'express';


const router = express.Router();


// homepage route
router.get('/api/v1', (req, res) => res.json({
  message: 'Welcome to WeConnect'
}));

export default router;
