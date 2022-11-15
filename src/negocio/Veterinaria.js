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
        const turno = { fecha, hora, mascota, familiar }
        await this.#turnera.asignarTurno( new Turno( turno ) )
    }

    async listarTurnos() {
        return await this.#turnera.listarTurnos()
    }

    async cancelarTurno( fecha, hora ) {
        try {
            if ( !await this.#turnera.buscarTurno( fecha, hora ) ) {
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

    async eliminarRegistroMascota( mascota ) {
        await this.#registroMascotas.eliminarMascota( mascota )
    }

    // ------------    CRUD FAMILIARES     ------------- //

    async listarFamiliares() {
        return await this.#registroMascotas.listarTodas()
    }
    async registrarFamiliar( familiar ) {
        await this.#registroFamiliares.registrar( familiar )
    }
    async modificarDatosFamiliar( familiar ) {
        await this.#registroFamiliares.modificarDatos( familiar )
    }

    async eliminarRegistroFamiliar( { dni } ) {
        await this.#registroFamiliares.eliminarRegistro( dni )
    }


}


