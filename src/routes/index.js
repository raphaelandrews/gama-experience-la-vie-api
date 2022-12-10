const express = require("express");

const routes = express.Router();

routes.get("/psicologos");
routes.get("/psicologos:id");
routes.post("/psicologos");
routes.put("/psicologos:id");
routes.delete("/psicologos:id");

routes.get("/pacientes");
routes.get("/pacientes/:id");
routes.post("/pacientes");
routes.put("/pacientes/:id");
routes.delete("/pacientes/:id");

routes.get("/atendimentos");
routes.get("/atendimentos/:id");
routes.post("/atendimentos");

routes.post("/login");

module.exports = routes;