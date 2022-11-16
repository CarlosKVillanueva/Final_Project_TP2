import { Router } from "express";
import {
    controladorPostMascotas,
    controladorGetMascotas
} from "./controladores.js";

const routerMascotas = new Router();

routerMascotas.post("/", controladorPostMascotas);
routerMascotas.get("/", controladorGetMascotas);

export default routerMascotas;