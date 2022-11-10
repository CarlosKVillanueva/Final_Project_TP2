import { MongoClient } from 'mongodb'
import { stringMongo } from "../config/config.js"

const client = new MongoClient( stringMongo, { useNewUrlParser: true, useUnifiedTopology: true } );

await client.connect()

export default class RegistroMascotas {
    #mascotas

    constructor() {
        this.#mascotas = client.db( "VeterinariaTP2" ).collection( "mascotas" )
    }

    async registrar( mascota ) {
        await this.#mascotas.insertOne( mascota )
    }

    async buscarPorId( idParam ) {
        //TODO CLASE 8
        // return new Mascota(await this.#mascotas.find( { id: idParam } ))
        return await this.#mascotas.find( { id: idParam } ).toArray()
    }

    async eliminarMascota( id ) {
        await this.#mascotas.deleteOne( id )
    }

    async modificarDatos( mascota ) {
        let result
        try {
<<<<<<< HEAD:src/negocio/registros/RegistroMascotas.js
            result = await this.#mascotas.updateOne({ id: mascota.id }, { 
                $set:{
=======
            result = await this.#mascotas.updateOne( { id: mascota.id }, {
                $set: {
>>>>>>> master:src/RegistroMascotas.js
                    nombre: mascota.nombre,
                    raza: mascota.raza,
                    fechaNacimiento: mascota.fechaNacimiento,
                    edad: mascota.edad,
                    peso: mascota.peso,
<<<<<<< HEAD:src/negocio/registros/RegistroMascotas.js
            }})
        } catch (error) {
            throw new Error( 'Internal server error ' );
        }
        if ( result.matchedCount === 0 ) {
            //http bad request
            throw new Error( "No se pudo modificar los datos porque el id esta incorrecto." );
=======
                }
            } )


        } catch ( e ) {
            //TODO Mejorar TODO MANEJADOR DE ERRORES
            throw new Error( 'Error Mongo (ERROR 500)' )
        }

        if ( result.matchedCount === 0 ) {
            //TODO MANEJADOR DE ERRORES
            throw new Error( "No se pudo modificar los datos porque el id esta incorrecto (ERROR 400)" );
        }


        if ( result.modifiedCount === 0 ) {
            //TODO MANEJADOR DE ERRORES
            throw new Error( 'Error: No pudo actualizarse, pero Id bien (ERROR 500)' )
>>>>>>> master:src/RegistroMascotas.js
        }

        if ( result.modifiedCount === 0 ) {
            //http internal server error
            throw new Error( 'No pudo actualizarse por error de conexion a la base de datos.' )
        }
    }

    async listarTodas() {
<<<<<<< HEAD:src/negocio/registros/RegistroMascotas.js
        let lista
        try {
            lista = await this.#mascotas.find().toArray()
        } catch (error) {
            console.error(error)
        }
        return lista
=======
        return await this.#mascotas.find( {} )
>>>>>>> master:src/RegistroMascotas.js
    }
}
