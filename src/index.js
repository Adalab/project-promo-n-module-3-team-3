const express = require("express");
const cors = require("cors");
const Database = require ('better-sqlite3');
const path =require ('path');

//Crear el servidor
const server = express();

//Configurar el servidor
server.use(cors());
server.use(express.json());
  // motor de plantillas
server.set('view engine' , 'ejs');

server.use(express.json({limit: '10mb'}));
const db = new Database('./src/db/cards.db', {  
  // this line log in console all data base queries  
  verbose: console.log});



//Iniciar el servidor
const serverPort = 4000;
server.listen(serverPort, () =>
  console.log(`Server listening at http://localhost:${serverPort}`)
);

const staticServerPathWeb = "./public"; 
// En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathWeb));


const staticServerStylesCss = "./src/public-css"; 
// En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerStylesCss));
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

 server.get('/cards/:id', (req, res) =>{
  const query = db.prepare('SELECT * FROM card WHERE id = ?');
  const data = query.get(req.params.id);
  console.log(data);
  
  if(data !== undefined){
    res.render ('card', data);
  }else{
    res.json({error: "error undefined"});
  }
  
 }) 




// Endpoint para gestionar los errores 404
server.get("*", (req, res) => {
  // Relativo a este directorio
  const notFoundFileRelativePath = "./404-not-found.html";
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
