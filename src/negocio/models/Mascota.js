import { requerido, esFechaValida, numerosPositivos, validadorAlfanumerico, validadorAlfabetico } from "../helpers/helpers"

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

    get id() {
        return this.#id
    }

    set id( value ) {
        if ( !validadorAlfanumerico( value ) ) {
            throw new Error( `El id es invalido` )
        }
        this.#id = value
    }

    set nombre( value ) {
        if ( !validadorAlfabetico( value ) ) {
            throw new Error( `El nombre es invalido` )
        }
        this.#nombre = value
    }

    set raza( value ) {
        if ( !validadorAlfabetico( value ) ) {
            throw new Error( `La raza es invalida` )
        }
        this.#raza = value
    }

    set fechaNacimiento( fecha ) {
        if ( !esFechaValida( fecha ) ) {
            throw new Error( `La fecha es invalida` )
        }
        this.#fechaNacimiento = fecha
    }

    set edad( value ) {
        if ( !numerosPositivos( value ) )
            throw new Error( `La edad es invalida` )
        this.#edad = value
    }

    set peso( value ) {
        if ( !numerosPositivos( value ) )
            throw new Error( `El peso es invalido` )
        this.#peso = value
    }

    asDto() {
        return Object.freeze( {
            id: this.id,
            nombre: this.nombre,
            raza: this.raza,
            fechaNacimiento: this.fechaNacimiento,
            edad: this.edad,
            peso: this.peso,
        } )
    }
}
