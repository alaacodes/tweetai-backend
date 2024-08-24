const axios = require('axios');
const { Autobot, Post, Comment } = require('../models');
const createAutobots = require('../services/createAutobots');

jest.mock('axios');

describe('createAutobots Service', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear any mocks before each test
    });

    test('should create 500 Autobots, each with 10 posts and each post with 10 comments', async () => {
        // Mock API responses
        axios.get.mockImplementation((url) => {
            if (url.includes('users')) {
                return Promise.resolve({ data: generateMockUsers(500) });
            } else if (url.includes('posts')) {
                return Promise.resolve({ data: generateMockPosts(10) });
            } else if (url.includes('comments')) {
                return Promise.resolve({ data: generateMockComments(10) });
            }
        });

        await createAutobots(); // Run the function to test

        // Check that the correct number of Autobots, Posts, and Comments were created
        const autobotCount = await Autobot.count();
        expect(autobotCount).toBe(500);

        const postCount = await Post.count();
        expect(postCount).toBe(5000); // 500 autobots * 10 posts each

        const commentCount = await Comment.count();
        expect(commentCount).toBe(50000); // 5000 posts * 10 comments each
    });
});

// Helper functions to generate mock data
function generateMockUsers(count) {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        username: `user${i + 1}`,
        email: `user${i + 1}@example.com`,
    }));
}

function generateMockPosts(count) {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        title: `Post ${i + 1}`,
        body: `This is the body of post ${i + 1}.`,
    }));
}

function generateMockComments(count) {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        body: `This is the body of comment ${i + 1}.`,
    }));
}
