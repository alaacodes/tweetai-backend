const axios = require('axios');
const { Autobot, Post, Comment } = require('../models');

async function createAutobots() {
    try {
        // Fetch Autobots from JSONPlaceholder
        const { data: autobots } = await axios.get('https://jsonplaceholder.typicode.com/users');

        for (let i = 0; i < 500; i++) {
            const autbotData = autobots[i % autobots.length]; 
            const autbot = await Autobot.create({
                name: autbotData.name,
                username: autbotData.username,
                email: autbotData.email,
            });

            // Fetch Posts for Autobot
            const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const uniqueTitles = new Set();

            for (let j = 0; j < 10; j++) {
                let post = posts[j % posts.length];
                // Ensure unique post titles
                while (uniqueTitles.has(post.title)) {
                    post = posts[Math.floor(Math.random() * posts.length)];
                }
                uniqueTitles.add(post.title);

                const newPost = await autbot.createPost({
                    title: post.title,
                    body: post.body,
                });

                // Fetch Comments for Post
                const { data: comments } = await axios.get('https://jsonplaceholder.typicode.com/comments');
                for (let k = 0; k < 10; k++) {
                    const comment = comments[k % comments.length];
                    await newPost.createComment({ body: comment.body });
                }
            }
        }
    } catch (error) {
        console.error('Error creating autobots:', error);
    }
}

// Schedule the function to run every hour
setInterval(createAutobots, 60 * 60 * 1000);

module.exports = createAutobots;
