const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
});

const Autobot = require('./Autobot')(sequelize, DataTypes);
const Post = require('./Post')(sequelize, DataTypes);
const Comment = require('./Comment')(sequelize, DataTypes);

// Define associations
Autobot.associate = (models) => {
    Autobot.hasMany(models.Post, { foreignKey: 'AutobotId', onDelete: 'CASCADE' });
};

Post.associate = (models) => {
    Post.belongsTo(models.Autobot, { foreignKey: 'AutobotId', onDelete: 'CASCADE' });
    Post.hasMany(models.Comment, { foreignKey: 'PostId', onDelete: 'CASCADE' });
};

Comment.associate = (models) => {
    Comment.belongsTo(models.Post, { foreignKey: 'PostId', onDelete: 'CASCADE' });
};

// Call associate functions after defining all models
Autobot.associate({ Post });
Post.associate({ Autobot, Comment });
Comment.associate({ Post });

module.exports = { sequelize, Autobot, Post, Comment };
