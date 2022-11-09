import Mascota from "./Mascota.js"
import Familiar from "./Familiar.js"
import RegistroMascotas from "./RegistroMascotas.js"
import Turnera from "./Turnera.js"
import RegistroFamiliares from "./RegistroFamiliares.js"
import { esFamiliarValido, esFechaValida, esHoraValida, esMascotaValida, validadorDni, validadorNumerico } from "../helpers/helpers.js"
import Turno from "./Turno.js"

export default class Veterinaria {
    #nombre
    #registroFamiliares
    #registroMascotas
    #turnera

    constructor( nombre ) {
        this.#nombre = nombre
        this.#registroMascotas = new RegistroMascotas()
        this.#registroFamiliares = new RegistroFamiliares()
        this.#turnera = new Turnera()
    }

    async sacarTurno( fecha, hora, mascota, familiar ) {

        let familiarBuscado = await this.#registroFamiliares.buscarPorDni( familiar )
        if ( !familiarBuscado ) {
            familiarBuscado = new Familiar( familiar )
            await this.#registroFamiliares.registrar( familiarBuscado )
        }

        const nombreMascota = mascota.nombre
        const idMascota = `${ familiarBuscado.dni }-${ nombreMascota }`
        let mascotaBuscada = await this.#registroMascotas.buscarPorId( idMascota )

        if ( !mascotaBuscada ) {
            mascotaBuscada = new Mascota( mascota )
            await this.#registroMascotas.registrar( mascotaBuscada )
            await familiar.asignarMascota( mascotaBuscada )
        }

        if ( !esFechaValida( fecha ) )
            throw new Error( `La fecha: ${ fecha } es invalida` )

        if ( !esHoraValida( hora ) )
            throw new Error( `La hora: ${ hora } es invalida` )

        if ( await this.#turnera.buscarTurno( fecha, hora ) ) {
            throw new Error( `No contamos con un turno disponible el ${ fecha } a las ${ hora } hs.` )
        }
        await this.#turnera.asignarTurno( new Turno ( fecha, hora, mascota, familiar ) )
    }

    async cancelarTurno( fecha, hora ) {
        if ( !esFechaValida( fecha ) )
            throw new Error( `La fecha: ${ fecha } es invalida` )

        if ( !esHoraValida( hora ) )
            throw new Error( `La hora: ${ hora } es invalida` )
        await this.#turnera.cancelarTurno( fecha, hora )
    }

    async eliminarRegistroMascota( { id } ) {
        if ( await this.#registroMascotas.buscarPorId( id ) ) {
            await this.#registroMascotas.eliminarMascota( id )
        }
    }

    async modificarDatosDeLaMascota( mascota ) {
        //TODO es valido?
        if ( !esMascotaValida( mascota ) ) {
            throw new Error('La mascota ingresada es invalida')
        }
        await this.#registroMascotas.modificarDatos( mascota )
    }

    async modificarDatosDelFamiliar( familiar ) {
        //TODO Validador Familiar?
        if ( !esFamiliarValido( familiar ) ) {
            throw new Error('La mascota ingresada es invalida')
        }
        await this.#registroFamiliares.modificarDatos( familiar )
    }

    async eliminarRegistroFamiliar( { dni } ) {
        if ( validadorDni( dni ) ) {
            throw new Error( 'Dni invalido, solo disponible ente 7 y 8 caracteres' )
        }

        if ( await this.#registroFamiliares.buscarPorDni( dni ) ) {
            await this.#registroFamiliares.eliminarRegistro( dni )
        }
    }
}


