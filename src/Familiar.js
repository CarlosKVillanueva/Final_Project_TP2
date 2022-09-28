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
    
    set dni(value) {
        const dniRegex = /^\d{1,3}\.?\d{3}\.?\d{3}$/
        if (!value.match(dniRegex)) {
            throw new Error('Dni invalido, solo disponible ente 7 y 8 caracteres')
        }
        this.#dni = value
    }

    set nombre(value){
        const nombreRegex = /^[a-zA-Z\-]+$/
        if (!value.match(nombreRegex)) {
            throw new Error('Nombre invalido')
        }
    }

    get apellido(){
        return this.#apellido
    }

    set apellido(value){
        const apellidoRegex = /^[a-zA-Z\-]+$/
        if (!value.match(apellidoRegex)) {
            throw new Error('Apellido invalido')
        }
        this.#apellido = value
    }
    
    get email(){
        return this.#email
    }

    set email(value) {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!value.match(emailRegex)) {
            throw new Error('Email invalido, ingrese una direccion correcta')
        }
        this.#email = value 
    }

    camposIncompletos() {
        return this.#apellido || this.#direccion || this.#email
    }

    asignarMascota( mascota ) {
        this.#mascotas.push( mascota )
    }
}
