const express = require('express');
const routes = require("./routes");
const db = require("./database/connection");

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3000, () => {
  console.log("🚀 Servidor rodando na porta 3000");

  db.hasConnection();
});
