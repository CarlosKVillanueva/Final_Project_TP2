import { Router } from "express";
import {
    controladorPostFamiliares,
    controladorGetFamiliares,
    controladorDeleteFamiliares
} from "./controladores.js";

const routerFamiliares = new Router();

routerFamiliares.post("/", controladorPostFamiliares);
routerFamiliares.get( "/", controladorGetFamiliares );
routerFamiliares.delete( "/", controladorDeleteFamiliares );


export default routerFamiliares