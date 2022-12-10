const express = require("express");
const atendimentosController = require("../controllers/atendimentos.controller");
const pacientesController = require("../controllers/pacientes.controller");

const routes = express.Router();

routes.get("/psicologos");
routes.get("/psicologos:id");
routes.post("/psicologos");
routes.put("/psicologos:id");
routes.delete("/psicologos:id");

routes.get("/pacientes", pacientesController.list);
routes.get("/pacientes/:id", pacientesController.listId);
routes.post("/pacientes", pacientesController.create);
routes.put("/pacientes/:id", pacientesController.update);
routes.delete("/pacientes/:id", pacientesController.delete);

routes.get("/atendimentos", atendimentosController.list);
routes.get("/atendimentos/:id", atendimentosController.listId);
routes.post("/atendimentos", atendimentosController.create);

routes.post("/login");

module.exports = routes;