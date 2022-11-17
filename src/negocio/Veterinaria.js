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

    async sacarTurno( { fecha, hora, mascota, familiar } ) {

        let familiarBuscado = await this.#registroFamiliares.buscarPorDni( familiar.dni )
        if ( !familiarBuscado ) {
            familiarBuscado = new Familiar( familiar )
            await this.#registroFamiliares.registrar( familiarBuscado.asDto() )
        }

        let mascotaBuscada = await this.#registroMascotas.buscarPorId( mascota.id )

        if ( !mascotaBuscada ) {
            mascotaBuscada = new Mascota( mascota )
            await this.#registroMascotas.registrar( mascotaBuscada.asDto() )
        }

        if ( !esFechaValida( fecha ) ) {
            throw new Error( `La fecha: ${ fecha } es invalida` )
        }
        if ( !esHoraValida( hora ) ) {
            throw new Error( `La hora: ${ hora } es invalida` )
        }

        let turnoBuscado = await this.#turnera.buscarTurno( fecha, hora )

        if ( turnoBuscado ) {
            throw new Error( `No contamos con un turno disponible el ${ fecha } a las ${ hora } hs.` )
        }
        if (!familiarBuscado) {
            throw new Error("Familiar inexistente")
        }
        if ( !mascotaBuscada ) {
            throw new Error("Mascota inexistente")    
        }
        let dtoMascotaBuscada = mascotaBuscada.asDto()
        let dtoFamiliarBuscado = familiarBuscado.asDto()
        await this.#turnera.asignarTurno( new Turno( { fecha, hora, dtoMascotaBuscada, dtoFamiliarBuscado } ) )
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
        return await this.#registroFamiliares.listarTodas()
    }
    async registrarFamiliar( familiar ) {
        await this.#registroFamiliares.registrar( familiar )
    }
    async modificarDatosFamiliar( familiar ) {
        await this.#registroFamiliares.modificarDatos( familiar )
    }

    async eliminarRegistroFamiliar( familiar  ) {
        await this.#registroFamiliares.eliminarRegistro( familiar )
    }


}


