import Turno from "./Turno.js"
import Mascota from "./Mascota.js"
import Familiar from "./Familiar.js"

const CANTIDAD_TURNOS = 24
const mascota = new Mascota( '', '', '', '', 0, 0 )
const familiar = new Familiar( '', '', '', '', '', '' )

export default class Fecha {
    #dia
    #mes
    #anio
    #cantidadTurnos

    constructor( { dia, mes, anio } ) {
        this.#dia = dia
        this.#mes = mes
        this.#anio = anio
        this.generarTurnos()
    }


    generarTurnos() {
        for ( let i = 0; i < CANTIDAD_TURNOS; i++ ) {
            this.#cantidadTurnos.push( new Turno( mascota, familiar ) )
        }
    }

    setDia( value ) {
        if ( value < 1 && value > 31 ) throw new Error( 'El dia ingresado es invalido' )
        this.#dia = value
    }
}
