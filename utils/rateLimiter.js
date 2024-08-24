const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: parseInt(process.env.API_RATE_LIMIT),
    message: 'Too many requests from this IP, please try again after a minute',
});

module.exports = apiLimiter;
