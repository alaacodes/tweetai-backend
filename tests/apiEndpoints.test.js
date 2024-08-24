const request = require('supertest');
const app = require('../app'); // Path to your Express app

describe('API Endpoints', () => {
    it('GET /api/autobots - should return paginated list of autobots', async () => {
        const res = await request(app).get('/api/autobots').query({ page: 1 });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(10); // Assuming default pagination size is 10
    });

    it('GET /api/autobots/:id/posts - should return posts for a specific autobot', async () => {
        const autobotId = 1; // Example autobot ID
        const res = await request(app).get(`/api/autobots/${autobotId}/posts`).query({ page: 1 });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(10); // Assuming 10 posts per autobot
    });

    it('GET /api/posts/:id/comments - should return comments for a specific post', async () => {
        const postId = 1; // Example post ID
        const res = await request(app).get(`/api/posts/${postId}/comments`).query({ page: 1 });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(10); // Assuming 10 comments per post
    });
});
