class RegistroMascotas {
    #mascotas

    constructor() {
        this.#mascotas = []
    }

    registrar(mascota) {
        this.#mascotas.push( mascota )
    }

    buscarPorId( id ) {
        return this.#mascotas.find( m => m.id === id)
    }

}
