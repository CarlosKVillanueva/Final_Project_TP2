import { describe, test, expect } from "vitest";
import Mascota from "/src/negocio/models/Mascota.js"

const mascotaValida = new Mascota( {
    id: '11234567',
    nombre: 'Firulais',
    raza: 'PP',
    fechaNacimiento: '2020-01-01',
    edad: 2,
    peso: 30
} )

describe( 'Creacion de Mascota', () => {
    describe( 'CON CAMPOS VACIOS', () => {
        describe( 'con id vacio', () => {
            test( 'arroja un error informando la obligatoriedad del campo', () => {
                expect( () => new Mascota( {
                    id: ''
                } ) ).toThrowError( 'El campo es obligatorio' )
            } )
        } )

        describe( 'con nombre vacio', () => {
            test( 'arroja un error informando la obligatoriedad del campo"', () => {
                expect( () => new Mascota( {
                    nombre: ''
                } ) ).toThrowError( /obligatorio/ )
            } )
        } )

        describe( 'con raza vacio', () => {
            test( 'arroja un error informando la obligatoriedad del campo', () => {
                expect( () => new Mascota( {
                    raza: ''
                } ) ).toThrowError( /obligatorio/ )
            } )
        } )

        describe( 'con fechaNacimiento vacio', () => {
            test( 'arroja un error informando la obligatoriedad del campo', () => {
                expect( () => new Mascota( {
                    fechaNacimiento: ''
                } ) ).toThrowError( /obligatorio/ )
            } )
        } )

        describe( 'con edad vacia', () => {
            test( 'arroja un error informando la obligatoriedad del campo', () => {
                expect( () => new Mascota( {
                    edad: 0
                } ) ).toThrowError( /obligatorio/ )
            } )
        } )

        describe( 'con peso vacio', () => {
            test( 'arroja un error informando la obligatoriedad del campo', () => {
                expect( () => new Mascota( {
                    peso: 0
                } ) ).toThrowError( /obligatorio/ )
            } )
        } )
    } )

    describe( 'CON PARAMETROS INVALIDOS', () => {
        describe( 'con id invalido', () => {
            test( 'deberia arrojar un error informando la invalidez del campo', () => {
                expect( () => new Mascota( {
                    id: '@%$^',
                    nombre: 'Firulais',
                    raza: 'PP',
                    fechaNacimiento: '2020-01-01',
                    edad: 2,
                    peso: 30
                } ) ).toThrowError( /invalido/ )
            } )
        } )

        describe( 'con nombre invalido', () => {
            test( 'deberia arrojar un error informando la invalidez del campo', () => {
                expect( () => new Mascota( {
                    id: '11234567',
                    nombre: '123',
                    raza: 'PP',
                    fechaNacimiento: '2020-01-01',
                    edad: 2,
                    peso: 30
                } ) ).toThrowError( /invalido/ )
            } )
        } )

        describe( 'con raza invalida', () => {
            test( 'deberia arrojar un error informando la invalidez del campo', () => {
                expect( () => new Mascota( {
                    id: '11234567',
                    nombre: 'Firulais',
                    raza: '17293',
                    fechaNacimiento: '2020-01-01',
                    edad: 2,
                    peso: 30
                } ) ).toThrowError( /invalid/ )
            } )
        } )

        describe( 'con fecha de nacimiento invalida', () => {
            test( 'deberia arrojar un error informando la invalidez del campo', () => {
                expect( () => new Mascota( {
                    id: '11234567',
                    nombre: 'Firulais',
                    raza: 'Puro Perro',
                    fechaNacimiento: '1',
                    edad: 2,
                    peso: 30
                } ) ).toThrowError( /invalid/ )
            } )
        } )

        describe( 'con edad menor menor a 0', () => {
            test( 'deberia arrojar un error informando la invalidez del campo', () => {
                expect( () => new Mascota( {
                    id: '11234567',
                    nombre: 'Firulais',
                    raza: 'Puro Perro',
                    fechaNacimiento: '2020-01-01',
                    edad: -1,
                    peso: 30
                } ) ).toThrowError( /invalid/ )
            } )
        } )

        describe( 'con peso menor menor a 0', () => {
            test( 'deberia arrojar un error informando la invalidez del campo', () => {
                expect( () => new Mascota( {
                    id: '11234567',
                    nombre: 'Firulais',
                    raza: 'Puro Perro',
                    fechaNacimiento: '2020-01-01',
                    edad: 2,
                    peso: -1
                } ) ).toThrowError( /invalid/ )
            } )
        } )

    } )
} )
describe( 'CON PARAMETROS VALIDOS', () => {
    test( 'deberia crear una mascota correctamente', () => {
        const mascota = new Mascota( {
            id: '12345678',
            nombre: 'Firulais',
            raza: 'Puro Perro',
            fechaNacimiento: '2020-01-01',
            edad: 2,
            peso: 30
        } )
        expect( mascotaValida ).toStrictEqual( mascota )
    } )
} )
