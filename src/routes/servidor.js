import express from "express";
import { clasificarUsuarios } from "./middlewares.js";
// import multer from "multer";
import routerTurnos from "./routers.js";
import routerFamiliares from "./routers.js";
import routerMascotas from "./routers.js";

const app = express();
app.use( express.json() );

app.use( clasificarUsuarios );
app.use( "/api/turnos", routerTurnos );
app.use( "/api/familiares", routerFamiliares );
app.use( "/api/mascotas", routerMascotas );

/*
const upload = multer({ dest: "images" });
app.post("/imagenes", upload.single("imagen"), (req, res) => {
    res.send(req.file);
});
*/
const puerto = 8080;
const server = app.listen( puerto, () => {
    console.log( "Servidor funcionando." );
} );
