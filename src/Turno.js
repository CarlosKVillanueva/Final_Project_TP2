import { EstadoTurno } from "./EstadoTurno.js"

export default class Turno {
    #mascota
    #familiar
    #estado

    constructor() {
        this.estado = EstadoTurno.LIBRE
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

    get estado() {
        return this.#estado
    }

    set estado( value ) {
        this.#estado = value
    }

    cambiarEstadoTurno( value ) {
        if (this.#estado === value) {
            throw new Error('No se puede cambiar de estado al mismo estado')
        }
        this.#estado = value
    }

    tomarTurno( mascota, familiar ) {
        this.#mascota = mascota
        this.familiar = familiar
        this.#estado = EstadoTurno.RESERVADO
    }
    cancelarTurno() {
        this.#mascota = undefined
        this.#familiar = undefined
        this.estado = EstadoTurno.LIBRE
    }
}
