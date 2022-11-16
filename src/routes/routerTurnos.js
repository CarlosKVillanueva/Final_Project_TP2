import { Router } from "express";
import {
    controladorGetReservaTurno,
    controladorPostReservaTurno
} from "./controladores.js";

const routerTurno = new Router();

routerTurno.post( "/", controladorPostReservaTurno );
routerTurno.get( "/", controladorGetReservaTurno );

export default routerTurno