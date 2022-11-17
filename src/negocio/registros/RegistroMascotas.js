import { MongoClient } from 'mongodb'
import { stringMongo } from "../../../config/config.js"
import Mascota from "../models/Mascota.js"

const client = new MongoClient( stringMongo, { useNewUrlParser: true, useUnifiedTopology: true } );

await client.connect()

export default class RegistroMascotas {
    #mascotas

    constructor() {
        this.#mascotas = client.db( "VeterinariaTP2" ).collection( "mascotas" )
    }

    async registrar( mascota ) {
        return await this.#mascotas.insertOne( mascota )
    }

    async buscarPorId( idParam ) {
        const dto = await this.#mascotas.findOne( { "id": idParam } )
        if ( !dto ) {
            throw new Error( 'La mascota no existe, favor de crearla antes de reservar.' )
        }
        return new Mascota( dto )
    }

    async eliminarMascota( id ) {
        let result = await this.#mascotas.deleteOne( { "id": id } )
        if ( result.deletedCount === 0 ) {
            throw new Error( 'No se pudo eliminar a la mascota.' )
        }
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
        } catch ( error ) {
            throw new Error( 'Internal server error' );
        }
        if ( result.matchedCount === 0 ) {
            throw new Error( "No se pudo modificar los datos porque el id esta incorrecto." );
        }

        if ( result.matchedCount === 0 ) {
            throw new Error( "No se pudo modificar los datos porque el id esta incorrecto (ERROR 400)" );
        }

        if ( result.modifiedCount === 0 ) {
            throw new Error( 'No pudo actualizarse por error de conexion a la base de datos.' )
        }
    }

    async listarTodas() {
        return await this.#mascotas.find().toArray()
    }

    async limpiarMDB() {
        await this.#mascotas.remove( {} )
    }
}
