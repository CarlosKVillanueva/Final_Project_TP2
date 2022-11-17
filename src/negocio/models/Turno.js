import { esFechaValida, esHoraValida, requerido } from "../helpers/helpers.js"

export default class Turno {
    #fecha
    #hora
    #mascota
    #familiar

    constructor( { fecha, hora, mascota, familiar } ) {
        this.fecha = requerido( fecha )
        this.hora = requerido( hora )
        this.mascota = requerido( mascota )
        this.familiar = requerido( familiar )
    }

    get mascota() {
        return this.#mascota
    }

    get hora() {
        return this.#hora
    }

    get familiar() {
        return this.#familiar
    }

    get fecha() {
        return this.#fecha
    }

    set fecha( value ) {
        if ( !esFechaValida( value ) ) {
            throw new Error( 'La fecha es invalida' )
        }
        this.#fecha = value
    }

    set mascota( mascota ) {
        this.#mascota = mascota
    }

    set familiar( familiar ) {
        this.#familiar = familiar
    }

    set hora( value ) {
        this.#hora = value
    }

    asDto() {
        return Object.freeze( {
            fecha: this.fecha,
            hora: this.hora,
            mascota: this.mascota.asDto(),
            familiar: this.familiar.asDto(),
        } )
    }
}
