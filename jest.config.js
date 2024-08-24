module.exports = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
    modulePathIgnorePatterns: ['<rootDir>/node_modules/'],
    testMatch: ['**/tests/**/*.test.js'],
};
