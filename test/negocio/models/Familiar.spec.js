import { describe, expect, test } from "vitest"
import Familiar from "/src/negocio/models/Familiar.js"

const familiarValido = {
    dni: '12345678',
    nombre: 'John',
    apellido: 'Doe',
    email: 'johndoe@mail.com',
    telefono: '11234567',
    direccion: 'Av Siempreviva 1234',
}

describe( 'CON DATOS VACIOS', () => {
    describe( 'con dni vacio', () => {
        test( 'arrojar un error esperando "obligatorio"', () => {
            expect( () => new Familiar( { dni: '' } ) ).toThrowError( /obligatorio/ )
        } )
    } )
    describe( 'con nombre vacio', () => {
        test( 'arrojar un error esperando "obligatorio"', () => {
            expect( () => new Familiar( { nombre: '' } ) ).toThrowError( /obligatorio/ )
        } )
    } )
    describe( 'con apellido vacio', () => {
        test( 'arrojar un error esperando "obligatorio"', () => {
            expect( () => new Familiar( { apellido: '' } ) ).toThrowError( /obligatorio/ )
        } )
    } )
    describe( 'con email vacio', () => {
        test( 'arrojar un error esperando "obligatorio"', () => {
            expect( () => new Familiar( { email: '' } ) ).toThrowError( /obligatorio/ )
        } )
    } )
    describe( 'con telefono vacio', () => {
        test( 'arrojar un error esperando "obligatorio"', () => {
            expect( () => new Familiar( { telefono: '' } ) ).toThrowError( /obligatorio/ )
        } )
    } )
    describe( 'con direccion vacia', () => {
        test( 'arrojar un error esperando "obligatorio"', () => {
            expect( () => new Familiar( { direccion: '' } ) ).toThrowError( /obligatorio/ )
        } )
    } )

} )

describe( 'CON DATOS INVALIDOS', () => {
    describe( 'con dni con menos caracteres', () => {
        test( 'arroja un error "Dni invalido, solo disponible ente 7 y 8 caracteres"', () => {
            expect( () => new Familiar( { dni: '123456' } ) ).toThrowError( /disponible/ )
        } )
    } )
    describe( 'con dni con caracteres invalidos', () => {
        test( 'arroja un error "El Dni solo acepta caracteres numericos"', () => {
            expect( () => new Familiar( { dni: 'abcdefgh' } ) ).toThrowError( /solo acepta/ )
        } )
    } )
    describe( 'con nombre con caracteres invalidos', () => {
        test( 'arroja un error que contenga la palabra invalido', () => {
            expect( () => new Familiar( {
                dni: '12345678',
                nombre: '!&@#*(#',
                apellido: 'Doe',
                email: 'johndoe@mail.com',
                telefono: '11234567',
                direccion: 'Av. Siempreviva 1234',
            } ) ).toThrowError( /invalido/ )
        } )
    } )
    describe( 'con apellido con caracteres invalidos', () => {
        test( 'arroja un error que contenga la palabra invalido', () => {
            expect( () => new Familiar( {
                dni: '12345678',
                nombre: 'John',
                apellido: '^&^(*123',
                email: 'johndoe@mail.com',
                telefono: '11234567',
                direccion: 'Av. Siempreviva 1234',
            } ) ).toThrowError( /invalido/ )
        } )
    } )

    describe( 'con email con formato invalido', () => {
        test( 'arroja un error que contenga la palabra invalido', () => {
            expect( () => new Familiar( {
                dni: '12345678',
                nombre: 'John',
                apellido: 'Doe',
                email: 'johndoemail.com',
                telefono: '11234567',
                direccion: 'Av. Siempreviva 1234',
            } ) ).toThrowError( /invalido/ )
        } )
    } )

    describe( 'con telefono con caracteres invalidos', () => {
        test( 'arroja un error que contenga la palabra invalido', () => {
            expect( () => new Familiar( {
                dni: '12345678',
                nombre: 'John',
                apellido: 'Doe',
                email: 'johndoe@mail.com',
                telefono: 'djhfskd',
                direccion: 'Av. Siempreviva 1234',
            } ) ).toThrowError( /invalido/ )
        } )
    } )

    describe( 'con direccion con caracteres invalidos', () => {
        test( 'arroja un error que contenga la palabra invalido', () => {
            expect( () => new Familiar( {
                dni: '12345678',
                nombre: 'John',
                apellido: 'Doe',
                email: 'johndoe@mail.com',
                telefono: '11234567',
                direccion: '^%&@#',
            } ) ).toThrowError( /invalid/ )
        } )
    } )
} )

describe( 'CON DATOS VALIDOS', () => {
    test( 'deberia crear un familiar correctamente', () => {
        const familiar = {
            dni: '12345678',
            nombre: 'John',
            apellido: 'Doe',
            email: 'johndoe@mail.com',
            telefono: '11234567',
            direccion: 'Av Siempreviva 1234',
        }
        expect( familiarValido ).toStrictEqual (familiar)
    })
} )