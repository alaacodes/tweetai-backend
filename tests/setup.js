const { sequelize } = require('../models');

// Before all tests, sync the database
beforeAll(async () => {
    try {
        // Sync database schema; force: true drops existing tables and recreates them
        await sequelize.sync({ force: true });
        console.log('Database synced successfully for testing.');
    } catch (error) {
        console.error('Error syncing the database for tests:', error);
        throw error; // Re-throw error to ensure tests do not proceed if setup fails
    }
});

// After all tests, close the database connection
afterAll(async () => {
    try {
        await sequelize.close();
        console.log('Database connection closed after testing.');
    } catch (error) {
        console.error('Error closing the database connection:', error);
    }
});
