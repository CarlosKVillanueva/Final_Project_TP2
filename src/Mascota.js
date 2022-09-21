export default class Mascota {
    #id
    #nombre
    #raza
    #fechaNacimiento
    #edad
    #peso
    #familiar

    constructor( id, nombre, raza, fechaNacimiento, edad, peso ) {
        this.#id = id
        this.#nombre = nombre
        this.#raza = raza
        this.#peso = peso
        this.#fechaNacimiento = fechaNacimiento
        this.#edad = edad
        this.#familiar = []
    }

}