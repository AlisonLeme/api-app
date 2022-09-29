const express = require("express");
//const cors = require("cors");

const routes = require("./routes");
const db = require("./database");

const app = express();

// conexão com o banco de dados
db.connect();

// habilita CORS para todos
//app.use(cors());

// habilita server para receber dados json
app.use(express.json());

// Definindo as rotas
app.use("/api", routes);

// EXECUTANDO O SERVIDOR
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server in listen on port ${port}`));
