import { EstadoTurno } from "./EstadoTurno.js"

export default class Turno {
    #mascota
    #familiar
    #estado

    constructor( mascota, familiar ) {
        this.#mascota = mascota
        this.#familiar = familiar
        this.#estado = EstadoTurno.LIBRE
    }
}