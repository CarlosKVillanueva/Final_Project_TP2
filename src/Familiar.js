export default class Familiar {
    #dni
    #nombre
    #apellido
    #email
    #telefono
    #direccion
    #mascotas

    constructor( dni, nombre, apellido, email, telefono, direccion ) {
        this.#dni = dni
        this.#nombre = nombre
        this.#apellido = apellido
        this.#email = email
        this.#telefono = telefono
        this.#direccion = direccion
        this.#mascotas = []
    }
}