class AgendaTurnos {
    #fechas


    constructor() {
        this.#fechas = []
    }

    agendar( fecha ) {
        this.#fechas.push( fecha )
    }

    buscarPorFecha( fecha ) {
        return this.#fechas.find( f => f.idDia === fecha.idDia )
    }
}