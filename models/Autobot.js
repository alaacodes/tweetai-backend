module.exports = (sequelize, DataTypes) => {
    const Autobot = sequelize.define('Autobot', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    });

    return Autobot;
};
module.exports = (sequelize, DataTypes) => {
    const Autobot = sequelize.define('Autobot', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    });

    return Autobot;
};
