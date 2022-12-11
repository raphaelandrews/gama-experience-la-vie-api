const db = require("../database/connection");
const { DataTypes } = require("sequelize");

const PsicologosModel = db.define(
    "Psicologos",
    {
        psicologo_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        apresentacao: {
            type: DataTypes.STRING,
        },
        senha: {
            type: DataTypes.STRING,
        },
        create_date: {
            type: DataTypes.DATE,
        },
        update_date: {
            type: DataTypes.DATE,
        },
    },
    {
        tableName: "psicologos",
        timestamps: false,
    }
);

module.exports = PsicologosModel;