import { requerido, validadorAlfabetico, validadorAlfanumerico, validadorDni, validadorMail, validadorNumerico } from "../helpers/helpers.js"
import RegistroMascotas from "./RegistroMascotas.js"

export default class Familiar {
    #dni
    #nombre
    #apellido
    #email
    #telefono
    #direccion
    #mascotas

    constructor( { dni, nombre, apellido, email, telefono, direccion } ) {
        this.dni = requerido( dni )
        this.nombre = requerido( nombre )
        this.apellido = requerido( apellido )
        this.email = requerido( email )
        this.telefono = requerido( telefono )
        this.direccion = requerido( direccion )
        this.mascotas = new RegistroMascotas()
    }

    get dni() {
        return this.#dni
    }

    set dni( dni ) {
        if ( validadorDni( dni ) ) {
            throw new Error( 'Dni invalido, solo disponible ente 7 y 8 caracteres' )
        }
        this.#dni = dni
    }

    get nombre() {
        return this.#dni
    }

    set nombre( nombre ) {
        if ( validadorAlfabetico( nombre ) ) {
            throw new Error( 'Nombre invalido' )
        }
        this.#nombre = nombre
    }

    get apellido() {
        return this.#apellido
    }

    set apellido( apellido ) {
        if ( validadorAlfabetico( apellido ) ) {
            throw new Error( 'Apellido invalido' )
        }
        this.#apellido = apellido
    }

    get email() {
        return this.#email
    }

    set email( email ) {
        if ( validadorMail( email ) ) {
            throw new Error( 'Email invalido, ingrese una direccion correcta' )
        }
        this.#email = email
    }

    get telefono() {
        return this.#telefono
    }

    set telefono( value ) {
        if ( validadorNumerico( value ) ) {
            throw new Error( 'Telefono invalido' )
        }
        this.#telefono = value
    }

    get direccion() {
        return this.#direccion
    }

    set direccion( value ) {
        if ( validadorAlfanumerico( value ) ) {
            throw new Error( 'Direccion invalida' )
        }
        this.#direccion = value
    }

    async asignarMascota( mascota ) {
        await this.#mascotas.registrar( mascota )
    }

    cambiarDatos( familiar ) {
        this.nombre = familiar.nombre
        this.apellido = familiar.apellido
        this.email = familiar.email
        this.telefono = familiar.telefono
        this.direccion = familiar.direccion
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
