import Veterinaria from "../negocio/Veterinaria.js"
const veterinaria = new Veterinaria()

export async function controladorPostReservaTurno(req, res, next) {
    try {
        const dtosTurnoReservado = await veterinaria.sacarTurno(req.body)
        res.json(dtosTurnoReservado)
    } catch (e){
        next(e)
    } 
}

export async function controladorGetReservaTurno(req, res, next){
    try {
	    const dtosTurnos = await veterinaria.listarTurnos()
        res.json(dtosTurnos)
    } catch (e) {
        next(e)
	}
}

export async function controladorPostMascotas(req, res, next) {
    try {
        const dtosMascotasReservado = await veterinaria.registrarMascota(req.body)
        res.json(dtosMascotasReservado)
    } catch (e){
        next(e)
    } 
}

export async function controladorGetMascotas(req, res, next){
    try {
	    const dtosMascotas = await veterinaria.listarMascotas()
        res.json(dtosMascotas)
    } catch (e) {
        next(e)
	}
}

export async function controladorPostFamiliares(req, res, next) {
    try {
        const dtoFamiliarCreado = await veterinaria.registrarFamiliar(req.body)
        res.json(dtoFamiliarCreado)
    } catch (error) {
        next(error)
    }
}

export async function controladorGetFamiliares(req, res, next) {
    try {
        const dtosFamiliar = await veterinaria.listarFamiliares()
        res.json(dtosFamiliar)
    } catch (error) {
        next(error)
    }
}
