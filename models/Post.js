module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        AutobotId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Autobot',
                key: 'id',
            },
        },
    });

    return Post;
};
