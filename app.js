const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const autobotRoutes = require('./routes/autobots');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();
const { sequelize } = require('./models');

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Swagger Documentation Setup
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'TweetAI API',
            version: '1.0.0',
            description: 'API Documentation for TweetAI project',
        },
        servers: [{ url: 'http://localhost:5000' }],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// API Routes
app.use('/api', autobotRoutes);

// Error handling middleware (optional, for handling errors gracefully)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('Database connected...');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
});
