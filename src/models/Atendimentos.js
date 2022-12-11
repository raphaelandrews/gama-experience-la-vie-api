const db = require("../database/connection");
const { DataTypes } = require("sequelize");
const PsicologosModel = require("./Psicologos");
const PacientesModel = require("./Pacientes");

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
            references: {
                model: PacientesModel,
                key: "paciente_id",
            },
        },
        id_psicologo: {
            type: DataTypes.INTEGER,
            references: {
                model: PsicologosModel,
                key: "psicologo_id",
            },
        },
    },
    {
        tableName: "atendimentos",
        timestamps: false,
    }
);

module.exports = AtendimentosModel;