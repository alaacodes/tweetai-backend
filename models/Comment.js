module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        PostId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Posts',
                key: 'id',
            },
        },
    }, {
        tableName: 'Comments',
        underscored: true,
    });

    return Comment;
};
