const express = require("express");
const cors = require("cors");

//Crear el servidor
const server = express();

//Configurar el servidor
server.use(cors());
server.use(express.json());

//Iniciar el servidor
const serverPort = 4000;
server.listen(serverPort, () =>
  console.log(`Server listening at http://localhost:${serverPort}`)
);

// API CARD

server.post("/card", (req, res) => {
  console.log(req.body.palette);
  if (
    req.body.name !== "" &&
    req.body.job !== "" &&
    req.body.phone !== "" &&
    req.body.email !== "" &&
    req.body.linkedin !== "" &&
    req.body.github !== ""
  ) {
    res.json({
      cardUrl: "rutadelacarta",
    });
  } else {
    res.sendStatus(404);
  }
});

/* server.get('/card', (req, res) =>{
return console.log('adiós');

}) */

const staticServerPathWeb = "./public"; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathWeb));
