import Fecha from "./Fecha.js"
import Mascota from "./Mascota.js"
import Familiar from "./Familiar.js"

export default class Veterinaria {
    #nombre
    #clientes
    #mascotas
    #fechas

    constructor( nombre ) {
        this.#nombre = nombre
        this.#mascotas = []
        this.#clientes = []
        this.#fechas = []
    }

    sacarTurno( fecha, hora, nombreMascota, dniFamiliar, nombreFamiliar, telefonoFamiliar ) {

        if ( this.turnoDisponible( fecha, hora ) ) {
            const idMascota = `${ dniFamiliar }-${ nombreMascota }`
            let mascota = this.#mascotas.find( m => m.id === idMascota )
            let familiar = this.#clientes.find( f => f.dni === dniFamiliar )

            if ( !mascota ) {
                try {
                    mascota = new Mascota( idMascota, nombreMascota, '', '', 0, 0 )
                } catch ( e ) {
                    console.log(e)
                }
                try {
                    familiar = new Familiar( dniFamiliar, nombreFamiliar, '', '', telefonoFamiliar, '' )
                } catch ( e ) {
                    console.log(e)
                }
                mascota.asignarFamiliar( familiar )
                familiar.asigmarMascota( mascota )
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
        // return
    }

    completarRegistro( { idMascota, nombreMascota, razaMascota, fNacMascota, edadMascota, pesoMascota },
                       { dniFamiliar, nombreFamiliar, apellidoFamiliar, emailFam, telFamiliar, direccionFamiliar } ) {

    }


    cancelarTurno( fecha, hora ) {

    }

    eliminarRegistro( mascota ) {

    }

    generarFactura() {

    }
}


