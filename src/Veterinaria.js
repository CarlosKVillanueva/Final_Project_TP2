import Fecha from "./Fecha.js"
import Mascota from "./Mascota.js"
import Familiar from "./Familiar.js"

export default class Veterinaria {
    #nombre
    #registroFamiliares
    #registroMascotas
    #agenda

    constructor( nombre ) {
        this.#nombre = nombre
        this.#registroMascotas = new RegistroMascotas()
        this.#registroFamiliares = new RegistroFamiliares()
        this.#agenda = new AgendaTurnos()
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

        if ( !this.turnoDisponible( fecha, hora ) ) {
            throw new Error( `No contamos con un turno disponible el ${ fecha } a las ${ hora } hs.` )
        }
        this.asignarTurno( fecha, hora, mascota, familiar )
    }

    asignarTurno( fecha, hora, mascota, familiar ) {
        this.#agenda.find( f => f.idDia === fecha.idDia ).asignarTurno( hora, mascota, familiar )
    }

    turnoDisponible( fecha, hora ) {
        let fechaBuscada = this.#agenda.buscarPorFecha( fecha )

        if ( !fechaBuscada ) {
            fechaBuscada = this.#agenda.registrar( new Fecha( fecha ) )
        }

        return fechaBuscada.horarioDisponible( hora )

    }

    disponibilidadHoraria( fecha ) {
        let fechaBuscada = this.#agenda.find( ( f ) => f.idDia === fecha.idDia );
        let turnosDisponibles
        if ( fechaBuscada ) {
            turnosDisponibles = fechaBuscada.obtenerTurnos();
        }
        return turnosDisponibles;
    }

    completarRegistro( { idMascota, nombreMascota, razaMascota, fNacMascota, edadMascota, pesoMascota },
                       { dniFamiliar, nombreFamiliar, apellidoFamiliar, emailFam, telFamiliar, direccionFamiliar } ) {

        let mascota = this.#registroMascotas.buscarPorId( idMascota )
        let familiar = this.#registroFamiliares.buscarPorDni( dniFamiliar )

        if ( !familiar ) {
            try {
                familiar = new Familiar( dniFamiliar, nombreFamiliar, apellidoFamiliar, emailFam, telFamiliar, direccionFamiliar )
                this.#registroFamiliares.registrar( familiar )
            } catch ( error ) {
                console.log( error )
            }
            if ( !mascota ) {
                try {
                    mascota = new Mascota( idMascota, nombreMascota, razaMascota, fNacMascota, edadMascota, pesoMascota )
                    this.#registroMascotas.registrar( mascota )
                } catch ( error ) {
                    console.log( error )
                }
                mascota.asignarFamiliar( familiar )
                familiar.asignarMascota( mascota )
            }

        } else if ( familiar.camposIncompletos() ) {

            familiar.apellido = apellidoFamiliar
            familiar.email = emailFam
            familiar.direccion = direccionFamiliar

        }
        console.log( 'Usted ya esta registrado completamente' )
    }


    cancelarTurno( fecha, hora ) {
        let fechaBuscada = this.#agenda.buscarPorFecha( fecha )
        if ( !fechaBuscada && fechaBuscada.esReservado( hora ) ) {
            fechaBuscada.cancelarTurno()
        }
    }

    eliminarRegistroMascota( mascota ) {
        const edadMayor = 25
        let mascotaBuscada = this.#registroMascotas.buscarPorId( mascota.id )
        if ( mascotaBuscada && mascotaBuscada.edad > edadMayor ) {
            this.#registroMascotas.eliminarMascota( mascota )
        }

    }

    modificarDatosDeLaMascota( idMascota, mascota ) {
        let mascotaBuscada = this.#registroMascotas.buscarPorId( mascota.id )
        if ( mascotaBuscada ) {
            mascotaBuscada.modificarDatosMascota( mascota );
        } else {
            throw new Error( "No se pudo realizar la modificación correspondiente" );
        }

    }

    generarFactura() {

    }
}


