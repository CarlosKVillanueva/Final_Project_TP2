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
        let indiceMascota = this.#mascotas.findIndex(m => m.id === id)
        if ( indiceMascota !== -1 ) {
            this.#mascotas.splice( indiceMascota, 1 )
        }
    }

}
