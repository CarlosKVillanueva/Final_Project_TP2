import { Router } from "express";
import {
    controladorGetReservaTurno,
    controladorPostReservaTurno,
    controladorDeleteReservaTurno
} from "./controladores.js";

const routerTurno = new Router();

routerTurno.post( "/", controladorPostReservaTurno );
routerTurno.get( "/", controladorGetReservaTurno );
routerTurno.delete( "/", controladorDeleteReservaTurno );

export default routerTurno