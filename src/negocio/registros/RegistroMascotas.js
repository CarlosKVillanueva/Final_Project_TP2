import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://veterinariaTP2:LERIzSJ7jtuZKcns@veterinariatp2.6ptwb5y.mongodb.net/?retryWrites=true&w=majority";
    
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
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

    async eliminarMascota( mascota ) {
        await this.#mascotas.deleteOne( { id: mascota.id } )
    }

    async modificarDatos( mascota ) {
        let result
        try {
            result = await this.#mascotas.updateOne({ id: mascota.id }, { 
                $set:{
                    nombre: mascota.nombre,
                    raza: mascota.raza,
                    fechaNacimiento: mascota.fechaNacimiento,
                    edad: mascota.edad,
                    peso: mascota.peso,
            }})
        } catch (error) {
            throw new Error( 'Internal server error ' );
        }
        if ( result.matchedCount === 0 ) {
            //http bad request
            throw new Error( "No se pudo modificar los datos porque el id esta incorrecto." );
        }

        if ( result.modifiedCount === 0 ) {
            //http internal server error
            throw new Error( 'No pudo actualizarse por error de conexion a la base de datos.' )
        }
    }

    async listarTodas() {
        let lista
        try {
            lista = await this.#mascotas.find().toArray()
        } catch (error) {
            console.error(error)
        }
        return lista
    }
}
