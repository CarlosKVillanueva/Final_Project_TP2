import { requerido, validadorAlfabetico, validadorDireccion, validadorDni, validadorMail, validadorNumerico } from "../helpers/helpers.js"

export default class Familiar {
    #dni
    #nombre
    #apellido
    #email
    #telefono
    #direccion

    constructor( { dni, nombre, apellido, email, telefono, direccion }  ) {
        this.dni = requerido( dni )
        this.nombre = requerido( nombre )
        this.apellido = requerido( apellido )
        this.email = requerido( email )
        this.telefono = requerido( telefono )
        this.direccion = requerido( direccion )
    }

    get dni() {
        return this.#dni
    }

    set dni( dni ) {
        validadorDni( dni )
        this.#dni = dni
    }

    get nombre() {
        return this.#nombre
    }

    set nombre( nombre ) {
        if ( !validadorAlfabetico( nombre ) ) {
            throw new Error( 'Nombre invalido' )
        }
        this.#nombre = nombre
    }

    get apellido() {
        return this.#apellido
    }

    set apellido( apellido ) {
        if ( !validadorAlfabetico( apellido ) ) {
            throw new Error( 'Apellido invalido' )
        }
        this.#apellido = apellido
    }

    get email() {
        return this.#email
    }

    set email( email ) {
        if ( !validadorMail( email ) ) {
            throw new Error( 'Email invalido, ingrese una direccion correcta' )
        }
        this.#email = email
    }

    get telefono() {
        return this.#telefono
    }

    set telefono( value ) {
        if ( !validadorNumerico( value ) ) {
            throw new Error( 'Telefono invalido' )
        }
        this.#telefono = value
    }

    get direccion() {
        return this.#direccion
    }

    set direccion( value ) {
        if ( !validadorDireccion( value ) ) {
            throw new Error( 'Direccion invalida' )
        }
        this.#direccion = value
    }

    asDto() {
        return Object.freeze( {
            dni: this.dni,
            nombre: this.nombre,
            apellido: this.apellido,
            email: this.email,
            telefono: this.telefono,
            direccion: this.direccion,
        } )
    }
}
