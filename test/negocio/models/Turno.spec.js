import { describe, test, expect } from "vitest";
import Mascota from "/src/negocio/models/Mascota.js"
import Familiar from "/src/negocio/models/Familiar.js"
import Turno from "/src/negocio/models/Turno.js"


const familiarValido = {
    dni: '12345678',
    nombre: 'John',
    apellido: 'Doe',
    email: 'johndoe@mail.com',
    telefono: '11234567',
    direccion: 'Av Siempreviva 1234',
}

const mascotaValida = {
    id: '12345678',
    nombre: 'Firulais',
    raza: 'Puro Perro',
    fechaNacimiento: '2018-01-01',
    edad: 4,
    peso: 40
}
const fechaValida = '2020-01-01'
const horaValida = 11

describe( 'CREACION DE TURNO', () => {
    describe( 'con campos vacios', () => {
        test( 'con fecha vacia arroja un error', () => {
            expect( () => new Turno( { undefined, horaValida, mascotaValida, familiarValido } ) ).toThrowError( /obligatorio/ )
        } )

        test( 'con hora vacia arroja un error', () => {
            expect( () => new Turno( { fechaValida, undefined, mascotaValida, familiarValido } ) ).toThrowError( /obligatorio/ )
        } )

        test( 'con mascota vacia arroja un error', () => {
            expect( () => new Turno( { fechaValida, horaValida, undefined, familiarValido } ) ).toThrowError( /obligatorio/ )
        } )

        test( 'con familiar vacio arroja un error', () => {
            expect( () => new Turno( { fechaValida, horaValida, mascotaValida, undefined } ) ).toThrowError( /obligatorio/ )
        } )
    } )
} )

