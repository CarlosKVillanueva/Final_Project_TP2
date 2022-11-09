import { describe, test, expect } from "vitest";
import RegistroMascotas from "../src/RegistroMascotas.js"
import Mascota from "../src/Mascota.js"


const mascotaValida = new Mascota({
    id: '11234567',
    nombre: 'Firulais',
    raza: 'PP',
    fechaNacimiento: '2020-01-01',
    edad: 2,
    peso: 30
})


describe( 'Registro de Mascota', () => {
    describe( 'si guardo una Mascota', () => {


        test( 'should sarasa', () => {

        } )
        test( 'cuando la busco por id deberia devolver exactamente la misma', async () => {
            const mascotas = new RegistroMascotas()
            console.log('Mascota Valida:', mascotaValida)
            const mascotaGuardada = await mascotas.registrar( mascotaValida )
            console.log('Mascota Guardada:', mascotaGuardada)
            const mascotaEncontrada = await mascotas.buscarPorId( mascotaValida.id )
            console.log('Mascota Encontrada', mascotaEncontrada)
            expect( mascotaValida.id ).toStrictEqual( mascotaEncontrada.id )
            //TODO CONSTRUCTORES que reciben objetos
        } )
    } )
} )