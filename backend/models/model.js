const { DataTypes } = require('sequelize');
const db = require('../database/db');


const tablaarticulos = db.define('tablaarticulos', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    articulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    agrupacion: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
});

module.exports = {
    tablaarticulos,
    sequelize: db
};
