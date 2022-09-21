export default class Veterinaria {
    #nombre
    #clientes
    #mascotas

    constructor( nombre ) {
        this.#nombre = nombre
        this.#mascotas = []
        this.#clientes = []
    }

    sacarTurno( fecha, hora, nombreMascota, dniFamiliar, telefonoFamiliar ) {
        /*
        buscarPorHorario(fecha,hora)
        fecha[hora]  tiene un ESTADO LIBRE => Puedo dar el turno
        cambio el turno
        instancio mascota
        instancio familiar
        generamosId

            buscarMascota(idMascota)

            Si la mascota no está registrada
                registroRapido(idMascota, dniFamiliar, telefonoFamiliar) {


                } => { Mascota, Familiar }


            reservarTurno( fecha, mascota, familiar ) => Estado de LIBRE a RESERVADO
         */
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


