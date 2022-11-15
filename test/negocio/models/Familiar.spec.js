import { describe, expect, test } from "vitest"
import Familiar from "/src/negocio/models/Familiar.js"

const familiarInvalido = {
    dni: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: ''
}

describe( 'con dni vacio', () => {
    test( 'arrojar un error esperando "obligatorio"', () => {
        expect( () => new Familiar( { dni: '' } ) ).toThrowError( /obligatorio/ )
        console.log( familiarInvalido )
    } )
} )

describe( 'con dni invalido', () => {
    test( 'arroja un error "Dni invalido, solo disponible ente 7 y 8 caracteres"', () => {
        expect( () => new Familiar( { dni: '123456' } ) ).toThrowError( /disponible/ )
    } )
} )