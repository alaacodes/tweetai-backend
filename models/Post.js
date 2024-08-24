module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
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
                model: 'Autobots',
                key: 'id',
            },
        },
    }, {
        tableName: 'Posts',
        underscored: true,
    });

    return Post;
};
