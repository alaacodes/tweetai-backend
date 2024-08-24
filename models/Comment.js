module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        PostId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Post',
                key: 'id',
            },
        },
    });

    return Comment;
};
