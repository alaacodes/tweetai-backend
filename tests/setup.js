const { sequelize } = require('../models');

// Before all tests, sync the database
beforeAll(async () => {
    await sequelize.sync({ force: true }); // Creates fresh database schema for testing
});

// After all tests, close the database connection
afterAll(async () => {
    await sequelize.close();
});
