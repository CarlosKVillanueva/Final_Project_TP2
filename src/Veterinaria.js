import Mascota from "./negocio/models/Mascota.js"
import Familiar from "./negocio/models/Familiar.js"
import RegistroMascotas from "./negocio/registros/RegistroMascotas.js"
import Turnera from "./negocio/registros/Turnera.js"
import RegistroFamiliares from "./negocio/registros/RegistroFamiliares.js"
import { esFamiliarValido, esFechaValida, esHoraValida, esMascotaValida, validadorDni, validadorNumerico } from "./negocio/helpers/helpers.js"
import Turno from "./negocio/models/Turno.js"

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


