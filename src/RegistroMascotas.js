import { MongoClient } from 'mongodb'
import { stringMongo } from "../config/config.js"

const client = new MongoClient(stringMongo, { useNewUrlParser: true, useUnifiedTopology: true });
    
await client.connect()
export default class RegistroMascotas {
    #mascotas

    constructor() {
        this.#mascotas = client.db("VeterinariaTP2").collection("mascotas")
    }

    async registrar( mascota ) {
        await this.#mascotas.insertOne( mascota )
    }

    async buscarPorId( idParam ) {
        return await this.#mascotas.find( { id: idParam } )
    }

    async eliminarMascota( id ) {
        await this.#mascotas.deleteOne( id )
    }

    async modificarDatos( mascota ) {
        const mascotaBuscada = this.buscarPorId( mascota.id )
        if ( mascotaBuscada ) {
            await this.#mascotas.updateOne({ id: mascota.id }, { $set:{
                nombre: mascota.nombre,
                raza: mascota.raza,
                fechaNacimiento: mascota.fechaNacimiento,
                edad: mascota.edad,
                peso: mascota.peso,
            }})
        } else {
            throw new Error( "No se pudo modificar los datos porque el id esta incorrecto." );
        }
    }

    async listarTodas() {
        return await this.#mascotas.find({})
    }
}
