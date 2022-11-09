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
            result = await this.#mascotas.updateOne( { id: mascota.id }, {
                $set: {
                    nombre: mascota.nombre,
                    raza: mascota.raza,
                    fechaNacimiento: mascota.fechaNacimiento,
                    edad: mascota.edad,
                    peso: mascota.peso,
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
        }
    }

    async listarTodas() {
        return await this.#mascotas.find( {} )
    }
}
