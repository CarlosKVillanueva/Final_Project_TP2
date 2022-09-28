export default class Mascota {
    #id
    #nombre
    #raza
    #fechaNacimiento
    #edad
    #peso
    #familiar

    constructor( id, nombre, raza, fechaNacimiento, edad, peso ) {
        this.#id = id
        this.#nombre = nombre
        this.#raza = raza
        this.#fechaNacimiento = fechaNacimiento
        this.#edad = edad
        this.#peso = peso
        this.#familiar = []
    }

    get id() {
        return this.#id
    }

    set id( value ) {
        if ( !value ) throw new Error( 'ID INVALIDO' )
        this.#id = value
    }

    set nombre( value ) {
        if ( !value ) throw new Error( ' NOMBRE INVALIDO' )
        this.#nombre = value
    }

    asignarFamiliar( familiar ) {
        this.#familiar.push( familiar )
    }
    
     modificarDatosMascota(mascota) {
    this.#nombre = mascota.nombre;
    this.#raza = mascota.raza;
    this.#fechaNacimiento = mascota.fechaNacimiento;
    this.#edad = mascota.edad;
    this.#peso = mascota.peso;
  }
}
