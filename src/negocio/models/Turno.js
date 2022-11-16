import { esFamiliarValido, esFechaValida, esHoraValida, esMascotaValida, requerido } from "../helpers/helpers.js"

export default class Turno {
    #fecha
    #hora
    #mascota
    #familiar

    // ? EL CONSTRUCTOR DE TURNO RECIBE UN TURNO ARMADO?
    constructor( { fecha, hora, mascota, familiar } ) {
        this.fecha = requerido( fecha )
        this.hora = requerido( hora )
        this.mascota = requerido(mascota)
        this.familiar = requerido(familiar)
    }

    get mascota() {
        return this.#mascota
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


    // TODO es necesaria la validacion? teniendo la del modelo?
    set mascota( mascota ) {
        if ( !esMascotaValida( mascota ) ) {
            throw new Error( 'La mascota es Invalida' )
        }
        this.#mascota = mascota
    }

    // TODO idem
    set familiar( familiar ) {
        if ( !esFamiliarValido( familiar ) ) {
            throw new Error( 'El familiar es invalido' )
        }
        this.#familiar = familiar
    }

    set hora( value ) {
        if ( !esHoraValida( value ) ) {
            throw new Error( 'Horario fuera de trabajo' )
        }
        this.#hora = value
    }

    asDto() {
        return Object.freeze( {
            fecha: this.fecha,
            hora: this.hora,
            mascota: this.mascota,
            familiar: this.familiar,
        } )
    }
}
