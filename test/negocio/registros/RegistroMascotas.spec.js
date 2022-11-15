import { describe, test, expect, beforeEach } from "vitest";
import RegistroMascotas from "/src/negocio/registros/RegistroMascotas.js"

const mascotaValida = {
    id: '12345678',
    nombre: 'Firulais',
    raza: 'Puro Perro',
    fechaNacimiento: '2018-01-01',
    edad: 4,
    peso: 40
}


describe( 'REGISTRO DE MASCOTA', () => {
    const mascotas = new RegistroMascotas()
    describe( 'si guardo una Mascota', () => {
        beforeEach( async () => {
            await mascotas.limpiarMDB()
        } )

        test( 'cuando la busco por id deberia devolver exactamente la misma', async () => {
            await mascotas.registrar( mascotaValida )
            const mascotaBuscada = await mascotas.buscarPorId( mascotaValida.id )
            expect( mascotaValida.id ).toStrictEqual( mascotaBuscada[ 0 ].id )
        } )
    } )
} )