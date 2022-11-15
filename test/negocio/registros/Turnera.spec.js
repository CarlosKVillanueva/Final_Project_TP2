import { describe, test, expect, beforeEach } from "vitest";
import Turnera from "/src/negocio/registros/Turnera.js"

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

const turnoValido = { fechaValida, horaValida, mascotaValida, familiarValido }


describe( 'REGISTRO DE MASCOTA', () => {
    const turnera = new Turnera()
    describe( 'si guardo un Turno', () => {
        beforeEach( async () => {
            await turnera.limpiarMDB()
        } )

        test( 'cuando la busco por id deberia devolver exactamente la misma', async () => {
            await turnera.asignarTurno( turnoValido )
            const turnoBuscado = await turnera.buscarTurno( turnoValido.fecha, turnoValido.hora )
            expect( turnoValido ).toEqual( turnoBuscado )
        } )
    } )
} )