const express = require("express");
const atendimentosController = require("../controllers/atendimentos.controller");
const pacientesController = require("../controllers/pacientes.controller");
const psicologosController = require("../controllers/psicologos.controller");
const authController = require("../controllers/authController");
const loginValidation = require("../validations/auth/login");
const auth = require("../middlewares/auth");
const validateCreatePsicologo = require("../validations/create/create");
const routes = express.Router();

routes.get("/psicologos", psicologosController.list);
routes.get("/psicologos/:id", psicologosController.listId);
routes.post("/psicologos", validateCreatePsicologo, psicologosController.create);
routes.put("/psicologos/:id", psicologosController.update);
routes.delete("/psicologos/:id", psicologosController.delete);

routes.get("/pacientes", pacientesController.list);
routes.get("/pacientes/:id", pacientesController.listId);
routes.post("/pacientes", pacientesController.create);
routes.put("/pacientes/:id", pacientesController.update);
routes.delete("/pacientes/:id", pacientesController.delete);

routes.get("/atendimentos", atendimentosController.list);
routes.get("/atendimentos/:id", atendimentosController.listId);
routes.post("/atendimentos", auth, atendimentosController.create);

routes.post("/login", loginValidation, authController.login);

module.exports = routes;