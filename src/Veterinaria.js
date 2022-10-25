import Fecha from "./Fecha.js"
import Mascota from "./Mascota.js"
import Familiar from "./Familiar.js"
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

    sacarTurno( fecha, hora, nombreMascota, dniFamiliar, nombreFamiliar, telefonoFamiliar ) {
        // early return // fail first
        // if ( !this.turnoDisponible( fecha, hora ) ) {
        //     throw new Error( `No contamos con un turno disponible el ${ fecha } a las ${ hora } hs.` )
        // }
        
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

        if ( this.#turnera.buscarTurno( fecha, hora ) ) {
            throw new Error( `No contamos con un turno disponible el ${ fecha } a las ${ hora } hs.` )
        }
        this.#turnera.asignarTurno( fecha, hora, mascota, familiar )
    }

    cancelarTurno( fecha, hora ) {
        this.#turnera.cancelarTurno( fecha, hora )
    }

    eliminarRegistroMascota( mascota ) {
        this.#registroMascotas.eliminarMascota( mascota )
    }

    modificarDatosDeLaMascota( mascota ) {
        this.#registroMascotas.modificarDatos( mascota )
    }

    modificarDatosDelFamiliar ( familiar ) {
        this.#registroFamiliares.modificarDatos( familiar )
    }

    eliminarRegistroFamiliar( { dni } ) {
        this.#registroFamiliares.eliminarRegistro( dni )
    }

    generarFactura() {

    }
}


