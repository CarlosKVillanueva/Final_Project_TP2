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
    describe( 'con parametros validos', () => {
        test( 'deberia crearla correctamente', () => {
            const mascota = new Mascota( {
                id: '11234567',
                nombre: 'Firulais',
                raza: 'PP',
                fechaNacimiento: '2020-01-01',
                edad: 2,
                peso: 30
            } )
            expect( mascotaValida ).toStrictEqual( mascota )
        } )

        describe( 'con parametros invalidos', () => {
            describe( 'con id invalido', () => {
                test( 'arroja el error "ID INVALIDO"', () => {
                    expect( () => new Mascota( { id: '' } ) ).toThrowError( 'ID INVALIDO' )
                } )
            } )

            describe( 'con nombre invalido', () => {
                test( 'arroja el error "NOMBRE INVALIDO"', () => {
                    expect( () => new Mascota( { id: '111111', nombre: '' } ) ).toThrowError( 'NOMBRE INVALIDO' )
                } )
            } )

            describe( 'con raza invalido', () => {
                test( 'arroja el error "RAZA INVALIDO"', () => {
                    expect( () => new Mascota( { id: '123456', nombre: 'Firulais', raza: '' } ) ).toThrowError( 'RAZA INVALIDA' )
                } )
            } )
        } )

    } )
} )