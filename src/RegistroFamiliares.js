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

    modificarDatos ( familiar ) {
        const familiarBuscado = this.buscarPorDni( familiar.dni )
        if ( familiarBuscado ) {
            familiarBuscado.cambiarDatos( familiar )
        } else {
            throw new Error( "No se pudo modificar los datos porque el dni esta incorrecto." );
        }
    }

    eliminarRegistro( dni ) {
        const indiceFamiliar = this.#familiares.findIndex( f => f.dni === dni )
        if ( indiceFamiliar !== -1 ) {
            this.#familiares.splice( indiceFamiliar, 1 )
        }
    }
}