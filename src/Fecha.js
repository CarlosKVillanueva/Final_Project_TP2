import Turno from "./Turno.js"
import Mascota from "./Mascota.js"
import Familiar from "./Familiar.js"
import { EstadoTurno } from "./EstadoTurno.js"

const CANTIDAD_TURNOS = 24
const mascota = new Mascota( '', '', '', '', 0, 0 )
const familiar = new Familiar( '', '', '', '', '', '' )

export default class Fecha {
    #idDia
    #dia
    #mes
    #anio
    #turnos

    constructor( { dia, mes, anio } ) {
        this.#dia = dia
        this.#mes = mes
        this.#anio = anio
        this.#idDia = `${ dia }-${ mes }-${ anio }`
        this.generarTurnos()
    }

    get idDia() {
        return this.#idDia
    }

    horarioDisponible( hora ) {
        return this.#turnos[ hora ].estado === EstadoTurno.LIBRE
    }

    generarTurnos() {
        for ( let i = 0; i < CANTIDAD_TURNOS; i++ ) {
            this.#turnos.push( new Turno( mascota, familiar ) )
        }
    }

    asignarTurno( hora, mascota, familiar ) {
        this.#turnos[ hora ].estado = EstadoTurno.RESERVADO
        this.#turnos[ hora ].mascota( mascota )
        this.#turnos[ hora ].familiar( familiar )
    }
}
