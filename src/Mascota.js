import requerido  from "../helpers/helpers"

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
        this.raza = requerido(raza)
        this.fechaNacimiento = requerido(fechaNacimiento)
        this.edad = requerido(edad)
        this.peso = requerido(peso)
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

    set raza ( value ) {
        if ( !value ) throw new Error( 'RAZA INVALIDA' )
        this.#raza = value
    }
    //TODO DATE validation helper
    set fechaNacimiento ( value ) {
        if ( !value ) throw new Error( 'FECHA INVALIDA' )
        this.#fechaNacimiento = value
    }
    //TODO edad helper
    set edad ( value ) {
        if ( !value ) throw new Error( 'EDAD INVALIDA' )
        this.#edad = value
    }

    //TODO FUNCTION pesoIncorrecto()
    set peso ( value ) {
        if ( !value || pesoInorrecto(value)) throw new Error( 'PESO INVALIDO' )
        this.#peso = value
    }

    cambiarDatos( { nombre, raza, fechaNacimiento, edad, peso } ) {
        this.nombre = nombre;
        this.raza = raza;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.peso = peso;
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
