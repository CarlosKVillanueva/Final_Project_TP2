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
        if ( !nombre.match( /^[a-zA-Z\-]+$/ ) ) {
            throw new Error( 'Nombre invalido' )
        }
        this.#nombre = nombre
    }

    get apellido() {
        return this.#apellido
    }

    set apellido( apellido ) {
        if ( !apellido.match( /^[a-zA-Z\-]+$/ ) ) {
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

    camposIncompletos() {
        return this.#apellido || this.#direccion || this.#email
    }

    asignarMascota( mascota ) {
        this.#mascotas.push( mascota )
    }
}
