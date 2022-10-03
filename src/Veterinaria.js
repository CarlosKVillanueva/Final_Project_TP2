import Fecha from "./Fecha.js"
import Mascota from "./Mascota.js"
import Familiar from "./Familiar.js"

export default class Veterinaria {
    #nombre
    #registroFamiliares
    #mascotas
    #fechas

    constructor( nombre ) {
        this.#nombre = nombre
        this.#mascotas = []
        this.#registroFamiliares = new RegistroFamiliares()
        this.#fechas = []
    }

    sacarTurno( fecha, hora, nombreMascota, dniFamiliar, nombreFamiliar, telefonoFamiliar ) {

        if ( this.turnoDisponible( fecha, hora ) ) {
            const idMascota = `${ dniFamiliar }-${ nombreMascota }`
            let mascota = this.#mascotas.find( m => m.id === idMascota )
            let familiar = this.#registroFamiliares.buscarPorDni( dniFamiliar )

            if ( !mascota ) {
                try {
                    mascota = new Mascota( idMascota, nombreMascota, '', '', 0, 0 )
                    // Agregar a la lista
                } catch ( e ) {
                    console.log( e )
                }
                try {
                    familiar = new Familiar( dniFamiliar, nombreFamiliar, '', '', telefonoFamiliar, '' )
                    this.#registroFamiliares.registrar( familiar )
                } catch ( e ) {
                    console.log( e )
                }
                mascota.asignarFamiliar( familiar )
                familiar.asignarMascota( mascota )
            }
            this.asignarTurno( fecha, hora, mascota, familiar )
        } else {
            throw new Error( `No contamos con un turno disponible el ${ fecha } a las ${ hora } hs.` )
        }
    }

    asignarTurno( fecha, hora, mascota, familiar ) {
        this.#fechas.find( f => f.idDia === fecha.idDia ).asignarTurno( hora, mascota, familiar )
    }

    turnoDisponible( fecha, hora ) {
        let fechaBuscada = this.#fechas.find( f => f.idDia === fecha.idDia )
        if ( !fechaBuscada ) {
            fechaBuscada = this.#fechas.push( new Fecha( fecha ) )
        }

        return fechaBuscada.horarioDisponible( hora )

    }

    disponibilidadHorario( fecha ) {
        let fechaBuscada = this.#fechas.find( ( f ) => f.idDia === fecha.idDia );
        let turnosDisponibles
        if ( fechaBuscada ) {
            turnosDisponibles = fechaBuscada.obtenerTurnos();
        }
        return turnosDisponibles;
    }

    completarRegistro( { idMascota, nombreMascota, razaMascota, fNacMascota, edadMascota, pesoMascota },
                       { dniFamiliar, nombreFamiliar, apellidoFamiliar, emailFam, telFamiliar, direccionFamiliar } ) {

        let mascota = this.#mascotas.find( m => m.id === idMascota )
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
                    // Agregar Mascota
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
        let fechaBuscada = this.#fechas.find( f => f.idDia === fecha.idDia )
        if ( !fechaBuscada && fechaBuscada.esReservado( hora ) ) {
            fechaBuscada.cancelarTurno()
        }
    }

    eliminarRegistro( mascota ) {
        const edadMayor = 25
        let mascotaBuscada = this.#mascotas.find( m => m.id === mascota.id )
        if ( mascotaBuscada ) {
            if ( mascotaBuscada.edad > edadMayor )
                this.#mascotas.splice( mascotaBuscada.id, 1 )
        }

    }

    modificarDatosDeLaMascota( idMascota, mascota ) {
        let mascotaBuscada = this.#mascotas.find( m => m.id === idMascota );
        if ( mascotaBuscada ) {
            mascotaBuscada.modificarDatosMascota( mascota );
        } else {
            throw new Error( "No se pudo realizar la modificación correspondiente" );
        }

    }

    generarFactura() {

    }
}


