import { requerido, esFechaValida, numerosPositivos, validadorAlfanumerico, validadorAlfabetico } from "../helpers/helpers"

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
        if ( !validadorAlfanumerico(value) ) {
            throw new Error( `El ${ value } es invalido` )
        }
        this.#id = value
    }

    set nombre( value ) {
        if ( !validadorAlfabetico(value) ) {
            throw new Error( `El ${ value } es invalido` )
        }
        this.#nombre = value
    }

    set raza( value ) {
        if ( !validadorAlfabetico(value) ) {
            throw new Error( `El ${ value } es invalido` )
        }
        this.#raza = value
    }

    set fechaNacimiento( fecha ) {
        if ( !esFechaValida( fecha ) ) {
            throw new Error( `La ${ fecha } es invalida` )
        }

        this.#fechaNacimiento = fecha
    }

    set edad( value ) {
        if ( !value || !numerosPositivos( value ) )
            throw new Error( `La ${ value } es invalida` )
        this.#edad = value
    }

    set peso( value ) {
        if ( !value || !numerosPositivos( value ) )
            throw new Error( `El ${ value.toString() } es invalido` )
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
