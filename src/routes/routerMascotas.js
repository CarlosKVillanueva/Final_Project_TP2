import { Router } from "express";
import {
    controladorPostMascotas,
    controladorGetMascotas,
    controladorDeleteMascotas,
} from "./controladores.js";

const routerMascotas = new Router();

routerMascotas.post("/", controladorPostMascotas);
routerMascotas.get("/", controladorGetMascotas);
routerMascotas.delete("/", controladorDeleteMascotas);


export default routerMascotas;