const { check, validationResult } = require('express-validator');

// Validation middleware example
const validateAutobotRequest = [
    check('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

module.exports = { validateAutobotRequest };
