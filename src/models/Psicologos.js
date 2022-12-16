const db = require("../database/connection");
const { DataTypes } = require("sequelize");

const PsicologosModel = db.define(
    "Psicologos",
    {
        psicologo_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        apresentacao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "psicologos",
        timestamps: false,
    }
);

module.exports = PsicologosModel;