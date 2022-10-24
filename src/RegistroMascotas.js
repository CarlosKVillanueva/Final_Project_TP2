class RegistroMascotas {
    #mascotas

    constructor() {
        this.#mascotas = []
    }

    registrar( mascota ) {
        this.#mascotas.push( mascota )
    }

    buscarPorId( id ) {
        return this.#mascotas.find( m => m.id === id )
    }

    eliminarMascota( id ) {
        const indiceMascota = this.#mascotas.findIndex(m => m.id === id)
        if ( indiceMascota !== -1 ) {
            this.#mascotas.splice( indiceMascota, 1 )
        }
    }

    modificarDatos( mascota ) {
        const mascotaBuscada = this.buscarPorId( mascota.id )
        if ( mascotaBuscada ) {
            mascotaBuscada.cambiarDatos( mascota )
        } else {
            throw new Error( "No se pudo modificar los datos porque el id esta incorrecto." );
        }
    }

}
