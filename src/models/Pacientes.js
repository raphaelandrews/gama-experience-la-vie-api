const db = require("../database/connection");
const { DataTypes } = require("sequelize");

const PacientesModel = db.define(
    "Pacientes",
    {
        paciente_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        idade: {
            type: DataTypes.DATE,
        },
        create_date: {
            type: DataTypes.DATE,
        },
        update_date: {
            type: DataTypes.DATE,
        },
    },
    {
        tableName: "pacientes",
        timestamps: false,
    }
);

module.exports = PacientesModel;