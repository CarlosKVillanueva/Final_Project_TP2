import { Router } from "express";
import {
    controladorPostFamiliares,
    controladorGetFamiliares
} from "./controladores.js";

const routerFamiliares = new Router();


routerFamiliares.post("/", controladorPostFamiliares);
routerFamiliares.get( "/", controladorGetFamiliares );

export default routerFamiliares