import { describe, test, expect, beforeEach } from "vitest";
import RegistroFamiliares from "/src/negocio/registros/RegistroFamiliares.js"

const familiarValido = {
    dni: '12345678',
    nombre: 'John',
    apellido: 'Doe',
    email: 'johndoe@mail.com',
    telefono: '11234567',
    direccion: 'Av Siempreviva 1234',
}


describe( 'REGISTRO DE MASCOTA', () => {
    const familiares = new RegistroFamiliares()
    describe( 'si guardo un Familiar', () => {
        beforeEach( async () => {
            await familiares.limpiarMDB()
        } )

        test( 'cuando la busco por id deberia devolver exactamente la misma', async () => {
            await familiares.registrar( familiarValido )
            const familiarBuscado = await familiares.buscarPorDni( familiarValido.dni )
            expect( familiarValido.dni ).toStrictEqual( familiarBuscado[ 0 ].dni )
        } )
    } )
} )