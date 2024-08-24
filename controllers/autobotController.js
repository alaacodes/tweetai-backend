const { Autobot, Post, Comment } = require('../models');

// Controller to fetch Autobots
const getAutobots = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const autobots = await Autobot.findAll({ limit, offset });
    res.json(autobots);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching autobots' });
  }
};

// Controller to fetch Posts for a specific Autobot
const getAutobotPosts = async (req, res) => {
  const { id } = req.params;
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const posts = await Post.findAll({ where: { AutobotId: id }, limit, offset });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
};

// Controller to fetch Comments for a specific Post
const getPostComments = async (req, res) => {
  const { id } = req.params;
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const comments = await Comment.findAll({ where: { PostId: id }, limit, offset });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comments' });
  }
};

module.exports = {
  getAutobots,
  getAutobotPosts,
  getPostComments,
};
