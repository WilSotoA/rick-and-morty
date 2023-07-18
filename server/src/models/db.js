const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()
const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_DB, POSTGRES_PORT, DATABASE_URL } = process.env;
const sequelize = new Sequelize(
    // `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`,
    'postgres://user:PJly0RDfPPTBN0cWkR2h9EorBkw13zbM@dpg-ciqufblgkuvqadvfc1q0-a/rick_and_morty_1jx1',
    { logging: false }
);

sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /\d/
        }
    }
});
sequelize.define('Favorite', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true 
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    origin: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    species: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING,
    }
});
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: 'UserFavorite' })
Favorite.belongsToMany(User, { through: 'UserFavorite' })

module.exports = {
    User,
    Favorite,
    sequelize
};
