import { EstadoTurno } from "./EstadoTurno.js"

const HORARIO_CIERRE = 18

export default class Fecha {

    #idDia
    #dia
    #mes
    #anio
    #horas


    constructor( { dia, mes, anio } ) {
        this.#dia = dia
        this.#mes = mes
        this.#anio = anio
        this.#idDia = `${ dia }-${ mes }-${ anio }`
    }

    get idDia() {
        return this.#idDia
    }

    get dia() {
        return this.#dia
    }

    set dia( value ) {
        if ( !Number.isInteger( value ) && (value <= 1 && value >= 31) ) {
            throw new Error( "El dia ingresado es invalido" )
        }
        this.#dia = value
    }

    get mes() {
        return this.#mes
    }

    set mes( value ) {
        this.#mes = value
    }

    get anio() {
        return this.#anio
    }

    set anio( value ) {
        this.#anio = value
    }

    horarioDisponible( hora ) {
        return this.#turnos[ hora ].estado === EstadoTurno.LIBRE
    }

    asignarTurno( hora, mascota, familiar ) {
        this.#turnos[ hora ].tomarTurno( mascota, familiar )
    }

    cancelarTurno( hora ) {
        this.#turnos[ hora ].cancelarTurno()
    }

    esReservado( hora ) {
        return this.#turnos[ hora ] !== undefined
    }

    obtenerTurnos() {
        return this.#turnos.filter( t => t.estado === EstadoTurno.LIBRE )
    }

}
