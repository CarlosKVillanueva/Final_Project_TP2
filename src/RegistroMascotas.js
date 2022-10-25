import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://veterinariaTP2:<password>@veterinariatp2.6ptwb5y.mongodb.net/?retryWrites=true&w=majority";
    
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
