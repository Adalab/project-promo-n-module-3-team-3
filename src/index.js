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
  const response = { success: false };

  if (req.body.name === "") {
    response.error = "Debe indicar su nombre";
  } else if (req.body.job === "") {
    response.error = "Debe indicar su puesto";
  } else if (req.body.phone === "") {
    response.error = "Debe indicar su teléfono movil";
  } else if (req.body.email === "") {
    response.error = "Debe indicar su email";
  } else if (req.body.linkedin === "") {
    response.error = "Debe indicar su nick de linkedIn";
  } else if (req.body.github === "") {
    response.error = "Debe indicar su nick de GitHub";
  } else {
    response.cardURL = "Esta la url de tu tarjeta";
    response.success = true;
  }
  res.json(response);
});

/* server.get('/card', (req, res) =>{
return console.log('adiós');

}) */

const staticServerPathWeb = "./public"; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathWeb));

// Endpoint para gestionar los errores 404
server.get("*", (req, res) => {
  // Relativo a este directorio
  const notFoundFileRelativePath = "../web/404-not-found.html";
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
