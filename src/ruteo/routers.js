import { Router } from "express";
import {
    controladorGetReservaTurno,
    controladorPostReservaTurno,
    controladorPostFamiliares,
    controladorGetFamiliares,
    controladorPostMascotas,
    controladorGetMascotas,
} from "./controladores.js";

const router = new Router();

router.post("/", controladorPostReservaTurno);
router.get("/", controladorGetReservaTurno);

router.post("/", controladorPostFamiliares);
router.get("/", controladorGetFamiliares);

router.post("/", controladorPostMascotas);
router.get("/", controladorGetMascotas);

export default router;
