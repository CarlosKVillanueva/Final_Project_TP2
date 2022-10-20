import { requerido, validadorAlfabetico } from "../helpers/helpers.js"

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
        this.apellido = apellido
        this.email = email
        //Agregar Setters
        this.telefono = requerido(telefono)
        //Agregar Setters
        this.direccion = direccion
        this.mascotas = new RegistroMascotas()
    }

    get dni() {
        return this.#dni
    }

    set dni( dni ) {
        const dniRegex = /^\d{1,3}\.?\d{3}\.?\d{3}$/
        if ( !dni.match( dniRegex ) ) {
            throw new Error( 'Dni invalido, solo disponible ente 7 y 8 caracteres' )
        }
        this.#dni = dni
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
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if ( !email.match( emailRegex ) ) {
            throw new Error( 'Email invalido, ingrese una direccion correcta' )
        }
        this.#email = email
    }

    get telefono() {
        return this.#telefono
    }

    set telefono( value ) {
        //TODO
        this.#telefono = value
    }

    get direccion() {
        return this.#direccion
    }

    set direccion( value ) {
        //TODO
        this.#direccion = value
    }

    camposIncompletos() {
        return this.#apellido || this.#direccion || this.#email
    }

    asignarMascota( mascota ) {
        this.#mascotas.push( mascota )
    }

    asDto() {
        return Object.freeze({
            dni: this.dni,
            nombre: this.nombre,
            apellido: this.apellido,
            email: this.email,
            telefono: this.telefono,
            direccion: this.direccion,
        })
    }
}
