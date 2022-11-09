export default class Fecha {
    #anio
    #mes
    #dia

    constructor( anio, mes, dia ) {
        this.#anio = anio
        this.#mes = mes
        this.#dia = dia
    }

    set anio( value ) {
        this.#anio = value
    }

    set mes( value ) {
        this.#mes = value
    }

    set dia( value ) {
        this.#dia = value
    }

    get anio() {
        return this.#anio
    }

    get mes() {
        return this.#mes
    }

    get dia() {
        return this.#dia
    }
}
