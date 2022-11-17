import Mascota from "./models/Mascota.js"
import Familiar from "./models/Familiar.js"
import RegistroMascotas from "./registros/RegistroMascotas.js"
import Turnera from "./registros/Turnera.js"
import RegistroFamiliares from "./registros/RegistroFamiliares.js"
import { esFechaValida, esHoraValida } from "./helpers/helpers.js"
import Turno from "./models/Turno.js"

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

    async sacarTurno( { fecha, hora, id, dni } ) {

        let familiar = await this.#registroFamiliares.buscarPorDni( dni )
        let mascota = await this.#registroMascotas.buscarPorId( id )

        if ( !esFechaValida( fecha ) ) {
            throw new Error( `La fecha: ${ fecha } es invalida` )
        }
        if ( !esHoraValida( hora ) ) {
            throw new Error( `La hora: ${ hora } es invalida` )
        }

        if ( await this.#turnera.existeTurno( fecha, hora ) ) {
            throw new Error (' El turno se encuentra reservado, elija otra fecha')
        }

        await this.#turnera.asignarTurno( new Turno( { fecha, hora, mascota, familiar } ) )
    }

    async listarTurnos() {
        return await this.#turnera.listarTurnos()
    }

    async cancelarTurno( fecha, hora ) {
        try {
            if ( await this.#turnera.existeTurno( fecha, hora ) ) {
                await this.#turnera.cancelarTurno( fecha, hora )
            }
        } catch ( e ) {

        }
    }

    // ------------    CRUD MASCOTAS     ------------- //

    async listarMascotas() {
        return await this.#registroMascotas.listarTodas()
    }

    async registrarMascota( mascota ) {
        await this.#registroMascotas.registrar( mascota )
    }

    async modificarDatosDeLaMascota( mascota ) {
        await this.#registroMascotas.modificarDatos( mascota )
    }

    async eliminarRegistroMascota( id ) {
        await this.#registroMascotas.eliminarMascota( id )
    }

    // ------------    CRUD FAMILIARES     ------------- //

    async listarFamiliares() {
        return await this.#registroFamiliares.listarTodas()
    }

    async registrarFamiliar( familiar ) {
        await this.#registroFamiliares.registrar( familiar )
    }

    async modificarDatosFamiliar( familiar ) {
        await this.#registroFamiliares.modificarDatos( familiar )
    }

    async eliminarRegistroFamiliar( dni ) {
        await this.#registroFamiliares.eliminarRegistro( dni )
    }


}


