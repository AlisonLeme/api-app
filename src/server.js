const express = require("express");

const routes = require("./routes");

const app = express();


// Definindo as rotas
app.use("/api", routes);

// EXECUTANDO O SERVIDOR
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server in listen on port ${port}`));
