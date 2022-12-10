const db = require("../database/connection");
const { DataTypes } = require("sequelize");

const AtendimentosModel = db.define(
    "Atendimentos",
    {
        id_atendimento: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        data_atendimento: {
            type: DataTypes.DATE,
        },
        observacao: {
            type: DataTypes.TEXT,
        },
        create_date: {
            type: DataTypes.DATE,
        },
        update_date: {
            type: DataTypes.DATE,
        },
        id_paciente: {
            type: DataTypes.INTEGER,
        },
        id_psicologo: {
            type: DataTypes.INTEGER,
        },
    },
    {
        tableName: "atendimentos",
        timestamps: false,
    }
);

module.exports = AtendimentosModel;