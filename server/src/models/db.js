const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()
const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_DB, POSTGRES_PORT } = process.env;
const sequelize = new Sequelize(
    `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`,
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
        validate: {
            isEmail: true
        },
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            is: /\d/
        }
    }
});
sequelize.define('Favorite', {
    name: {
        type: DataTypes.STRING,
    },
    origin: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.TEXT,
    },
    species: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING,
    }
});
const { User, Favorite } = sequelize.models;


module.exports = {
    User,
    Favorite,
    sequelize
};
