const { AtendimentosModel, PsicologosModel, PacientesModel } = require("../models");

const atendimentosController = {

    // Listar todos os Atendimentos
    async list(req, res) {
        try {
            const listAtendimentos = await AtendimentosModel.findAll({
                includes: PsicologosModel,
                 PacientesModel,
            });
            return res.status(200).json(listAtendimentos);
        } catch (err) {
            return res.status(500).json("Algo errado aconteceu 🚨");
        }
    },

    // Listar Atendimento por Id
    async listId(req, res) {
        try {
            const { id } = req.params;

            const listAtendimentosId = await AtendimentosModel.findOne({
                where: {
                    id_atendimento: id,
                },
            });

            if(!listAtendimentosId) {
                return res.status(404).json("Id não encontrado")
            };

            return res.status(200).json(listAtendimentosId);
        } catch (error) {
            return res.status(500).json("Algo errado aconteceu 🚨");
        }
    },

    // Criar Atendimento 
    async create(req, res) {
        try {
            const { data_atendimento, observacao, id_paciente, id_psicologo } = req.body;

            const newAtendimento = await AtendimentosModel.create({
                id_paciente,
                id_psicologo,
                data_atendimento,
                observacao,
            });

            return res.status(201).json(newAtendimento);
        } catch (error) {
            console.log(error);
            return res.status(500).json("Algo errado aconteceu 🚨");
        }
    },
}

module.exports = atendimentosController;

