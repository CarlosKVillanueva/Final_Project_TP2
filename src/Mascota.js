import requerido from "../helpers/helpers"

export default class Mascota {
    #id
    #nombre
    #raza
    #fechaNacimiento
    #edad
    #peso

    constructor( { id, nombre, raza, fechaNacimiento, edad, peso } ) {
        this.id = requerido(id)
        this.nombre = requerido(nombre)
        //TODO Agregar Setters
        this.raza = raza
        this.fechaNacimiento = fechaNacimiento
        this.edad = edad
        this.peso = peso
    }

    get edad() {
        return this.#edad
    }

    get id() {
        return this.#id
    }

    set id( value ) {
        if ( !value ) throw new Error( 'ID INVALIDO' )
        this.#id = value
    }

    set nombre( value ) {
        if ( !value ) throw new Error( 'NOMBRE INVALIDO' )
        this.#nombre = value
    }

    modificarDatosMascota( { nombre, raza,fechaNacimiento, edad, peso } ) {
        this.#nombre = nombre;
        this.#raza = raza;
        this.#fechaNacimiento = fechaNacimiento;
        this.#edad = edad;
        this.#peso = peso;
    }

    asDto() {
        return Object.freeze({
            id: this.id,
            nombre: this.nombre,
            raza: this.raza,
            fechaNacimiento: this.fechaNacimiento,
            edad: this.edad,
            peso: this.peso,
        })
    }
}
