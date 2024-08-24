const express = require('express');
const rateLimit = require('express-rate-limit');
const {
    getAutobots,
    getAutobotPosts,
    getPostComments,
} = require('../controllers/autobotController');

const router = express.Router();

// Rate Limiting Middleware
const apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: parseInt(process.env.API_RATE_LIMIT),
    message: 'Too many requests from this IP, please try again after a minute',
});

// Routes
router.get('/autobots', apiLimiter, getAutobots);
router.get('/autobots/:id/posts', apiLimiter, getAutobotPosts);
router.get('/posts/:id/comments', apiLimiter, getPostComments);

module.exports = router;
