import { requerido, esFechaValida, numerosPositivos, validadorAlfanumerico, validadorAlfabetico } from "../helpers/helpers.js"

export default class Mascota {
    #id
    #nombre
    #raza
    #fechaNacimiento
    #edad
    #peso

    constructor( { id, nombre, raza, fechaNacimiento, edad, peso } ) {
        this.id = requerido( id )
        this.nombre = requerido( nombre )
        this.raza = requerido( raza )
        this.fechaNacimiento = requerido( fechaNacimiento )
        this.edad = requerido( edad )
        this.peso = requerido( peso )
    }

    get edad() {
        return this.#edad
    }

    get nombre() {
        return this.#nombre
    }

    get raza() {
        return this.#raza
    }

    get fechaNacimiento() {
        return this.#fechaNacimiento
    }

    get peso() {
        return this.#peso
    }

    get id() {
        return this.#id
    }

    set id( id ) {
        if ( !validadorAlfanumerico( id ) ) {
            throw new Error( `El id es invalido` )
        }
        this.#id = id
    }

    set nombre( nombre ) {
        if ( !validadorAlfabetico( nombre ) ) {
            throw new Error( `El nombre es invalido` )
        }
        this.#nombre = nombre
    }

    set raza( raza ) {
        if ( !validadorAlfabetico( raza ) ) {
            throw new Error( `La raza es invalida` )
        }
        this.#raza = raza
    }

    set fechaNacimiento( fecha ) {
        if ( !esFechaValida( fecha ) ) {
            throw new Error( `La fecha es invalida` )
        }
        this.#fechaNacimiento = fecha
    }

    set edad( edad ) {
        if ( !numerosPositivos( edad ) )
            throw new Error( `La edad es invalida` )
        this.#edad = edad
    }

    set peso( peso ) {
        if ( !numerosPositivos( peso ) )
            throw new Error( `El peso es invalido` )
        this.#peso = peso
    }

    asDto() {
        return Object.freeze( {
            id: this.id,
            nombre: this.nombre,
            fechaNacimiento: this.fechaNacimiento,
            edad: this.edad,
            peso: this.peso
        } )
    }
}
