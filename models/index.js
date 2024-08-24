const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
});

// Import models
const Autobot = require('./Autobot')(sequelize, Sequelize.DataTypes);
const Post = require('./Post')(sequelize, Sequelize.DataTypes);
const Comment = require('./Comment')(sequelize, Sequelize.DataTypes);

// Define associations
Autobot.hasMany(Post, { onDelete: 'CASCADE' });
Post.belongsTo(Autobot);
Post.hasMany(Comment, { onDelete: 'CASCADE' });
Comment.belongsTo(Post);

// Sync models with the database
sequelize.sync({ force: false }) // Set to `false` for production use
    .then(() => console.log('Database & tables created!'))
    .catch(error => console.error('Unable to create tables:', error));

module.exports = { sequelize, Autobot, Post, Comment };
