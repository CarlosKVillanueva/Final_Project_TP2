import Mascota from "./Mascota.js"
import Familiar from "./models/Familiar.js"
import RegistroMascotas from "./registros/RegistroMascotas.js"
import Turnera from "./Turnera.js"
import RegistroFamiliares from "./registros/RegistroFamiliares.js"
import { esFechaValida } from "./helpers/helpers.js"

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

    async sacarTurno( fecha, hora, nombreMascota, dniFamiliar, nombreFamiliar, telefonoFamiliar ) {

        let familiar = this.#registroFamiliares.buscarPorDni( dniFamiliar )
        if ( !familiar ) {
            familiar = new Familiar( { dni: dniFamiliar, nombre: nombreFamiliar, telefono: telefonoFamiliar } )
            this.#registroFamiliares.registrar( familiar )
        }

        const idMascota = `${ dniFamiliar }-${ nombreMascota }`
        let mascota = this.#registroMascotas.buscarPorId( idMascota )

        if ( !mascota ) {
            mascota = new Mascota( { id: idMascota, nombre: nombreMascota } )
            this.#registroMascotas.registrar( mascota )
            familiar.asignarMascota( mascota )
        }

        // Si fecha y hora son validas y el turno no existe es porque no esta reservado en esa hora

        if ( esFechaValida( fecha ) && esHoraValida( hora)) {

        }

        if ( !this.#turnera.buscarTurno( fecha, hora ) ) {
            throw new Error( `No contamos con un turno disponible el ${ fecha } a las ${ hora } hs.` )
        }
        const turnoReservado = await this.#turnera.asignarTurno( fecha, hora, mascota, familiar )
        return turnoReservado
    }

    async listarTurnos(){
        return await this.#turnera.listarTurnos()
    }

    async cancelarTurno( fecha, hora ) {
        await this.#turnera.cancelarTurno( fecha, hora )
    }

    // ------------    CRUD MASCOTAS     ------------- //

    async listarMascotas() {
        const lista = await this.#registroMascotas.listarTodas()
        return lista
    }

    async registrarMascota( mascota ) {
        this.#registroMascotas.registrar( mascota )
    }

    async modificarDatosDeLaMascota( mascota ) {
        await this.#registroMascotas.modificarDatos( mascota )
    }

    async eliminarRegistroMascota( mascota ) {
        await this.#registroMascotas.eliminarMascota( mascota )
    }

    // ------------    CRUD FAMILIARES     ------------- //

    async modificarDatosDelFamiliar ( familiar ) {
        await this.#registroFamiliares.modificarDatos( familiar )
    }

    async eliminarRegistroFamiliar( { dni } ) {
        await this.#registroFamiliares.eliminarRegistro( dni )
    }

    async listarFamiliar() {
        const lista = await this.#registroMascotas.listarTodas()
        return lista
    }

    async registrarFamiliar( familiar ) {
        await this.#registroFamiliares.registrar( familiar )
    }
}


