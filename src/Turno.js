import { EstadoTurno } from "./EstadoTurno.js"

export default class Turno {
    #mascota
    #familiar
    #fecha
    #hora

    constructor( fecha, hora, mascota, familiar ) {
        this.#fecha = fecha
        this.hora = hora
        this.#mascota = mascota
        this.#familiar = familiar
    }

    get mascota() {
        return this.#mascota
    }

    get familiar() {
        return this.#familiar
    }

    set mascota( mascota ) {
        this.#mascota = mascota
    }

    set familiar( familiar ) {
        this.#familiar = familiar
    }

    set hora( value ) {
        if( value < 9 || value > 18) {
            throw new Error('Horario invalido')
        }
        this.#hora = value
    }
}
