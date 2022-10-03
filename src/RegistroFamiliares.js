class RegistroFamiliares {
    #familiares

    constructor() {
        this.#familiares = []
    }

    registrar(familiar) {
        this.#familiares.push( familiar )
    }

    buscarPorDni( dni ) {
        return this.#familiares.find( f => f.dni === dni)
    }

}